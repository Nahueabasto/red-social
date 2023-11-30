import User from "../models/user.model.js";
import Profile from '../models/profile.model.js';


// export const createProfile = async (req, res) => {
//   const { name, age, location } = req.body;
//   console.log(req.user)
//     // Crear el perfil asociado al usuario
//     const newProfile = new Profile({
//       user: req.user.id,
//       name,
//       age,
//       location
//     });

//     // Guardar el perfil en la base de datos
//     const profileSaved = await newProfile.save();
//     res.json(profileSaved);
// };

// export const createProfile = async (req, res) => {
//   const { name, age, location, images } = req.body;

//   try {
//     // Verificar si ya existe un perfil para el usuario
//     const existingProfile = await Profile.findOne({ user: req.user.id });

//     if (existingProfile) {
//       // Si ya existe un perfil, actualiza sus datos
//       existingProfile.name = name;
//       existingProfile.age = age;
//       existingProfile.location = location;
//       existingProfile.images = images;

//       // Guarda los cambios en la base de datos
//       const updatedProfile = await existingProfile.save();
//       return res.json(updatedProfile);
//     } else {
//       // Si no existe un perfil, crea uno nuevo
//       const newProfile = new Profile({
//         user: req.user.id,
//         name,
//         age,
//         location,
//         images,
//       });

//       // Guarda el nuevo perfil en la base de datos
//       const profileSaved = await newProfile.save();
//       return res.json(profileSaved);
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
export const createProfile = async (req, res) => {
  const { name, age, location, images } = req.body;

  try {
    // Verificar si ya existe un perfil para el usuario
    const existingProfile = await Profile.findOne({ user: req.user.id });

    if (existingProfile) {
      // Si ya existe un perfil, responde con un mensaje de error
      return res.status(400).json({ message: "El usuario ya tiene un perfil existente." });
    }

    // Si no existe un perfil, crea uno nuevo
    const newProfile = new Profile({
      user: req.user.id,
      name,
      age,
      location,
      images,
    });

    // Guarda el nuevo perfil en la base de datos
    const profileSaved = await newProfile.save();
    return res.json(profileSaved);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};


//para traerme el profile del user registrado
export const getProfiles = async (req, res) => {
  const profiles = await Profile.find({
    user: req.user.id
  }).populate('user') //en lugar de devolverme user como un id, quiero que busques la consulta de un usuario y traigas todos sus datos y lo coloques alli.
  console.log(req.user)
  res.json(profiles);
};


export const updatedProfile = async (req, res) => {
  const { name, age, location, images } = req.body;

  try {
    // Verificar si existe un perfil para el usuario
    const existingProfile = await Profile.findOne({ user: req.user.id });

    if (!existingProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Modificar los campos necesarios del perfil
    if (name) existingProfile.name = name;
    if (age) existingProfile.age = age;
    if (location) existingProfile.location = location;
    if (images) existingProfile.images = images;

    // Guardar los cambios en la base de datos
    const updatedProfile = await existingProfile.save();

    return res.json(updatedProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getProfile = async (req, res) => {
  
  const perfil = await Profile.findById(req.params.id);
  if(!perfil) return res.status(404).json({ message: "Profile not found" })
};

