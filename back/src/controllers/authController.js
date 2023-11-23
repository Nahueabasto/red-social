import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    //console.log(req.body); //datos que el cliente envie
    const {email, password, username} = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10) // para encriptar la contraseña
    const newUser = new User({ //crea usario adentro de un obj
        username,
        email,
        password: passwordHash,
    })
    
    const userSaved = await newUser.save() //lo guarda en la base de datos
    res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
    })
  } catch (error){
    console.log(error)
  }
}

export const login = (req, res) => res.send("login");

