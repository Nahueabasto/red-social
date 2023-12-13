import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

//console.log(TOKEN_SECRET)

export const register = async (req, res) => {
    //console.log(req.body); //datos que el cliente envie
    const {email, password, username} = req.body;
  try {
   const userFoud = await User.findOne({email})
   if(userFoud) return res.status(400).json(["The email is already use"]);

   const usernameFound = await User.findOne({username})
   if(usernameFound) return res.status(400).json(["The Username is already use"]);

    const passwordHash = await bcrypt.hash(password, 10) // para encriptar la contraseña
    const newUser = new User({ //crea usario adentro de un obj
        username,
        email,
        password: passwordHash,
    })
    
    const userSaved = await newUser.save() //lo guarda en la base de datos
    const token = await createAccessToken({id: userSaved._id})

    res.cookie("token", token);
    // res.json({
    //   menssage: "User created successfully"
    // })
    //
    res.json({ //para que la interfas de front lo use
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
    })
    //
  } catch (error){
    res.status(500).json({ menssage: error.menssage });
  }
}


// export const login = async (req, res) => {
  
//   const { email, password } = req.body;
// try {

//   const userFound = await User.findOne({email})
//   if(!userFound) return res.status(400).json([ "Invalid email" ]);

//   const isMatch = await bcrypt.compare(password, userFound.password) //esto me va a devolver un true o false
//   if(!isMatch) return res.status(400).json([ "Incorrect password" ])

//   const token = await createAccessToken({id: userFound._id})

//   res.cookie("token", token);
//   res.json({
//       id: userFound._id,
//       username: userFound.username,
//       email: userFound.email,
//       createdAt: userFound.createdAt,
//       updatedAt: userFound.updatedAt,
//   })
//   //
// } catch (error){
//   res.status(500).json({ menssage: error.menssage });
// }
// }
export const login = async (req, res) => {
  
  const { username, password } = req.body;
try {

  const userFound = await User.findOne({username})
  if(!userFound) return res.status(400).json([ "Invalid username" ]);

  const isMatch = await bcrypt.compare(password, userFound.password) //esto me va a devolver un true o false
  if(!isMatch) return res.status(400).json([ "Incorrect password" ])

  const token = await createAccessToken({id: userFound._id})

  res.cookie("token", token, {
  //console.log(token)
  sameSite: 'none',
  secure: true
  })
  res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
  })
  //
} catch (error){
  res.status(500).json({ menssage: error.menssage });
}
}

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0)
  })
  return res.sendStatus(200);
}


export const profile = async (req, res) => {
  // console.log(req.user) // hice un comentario en referencia a esta linea en el archivo validateToken
  const userFoud = await User.findById(req.user.id) //esto me va a dar los datos completos del usuario.
  if(!userFoud) return res.status(400).json({ message: "User not found" });

  return res.json({
      id: userFoud._id,
      username: userFoud.username,
      email: userFoud.email,
      createdAt: userFoud.createdAt,
      updatedAt: userFoud.updatedAt,
  })
}


//si el usuario ya trajo su token vamos a pasarlo por jwt
export const verifyToken = async (req, res) => { 
  const {token} = req.cookies // de req.cookies voy a extraer de ahi los cookies
  if(!token) return res.status(401).json({ menssage: "Unauthorized" })

  //si hay un token que validar vamos a verificarlo:
  jwt.verify(token, TOKEN_SECRET,  async (err, user) => {
    if(err) return res.status(401).json({ menssage: "Unauthorized" })
     
  const userFoud = await User.findById(user.id);
   //quiero que busquen del usuario el id que esta adentro del token
if(!userFoud) return res.status(401).json({ menssage: "Unauthorized" })//puede que el token sea valido pero el user no existe 

return res.json({ //si encuentro un user:
  id: userFoud._id,
  username: userFoud.username,
  email: userFoud.email
})
  })
} 


