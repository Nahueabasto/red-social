import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoute.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import completeProfile from "./routes/completeProfile.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)
app.use("/api", completeProfile)

export default app; 

