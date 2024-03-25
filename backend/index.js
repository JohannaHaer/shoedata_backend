import express from 'express'
import multer from 'multer'
import cors from 'cors'
import "dotenv/config"
import { shoeRouter } from './controller/shoes.js'
import mongoose from 'mongoose'
import { userRouter } from './controller/users.js'


const PORT = 3005

const app = express()
const mult = multer()

await mongoose.connect(process.env.MONGODB_URI)

app.use(cors({ origin: "http://localhost:5174"}))
app.use('/shoes', shoeRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`)})