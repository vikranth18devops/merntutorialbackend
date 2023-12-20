import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types

const AarvikSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
      
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    remarks:{
        type: String,
        default: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
export default model('aarvik', AarvikSchema);