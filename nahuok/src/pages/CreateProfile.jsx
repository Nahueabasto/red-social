import { useForm } from "react-hook-form";
import { useProfile } from "../context/ProfileContext";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function CreateProfile() {
    // const { user } = useAuth()
    // console.log(user)
    const {register, handleSubmit, setValue } = useForm(); 
    const { createProfile, getProfile, updatedProfile } = useProfile() //va a extraer el profile que viene de ahi
    //console.log(createProfile)
    const navigate = useNavigate();
    const params = useParams();
    //console.log(getProfile)

    const onSubmit = handleSubmit((data) => { //el onSubmit tambien tiene que leer si hay un parametro, porque si hay un parametro esta editando, sino esta creando.
        if(params.id){ // si existe estas editando
            updatedProfile(params.id, data)
        } else { // si no vas a estar creando
            createProfile(data);
        }
        navigate('/getProfiles');
            console.log(data);
     
    });

   useEffect(() => {
    async function loadProfile(){
    if(params.id) {
       const profile = await getProfile(params.id);
       console.log(profile)
        setValue("name", profile.name) // cob esto lemos lo que hay y lo establecemos
        setValue("age", profile.age)
        setValue("location", profile.location)
        setValue("images", profile.images)
    }
}
loadProfile()
   }, [])

    return(
        <div className="bg-zinc-800 max-wmd w-full p-10 rounded-md">

            <form onSubmit={onSubmit}>
                <label htmlFor=""></label>
                <input type="text" placeholder="name" 
                {...register("name")} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                autoFocus/>

                <input type="text" placeholder="age" 
                {...register("age")} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                autoFocus/>

                <input type="text" placeholder="location" 
                {...register("location")} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                autoFocus/>


                <input type="text" id="imagen" name="imagen" accept="image/*" capture="user" required 
                {...register("images")} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                autoFocus/>

                <button>
                    Save
                </button>
            </form>

        </div>
    )
}

export default CreateProfile;


