import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(){
   const {loading, isAutenhenticated } = useAuth()
   console.log(loading, isAutenhenticated)

   if(loading) return <h1>Loading..</h1>

   if(!loading && !isAutenhenticated) return <Navigate to= "/login" replace />

    return <Outlet /> // si esta autenticado continua con el componente que esta adentro
}

export default ProtectedRoute;

//si exiten datos que continue, sino que redireccione