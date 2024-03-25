import mongoose, {Schema} from 'mongoose'

const shoeModel = new Schema({
    model: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
        min: 10,
        max: 70,
        default: 42,
    },
})

export const Shoe = mongoose.model('Shoe', shoeModel)