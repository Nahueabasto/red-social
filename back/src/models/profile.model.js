import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
    },
    location: {
        type: String,
        trim: true,
    },
    images: [{
        type: String, // Puedes almacenar las URL de las imágenes o utilizar un esquema separado para las imágenes
    }],
    // Otros campos de perfil que desees agregar
}, {
    timestamps: true
});

export default mongoose.model("Profile", profileSchema);
