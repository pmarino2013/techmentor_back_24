import { Router } from "express";
import { topicsGet } from "../controllers/topics.js";

const router = Router();

router.get("/", topicsGet);

export default router;
