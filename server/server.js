import express from "express";
const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "MyNotes server is running..."
    })
});
app.listen(PORT, () => {
    console.log(`The Server is running On http://localhost:${PORT}`);
});

// const express = require("express");

// const app = express();

// const PORT = 5000;

// // Middleware
// app.use(express.json());

// // Health Check API
// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "MyNotes backend is running successfully!",
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
