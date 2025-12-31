# 🚀 MERN-Kamo

**Note:** ⚠️ Running `npm i mern-kamo` alone will **not work as a CLI**.  
You need to **install it globally** to use the command directly:

```bash

💻 Installation

-> Global (Recommended for CLI)
npm i -g mern-kamo
mern-kamo

-> Local (Optional)
npm i mern-kamo
npx mern-kamo


MERN-Kamo is a powerful CLI tool that instantly generates a MERN stack boilerplate with both backend and frontend ready-to-use.
🟢 Backend: Express + MongoDB + JWT + Cors 
⚛️ Frontend: React + Vite
🔄 Ready-to-use folder structure (backend & frontend)
🚀 Instantly setup a full MERN project


📦 Features

⚡ Scaffold a full MERN project with a single command
🛠 Backend setup with Express, MongoDB, CORS, JWT, Nodemon
⚛️ Frontend setup with React Using Vite
🔄 Nodemon support for hot-reload in backend
📁 Well-organized folder structure


⚙️ How It Works

Backend Folder Structure is generated:
backend/
├── index.js          # Express server entry
├── .env              # Environment variables
├── models/           # Database models
├── routes/           # Express routes
└── controllers/      # Route controllers

Backend dependencies: express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, nodemon (dev)

Backend package.json scripts:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

Frontend Folder Structure is generated (Vite + React):
frontend/
├── index.html
├── package.json
├── src/
│   ├── main.jsx
│   └── App.jsx
└── vite.config.js

Frontend dependencies: react, react-dom, axios, react-router-dom, react-toastify

🛜 Backend
Start backend server:
cd backend
npm run dev

Server runs on: http://localhost:5000

💻Frontend
Start frontend server:
cd frontend
npm run dev

Frontend runs on Vite default: http://localhost:5173


📁 Full Folder Structure
mern-kamo-project/
├── backend/
│   ├── index.js
│   ├── .env
│   ├── models/
│   ├── routes/
│   └── controllers/
└── frontend/
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── main.jsx
    │   └── App.jsx
    └── vite.config.js

📖 License

Apache-2.0 License