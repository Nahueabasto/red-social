import axios from "./axios";

export const getProfilesRequest = () => axios.get("/getProfiles", { withCredentials: true }) 

export const createProfileRequest = (profile) => axios.post("/createProfile", profile, { withCredentials: true })

export const updatedProfileRequest = (id, profile) => axios.put(`/updatedProfile/${id}`, profile, { withCredentials: true })

export const getProfileRequest = (id) => axios.get(`/getProfile/${id}`, { withCredentials: true }) //va a servir para traerme los perfiles, NO SE SI VAMOS A TENER QUE MODIFICAR LA RUTA

// import axios from "./axios";

// export const getProfilesRequest = () => {
//   const url = "/getProfiles";

//   return axios.get(url, { withCredentials: true });
// };

// export const createProfileRequest = profile => {
//   const url = "/createProfile";
//   const data = profile;

//   return axios.post(url, data, { withCredentials: true });
// };

// export const updatedProfileRequest = (id, profile) => {
//   const url = `/updatedProfile/${id}`;
//   const data = profile;

//   return axios.put(url, data, { withCredentials: true });
// };

// export const getProfileRequest = id => {
//   const url = `/getProfile/${id}`;

//   return axios.get(url, { withCredentials: true });
// };




