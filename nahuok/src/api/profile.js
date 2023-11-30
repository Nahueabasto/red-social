import axios from "./axios";

export const getProfilesRequest = () => axios.get("/getProfiles") 

export const createProfileRequest = (profile) => axios.post("/createProfile", profile)

export const updatedProfileRequest = () => axios.put("/updatedProfile")

export const getProfileRequest = (id) => axios.get(`/getProfile/${id}`) //va a servir para traerme los perfiles, NO SE SI VAMOS A TENER QUE MODIFICAR LA RUTA