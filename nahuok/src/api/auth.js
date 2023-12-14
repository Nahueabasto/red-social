import axios from "./axios";

// const API = "http://localhost:3000/api"

export const registerRequest = user => axios.post(`/register`, user);

// export const LoginRequest = user => axios.post(`/login`, user);
export const loginRequest = user => {
    const url = "/login";
    const data = user;
  
    return axios.post(url, data, { withCredentials: true });
  };

export const verifyTokenRequest = () => axios.get("/verify")

export const deleteProfileRequest = (id) => axios.delete(`/deleteProfile/${id}`)

//export const LogoutRequest = () => axios.get("/verify")

//esperamos que el back nos confirme si el usuario esta autenticado o no