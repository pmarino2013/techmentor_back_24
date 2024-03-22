import { request, response } from "express";
import Topicos from "../models/topic.js";

const topicsGet = async (req = request, res = response) => {
  const topics = await Topicos.find();

  res.status(200).json({
    topics,
  });
};

export { topicsGet };
