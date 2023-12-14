import axios from "./axios";

// const API = "http://localhost:3000/api"

export const registerRequest = user => axios.post(`/register`, user, { withCredentials: true });

export const LoginRequest = user => axios.post(`/login`, user, { withCredentials: true });

export const verifyTokenRequest = () => axios.get("/verify", { withCredentials: true })

export const deleteProfileRequest = (id) => axios.delete(`/deleteProfile/${id}`, { withCredentials: true })

export const LogoutRequest = () => axios.get("/verify", { withCredentials: true })

//esperamos que el back nos confirme si el usuario esta autenticado o no

// import axios from "./axios";

// export const registerRequest = user => {
//   const url = "/register";
//   const data = user;

//   return axios.post(url, data, { withCredentials: true });
// };

// export const loginRequest = user => {
//   const url = "/login";
//   const data = user;

//   return axios.post(url, data, { withCredentials: true });
// };

// export const verifyTokenRequest = () => {
//   const url = "/verify";

//   return axios.get(url, { withCredentials: true });
// };

// export const deleteProfileRequest = id => {
//   const url = `/deleteProfile/${id}`;

//   return axios.delete(url, { withCredentials: true });
// };