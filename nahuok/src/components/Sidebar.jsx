import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {

    const { isAutenhenticated, logout, user } = useAuth()

  return (
<div className="bg-gray-800 text-white p-10 w-1/4">
<nav className="space-y-4 px-10 py-5">
    <Link to="/">
      <h1 className="text-2xl font-bold">app</h1>
    </Link>
    <ul className="flex flex-col gap-y-4">
      {isAutenhenticated ? (
        <>
          <li className="mt-4 mb-4">
            {user.username}
          </li>
          <li className="mb-4">
            <Link to="/getProfiles" className="bg-indigo-500 px-4 py-1 rounded-sm">Mi perfil</Link>
          </li>
          <li className="mb-4">
            <Link to="/" onClick={() => { logout(); }}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li className="mb-2">
            <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
          </li>
          <li className="mb-2">
            <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
          </li>
        </>
      )}
    </ul>
  </nav>
</div>
  );
};

export default Sidebar;