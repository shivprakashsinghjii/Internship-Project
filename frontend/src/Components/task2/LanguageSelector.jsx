import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "i18next";

const languages = [
  { code: "en", lang: "English", redirectPath: "/phone" },
  { code: "es", lang: "Spanish", redirectPath: "/phone" },
  { code: "hi", lang: "Hindi", redirectPath: "/phone" },
  { code: "pt", lang: "Portuguese", redirectPath: "/phone" },
  { code: "zh", lang: "Chinese", redirectPath: "/phone" },
  { code: "fr", lang: "French", redirectPath: "/phone" }, // Changed redirectPath to "/phone"
];

const LanguageSelector = ({ isAuthenticated }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const changeLanguageFunction = (languageCode, redirectPath) => {
    let backgroundColor = "#ffffff"; // Default white

    // Set background color based on language code
    switch (languageCode) {
      case "hi":
        backgroundColor = "#007BFF"; // Blue for Hindi
        break;
      case "zh":
        backgroundColor = "#28A745"; // Green for Chinese
        break;
      case "fr":
        backgroundColor = "#FFC107"; // Yellow for French
        break;
      default:
        break;
    }

    // Set body background color
    document.body.style.backgroundColor = backgroundColor;

    // Change language and navigate to the specified redirect path
    changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
    navigate(redirectPath);
  };

  return (
    <div className="btn-container flex flex-wrap justify-center gap-2 md:gap-4 my-4">
      {languages.map((language) => (
        <LanguageButton
          key={language.code}
          code={language.code}
          lang={t(language.lang)}
          changeLanguage={() =>
            changeLanguageFunction(language.code, language.redirectPath)
          }
        />
      ))}
    </div>
  );
};

const LanguageButton = ({ code, lang, changeLanguage }) => (
  <button
    onClick={changeLanguage}
    className="w-full md:w-auto px-4 py-2 md:px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
    style={{ marginInline: "20px" }}
  >
    {lang}
  </button>
);

export default LanguageSelector;
