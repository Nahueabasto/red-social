// import express from "express";
// import morgan from "morgan";
// import cookieParser from "cookie-parser"
// import authRoutes from "./routes/authRoute.js";
// import tasksRoutes from "./routes/tasksRoutes.js";
// import completeProfile from "./routes/completeProfile.js";
// import cors from "cors"

// const app = express()

// app.use(morgan("dev"))
// app.use(express.json())
// app.use(cookieParser());

// app.use(cors({
//     origin: ["http://localhost:5173", "https://red-social-tc3n.vercel.app"], // en este caso le decimos que solo ese es puede comunicar
//     credentials: true // para permitir ver tmb las cookies
// })); //quiero permitir que todos los dominios se puedan comunicar en este servidor.
// app.use("/api", authRoutes)
// app.use("/api", tasksRoutes)
// app.use("/api", completeProfile)

// export default app; 

// app.js
// app.js
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';
import tasksRoutes from './routes/tasksRoutes.js';
import completeProfile from './routes/completeProfile.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Definir opciones de CORS
const corsOptions = {
  origin: ["http://localhost:5173", "https://red-social-8ysd.vercel.app"],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

// Crear middleware de CORS
const corsMiddleware = cors(corsOptions);

// Aplicar middleware de CORS
app.use(corsMiddleware);

// Rutas
app.use('/api', authRoutes);
app.use('/api', tasksRoutes);
app.use('/api', completeProfile);

// Manejo de otras rutas o configuraciones...

export default app;
