import { Router } from "express";
import { login, register, logout, profile, verifyToken } from "../controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";


const router = Router()

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout)

//lo que quuiero hacer que cuando un user, hace una peticion o carga la pagina quiero que valide enviando su token al back y si el toquen lo resive digamos osea 
router.get("/verify", verifyToken)

router.get("/profile", authRequired, profile) // cada ruta que se quiera proteger se puede usar authRequired antes de la funcion y el resto es lo mismo 


export default router;

