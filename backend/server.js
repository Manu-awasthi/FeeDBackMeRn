import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/feedbacks", feedbackRoutes);

app.get("/", (req, res) => res.send("API running..."));
const port = process.env.PORT || 500;

app.listen(port , ()=>{
    console.log('server is listening at port');
})