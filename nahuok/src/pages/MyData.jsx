import { useEffect } from "react";
import { useProfile } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";

function MyData() {
   const { getProfiles, profile, creadoProfile } = useProfile();
   console.log(profile.length)



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
