import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, LoginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie"


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

    //estado de carga cuando se piden los datos:
const [loading, setLoading] = useState(true)

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
            setIsAutenhenticated(true); // para que quede autenticado
            setUser(res.data) //guardo los datos del usuario
            console.log(res);
            } catch (error) {
                setErrors(error.response.data)
            }
    }

    const logout = () => {
        Cookies.remove("token");
        setIsAutenhenticated(false);
        setUser(null)
    }


    useEffect(() => { //si hay error, que un determinado tiempo limpie el mensaje
        if(errors.length > 0){
        const timer = setTimeout(() => { // va a esperar 10 segundos, luego se ejecuta setErrros([])
            setErrors([])
        }, 10000)
        return () => clearTimeout(timer)
    }
    }, [errors])

    //////////////
    //si carga la app, nosotros vamos a hacer una consulta hacia el back, para comprobar si hay una cokki
    //npm i js-cookie: para poder leer las cookie desde el front


    //importante: cuando cargo la pagina en teoria tiene el token guardado 
    useEffect(() => {
      async function checkLogin() {
      const cookies = Cookies.get() 

      if(!cookies.token){ //PRIMERO COMPRUEVA SI NO HAY UN TOKEN
        setIsAutenhenticated(false) //le decimos que la autenticacion esta en false
        setLoading(false) //tambien loading
        return setUser(null) //no hay naranja
      }
        try{
        const res = await verifyTokenRequest(cookies.token) // SI HAY UN TOKEN VERIFICALO, SI HAY UN TOJEN ENVIALO AL BACK "verifyTokenRequest(cookies.token)" EN BACK TE VA A ENVIAR UNA RESPUESTA.
        if(!res.data) { //SI NO TE ESTA RESPONDIENDO NINGUN DANTO ENVIA ESTO:
        setIsAutenhenticated(false)
        setLoading(false)
        return;
        }

        //SI SI ESTA RESPONDIENDO UN DATO:    
        setIsAutenhenticated(true)
        setUser(res.data) //MUESTRAME EL USUARIO, GUARDALO EN EL ESTADO
        setLoading(false)

        //SI HAY ERROR:
        } catch (error){
            setIsAutenhenticated(false) //si recibio un error colocamos setIsAutenhenticated en false
            setUser(null)
            setLoading(false)
        }
      }
    checkLogin();
    }, [])
    //////////

//todos los componentes que esten adentro van a poder llamar tanto el dato del usuario, como la funcion signup
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAutenhenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}