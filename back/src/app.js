import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoute.js";
import tasksRoutes from "./routes/tasksRoutes.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)

export default app; 

