import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(`Signin successful: ${user.email}  `);
      navigate('/NewsBoard');
    } catch (error) {
      console.error('Signin error:', error.message);
    }
  };
  return (
    <div className="border-4  align-items-center">
      <div className=" align-items-center border-3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Sign In</h2>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2 px-4" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2 px-4" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>
        <p>Dont have An Account?{" "}
        <span>
        <Link to="/signup">Sign up</Link>
        </span>
        </p>
      </div>
      </div>
  );
};

export default Signin;