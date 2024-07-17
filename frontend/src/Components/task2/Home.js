import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/signin"); // Redirect to sign-in if no email is found
    }
  }, [navigate]);

  useEffect(() => {
    // Update background color based on the selected language
    switch (i18n.language) {
      case "hi":
        document.body.style.backgroundColor = "blue";
        break;
      case "zh":
        document.body.style.backgroundColor = "green";
        break;
      case "fr":
        document.body.style.backgroundColor = "yellow";
        break;
      default:
        document.body.style.backgroundColor = "white";
        break;
    }
  }, [i18n.language]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/signin"); // Navigate to the sign-in page
  };

  const isWhiteText = i18n.language === "hi" || i18n.language === "zh";

  return (
    <div className="min-h-screen flex flex-col">
      <nav className=" shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold ${
                  isWhiteText ? "text-white" : "text-gray-900"
                }`}
              >
                {t("home")}
              </h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                {t("logout")}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-start pt-8">
        <div className="max-w-md w-full text-center">
          <p
            className={`text-sm mb-4 ${
              isWhiteText ? "text-white" : "text-gray-600"
            }`}
          >
            {t("welcome")}, {email}
          </p>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Home;
