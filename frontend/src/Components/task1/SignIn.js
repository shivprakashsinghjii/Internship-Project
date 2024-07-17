import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../Assets/Log_in.png";
import { auth, provider } from "./firebase.config";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setValue(email);
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex md:flex-1 items-center justify-center bg-gray-100">
        <img src={Image} alt="Mobile Login" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 flex flex-col justify-center p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.29 1.11h4.582c-.212 1.193-1.125 3.435-4.582 3.435-2.772 0-5.042-2.222-5.042-4.956s2.27-4.956 5.042-4.956c1.688 0 2.84.728 3.418 1.338l2.327-2.327C13.537 2.165 11.952 1 10 1 5.589 1 2 4.589 2 9s3.589 8 8 8c2.117 0 3.635-.879 4.516-2.112l-2.825-2.777z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
