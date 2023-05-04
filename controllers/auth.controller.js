import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import Token from "../models/token.model.js"

export const register = async (req,res)=>{
    try{
        
        const hash = bcrypt.hashSync(req.body.password,5)
        const newUser = new User({
            ...req.body,
            password:hash,
            
        });

        await newUser.save();

        //req.session["currentUser"] = newUser;
        res.status(201).send("User has been created")
    } catch(err){
        res.send(err)
    }
}


export const login = async (req,res)=>{
    
    try{
        const user = await User.findOne({userName:req.body.userName});
        if(!user){
            return res.status(404).send("User not found")
        }

        const isCorrect = bcrypt.compareSync(req.body.password,user.password);
        if(!isCorrect) return res.status(400).send("wrong password or username")
    

        const {password,...info} = user._doc
        req.session.currentUser = info

        console.log(info)
        res.json(info)
    } catch(err){
        res.status(500).send("Something went wrong")
    }
}


export const logout = async (req,res)=>{
    try{
        req.session.destroy();
        res.status(200).send("User logged out")
    } catch(err){
        res.status(500).send("Something went wrong")
    }
}

export const userProfile = async(req,res)=>{
    const currentUser = req.session.currentUser;
     if (!currentUser) {
       res.status(404).send("user not logged in");
       return;
     }
     res.send(currentUser);
  
  }
  export const findAllUsers = async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      res.send(err);
      next(err);        
    }
  };
  
