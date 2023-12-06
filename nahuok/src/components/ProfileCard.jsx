import HouseIcon from '@mui/icons-material/House';
//import { useProfile } from '../context/ProfileContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function ProfileCard({profile}) {

   const { deleteProfile } = useAuth()
   console.log(profile.user._id)

    return (
        <div className="bg-zinc-800 max-w-md w-full p-16 ml-auto" style={{ height: '800px', width: "800px"  }}>
                <h2 className="text-slate-300 my-2">{profile.name}</h2>
                <h2 className="text-slate-300 my-2">{profile.age}</h2>
                <h2 className="text-slate-300 my-2"><HouseIcon />{profile.location}</h2>
                <h2>{profile.images}</h2>
                <div className='flex gap-x-2 items-center'>
                    <Link to={`/getProfile/${profile._id}`}>Modificar mi perfil</Link>
                    <button onClick={() => deleteProfile(profile.user._id)}>delete</button>
                </div>
            </div>
    )
}

export default ProfileCard;