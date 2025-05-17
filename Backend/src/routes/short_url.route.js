import express from "express";
import { shortUrlController } from "../controller/short_url.controller.js";
const router = express.Router();


router.post("/", shortUrlController);

export default router;