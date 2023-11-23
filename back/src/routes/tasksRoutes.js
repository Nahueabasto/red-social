import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTasks, deleteTasks, updateTasks } from "../controllers/tasksController.js";

const router = Router()

// es solo para usuarios auntenticados
router.get("/tasks", authRequired, getTasks)
router.get("/tasks/:id", authRequired, getTask)
router.post("/tasks", authRequired, createTasks)
router.delete("/tasks/:id", authRequired, deleteTasks)
router.put("/tasks/:id", authRequired, updateTasks)

export default router;