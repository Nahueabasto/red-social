import axios from "axios";

//esto nos va a permitir que el dominio base donde va a consultar
const instancia = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
})

export default instancia;