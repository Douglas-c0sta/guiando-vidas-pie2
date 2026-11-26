import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";

const app = express();

app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

app.get("/api/health", async (req, res) => {
  try {
    const conexao = await pool.getConnection();
    conexao.release();

    res.json({
      status: "ok",
      banco: "ok",
      app: "Guiando Vidas",
      hora: new Date().toISOString()
    });
  } catch (erro) {
    res.status(500).json({
      status: "erro",
      banco: "fora do ar",
      mensagem: erro.message
    });
  }
});

app.get("/api/alunos", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT
        a.id_aluno,
        a.nome,
        t.nome AS turma
      FROM aluno a
      JOIN turma t ON a.id_turma = t.id_turma
    `);

    res.json(rows);
  } catch (erro) {
    res.status(500).json({
      erro: erro.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API do Guiando Vidas rodando em http://localhost:${PORT}`);
});