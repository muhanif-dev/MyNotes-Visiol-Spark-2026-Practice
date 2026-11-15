import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mynotes-frontend-theta.vercel.app"
  ]
}));

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "MyNotes server is runninggggg..."
    })
});

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
    console.log(`The Server is running On http://localhost:${PORT}`);
});

}

startServer();
