import { Router } from "express";
import { createProfile, getProfiles, updatedProfile, getProfile } from "../controllers/completeProfileController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { completeProfileSchema } from "../schemas/completeProfile.schema.js";

const router = Router();

router.post("/createProfile", authRequired, validateSchema(completeProfileSchema), createProfile);
router.get("/getProfiles", authRequired, getProfiles);
router.put("/updatedProfile", authRequired, updatedProfile)
router.get("/getProfile", authRequired, getProfile); getProfile
//router.delete("/tasks/:id", authRequired, deleteTasks)
// router.put("/tasks/:id", authRequired, updateTasks)


export default router;