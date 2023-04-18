import User from "../models/user.model.js"
import createError from "../utils/createError.js";

export const findSingleUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send(`User with id ${userId} not found`);
    }
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)
  const ownUser = req.session.currentUser?._id || null
  try {
    if(ownUser === req.params.id){
      const newUser = await User.findByIdAndUpdate(req.params.id, req.body.data, { new: true });
      const {password,...info} = newUser._doc
      req.session.currentUser = info
       res.status(200).send(info)
     }else{
       return res.status(403).send("You can update only your account")
     }
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async(req,res,next)=>{
  const user = await User.findById(req.params.id)
  try {
    if(req.userId === req.params.id){
      const newUser = await User.findByIdAndDelete(req.params.id, req.body, { new: true });
       res.status(200).send(newUser)
     }else{
       return next(createError(404,"You can delete only your account"))
     }
  } catch (err) {
    next(err);
  }
}


export const findUserByUserName = async (req, res, next) => {
  const userName = req.params.userName;
  try {
    const user = await User.findOne({ userName: userName });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send(`User with userName ${userName} not found`);
    }
  } catch (err) {
    next(err);
  }
};