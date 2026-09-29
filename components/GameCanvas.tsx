"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Camera } from "@/game/engine/Camera";
import { GameLoop } from "@/game/engine/GameLoop";
import { Input } from "@/game/engine/Input";
import { Renderer } from "@/game/engine/Renderer";
import { Player } from "@/game/entities/Player";
import { houseDoor, OUTSIDE_WORLD, outsideSolids } from "@/game/maps/outside";
import {
  HOUSE_WORLD,
  roomDoors,
  roomSpawnPoints,
  roomReturnPoints,
  houseSolids,
  roomSolids,
  roomInteractiveSpots,
  houseExitSpot,
} from "@/game/maps/house";
import { profile, projects, skills, experience } from "@/game/data/portfolio";
import type { GameScene, SectionScene } from "@/game/types/game";

type ModalKind = SectionScene | "project" | null;

function pointNearRect(
  px: number,
  py: number,
  rect: { x: number; y: number; width: number; height: number },
  padding = 0
): boolean {
  return (
    px >= rect.x - padding &&
    px <= rect.x + rect.width + padding &&
    py >= rect.y - padding &&
    py <= rect.y + rect.height + padding
  );
}

function worldSizeForScene(scene: GameScene) {
  return scene === "outside" ? OUTSIDE_WORLD : HOUSE_WORLD;
}

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<GameScene>("outside");
  const modalRef = useRef<ModalKind>(null);

  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scene, setScene] = useState<GameScene>("outside");
  const [prompt, setPrompt] = useState("WASD / ARROWS TO MOVE");
  const [modal, setModal] = useState<ModalKind>(null);
  const [selectedProject, setSelectedProject] = useState(0);
  const [fade, setFade] = useState(false);
  const [zoomText, setZoomText] = useState("100%");

  const changeModal = (value: ModalKind) => {
    modalRef.current = value;
    setModal(value);
  };

  const modalTitle = useMemo(() => {
    switch (modal) {
      case "about": return "ABOUT ME";
      case "project": return projects[selectedProject]?.title ?? "PROJECT";
      case "skills": return "SKILLS";
      case "experience": return "EXPERIENCE";
      case "education": return "EDUCATION";
      case "contact": return "CONTACT";
      default: return "";
    }
  }, [modal, selectedProject]);

  useEffect(() => {
    if (started) return;

    const onStart = (event: KeyboardEvent) => {
      if (event.key === "Enter") setStarted(true);
    };

    window.addEventListener("keydown", onStart);
    return () => window.removeEventListener("keydown", onStart);
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = Math.max(720, window.innerWidth);
      canvas.height = Math.max(450, window.innerHeight);
      ctx.imageSmoothingEnabled = false;
    };

    resize();

    const input = new Input();
    const renderer = new Renderer();
    const player = new Player(
      OUTSIDE_WORLD.width / 2 - 24,
      houseDoor.y + 88
    );
    const camera = new Camera();
    const loop = new GameLoop();

    sceneRef.current = "outside";

    let destroyed = false;
    let transitionLock = false;
    let lastPrompt = "";

    const updatePrompt = (value: string) => {
      if (value === lastPrompt) return;
      lastPrompt = value;
      setPrompt(value);
    };

    const moveScene = (nextScene: GameScene, spawnX: number, spawnY: number) => {
      if (transitionLock) return;

      transitionLock = true;
      setFade(true);

      window.setTimeout(() => {
        if (destroyed) return;

        sceneRef.current = nextScene;
        setScene(nextScene);
        changeModal(null);

        player.x = spawnX;
        player.y = spawnY;

        window.setTimeout(() => {
          if (destroyed) return;
          transitionLock = false;
          setFade(false);
        }, 140);
      }, 260);
    };

    const updateCamera = () => {
      const size = worldSizeForScene(sceneRef.current);
      camera.update(
        player.centerX,
        player.centerY,
        canvas.width,
        canvas.height,
        size.width,
        size.height
      );
    };

    const renderScene = () => {
      const currentScene = sceneRef.current;
      const size = worldSizeForScene(currentScene);

      updateCamera();

      // Always clear the real screen first. This prevents the previous scene
      // from showing through around smaller rooms such as the house interior.
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // If a room is smaller than the browser viewport, center the room and
      // leave the unused area black instead of pinning the room to the corner.
      const scaledWorldWidth = size.width * camera.zoom;
      const scaledWorldHeight = size.height * camera.zoom;
      const offsetX = Math.max(0, (canvas.width - scaledWorldWidth) / 2);
      const offsetY = Math.max(0, (canvas.height - scaledWorldHeight) / 2);

      ctx.save();
      ctx.setTransform(
        camera.zoom,
        0,
        0,
        camera.zoom,
        offsetX - camera.x * camera.zoom,
        offsetY - camera.y * camera.zoom
      );

      if (currentScene === "outside") {
        renderer.drawOutside(ctx, camera.x, camera.y);
      } else if (currentScene === "house") {
        renderer.drawHouseInterior(ctx);
      } else {
        renderer.drawSectionRoom(ctx, currentScene);
      }

      player.draw(ctx);
      ctx.restore();
    };

    const startGame = async () => {
      try {
        await Promise.all([renderer.load(), player.load()]);
        if (destroyed) return;

        setLoaded(true);

        loop.start((deltaTime) => {
          const currentScene = sceneRef.current;

          if (modalRef.current !== null) {
            if (input.consume("escape")) changeModal(null);
            renderScene();
            return;
          }

          if (transitionLock) {
            renderScene();
            return;
          }

          if (currentScene === "outside") {
            player.update(input, deltaTime, outsideSolids());
            player.x = Math.max(0, Math.min(player.x, OUTSIDE_WORLD.width - player.width));
            player.y = Math.max(0, Math.min(player.y, OUTSIDE_WORLD.height - player.height));

            renderScene();

            if (pointNearRect(player.centerX, player.centerY, houseDoor, 64)) {
              updatePrompt("E  ENTER HOUSE");
              if (input.consume("e")) {
                moveScene(
                  "house",
                  HOUSE_WORLD.width / 2 - player.width / 2,
                  HOUSE_WORLD.height - 160
                );
              }
            } else {
              updatePrompt("WASD / ARROWS  ·  WHEEL / +/- ZOOM");
            }
          } else if (currentScene === "house") {
            player.update(input, deltaTime, houseSolids());
            player.x = Math.max(45, Math.min(player.x, HOUSE_WORLD.width - player.width - 45));
            player.y = Math.max(88, Math.min(player.y, HOUSE_WORLD.height - player.height - 48));

            renderScene();

            let activeDoorIndex = -1;
            for (let i = 0; i < roomDoors.length; i++) {
              if (pointNearRect(player.centerX, player.centerY, roomDoors[i], 42)) {
                activeDoorIndex = i;
                break;
              }
            }

            if (activeDoorIndex >= 0) {
              const door = roomDoors[activeDoorIndex];
              updatePrompt(`E  ENTER ${door.label}`);
              if (input.consume("e")) {
                const spawn = roomSpawnPoints[door.scene];
                moveScene(door.scene, spawn.x, spawn.y);
              }
            } else {
              const exit = houseExitSpot;
              if (pointNearRect(player.centerX, player.centerY, exit, 42)) {
                updatePrompt("E  LEAVE HOUSE");
                if (input.consume("e")) {
                  moveScene(
                    "outside",
                    houseDoor.x + houseDoor.width / 2 - player.width / 2,
                    houseDoor.y + 70
                  );
                }
              } else {
                updatePrompt("WASD / ARROWS  ·  E TO INTERACT");
              }
            }

            if (input.consume("escape")) {
              moveScene(
                "outside",
                houseDoor.x + houseDoor.width / 2 - player.width / 2,
                houseDoor.y + 70
              );
            }
          } else {
            player.update(input, deltaTime, roomSolids());
            player.x = Math.max(45, Math.min(player.x, HOUSE_WORLD.width - player.width - 45));
            player.y = Math.max(88, Math.min(player.y, HOUSE_WORLD.height - player.height - 48));

            renderScene();

            const spots = roomInteractiveSpots(currentScene as SectionScene);
            const activeIndex = spots.findIndex((spot) =>
              pointNearRect(player.centerX, player.centerY, spot, 48)
            );

            if (activeIndex >= 0) {
              const spot = spots[activeIndex];
              updatePrompt(`E  ${spot.label}`);

              if (input.consume("e")) {
                if (currentScene === "projects") {
                  setSelectedProject(activeIndex);
                  changeModal("project");
                } else {
                  changeModal(currentScene as Exclude<ModalKind, "project" | null>);
                }
              }
            } else if (player.centerY > HOUSE_WORLD.height - 120) {
              updatePrompt("E  BACK TO HALL");
              if (input.consume("e")) {
                const point = roomReturnPoints[currentScene as SectionScene];
                moveScene("house", point.x - player.width / 2, point.y + 95);
              }
            } else {
              updatePrompt("WASD / ARROWS  ·  E TO OPEN");
            }

            if (input.consume("escape")) {
              const point = roomReturnPoints[currentScene as SectionScene];
              moveScene("house", point.x - player.width / 2, point.y + 95);
            }
          }
        });
      } catch (error) {
        console.error("Failed to start game:", error);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY < 0) camera.zoomIn();
      else camera.zoomOut();
      setZoomText(`${Math.round(camera.zoom * 100)}%`);
    };

    const handleZoomKey = (event: KeyboardEvent) => {
      if (modalRef.current !== null) return;

      if (event.key === "+" || event.key === "=") {
        camera.zoomIn();
        setZoomText(`${Math.round(camera.zoom * 100)}%`);
      }

      if (event.key === "-" || event.key === "_") {
        camera.zoomOut();
        setZoomText(`${Math.round(camera.zoom * 100)}%`);
      }

      if (event.key === "0") {
        camera.resetZoom();
        setZoomText("100%");
      }
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleZoomKey);
    window.addEventListener("resize", resize);

    startGame();

    return () => {
      destroyed = true;
      loop.stop();
      input.destroy();
      canvas.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleZoomKey);
      window.removeEventListener("resize", resize);
    };
  }, [started]);

  return (
    <div className="game-root">
      <canvas ref={canvasRef} className="game-canvas" />
      <div className="screen-vignette" />

      {!started && (
        <div className="start-screen">
          <div className="start-card">
            <h1 className="start-title">DAVIN'S JOURNEY</h1>
            <p className="start-subtitle">A Pixel Portfolio Adventure</p>
            <div className="start-prompt">Press ENTER</div>
            <p className="start-help">Explore the house · open the books · discover the work</p>
          </div>
        </div>
      )}

      {started && !loaded && (
        <div className="loading-screen">
          <div className="loading-card">LOADING WORLD...</div>
        </div>
      )}

      {started && loaded && (
        <>
          <div className="hud">
            <div className="hud-box">
              <div className="hud-name">{profile.name}</div>
              <div className="hud-small">{profile.role}</div>
            </div>
            <div className="hud-box hud-small">
              {scene.toUpperCase()} · ZOOM {zoomText}
            </div>
          </div>

          <div className="interaction">{prompt}</div>

          {modal && (
            <div className="dialog-overlay">
              <div className="dialog-box">
                <div className="eyebrow">PORTO ARCHIVE</div>
                <h2>{modalTitle}</h2>
                {renderModal(modal, selectedProject)}
                <button className="overlay-close" onClick={() => changeModal(null)}>
                  CLOSE
                </button>
              </div>
            </div>
          )}

          <div className={`fade-layer ${fade ? "visible" : ""}`} />
        </>
      )}
    </div>
  );
}

