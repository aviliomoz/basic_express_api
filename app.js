import { resolve } from "node:path";
import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.disable("x-powered-by");
app.use(json());
app.use(cors());

// Index page
app.get("/", (req, res) => {
  res.status(200).sendFile(resolve("views/index.html"));
});

// API routes
app.get("/x", (req, res) => {
  res.json({ok: true})
})

// Not found page
app.use((req, res) => {
  res.status(200).sendFile(resolve("views/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server (node) listening on port: http://localhost:${PORT}`);
});
