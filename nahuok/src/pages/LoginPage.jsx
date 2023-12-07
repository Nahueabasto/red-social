// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// function LoginPage() {
    
//  const { register, handleSubmit, formState: { errors }} = useForm()

//  const { signin, errors: signinErrors, isAutenhenticated } = useAuth()
// const navigate = useNavigate()

//  const onSubmit = handleSubmit(data => {
//     signin(data) // ejecuto signin y le paso la data
//  })

//  useEffect(() => {
//     if(isAutenhenticated) navigate("/getProfiles") //Para que al logearse te lleve a la getProfiles, primero me si esta autenticado
//  }, [isAutenhenticated])

//     return(
//         <div className="flex h-[calc(100vh-100px)] items-center justify-center">
//         <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
//         {signinErrors.map((error, i) => (
//                 <div className="bg-red-500 p-2 text-white my-2" key={i}>
//                     {error}
//                 </div>
//             ))}
//             <form onSubmit={onSubmit}>

//                 <input type="text" {...register("email", {required: true })} 
//                     className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//                     placeholder="Email"
//                 />
//                 { errors.email && ( <p className="text-red-500"> Email is required. </p> )}

//                 <input type="text" {...register("password", {required: true })} 
//                     className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" 
//                     placeholder="Password"   
//                 />
//                 { errors.password && ( <p className="text-red-500"> Password is required. </p> )}

//                 <button type="submit">
//                     Login
//                 </button>
//             </form>
//             <p className="flex gap-x-2 justify-between">
//                 Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
//             </p>
//             </div>
//         </div>
//     )
// }

// export default LoginPage;

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const { signin, errors: signinErrors, isAutenhenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    signin(data); // Ejecuto signin y le paso la data
  });

  useEffect(() => {
    // Verificar si hay una cuenta almacenada
    const storedAccount = localStorage.getItem("userAccount");

    if (storedAccount) {
      // Convertir la cadena JSON almacenada en un objeto JavaScript
      const account = JSON.parse(storedAccount);

      // Iniciar sesión automáticamente con la cuenta almacenada
      signin({ username: account.username, password: account.password });
    }
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  useEffect(() => {
    if (isAutenhenticated) {
      navigate("/getProfiles"); // Para que al logearse te lleve a getProfiles si está autenticado
    }
  }, [isAutenhenticated, navigate]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (<p className="text-red-500"> Email is required. </p>)}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (<p className="text-red-500"> Password is required. </p>)}

          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
