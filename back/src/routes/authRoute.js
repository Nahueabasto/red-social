import { Router } from "express";
import { login, register, logout, profile } from "../controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout)
router.get("/profile", authRequired, profile) // cada ruta que se quiera proteger se puede usar authRequired antes de la funcion y el resto es lo mismo 

export default router;