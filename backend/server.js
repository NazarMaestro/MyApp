// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // чтобы React мог обращаться

// API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Привет из Express!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
