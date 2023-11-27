import axios from "axios";

const API = "http://localhost:3000/api"

export const registerRequest = user => axios.post(`${API}/register`, user);

export const LoginRequest = user => axios.post(`${API}/login`, user);