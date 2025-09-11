// server.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routes/workout");

dotenv.config();

const app = express();

// ✅ Allow all origins (no CORS errors)
app.use(cors({
  origin: "*"
}));

// Middleware to parse JSON
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the Application." });
});

// API routes
app.use("/api/workout", workoutRoutes);

// DB connection + server start
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT} & connected to DB`);
    });
  })
  .catch((error) => console.error("❌ DB connection error:", error));
