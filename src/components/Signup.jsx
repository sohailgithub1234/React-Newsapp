import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); 

  const isEmailValid = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    try {
      // Basic validation
      if (!email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      if (!isEmailValid(email)) {
        alert('Invalid email address.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(`Sign Up succesful!: ${user.email}`);
      alert(`Sign Up succesful!: ${user.email}`);

      // Clear form and error state after successful signup
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      navigate("/newsboard");
    }
    catch (error) {
      setError(error.message);
      console.error('Signup error:', error.message);
    }
  };
  return (
    
    <div className="border-4  align-items-center">
      <div className=" align-items-center border-3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Sign Up</h2>
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
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2 px-4" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <p>Already have An Account?{" "}
        <span>
        <Link to="/signin">Sign in</Link>
        </span>
        </p>
      </div>
      </div>
  );
};

export default Signup;