function renderModal(modal: ModalKind, selectedProject: number) {
  if (modal === "about") {
    return (
      <div className="modal-content">
        <p>{profile.name} is a {profile.role} at {profile.university}.</p>
        <p>{profile.tagline}</p>
        <div className="info-list">
          <div><strong>Current GPA:</strong> {profile.gpa}</div>
          <div><strong>Focus:</strong> Web, UI/UX, interactive projects</div>
        </div>
      </div>
    );
  }

  if (modal === "project") {
    const project = projects[selectedProject];
    if (!project) return <p>No project data yet.</p>;

    return (
      <div className="modal-content">
        <div className="project-highlight">
          <div className="stack">{project.stack}</div>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer">GITHUB</a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer">LIVE DEMO</a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (modal === "skills") {
    return (
      <div className="skill-grid">
        {skills.map((skill) => <div className="skill-chip" key={skill}>{skill}</div>)}
      </div>
    );
  }

  if (modal === "experience") {
    return (
      <div className="timeline-list">
        {experience.map((item) => (
          <div className="timeline-item" key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }

  if (modal === "education") {
    return (
      <div className="modal-content">
        <p><strong>{profile.university}</strong></p>
        <p>Computer Science</p>
        <p>Currently continuing the journey through coursework, projects, internship preparation, and thesis work.</p>
      </div>
    );
  }

  if (modal === "contact") {
    return (
      <div className="contact-list">
        <a href={`mailto:${profile.email}`}>EMAIL · {profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GITHUB · OPEN PROFILE</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN · OPEN PROFILE</a>
      </div>
    );
  }

  return null;
}
