import express from 'express'
import { User } from '../model/user.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import multer from 'multer'

export const userRouter = express.Router()
const mult = multer()

userRouter.get("/", async(req,res)=>{
    const users = await User.find().lean()
    res.json(users)
})

userRouter.post("/register", mult.none(), async(req,res)=>{
    const {name, password, email, emailVerified} = req.body
    if(!name || !password){
        res.sendStatus(403)
        return
    }
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const user = await User.create({name, password: hash, email, emailVerified})
    res.json(user)
})

userRouter.post('/login', mult.none(), async (req, res) => {
    const {name, password, email, emailVerified} = req.body
    if(!name || !password) {
        res.sendStatus(403)
        return
    }
    const user = await User.findOne({name}).lean()
    if(user === null) {
        res.status(401).send('User not found')
        return
    }
    const passwordMatches = await bcrypt.compare(password, user.password) 
    if(!passwordMatches){
        res.status(401).send('Wrong password')
        return
    }
    const token = jwt.sign({name}, process.env.JWT_SECRET)
    console.log('test');
    res.json({ status: "ok", token: token })
})