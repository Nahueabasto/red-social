import axios from "./axios";

// const API = "http://localhost:3000/api"

export const registerRequest = user => axios.post(`/register`, user);

export const LoginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get("/verify")

//export const LogoutRequest = () => axios.get("/verify")

//esperamos que el back nos confirme si el usuario esta autenticado o no