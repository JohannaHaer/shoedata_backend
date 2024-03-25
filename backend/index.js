import express from 'express'
import multer from 'multer'
import cors from 'cors'
import { Shoe } from './model/shoe.js'
import mongoose from 'mongoose'

const PORT = 3005
const app = express()
const mult = multer()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors({origin: 'http://localhost:5175'}))

app.post('/shoes', mult.none(), async (req, res) => {
    const shoeInputData = req.body
    const newShoe = new Shoe(shoeInputData)
    console.log({newShoe});
    await newShoe.save()
    res.send()
})

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})