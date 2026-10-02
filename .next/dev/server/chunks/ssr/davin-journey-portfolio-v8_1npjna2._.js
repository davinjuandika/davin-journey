module.exports = [
"[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Camera$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/Camera.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$GameLoop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/GameLoop.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Input$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/Input.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/Renderer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$entities$2f$Player$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/entities/Player.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/maps/outside.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/maps/house.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function pointNearRect(px, py, rect, padding = 0) {
    return px >= rect.x - padding && px <= rect.x + rect.width + padding && py >= rect.y - padding && py <= rect.y + rect.height + padding;
}
function worldSizeForScene(scene) {
    return scene === "outside" ? __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTSIDE_WORLD"] : __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"];
}
function GameCanvas() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("outside");
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scene, setScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("outside");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("WASD / ARROWS TO MOVE");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [zoomText, setZoomText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("100%");
    const changeModal = (value)=>{
        modalRef.current = value;
        setModal(value);
    };
    const modalTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        switch(modal){
            case "about":
                return "ABOUT ME";
            case "project":
                return __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][selectedProject]?.title ?? "PROJECT";
            case "skills":
                return "SKILLS";
            case "experience":
                return "EXPERIENCE";
            case "education":
                return "EDUCATION";
            case "contact":
                return "CONTACT";
            default:
                return "";
        }
    }, [
        modal,
        selectedProject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (started) return;
        const onStart = (event)=>{
            if (event.key === "Enter") setStarted(true);
        };
        window.addEventListener("keydown", onStart);
        return ()=>window.removeEventListener("keydown", onStart);
    }, [
        started
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!started) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const resize = ()=>{
            canvas.width = Math.max(720, window.innerWidth);
            canvas.height = Math.max(450, window.innerHeight);
            ctx.imageSmoothingEnabled = false;
        };
        resize();
        const input = new __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Input$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"]();
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Renderer"]();
        const player = new __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$entities$2f$Player$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Player"](__TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTSIDE_WORLD"].width / 2 - 24, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].y + 88);
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Camera$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"]();
        const loop = new __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$GameLoop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameLoop"]();
        sceneRef.current = "outside";
        let destroyed = false;
        let transitionLock = false;
        let lastPrompt = "";
        const updatePrompt = (value)=>{
            if (value === lastPrompt) return;
            lastPrompt = value;
            setPrompt(value);
        };
        const moveScene = (nextScene, spawnX, spawnY)=>{
            if (transitionLock) return;
            transitionLock = true;
            setFade(true);
            window.setTimeout(()=>{
                if (destroyed) return;
                sceneRef.current = nextScene;
                setScene(nextScene);
                changeModal(null);
                player.x = spawnX;
                player.y = spawnY;
                window.setTimeout(()=>{
                    if (destroyed) return;
                    transitionLock = false;
                    setFade(false);
                }, 140);
            }, 260);
        };
        const updateCamera = ()=>{
            const size = worldSizeForScene(sceneRef.current);
            camera.update(player.centerX, player.centerY, canvas.width, canvas.height, size.width, size.height);
        };
        const renderScene = ()=>{
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
            ctx.setTransform(camera.zoom, 0, 0, camera.zoom, offsetX - camera.x * camera.zoom, offsetY - camera.y * camera.zoom);
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
        const startGame = async ()=>{
            try {
                await Promise.all([
                    renderer.load(),
                    player.load()
                ]);
                if (destroyed) return;
                setLoaded(true);
                loop.start((deltaTime)=>{
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
                        player.update(input, deltaTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outsideSolids"])());
                        player.x = Math.max(0, Math.min(player.x, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTSIDE_WORLD"].width - player.width));
                        player.y = Math.max(0, Math.min(player.y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OUTSIDE_WORLD"].height - player.height));
                        renderScene();
                        if (pointNearRect(player.centerX, player.centerY, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"], 64)) {
                            updatePrompt("E  ENTER HOUSE");
                            if (input.consume("e")) {
                                moveScene("house", __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].width / 2 - player.width / 2, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].height - 160);
                            }
                        } else {
                            updatePrompt("WASD / ARROWS  ·  WHEEL / +/- ZOOM");
                        }
                    } else if (currentScene === "house") {
                        player.update(input, deltaTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseSolids"])());
                        player.x = Math.max(45, Math.min(player.x, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].width - player.width - 45));
                        player.y = Math.max(88, Math.min(player.y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].height - player.height - 48));
                        renderScene();
                        let activeDoorIndex = -1;
                        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomDoors"].length; i++){
                            if (pointNearRect(player.centerX, player.centerY, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomDoors"][i], 42)) {
                                activeDoorIndex = i;
                                break;
                            }
                        }
                        if (activeDoorIndex >= 0) {
                            const door = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomDoors"][activeDoorIndex];
                            updatePrompt(`E  ENTER ${door.label}`);
                            if (input.consume("e")) {
                                const spawn = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomSpawnPoints"][door.scene];
                                moveScene(door.scene, spawn.x, spawn.y);
                            }
                        } else {
                            const exit = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseExitSpot"];
                            if (pointNearRect(player.centerX, player.centerY, exit, 42)) {
                                updatePrompt("E  LEAVE HOUSE");
                                if (input.consume("e")) {
                                    moveScene("outside", __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].x + __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].width / 2 - player.width / 2, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].y + 70);
                                }
                            } else {
                                updatePrompt("WASD / ARROWS  ·  E TO INTERACT");
                            }
                        }
                        if (input.consume("escape")) {
                            moveScene("outside", __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].x + __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].width / 2 - player.width / 2, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseDoor"].y + 70);
                        }
                    } else {
                        player.update(input, deltaTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomSolids"])());
                        player.x = Math.max(45, Math.min(player.x, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].width - player.width - 45));
                        player.y = Math.max(88, Math.min(player.y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].height - player.height - 48));
                        renderScene();
                        const spots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomInteractiveSpots"])(currentScene);
                        const activeIndex = spots.findIndex((spot)=>pointNearRect(player.centerX, player.centerY, spot, 48));
                        if (activeIndex >= 0) {
                            const spot = spots[activeIndex];
                            updatePrompt(`E  ${spot.label}`);
                            if (input.consume("e")) {
                                if (currentScene === "projects") {
                                    setSelectedProject(activeIndex);
                                    changeModal("project");
                                } else {
                                    changeModal(currentScene);
                                }
                            }
                        } else if (player.centerY > __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"].height - 120) {
                            updatePrompt("E  BACK TO HALL");
                            if (input.consume("e")) {
                                const point = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomReturnPoints"][currentScene];
                                moveScene("house", point.x - player.width / 2, point.y + 95);
                            }
                        } else {
                            updatePrompt("WASD / ARROWS  ·  E TO OPEN");
                        }
                        if (input.consume("escape")) {
                            const point = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomReturnPoints"][currentScene];
                            moveScene("house", point.x - player.width / 2, point.y + 95);
                        }
                    }
                });
            } catch (error) {
                console.error("Failed to start game:", error);
            }
        };
        const handleWheel = (event)=>{
            event.preventDefault();
            if (event.deltaY < 0) camera.zoomIn();
            else camera.zoomOut();
            setZoomText(`${Math.round(camera.zoom * 100)}%`);
        };
        const handleZoomKey = (event)=>{
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
        canvas.addEventListener("wheel", handleWheel, {
            passive: false
        });
        window.addEventListener("keydown", handleZoomKey);
        window.addEventListener("resize", resize);
        startGame();
        return ()=>{
            destroyed = true;
            loop.stop();
            input.destroy();
            canvas.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleZoomKey);
            window.removeEventListener("resize", resize);
        };
    }, [
        started
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "game-canvas"
            }, void 0, false, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-vignette"
            }, void 0, false, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            !started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "start-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "start-title",
                            children: "DAVIN'S JOURNEY"
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "start-subtitle",
                            children: "A Pixel Portfolio Adventure"
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "start-prompt",
                            children: "Press ENTER"
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 383,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "start-help",
                            children: "Explore the house · open the books · discover the work"
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this),
            started && !loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading-card",
                    children: "LOADING WORLD..."
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 391,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this),
            started && loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hud",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hud-name",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name
                                    }, void 0, false, {
                                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hud-small",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].role
                                    }, void 0, false, {
                                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-box hud-small",
                                children: [
                                    scene.toUpperCase(),
                                    " · ZOOM ",
                                    zoomText
                                ]
                            }, void 0, true, {
                                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "interaction",
                        children: prompt
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dialog-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dialog-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: "PORTO ARCHIVE"
                                }, void 0, false, {
                                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: modalTitle
                                }, void 0, false, {
                                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                    lineNumber: 413,
                                    columnNumber: 17
                                }, this),
                                renderModal(modal, selectedProject),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "overlay-close",
                                    onClick: ()=>changeModal(null),
                                    children: "CLOSE"
                                }, void 0, false, {
                                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                    lineNumber: 415,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 411,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 410,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fade-layer ${fade ? "visible" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
function renderModal(modal, selectedProject) {
    if (modal === "about") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name,
                        " is a ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].role,
                        " at ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].university,
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].tagline
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "info-list",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Current GPA:"
                                }, void 0, false, {
                                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                    lineNumber: 436,
                                    columnNumber: 16
                                }, this),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].gpa
                            ]
                        }, void 0, true, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Focus:"
                                }, void 0, false, {
                                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                    lineNumber: 437,
                                    columnNumber: 16
                                }, this),
                                " Web, UI/UX, interactive projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 432,
            columnNumber: 7
        }, this);
    }
    if (modal === "project") {
        const project = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][selectedProject];
        if (!project) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "No project data yet."
        }, void 0, false, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 445,
            columnNumber: 26
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-highlight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack",
                        children: project.stack
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.github,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "GITHUB"
                            }, void 0, false, {
                                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this),
                            project.demo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.demo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "LIVE DEMO"
                            }, void 0, false, {
                                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                                lineNumber: 455,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                lineNumber: 449,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 448,
            columnNumber: 7
        }, this);
    }
    if (modal === "skills") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "skill-grid",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skills"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skill-chip",
                    children: skill
                }, skill, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 466,
                    columnNumber: 32
                }, this))
        }, void 0, false, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 465,
            columnNumber: 7
        }, this);
    }
    if (modal === "experience") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "timeline-list",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experience"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "timeline-item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.body
                        }, void 0, false, {
                            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.title, true, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 473,
            columnNumber: 7
        }, this);
    }
    if (modal === "education") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].university
                    }, void 0, false, {
                        fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                        lineNumber: 487,
                        columnNumber: 12
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 487,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Computer Science"
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Currently continuing the journey through coursework, projects, internship preparation, and thesis work."
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 486,
            columnNumber: 7
        }, this);
    }
    if (modal === "contact") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact-list",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email}`,
                    children: [
                        "EMAIL · ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].email
                    ]
                }, void 0, true, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].github,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "GITHUB · OPEN PROFILE"
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].linkedin,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "LINKEDIN · OPEN PROFILE"
                }, void 0, false, {
                    fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
                    lineNumber: 499,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/davin-journey-portfolio-v8/components/GameCanvas.tsx",
            lineNumber: 496,
            columnNumber: 7
        }, this);
    }
    return null;
}
}),
"[project]/davin-journey-portfolio-v8/game/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experience",
    ()=>experience,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const profile = {
    name: "Davin Juandika",
    role: "Computer Science Student",
    university: "BINUS University",
    tagline: "Building things, learning by making them.",
    gpa: "3.06",
    email: "your-email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/"
};
const projects = [
    {
        title: "PORTO RPG Portfolio",
        description: "An interactive pixel RPG portfolio where visitors explore a world to discover my work.",
        stack: "Next.js · TypeScript · Canvas",
        github: "https://github.com/yourusername/porto-rpg-portfolio"
    },
    {
        title: "Picverse",
        description: "A desktop-first creative image platform created as an HCI project.",
        stack: "HTML · CSS · JavaScript · HCI",
        github: "https://github.com/yourusername/picverse"
    },
    {
        title: "Game Design Project",
        description: "A university game design project focused on interaction, systems, and player experience.",
        stack: "Game Design · UI · Prototyping",
        github: "https://github.com/yourusername/game-design-project"
    },
    {
        title: "RLC Circuit Simulation",
        description: "A computational physics project visualizing an RLC circuit response from simulation data.",
        stack: "Python · Numerical Methods · Visualization",
        github: "https://github.com/yourusername/rlc-simulation"
    }
];
const skills = [
    "Java",
    "C / C++",
    "TypeScript",
    "JavaScript",
    "HTML / CSS",
    "React / Next.js",
    "Git / GitHub",
    "UI / UX",
    "Game Design"
];
const experience = [
    {
        title: "Student Projects",
        body: "Course projects across software engineering, HCI, game design, multimedia, and XR."
    },
    {
        title: "Team Collaboration",
        body: "Collaborative coursework with documentation, presentations, prototyping, and implementation."
    },
    {
        title: "Next Mission",
        body: "Prepare for internship experience and keep building a stronger software portfolio."
    }
];
}),
"[project]/davin-journey-portfolio-v8/game/engine/Camera.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Camera",
    ()=>Camera
]);
class Camera {
    x = 0;
    y = 0;
    zoom = 1;
    minZoom = 0.75;
    maxZoom = 1.75;
    zoomStep = 0.1;
    update(targetX, targetY, viewportWidth, viewportHeight, worldWidth, worldHeight) {
        const worldViewportWidth = viewportWidth / this.zoom;
        const worldViewportHeight = viewportHeight / this.zoom;
        const desiredX = targetX - worldViewportWidth / 2;
        const desiredY = targetY - worldViewportHeight / 2;
        const maxX = Math.max(0, worldWidth - worldViewportWidth);
        const maxY = Math.max(0, worldHeight - worldViewportHeight);
        this.x = Math.max(0, Math.min(desiredX, maxX));
        this.y = Math.max(0, Math.min(desiredY, maxY));
    }
    zoomIn() {
        this.zoom = Math.min(this.maxZoom, Number((this.zoom + this.zoomStep).toFixed(2)));
    }
    zoomOut() {
        this.zoom = Math.max(this.minZoom, Number((this.zoom - this.zoomStep).toFixed(2)));
    }
    resetZoom() {
        this.zoom = 1;
    }
}
}),
"[project]/davin-journey-portfolio-v8/game/engine/Collision.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveWithCollisions",
    ()=>moveWithCollisions,
    "overlaps",
    ()=>overlaps
]);
function overlaps(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}
function moveWithCollisions(current, dx, dy, solids) {
    let nextX = current.x + dx;
    let nextY = current.y + dy;
    const horizontal = {
        ...current,
        x: nextX
    };
    if (solids.some((solid)=>overlaps(horizontal, solid))) {
        nextX = current.x;
    }
    const vertical = {
        ...current,
        y: nextY
    };
    if (solids.some((solid)=>overlaps(vertical, solid))) {
        nextY = current.y;
    }
    return {
        x: nextX,
        y: nextY
    };
}
}),
"[project]/davin-journey-portfolio-v8/game/engine/GameLoop.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameLoop",
    ()=>GameLoop
]);
class GameLoop {
    running = false;
    animationFrameId = null;
    lastTime = 0;
    start(update) {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        const loop = (currentTime)=>{
            if (!this.running) return;
            const deltaTime = Math.min(0.05, (currentTime - this.lastTime) / 1000);
            this.lastTime = currentTime;
            update(deltaTime);
            this.animationFrameId = requestAnimationFrame(loop);
        };
        this.animationFrameId = requestAnimationFrame(loop);
    }
    stop() {
        this.running = false;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }
}
}),
"[project]/davin-journey-portfolio-v8/game/engine/Input.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
class Input {
    keys = new Set();
    handleKeyDown = (event)=>{
        const key = event.key.toLowerCase();
        if ([
            "w",
            "a",
            "s",
            "d",
            "arrowup",
            "arrowdown",
            "arrowleft",
            "arrowright",
            "e",
            "escape",
            "+",
            "=",
            "-",
            "_",
            "0"
        ].includes(key)) {
            event.preventDefault();
        }
        this.keys.add(key);
    };
    handleKeyUp = (event)=>{
        this.keys.delete(event.key.toLowerCase());
    };
    constructor(){
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }
    isDown(key) {
        return this.keys.has(key.toLowerCase());
    }
    consume(key) {
        const normalized = key.toLowerCase();
        if (!this.keys.has(normalized)) return false;
        this.keys.delete(normalized);
        return true;
    }
    destroy() {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
        this.keys.clear();
    }
}
}),
"[project]/davin-journey-portfolio-v8/game/engine/Renderer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Renderer",
    ()=>Renderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/worldConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/maps/outside.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/maps/house.ts [app-ssr] (ecmascript)");
