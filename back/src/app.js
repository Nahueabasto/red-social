import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoute.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import completeProfile from "./routes/completeProfile.js";
import cors from "cors"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173", // en este caso le decimos que solo ese es puede comunicar
    credentials: true // para permitir ver tmb las cookies
})); //quiero permitir que todos los dominios se puedan comunicar en este servidor.
app.use("/api", authRoutes)
app.use("/api", tasksRoutes)
app.use("/api", completeProfile)

export default app; 

