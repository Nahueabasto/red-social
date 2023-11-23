

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// const uri = "mongodb+srv://nahu_78:nF2ZcrVN2H7dMhdA@cluster0.ilq3eg8.mongodb.net/?retryWrites=true&w=majority"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}
