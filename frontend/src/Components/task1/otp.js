import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { userVerify } from "../../../src/services/Apis";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp");
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit");
    } else {
      const data = {
        otp,
        email: location.state,
      };

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <form>
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 text-2xl"
              onClick={LoginUser}
            >
              &rarr;
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Otp;
