import Gig from "../models/gig.model.js";
import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  try {
    const newGig = new Gig(req.body);
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "Gig not found"));
    }

    if (gig.userId !== req.userId) {
      return next(createError(403, "You can delete only your gig!"));
    }

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "Gig not found"));
    }
    res.status(200).json(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  try {
    const gigs = await Gig.find();
    res.status(200).json(gigs);
  } catch (err) {
    next(err);
  }
};

export const getGigsByUserName = async (req, res, next) => {
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName: userName });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const gigs = await Gig.find({ userName:userName });
    console.log(gigs)
    res.status(200).json(gigs);
  } catch (err) {
    next(err);
  }
};