import { Router } from "express";
import { login, register, logout, profile } from "../controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router()

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout)
router.get("/profile", authRequired, profile) // cada ruta que se quiera proteger se puede usar authRequired antes de la funcion y el resto es lo mismo 

export default router;