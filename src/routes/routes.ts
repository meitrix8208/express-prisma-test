import { Router } from "express";
import { getUsers } from "../services/controllers";
const router = Router();

router.get("/users",getUsers );


export default router;