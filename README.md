# DAVIN'S JOURNEY - Pixel RPG Portfolio

An interactive portfolio built as a small top-down pixel RPG with Next.js, TypeScript, React, and HTML5 Canvas.

## Current gameplay

- Press ENTER to start.
- Move with WASD or arrow keys.
- Use the mouse wheel or `+` / `-` to zoom.
- Press `0` to reset zoom to 100%.
- Explore the outside area and enter the house.
- The house contains separate doors for About, Projects, Skills, Experience, Education, and Contact.
- Each room has an interactive desk/book/computer. Press E when the interaction prompt appears.
- Leaving a room returns the player to the matching doorway in the hall, rather than always returning to the main door.
- The Projects room contains four project stations. Each opens a project card with GitHub and optional live-demo links.
- Press ESC inside a portfolio room to return to that room's doorway in the hall. Press ESC in the hall to go outside.

## Where to edit portfolio content

Edit `game/data/portfolio.ts` to change:

- name, role, university, GPA, email, GitHub, LinkedIn
- project titles, descriptions, stacks, GitHub links, live demos
- skills
- experience entries

## Main architecture

- `components/` - React UI and the canvas host.
- `game/engine/` - input, game loop, camera, renderer, collision.
- `game/entities/` - game entities such as the player.
- `game/maps/` - world and room data.
- `public/sprites/` - pixel-art assets.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
