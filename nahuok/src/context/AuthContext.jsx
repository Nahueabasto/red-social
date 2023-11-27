import { createContext, useState, useContext } from "react";
import { registerRequest, LoginRequest } from "../api/auth";


export const AuthContext = createContext();

export const useAuth = () => { // el useAuth nos trae todos los datos que tenemos dentro de signup, user, de abajo
   const context = useContext(AuthContext)
   if(!context){
    throw new Error("useAuth must be used within an AuthProvider")
   }
   return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAutenhenticated, setIsAutenhenticated] = useState(false);
    const [errors, setErrors] = useState([])

// esto sirve para que ahora cuando llame el signup, el ya va a hacer la peticion, va a resivir la respuesta, nosotros vamos a decirle que estos datos que esta recibinendo, lo vamos a asignar en el estado de user
    const signup = async (user) => {
        try {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data)
        setIsAutenhenticated(true);
        } catch (error) {
            setErrors(error.response.data) //muestra ahi en error que obtenemos.
            //console.log(error.response)
        }
    }

    const signin = async (user) => { //busca los datos de un usuario para autenticarse
        try {
            const res = await LoginRequest(user);
            console.log(res);
            } catch (error) {
                setErrors(error.response.data)
            }
    }

//todos los componentes que esten adentro van a poder llamar tanto el dato del usuario, como la funcion signup
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAutenhenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}