import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "Guiando Vidas",
    hora: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API do Guiando Vidas rodando em http://localhost:${PORT}`);
});
