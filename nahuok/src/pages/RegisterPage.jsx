// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function RegisterPage() {
//     //formState: para traerme los errores
//     const { register, handleSubmit, formState:{ errors  
//     }} = useForm()
//     const { signup, isAutenhenticated, errors: registerErrors } = useAuth();
//     const navigation = useNavigate(); 

//     //si estas autenticado vas a navegar a la ruta de 
//     useEffect(() => {
//         if(isAutenhenticated) navigation("/login")
//     }, [isAutenhenticated])

//     const onSubmit = handleSubmit(async (values) => {
//         signup(values)
//     })

//     return(
//         <div className="bg-zinc-800 max-w-md p-10 rounded-md">
//             {
//                 registerErrors.map((error, i) => (
//                     <div className="bg-red-500 p-2 text-white" key={i}>
//                         {error}
//                     </div>
//                 ))
//             }
//             <form onSubmit={onSubmit}>
//                 <input type="text" {...register("username", {required: true })} 
//                     className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
//                     placeholder="Username"
//                 />
//                 { errors.username && ( <p className="text-red-500"> Username is required. </p> )}

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
//                     Register
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default RegisterPage;

//CODIGO PARA QUE SE CUARDE LA CONTRASEÑA

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAutenhenticated, errors: registerErrors } = useAuth();
    const navigation = useNavigate();

    useEffect(() => {
        if (isAutenhenticated) navigation("/createProfile");
    }, [isAutenhenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {registerErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white" key={i}>
                    {error}
                </div>
            ))}

            {/* <form onSubmit={onSubmit}>
                <input
                    type="text"
                    {...register("username", { required: true })}
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Username"
                />
                {errors.username && (<p className="text-red-500"> Username is required. </p>)}

                <input
                    type="text"
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                {errors.email && (<p className="text-red-500"> Email is required. </p>)}

                <input
                    type="text"
                    {...register("password", { required: true })}
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                {errors.password && (<p className="text-red-500"> Password is required. </p>)}

                <button type="submit">Register</button>
            </form> */}
            <form onSubmit={onSubmit}>
    <input
        type="text"
        {...register("username", { required: true })}
        name="username"
        id="username"
        autoComplete="username"
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        placeholder="Username"
    />
    {errors.username && (<p className="text-red-500"> Username is required. </p>)}

    <input
        type="email"
        {...register("email", { required: true })}
        name="email"
        id="email"
        autoComplete="email"  // Cambiado a 'username' para no guardar automáticamente
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        placeholder="Email"
    />
    {errors.email && (<p className="text-red-500"> Email is required. </p>)}

    <input
        type="password"
        {...register("password", { required: true })}
        name="password"
        id="password"
        autoComplete="new-password"  // Agregar el atributo autocomplete
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        placeholder="Password"
    />
    {errors.password && (<p className="text-red-500"> Password is required. </p>)}

    <button type="submit">Register</button>
</form>
            <p className="flex gap-x-2 justify-between">
                Already have an account? <Link to="/login" className="text-sky-500">Login</Link>
            </p>
        </div>
        </div>
    );
}

export default RegisterPage;

