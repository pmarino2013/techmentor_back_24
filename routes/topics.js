import { Router } from "express";
import Topicos from "../models/topic.js";

const router = Router();

router.get("/", async (req, res) => {
  const topics = await Topicos.find();

  res.status(200).json({
    topics,
  });
});

export default router;
