// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
// Используем порт Render
const PORT = process.env.PORT || 5000;

app.use(cors()); // чтобы React мог обращаться
app.use(express.json());

// Изменённый API endpoint
app.get("/api/greet", (req, res) => {
  res.json({ message: "Привет из Express!" });
});

// Корневой маршрут для проверки
app.get("/", (req, res) => {
  res.send("Сервер работает!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
