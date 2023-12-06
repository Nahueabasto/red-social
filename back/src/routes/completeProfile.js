import { Router } from "express";
import { createProfile, getProfiles, updatedProfile, getProfile, deleteProfile, getUser } from "../controllers/completeProfileController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { completeProfileSchema } from "../schemas/completeProfile.schema.js";

const router = Router();

router.post("/createProfile", authRequired, validateSchema(completeProfileSchema), createProfile);
router.get("/getProfiles", authRequired, getProfiles);
router.put("/updatedProfile/:id", authRequired, updatedProfile)
router.get("/getUser/:id", authRequired, getUser); getUser
router.get("/getProfile/:id", authRequired, getProfile); getProfile
router.delete("/deleteProfile/:id", authRequired, deleteProfile); deleteProfile



export default router;