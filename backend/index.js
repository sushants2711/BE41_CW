import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import movieRouter from "./router/movie.route.js";

dotenv.config();

const PORT = process.env.PORT || 1000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/movies", movieRouter);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});