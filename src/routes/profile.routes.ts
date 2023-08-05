import { Router } from "express";
import {
  getProfile,
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/post.controllers";

const router = Router();
router.get("/profiles", getProfiles);
router.get("/profiles/:id", getProfile);
router.post("/profiles", createProfile);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

export default router;