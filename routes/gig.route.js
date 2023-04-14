import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs
} from "../controllers/gig.controller.js";

const router = express.Router();

router.post("/", createGig);
router.delete("/:id", deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;