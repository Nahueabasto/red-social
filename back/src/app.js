import express from "express";
import morgan from "morgan";

//import router from "./routes/auth.route.js"
import authRoutes from "./routes/authRoute.js";

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api", authRoutes)

export default app; 

