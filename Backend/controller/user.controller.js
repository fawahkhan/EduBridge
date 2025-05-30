import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup= async (req,res)=>{
    try {
        const {fullname,phoneNumber,password }=req.body;
        const user= await User.findOne({phoneNumber})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const hashPassword = await bcryptjs.hash(password,10);

        const createdUser=new User({
            fullname: fullname,
            phoneNumber: phoneNumber,
            password: hashPassword,
        })
        await createdUser.save();
        res.status(201).json({message:"User created successfully" , user:{
            _id: createdUser._id,
            fullname:createdUser.fullname,
            phoneNumber:createdUser.phoneNumber,
        }})
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal server error"})
        
    }
};

export const login=async (req,res)=>{
    try {
        const {phoneNumber,password}=req.body;
        const user = await User.findOne({phoneNumber});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login Successfull",user:{
                _id:user._id,
                fullname:user.fullname,
                phoneNumber:user.phoneNumber
            }})
        }
    } catch (error) {
        console.log("Error", + error.message)
        res.status(500).json({message:"Internal server error"})
    }
}