import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {

const { isAutenhenticated, logout, user } = useAuth()

  return (
   <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
    <Link to="/">
    <h1 className="text-2xl font-bold">app</h1>
    </Link>
    <ul className="flex gap-x-2">
      {isAutenhenticated ? ( //si esta autenticado quiero mostrar algunos valores, sino otros
      <>
      <li>
    Welcome {user.username}
     </li>
     <li>
    <Link to="/getProfiles">Mi perfil</Link>
     </li>
     <li>
    <Link to="/" onClick={() => {
      logout();
    }}>Logout</Link>
     </li>
     </>
      ) : ( 
      <>
      <li>
    <Link to="/login">Login</Link>
     </li>
     <li>
    <Link to="/register">Register</Link>
     </li>
     </>
     )}
    </ul>
   </nav>
  );
};

