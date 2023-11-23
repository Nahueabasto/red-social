import mongoose from "mongoose";

const taskShema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
})

export default mongoose.model("Task", taskShema);