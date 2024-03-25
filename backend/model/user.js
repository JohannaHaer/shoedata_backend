import mongoose, {Schema} from 'mongoose'

const userModel = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    emailVerified: {type: Boolean, required: true, default: false}
})

export const User = mongoose.model('User', userModel)