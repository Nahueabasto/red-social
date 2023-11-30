import { createContext, useContext, useState } from "react";
import { getProfilesRequest, createProfileRequest, updatedProfileRequest, getProfileRequest } from "../api/profile";

const ProfileContext = createContext()

export const useProfile = () => {
    const context = useContext(ProfileContext);

    if(!context) {
        throw new Error("useProfile must be used within a ProfileProvider")
    }
    return context;
}

export function ProfileProvide({ children }) {//contenedor de los componentes que quieran acceder a esto
const [profile, setProfile] = useState([])

const getProfiles = async () => {
    try {
    const res = await getProfilesRequest()
    setProfile(res.data)
    console.log(res)
    } catch (error) {
        console.error(error)
    }
}

const createProfile = async (profile) => { //fun
    const res = await createProfileRequest(profile)
    console.log(res)
}

    return(
        <ProfileContext.Provider value={{
            profile, //exporta el valor del profile
            createProfile,
            getProfiles,
        }}>
            { children }
        </ProfileContext.Provider>
    )
}