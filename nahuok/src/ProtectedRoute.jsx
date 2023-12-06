import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { useProfile } from "./context/ProfileContext";

function ProtectedRoute(){
   const {loading, isAutenhenticated } = useAuth()
   console.log(loading, isAutenhenticated)
   //const { profile, getProfiles } = useProfile()
   //console.log(profile[0])
  

   if(loading) return <h1>Loading..</h1>

   if(!loading && !isAutenhenticated) return <Navigate to= "/login" replace />

//    if(profile && getProfiles) return <Navigate to= "/getProfiles" replace />

    return <Outlet /> // si esta autenticado continua con el componente que esta adentro
}

export default ProtectedRoute;





