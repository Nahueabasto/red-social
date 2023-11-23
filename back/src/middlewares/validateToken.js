import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
// req: me da info de la peticion. res: me da metodos para enviar en una respueta. next: significa que en lugar que retorne una respuesta al cliente, le digo continua porque hay otra funcion despues de esta, que seria la ruta real. Si hay un token continua, si no hay un token, termina aqui, responde un mensaje no estas autorizado.
export const authRequired = (req, res, next) => { 
    const { token } = req.cookies
    if(!token) return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        // console.log(user) //si el usuario, significa que no salto el error, significa que el token es valido entonces el usuario lo vamos a ver por consola de momento.
        req.user = user // del usuario que estoy decodificando voy a guardar todo dentro de req.user.
        //cuando llegue al req de la ruta de profile ya va a estar guardado, vamos a profile a ver el req.user....
        next();
    })
};