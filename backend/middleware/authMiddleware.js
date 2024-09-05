import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async(req, res, next)=>{
    let token
    //read the token from the jwt cookie
    token = req.cookies.jwt
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select("-password")
            next()
        } catch (error) {
            res.status(401)
            throw new Error(error)
        }
    }else{
        res.status(401)
            throw new Error("Not authorised, no token")
    }
})

const authoriseAdmin = (req, res, next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).send("Not authorised as an admin")
    }
}
export {authenticate, authoriseAdmin}