;
;
;
class Renderer {
    grassImage = new Image();
    pathImage = new Image();
    waterImage = new Image();
    farmImage = new Image();
    treeImage = new Image();
    treeSmallImage = new Image();
    chestImage = new Image();
    lampImage = new Image();
    rock1Image = new Image();
    rock2Image = new Image();
    wheatImage = new Image();
    fenceHorizontalImage = new Image();
    fenceVerticalImage = new Image();
    fenceCornerImage = new Image();
    loaded = false;
    constructor(){
        // Core terrain from Cute Fantasy Assets.
        this.grassImage.src = "/sprites/tilesets/grass.png";
        this.pathImage.src = "/sprites/tilesets/path.png";
        this.waterImage.src = "/sprites/tilesets/water.png";
        this.farmImage.src = "/sprites/tilesets/farmland.png";
        // Outdoor decoration from Cute Fantasy Assets.
        this.treeImage.src = "/sprites/objects/oak_tree.png";
        this.treeSmallImage.src = "/sprites/objects/oak_tree_small.png";
        this.chestImage.src = "/sprites/objects/chest.png";
        this.lampImage.src = "/sprites/objects/lamp.png";
        this.rock1Image.src = "/sprites/objects/rock_1.png";
        this.rock2Image.src = "/sprites/objects/rock_2.png";
        this.wheatImage.src = "/sprites/objects/wheat.png";
        this.fenceHorizontalImage.src = "/sprites/objects/fence_horizontal.png";
        this.fenceVerticalImage.src = "/sprites/objects/fence_vertical.png";
        this.fenceCornerImage.src = "/sprites/objects/fence_corner.png";
    }
    async load() {
        const images = [
            this.grassImage,
            this.pathImage,
            this.waterImage,
            this.farmImage,
            this.treeImage,
            this.treeSmallImage,
            this.chestImage,
            this.lampImage,
            this.rock1Image,
            this.rock2Image,
            this.wheatImage,
            this.fenceHorizontalImage,
            this.fenceVerticalImage,
            this.fenceCornerImage
        ];
        await Promise.all(images.map((image)=>this.waitForImage(image)));
        this.loaded = true;
    }
    drawOutside(ctx, cameraX, cameraY) {
        ctx.imageSmoothingEnabled = false;
        // Clear the full world area first.
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 2560, 1600);
        if (!this.loaded) return;
        const startCol = Math.max(0, Math.floor((cameraX - 32) / __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]));
        const endCol = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outsideMap"][0].length, Math.ceil((cameraX + ctx.canvas.width) / __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]) + 1);
        const startRow = Math.max(0, Math.floor((cameraY - 32) / __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]));
        const endRow = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outsideMap"].length, Math.ceil((cameraY + ctx.canvas.height) / __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]) + 1);
        // Base terrain.
        for(let row = startRow; row < endRow; row++){
            for(let col = startCol; col < endCol; col++){
                const tile = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["outsideMap"][row][col];
                const x = col * __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"];
                const y = row * __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"];
                if (tile === 2) {
                    ctx.drawImage(this.pathImage, x, y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
                } else if (tile === 3) {
                    ctx.drawImage(this.waterImage, x, y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
                } else {
                    ctx.drawImage(this.grassImage, x, y, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"], __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TILE_SIZE"]);
                }
            }
        }
        // Wheat farm.
        this.drawFarm(ctx);
        // Trees.
        for (const tree of __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trees"]){
            ctx.drawImage(this.treeImage, tree.x, tree.y, tree.width, tree.height);
        }
        // Smaller trees as filler.
        ctx.drawImage(this.treeSmallImage, 1550, 1180, 96, 48);
        ctx.drawImage(this.treeSmallImage, 1750, 1360, 96, 48);
        // Rock decorations around the path and farm.
        for (const rock of __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rocks"]){
            const image = rock.variant === 2 ? this.rock2Image : this.rock1Image;
            ctx.drawImage(image, rock.x, rock.y, 32, 32);
        }
        // Lamps lining the road.
        for (const lamp of __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roadLamps"]){
            ctx.drawImage(this.lampImage, lamp.x, lamp.y, 32, 64);
        }
        // A couple of tiny decorative chests act as landmarks.
        ctx.drawImage(this.chestImage, 630, 900, 32, 32);
        ctx.drawImage(this.chestImage, 1780, 910, 32, 32);
        // Temporary house placeholder until the final house asset is chosen.
        this.drawHouseExterior(ctx);
    }
    drawFarm(ctx) {
        const x = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmField"].x;
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmField"].y;
        const w = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmField"].width;
        const h = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmField"].height;
        // Continuous soil base behind the individual farm tiles.
        ctx.fillStyle = "#a7744d";
        ctx.fillRect(x, y, w, h);
        // FarmLand_Tile is 48x48.
        for(let py = y; py < y + h; py += 48){
            for(let px = x; px < x + w; px += 48){
                ctx.drawImage(this.farmImage, px, py, 48, 48);
            }
        }
        // Wheat rows.
        for (const crop of __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmCrops"]){
            ctx.drawImage(this.wheatImage, crop.x, crop.y, 24, 24);
        }
        this.drawFarmFence(ctx, x, y, w, h);
    }
    drawFarmFence(ctx, x, y, w, h) {
        const fenceYTop = y - 16;
        const fenceYBottom = y + h;
        const fenceXLeft = x - 16;
        const fenceXRight = x + w - 16;
        // Corners.
        ctx.drawImage(this.fenceCornerImage, fenceXLeft, fenceYTop, 32, 32);
        ctx.drawImage(this.fenceCornerImage, x + w - 16, fenceYTop, 32, 32);
        ctx.drawImage(this.fenceCornerImage, fenceXLeft, y + h - 16, 32, 32);
        ctx.drawImage(this.fenceCornerImage, x + w - 16, y + h - 16, 32, 32);
        // Horizontal rails.
        for(let px = x + 16; px < x + w - 16; px += 32){
            ctx.drawImage(this.fenceHorizontalImage, px, fenceYTop, 32, 16);
            ctx.drawImage(this.fenceHorizontalImage, px, fenceYBottom, 32, 16);
        }
        // Vertical rails with a gate opening on the east side.
        for(let py = y + 16; py < y + h - 16; py += 32){
            if (py < 1072 || py >= 1136) {
                ctx.drawImage(this.fenceVerticalImage, fenceXLeft, py, 16, 32);
                ctx.drawImage(this.fenceVerticalImage, fenceXRight, py, 16, 32);
            } else {
                ctx.drawImage(this.fenceVerticalImage, fenceXLeft, py, 16, 32);
            }
        }
        // Small gateposts emphasize the opening.
        ctx.drawImage(this.fenceVerticalImage, fenceXRight, 1040, 16, 32);
        ctx.drawImage(this.fenceVerticalImage, fenceXRight, 1136, 16, 32);
    }
    drawHouseInterior(ctx) {
        const { width: w, height: h } = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"];
        ctx.fillStyle = "#b78659";
        ctx.fillRect(0, 0, w, h);
        for(let y = 80; y < h - 34; y += 38){
            ctx.fillStyle = y % 76 === 4 ? "#c49363" : "#ad7d52";
            ctx.fillRect(34, y, w - 68, 30);
        }
        ctx.fillStyle = "#5d443b";
        ctx.fillRect(0, 0, w, 78);
        ctx.fillRect(0, 0, 34, h);
        ctx.fillRect(w - 34, 0, 34, h);
        ctx.fillRect(0, h - 34, w, 34);
        ctx.fillStyle = "#5c4b60";
        ctx.fillRect(315, 250, 650, 220);
        ctx.fillStyle = "#856979";
        ctx.fillRect(333, 268, 614, 184);
        ctx.fillStyle = "#6c4736";
        ctx.fillRect(545, 300, 190, 90);
        ctx.fillStyle = "#9c6d4f";
        ctx.fillRect(532, 286, 216, 16);
        ctx.fillStyle = "#d7b36f";
        ctx.fillRect(585, 336, 110, 10);
        for (const door of __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomDoors"]){
            this.drawDoor(ctx, door.x, door.y, door.width, door.height, door.label);
        }
        this.drawExitDoor(ctx, w / 2 - 52, h - 92, 104, 58, "EXIT");
        ctx.textAlign = "center";
        ctx.font = "31px Determination, monospace";
        ctx.fillStyle = "#fff0c9";
        ctx.fillText("DAVIN'S HOUSE", w / 2, 52);
        ctx.font = "14px Determination, monospace";
        ctx.fillStyle = "#d1c7b2";
        ctx.fillText("Choose a room to explore", w / 2, 102);
        ctx.textAlign = "start";
    }
    drawSectionRoom(ctx, scene) {
        const { width: w, height: h } = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOUSE_WORLD"];
        ctx.fillStyle = "#b78659";
        ctx.fillRect(0, 0, w, h);
        for(let y = 74; y < h - 34; y += 38){
            ctx.fillStyle = y % 76 === 10 ? "#c49363" : "#ad7d52";
            ctx.fillRect(34, y, w - 68, 30);
        }
        ctx.fillStyle = "#5d443b";
        ctx.fillRect(0, 0, w, 74);
        ctx.fillRect(0, 0, 34, h);
        ctx.fillRect(w - 34, 0, 34, h);
        ctx.fillRect(0, h - 34, w, 34);
        const titles = {
            about: "ABOUT ME",
            projects: "PROJECT ARCHIVE",
            skills: "SKILL LIBRARY",
            experience: "EXPERIENCE LOG",
            education: "EDUCATION",
            contact: "CONTACT"
        };
        ctx.fillStyle = "#56455b";
        ctx.fillRect(170, 104, w - 340, 56);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff3d4";
        ctx.font = "30px Determination, monospace";
        ctx.fillText(titles[scene], w / 2, 140);
        ctx.fillStyle = "#856979";
        ctx.fillRect(310, 195, 660, 350);
        ctx.fillStyle = "#5c4b60";
        ctx.fillRect(330, 215, 620, 310);
        const spots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$house$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomInteractiveSpots"])(scene);
        for (const spot of spots){
            if (scene === "projects") this.drawProjectDesk(ctx, spot.x, spot.y, spot.icon);
            else this.drawInteractiveDesk(ctx, spot.x, spot.y, spot.icon);
        }
        this.drawExitDoor(ctx, w / 2 - 52, h - 92, 104, 58, "BACK");
        ctx.textAlign = "start";
    }
    drawHouseExterior(ctx) {
        const x = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].x;
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].y;
        const w = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].width;
        const h = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].height;
        ctx.fillStyle = "rgba(0,0,0,.20)";
        ctx.fillRect(x + 32, y + h - 4, w - 64, 28);
        ctx.fillStyle = "#e7d1ab";
        ctx.fillRect(x, y + 90, w, h - 90);
        ctx.fillStyle = "#75433b";
        ctx.fillRect(x - 24, y + 34, w + 48, 120);
        ctx.fillStyle = "#914d45";
        for(let i = 0; i < w + 20; i += 32){
            ctx.fillRect(x - 12 + i, y + 48, 18, 82);
        }
        ctx.fillStyle = "#533833";
        ctx.fillRect(x - 30, y + 30, w + 60, 14);
        this.drawWindow(ctx, x + 92, y + 168);
        this.drawWindow(ctx, x + w - 186, y + 168);
        ctx.fillStyle = "#a87755";
        ctx.fillRect(x + 210, y + h - 125, w - 420, 22);
        const doorX = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].x + __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].width / 2 - 46;
        const doorY = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].y + __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$maps$2f$outside$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["houseBounds"].height - 110;
        this.drawExitDoor(ctx, doorX, doorY, 92, 110, "ENTER");
        ctx.textAlign = "center";
        ctx.font = "25px Determination, monospace";
        ctx.fillStyle = "#fff5d8";
        ctx.fillText("DAVIN'S HOUSE", x + w / 2, y + h + 40);
        ctx.font = "13px Determination, monospace";
        ctx.fillStyle = "#f1e4ca";
        ctx.fillText("A small place for a growing developer", x + w / 2, y + h + 62);
        ctx.textAlign = "start";
    }
    drawProjectDesk(ctx, x, y, icon) {
        ctx.fillStyle = "#704936";
        ctx.fillRect(x, y + 42, 240, 78);
        ctx.fillStyle = "#a37252";
        ctx.fillRect(x - 8, y + 28, 256, 18);
        ctx.fillStyle = "#2f2c2b";
        ctx.fillRect(x + 72, y - 10, 96, 62);
        ctx.fillStyle = "#6d8790";
        ctx.fillRect(x + 82, y, 76, 42);
        ctx.fillStyle = "#9ac08b";
        ctx.fillRect(x + 92, y + 9, 56, 7);
        ctx.fillRect(x + 92, y + 21, 42, 6);
        ctx.fillStyle = "#2f2c2b";
        ctx.fillRect(x + 108, y + 52, 24, 12);
        ctx.fillStyle = "#f8edd3";
        ctx.fillRect(x + 48, y + 84, 144, 30);
        ctx.fillStyle = "#5a4652";
        ctx.font = "16px Determination, monospace";
        ctx.textAlign = "center";
        ctx.fillText(icon, x + 120, y + 105);
        ctx.textAlign = "start";
    }
    drawInteractiveDesk(ctx, x, y, icon) {
        ctx.fillStyle = "#704936";
        ctx.fillRect(x, y + 68, 360, 98);
        ctx.fillStyle = "#a37252";
        ctx.fillRect(x - 10, y + 50, 380, 20);
        ctx.fillStyle = "#f8edd3";
        ctx.fillRect(x + 130, y - 8, 100, 72);
        ctx.fillStyle = "#302d2c";
        ctx.fillRect(x + 146, y + 6, 68, 42);
        ctx.fillStyle = "#8ab3b7";
        ctx.fillRect(x + 158, y + 16, 44, 8);
        ctx.fillStyle = "#e8d39b";
        ctx.fillRect(x + 158, y + 30, 30, 7);
        ctx.textAlign = "center";
        ctx.font = "17px Determination, monospace";
        ctx.fillStyle = "#fff0c8";
        ctx.fillText(icon, x + 180, y + 149);
        ctx.textAlign = "start";
    }
    drawDoor(ctx, x, y, width, height, label) {
        ctx.fillStyle = "#3d302c";
        ctx.fillRect(x - 8, y - 8, width + 16, height + 16);
        ctx.fillStyle = "#67483c";
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = "#98684e";
        ctx.fillRect(x + 12, y + 12, width - 24, height - 24);
        ctx.fillStyle = "#d7bd7b";
        ctx.fillRect(x + width - 28, y + height / 2, 10, 10);
        ctx.fillStyle = "#7b503f";
        ctx.fillRect(x + 20, y + 26, width - 40, 4);
        ctx.fillRect(x + 20, y + height - 30, width - 40, 4);
        const signWidth = Math.max(width + 18, label.length * 13);
        const signX = x + width / 2 - signWidth / 2;
        const signY = y - 34;
        ctx.fillStyle = "#56455b";
        ctx.fillRect(signX, signY, signWidth, 26);
        ctx.textAlign = "center";
        ctx.font = "15px Determination, monospace";
        ctx.fillStyle = "#fff3d4";
        ctx.fillText(label, x + width / 2, signY + 19);
        ctx.textAlign = "start";
    }
    drawExitDoor(ctx, x, y, width, height, label) {
        ctx.fillStyle = "#3d302c";
        ctx.fillRect(x - 8, y - 8, width + 16, height + 16);
        ctx.fillStyle = "#68483d";
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = "#9b6a4d";
        ctx.fillRect(x + 12, y + 12, width - 24, height - 22);
        ctx.fillStyle = "#d8ba78";
        ctx.fillRect(x + width - 24, y + height / 2, 8, 8);
        ctx.textAlign = "center";
        ctx.font = "16px Determination, monospace";
        ctx.fillStyle = "#fff5db";
        ctx.fillText(label, x + width / 2, y + height + 22);
        ctx.textAlign = "start";
    }
    drawWindow(ctx, x, y) {
        ctx.fillStyle = "#705048";
        ctx.fillRect(x, y, 94, 76);
        ctx.fillStyle = "#8bc5d3";
        ctx.fillRect(x + 9, y + 9, 76, 58);
        ctx.fillStyle = "#efe6c7";
        ctx.fillRect(x + 43, y + 9, 8, 58);
        ctx.fillRect(x + 9, y + 34, 76, 8);
    }
    waitForImage(image) {
        if (image.complete && image.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve, reject)=>{
            image.onload = ()=>resolve();
            image.onerror = ()=>reject(new Error(`Could not load image: ${image.src}`));
        });
    }
}
}),
"[project]/davin-journey-portfolio-v8/game/engine/worldConstants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAYER_HEIGHT",
    ()=>PLAYER_HEIGHT,
    "PLAYER_SPEED",
    ()=>PLAYER_SPEED,
    "PLAYER_WIDTH",
    ()=>PLAYER_WIDTH,
    "TILE_SIZE",
    ()=>TILE_SIZE
]);
const TILE_SIZE = 16;
const PLAYER_SPEED = 150;
const PLAYER_WIDTH = 32;
const PLAYER_HEIGHT = 32;
}),
"[project]/davin-journey-portfolio-v8/game/entities/Player.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Player",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Collision$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/Collision.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/davin-journey-portfolio-v8/game/engine/worldConstants.ts [app-ssr] (ecmascript)");
;
;
class Player {
    x;
    y;
    width = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAYER_WIDTH"];
    height = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAYER_HEIGHT"];
    speed = __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$worldConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAYER_SPEED"];
    direction = "down";
    image = new Image();
    loaded = false;
    animationFrame = 0;
    animationTimer = 0;
    moving = false;
    frameWidth = 32;
    frameHeight = 32;
    frameCount = 6;
    frameDuration = 0.10;
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.image.src = "/sprites/characters/player.png";
    }
    async load() {
        if (this.loaded) return;
        await new Promise((resolve, reject)=>{
            if (this.image.complete && this.image.naturalWidth > 0) {
                this.loaded = true;
                resolve();
                return;
            }
            this.image.onload = ()=>{
                this.loaded = true;
                resolve();
            };
            this.image.onerror = ()=>{
                reject(new Error("Could not load /sprites/characters/player.png"));
            };
        });
    }
    get box() {
        return {
            x: this.x + 7,
            y: this.y + 17,
            width: 18,
            height: 13
        };
    }
    get centerX() {
        return this.x + this.width / 2;
    }
    get centerY() {
        return this.y + this.height / 2;
    }
    update(input, deltaTime, solids = []) {
        let dx = 0;
        let dy = 0;
        if (input.isDown("w") || input.isDown("arrowup")) {
            dy -= 1;
            this.direction = "up";
        }
        if (input.isDown("s") || input.isDown("arrowdown")) {
            dy += 1;
            this.direction = "down";
        }
        if (input.isDown("a") || input.isDown("arrowleft")) {
            dx -= 1;
            this.direction = "left";
        }
        if (input.isDown("d") || input.isDown("arrowright")) {
            dx += 1;
            this.direction = "right";
        }
        this.moving = dx !== 0 || dy !== 0;
        if (dx !== 0 && dy !== 0) {
            const length = Math.hypot(dx, dy);
            dx /= length;
            dy /= length;
        }
        const before = this.box;
        const moved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$davin$2d$journey$2d$portfolio$2d$v8$2f$game$2f$engine$2f$Collision$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moveWithCollisions"])(before, dx * this.speed * deltaTime, dy * this.speed * deltaTime, solids);
        this.x += moved.x - before.x;
        this.y += moved.y - before.y;
        if (this.moving) {
            this.animationTimer += deltaTime;
            while(this.animationTimer >= this.frameDuration){
                this.animationTimer -= this.frameDuration;
                this.animationFrame = (this.animationFrame + 1) % this.frameCount;
            }
        } else {
            this.animationTimer = 0;
            this.animationFrame = 0;
        }
    }
    draw(ctx) {
        if (!this.loaded) return;
        const row = this.getRow();
        const sourceX = this.animationFrame * this.frameWidth;
        const sourceY = row * this.frameHeight;
        ctx.imageSmoothingEnabled = false;
        const screenX = Math.round(this.x);
        const screenY = Math.round(this.y);
        if (this.direction === "left") {
            ctx.save();
            ctx.translate(screenX + this.width, screenY);
            ctx.scale(-1, 1);
            ctx.drawImage(this.image, sourceX, sourceY, this.frameWidth, this.frameHeight, 0, 0, this.width, this.height);
            ctx.restore();
            return;
        }
        ctx.drawImage(this.image, sourceX, sourceY, this.frameWidth, this.frameHeight, screenX, screenY, this.width, this.height);
    }
    getRow() {
        if (!this.moving) {
            if (this.direction === "down") return 0;
            if (this.direction === "right" || this.direction === "left") return 1;
            return 2;
        }
        if (this.direction === "down") return 3;
        if (this.direction === "right" || this.direction === "left") return 4;
        return 5;
    }
}
}),
"[project]/davin-journey-portfolio-v8/game/maps/house.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOUSE_WORLD",
    ()=>HOUSE_WORLD,
    "houseExitSpot",
    ()=>houseExitSpot,
    "houseSolids",
    ()=>houseSolids,
    "roomDoors",
    ()=>roomDoors,
    "roomInteractiveSpots",
    ()=>roomInteractiveSpots,
    "roomReturnPoints",
    ()=>roomReturnPoints,
    "roomSolids",
    ()=>roomSolids,
    "roomSpawnPoints",
    ()=>roomSpawnPoints
]);
const HOUSE_WORLD = {
    width: 1280,
    height: 720
};
const DOOR_W = 170;
const DOOR_H = 138;
const LEFT_X = 105;
const CENTER_X = 555;
const RIGHT_X = 1005;
const TOP_Y = 124;
const BOTTOM_Y = 392;
const roomDoors = [
    {
        id: "about",
        scene: "about",
        label: "ABOUT ME",
        x: LEFT_X,
        y: TOP_Y,
        width: DOOR_W,
        height: DOOR_H
    },
    {
        id: "projects",
        scene: "projects",
        label: "PROJECTS",
        x: CENTER_X,
        y: TOP_Y,
        width: DOOR_W,
        height: DOOR_H
    },
    {
        id: "skills",
        scene: "skills",
        label: "SKILLS",
        x: RIGHT_X,
        y: TOP_Y,
        width: DOOR_W,
        height: DOOR_H
    },
    {
        id: "experience",
        scene: "experience",
        label: "EXPERIENCE",
        x: LEFT_X,
        y: BOTTOM_Y,
        width: DOOR_W,
        height: DOOR_H
    },
    {
        id: "education",
        scene: "education",
        label: "EDUCATION",
        x: CENTER_X,
        y: BOTTOM_Y,
        width: DOOR_W,
        height: DOOR_H
    },
    {
        id: "contact",
        scene: "contact",
        label: "CONTACT",
        x: RIGHT_X,
        y: BOTTOM_Y,
        width: DOOR_W,
        height: DOOR_H
    }
];
const houseExitSpot = {
    x: HOUSE_WORLD.width / 2 - 90,
    y: HOUSE_WORLD.height - 72,
    width: 180,
    height: 48
};
const roomSpawnPoints = {
    about: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    },
    projects: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    },
    skills: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    },
    experience: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    },
    education: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    },
    contact: {
        x: HOUSE_WORLD.width / 2 - 24,
        y: 535
    }
};
const roomReturnPoints = {
    about: {
        x: LEFT_X + DOOR_W / 2,
        y: TOP_Y + DOOR_H + 22
    },
    projects: {
        x: CENTER_X + DOOR_W / 2,
        y: TOP_Y + DOOR_H + 22
    },
    skills: {
        x: RIGHT_X + DOOR_W / 2,
        y: TOP_Y + DOOR_H + 22
    },
    experience: {
        x: LEFT_X + DOOR_W / 2,
        y: BOTTOM_Y + DOOR_H + 22
    },
    education: {
        x: CENTER_X + DOOR_W / 2,
        y: BOTTOM_Y + DOOR_H + 22
    },
    contact: {
        x: RIGHT_X + DOOR_W / 2,
        y: BOTTOM_Y + DOOR_H + 22
    }
};
const roomInteractiveSpots = (scene)=>{
    if (scene === "projects") {
        return [
            {
                id: "project-0",
                x: 120,
                y: 205,
                width: 240,
                height: 150,
                label: "OPEN PROJECT 1",
                icon: "BOOK"
            },
            {
                id: "project-1",
                x: 520,
                y: 205,
                width: 240,
                height: 150,
                label: "OPEN PROJECT 2",
                icon: "BOOK"
            },
            {
                id: "project-2",
                x: 920,
                y: 205,
                width: 240,
                height: 150,
                label: "OPEN PROJECT 3",
                icon: "BOOK"
            },
            {
                id: "project-3",
                x: 520,
                y: 410,
                width: 240,
                height: 150,
                label: "OPEN PROJECT 4",
                icon: "BOOK"
            }
        ];
    }
    const map = {
        about: {
            label: "OPEN NOTEBOOK",
            icon: "BOOK"
        },
        skills: {
            label: "READ SKILL BOOK",
            icon: "BOOK"
        },
        experience: {
            label: "OPEN LOGBOOK",
            icon: "LOG"
        },
        education: {
            label: "READ DIPLOMA",
            icon: "DIPLOMA"
        },
        contact: {
            label: "USE COMPUTER",
            icon: "PC"
        },
        projects: {
            label: "OPEN PROJECT",
            icon: "BOOK"
        }
    };
    const item = map[scene];
    if (!item) return [];
    return [
        {
            id: `${scene}-desk`,
            x: 460,
            y: 240,
            width: 360,
            height: 190,
            label: item.label,
            icon: item.icon
        }
    ];
};
function houseSolids() {
    return [
        {
            x: 0,
            y: 0,
            width: HOUSE_WORLD.width,
            height: 78
        },
        {
            x: 0,
            y: 0,
            width: 34,
            height: HOUSE_WORLD.height
        },
        {
            x: HOUSE_WORLD.width - 34,
            y: 0,
            width: 34,
            height: HOUSE_WORLD.height
        },
        {
            x: 0,
            y: HOUSE_WORLD.height - 34,
            width: HOUSE_WORLD.width,
            height: 34
        }
    ];
}
function roomSolids() {
    return houseSolids();
}
}),
"[project]/davin-journey-portfolio-v8/game/maps/outside.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OUTSIDE_WORLD",
    ()=>OUTSIDE_WORLD,
    "TILE_COLS",
    ()=>TILE_COLS,
    "TILE_ROWS",
    ()=>TILE_ROWS,
    "farmCrops",
    ()=>farmCrops,
    "farmFenceSolids",
    ()=>farmFenceSolids,
    "farmField",
    ()=>farmField,
    "farmGate",
    ()=>farmGate,
    "houseBounds",
    ()=>houseBounds,
    "houseDoor",
    ()=>houseDoor,
    "outsideMap",
    ()=>outsideMap,
    "outsideSolids",
    ()=>outsideSolids,
    "roadLamps",
    ()=>roadLamps,
    "rocks",
    ()=>rocks,
    "trees",
    ()=>trees
]);
const OUTSIDE_WORLD = {
    width: 2560,
    height: 1600
};
const TILE_COLS = Math.ceil(OUTSIDE_WORLD.width / 16);
const TILE_ROWS = Math.ceil(OUTSIDE_WORLD.height / 16);
const outsideMap = Array.from({
    length: TILE_ROWS
}, ()=>Array(TILE_COLS).fill(1));
// Main road from the south toward the house.
for(let col = 0; col < TILE_COLS; col++){
    for(let row = 45; row < TILE_ROWS; row++){
        if (Math.abs(col - 80) <= 2) outsideMap[row][col] = 2;
    }
}
// Short crossroad in front of the house.
for(let row = 47; row < 53; row++){
    for(let col = 25; col < 135; col++){
        outsideMap[row][col] = 2;
    }
}
// Farm access path, connecting the road to the farm gate.
for(let row = 67; row < 71; row++){
    for(let col = 66; col <= 79; col++){
        outsideMap[row][col] = 2;
    }
}
// Small pond on the western side.
for(let row = 25; row < 41; row++){
    for(let col = 10; col < 34; col++){
        outsideMap[row][col] = 3;
    }
}
const houseBounds = {
    x: OUTSIDE_WORLD.width / 2 - 360,
    y: 430,
    width: 720,
    height: 448,
    kind: "house"
};
const houseDoor = {
    x: houseBounds.x + houseBounds.width / 2 - 38,
    y: houseBounds.y + houseBounds.height - 28,
    width: 76,
    height: 36
};
const farmField = {
    x: 680,
    y: 960,
    width: 384,
    height: 240,
    kind: "farm"
};
const farmGate = {
    x: 1048,
    y: 1072,
    width: 16,
    height: 64
};
const farmCrops = Array.from({
    length: 32
}, (_, index)=>{
    const col = index % 8;
    const row = Math.floor(index / 8);
    return {
        x: farmField.x + 20 + col * 46,
        y: farmField.y + 24 + row * 52
    };
});
const roadLamps = [
    {
        x: 1184,
        y: 900
    },
    {
        x: 1352,
        y: 900
    },
    {
        x: 1184,
        y: 1140
    },
    {
        x: 1352,
        y: 1140
    },
    {
        x: 1184,
        y: 1380
    },
    {
        x: 1352,
        y: 1380
    }
];
const rocks = [
    {
        x: 468,
        y: 1008,
        variant: 1
    },
    {
        x: 560,
        y: 1260,
        variant: 2
    },
    {
        x: 1120,
        y: 1248,
        variant: 1
    },
    {
        x: 1490,
        y: 1040,
        variant: 2
    },
    {
        x: 1540,
        y: 1340,
        variant: 1
    },
    {
        x: 420,
        y: 1400,
        variant: 2
    }
];
const trees = [
    {
        x: 80,
        y: 115,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 295,
        y: 165,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 690,
        y: 120,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 1830,
        y: 120,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 2130,
        y: 185,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 2290,
        y: 485,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 100,
        y: 1110,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 390,
        y: 1290,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 1830,
        y: 1175,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 2150,
        y: 1320,
        width: 64,
        height: 80,
        kind: "tree"
    },
    {
        x: 1500,
        y: 185,
        width: 64,
        height: 80,
        kind: "tree"
    }
];
function farmFenceSolids() {
    const x = farmField.x;
    const y = farmField.y;
    const w = farmField.width;
    const h = farmField.height;
    return [
        {
            x,
            y: y - 16,
            width: w,
            height: 16,
            kind: "solid"
        },
        {
            x,
            y: y + h,
            width: w,
            height: 16,
            kind: "solid"
        },
        {
            x: x - 16,
            y: y - 16,
            width: 16,
            height: h + 32,
            kind: "solid"
        },
        {
            x: x + w - 16,
            y: y - 16,
            width: 16,
            height: farmGate.y - (y - 16),
            kind: "solid"
        },
        {
            x: x + w - 16,
            y: farmGate.y + farmGate.height,
            width: 16,
            height: y + h + 16 - (farmGate.y + farmGate.height),
            kind: "solid"
        }
    ];
}
function outsideSolids() {
    const x = houseBounds.x;
    const y = houseBounds.y;
    const w = houseBounds.width;
    const h = houseBounds.height;
    const doorW = houseDoor.width;
    const rockSolids = rocks.map((rock)=>({
            x: rock.x + 4,
            y: rock.y + 10,
            width: 24,
            height: 18,
            kind: "solid"
        }));
    return [
        ...trees,
        ...farmFenceSolids(),
        ...rockSolids,
        {
            x,
            y,
            width: w,
            height: 30,
            kind: "solid"
        },
        {
            x,
            y,
            width: 30,
            height: h,
            kind: "solid"
        },
        {
            x: x + w - 30,
            y,
            width: 30,
            height: h,
            kind: "solid"
        },
        {
            x,
            y: y + h - 30,
            width: (w - doorW) / 2 - 8,
            height: 30,
            kind: "solid"
        },
        {
            x: x + w / 2 + doorW / 2 + 8,
            y: y + h - 30,
            width: (w - doorW) / 2 - 8,
            height: 30,
            kind: "solid"
        }
    ];
}
}),
"[project]/davin-journey-portfolio-v8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/davin-journey-portfolio-v8/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=davin-journey-portfolio-v8_1npjna2._.js.map