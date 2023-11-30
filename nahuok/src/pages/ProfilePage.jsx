import { useEffect } from "react";
import { useProfile } from "../context/ProfileContext";

function ProfilePage() {
   const { getProfiles, profile } = useProfile();

   useEffect(() => {
    getProfiles() //apenas carga, carga el perfil 
   }, [])

    return(
        <div>{
            profile.map(profile => (
                <div key={profile._id}>
                    <h1>{profile.name}</h1>
                    <h2>{profile.age}</h2>
                    <h3>{profile.location}</h3>
                    <h2>{profile.images}</h2>
                </div>
            ))
            }</div>
    )
}

export default ProfilePage;
