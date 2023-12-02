import { useForm } from "react-hook-form";
import { useProfile } from "../context/ProfileContext";
import { useNavigate } from 'react-router-dom';
function CreateProfile() {
    // const { user } = useAuth()
    // console.log(user)
    const {register, handleSubmit } = useForm(); 
    const { createProfile } = useProfile() //va a extraer el profile que viene de ahi
    //console.log(createProfile)
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createProfile(data);
        console.log(data);
        handleSave();
    });

    const handleSave = () => {
        // Your logic to save data
        // After saving, navigate to the route 'getProfiles'
        navigate('/getProfiles');
    };

    return(
        <div className="bg-zinc-800 max-wmd w-full p-10 rounded-md">

            <form onSubmit={onSubmit}>

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


