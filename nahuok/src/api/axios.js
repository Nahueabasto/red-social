import axios from "axios";

//esto nos va a permitir que el dominio base donde va a consultar
const instancia = axios.create({
    baseURL: "https://back-red-social.vercel.app",
    withCredentials: true,
    timeout: 5000
})

export default instancia;

// import axios from "axios";

// let baseURL = "http://localhost:3000";  // URL por defecto para entorno de desarrollo

// // Verifica si el hostname es localhost, y si es así, utiliza la URL de desarrollo
// if (window.location.hostname === 'localhost') {
//     baseURL = 'http://localhost:3000';
// } else {
//     // Si no es localhost, asume que está en producción y utiliza la URL de producción
//     baseURL = 'https://back-red-social.vercel.app/';
// }

// // Crea una instancia de axios con la URL correspondiente
// const instancia = axios.create({
//     baseURL: baseURL,
//     withCredentials: true
// });

// export default instancia;