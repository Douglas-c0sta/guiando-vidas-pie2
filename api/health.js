export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    app: "Guiando Vidas",
    hora: new Date().toISOString()
  });
}