import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  getGigsByUserName,
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", createGig);
router.delete("/:id", deleteGig);
router.get("/:id", getGig);
router.get("/", getGigs);
router.get("/user/:userName", getGigsByUserName);

export default router;