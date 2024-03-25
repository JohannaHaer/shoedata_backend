import express from 'express'
import multer from 'multer'
import { Shoe } from '../model/shoe.js'

const mult = multer()
export const shoeRouter = express.Router()




shoeRouter.post("/", mult.none() , async (req, res) => {
    const shoeInputData = req.body
    const shoe = new Shoe(shoeInputData)
    const saveResult = await shoe.save()
    res.status(201).json(saveResult)
})


shoeRouter.get("/", async (req, res) => {
    const shoes = await Shoe.find().lean()
    res.json(shoes)
})