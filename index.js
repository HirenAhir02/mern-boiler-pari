#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Helper function
const run = (cmd, cwd = process.cwd()) => {
  execSync(cmd, {
    cwd,
    stdio: "inherit",
    shell: true,
  });
};

try {
  console.log("\n🚀 Creating MERN Boilerplate (Vite + Nodemon)\n");

  const root = process.cwd();
  const backendPath = path.join(root, "backend");
  const frontendPath = path.join(root, "frontend");

  /* ========= SAFETY ========= */
  if (fs.existsSync(backendPath) || fs.existsSync(frontendPath)) {
    console.log("❌ backend or frontend already exists");
    process.exit(1);
  }

  /* ========= BACKEND ========= */
  console.log("📦 Backend...\n");

  fs.mkdirSync(backendPath);
  run("npm init -y", backendPath);

  run(
    "npm install express mongoose bcryptjs jsonwebtoken cors dotenv",
    backendPath
  );
  run("npm install -D nodemon", backendPath);

  fs.writeFileSync(
    path.join(backendPath, "index.js"),
`const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Backend running 🚀"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server started")
);
`
  );

  fs.writeFileSync(
    path.join(backendPath, ".env"),
    "PORT='5000'\nMONGO_URI=\nJWT_SECRET=\n"
  );

  ["models", "routes", "controllers"].forEach(d =>
    fs.mkdirSync(path.join(backendPath, d))
  );

  const backendPkgPath = path.join(backendPath, "package.json");
  const backendPkg = JSON.parse(fs.readFileSync(backendPkgPath));

  backendPkg.scripts = {
    start: "node index.js",
    dev: "nodemon index.js",
  };

  fs.writeFileSync(
    backendPkgPath,
    JSON.stringify(backendPkg, null, 2)
  );

  /* ========= FRONTEND ========= */
  console.log("\n⚡ Frontend (Vite + React default)...\n");

  // ✅ Only create Vite + React project, no extra libraries
  run("npm create vite@latest frontend -- --template react", root);

  console.log("\n✅ DONE!\n");
  console.log("👉 cd backend && npm run dev");
  console.log("👉 cd frontend && npm run dev\n");

} catch (err) {
  console.error("❌ Error:", err.message);
  process.exit(1);
}
