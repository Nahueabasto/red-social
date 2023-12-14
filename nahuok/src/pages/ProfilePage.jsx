import { useEffect } from "react";
import { useProfile } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
   const { getProfiles, profile, creadoProfile } = useProfile();
   const { signin, errors: signinErrors, isAutenhenticated } = useAuth();
   console.log(profile.length)
   

   useEffect(() => {
    const storedAccount = localStorage.getItem('userAccount'); // Solo usa localStorage para este caso

      if (storedAccount) {
        // Realiza la lógica de verificación del token si es necesario
        // Aquí puedes realizar verificaciones adicionales antes de obtener los perfiles

        // Obtiene los perfiles después de verificar el token
        getProfiles();

    };

  }, []); 

   useEffect(() => {
    getProfiles() //apenas carga, carga el perfil 
   }, [])

    return(
        <div>{
            profile.map(profile => (
               <ProfileCard key={profile._id} profile={profile} /> 
            ))
            }</div>
    )
}

export default ProfilePage;
