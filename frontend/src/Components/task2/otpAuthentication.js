import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sentOtpFunction } from "../../services/Apis";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email!");
    } else if (!email.includes("@")) {
      toast.error("Enter a Valid Email!");
    } else {
      setSpiner(true);
      const data = { email: email };
      const response = await sentOtpFunction(data);
      if (response.status === 200) {
        setSpiner(false);
        navigate("/otp", { state: email });
      } else {
        setSpiner(false);
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <section className="flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold">Welcome Back, Log In</h1>
              <p className="text-gray-600">
                Hi, we are glad you are back. Please log in.
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 flex items-center justify-center"
                onClick={sendOtp}
              >
                Login
                {spiner && (
                  <span className="ml-2">
                    <Spinner animation="border" size="sm" />
                  </span>
                )}
              </button>
              <p className="text-center mt-4">
                Don't have an account?{" "}
                <NavLink to="/register" className="text-blue-500">
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
          <ToastContainer />
        </section>
      </div>
    </>
  );
};

export default Login;
