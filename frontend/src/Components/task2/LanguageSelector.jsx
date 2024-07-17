import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "es", lang: "Spanish" },
  { code: "hi", lang: "Hindi" },
  { code: "pt", lang: "Portuguese" },
  { code: "zh", lang: "Chinese" },
  { code: "fr", lang: "French" },
];

const changeLanguageFunction = (languageCode) => {
  changeLanguage(languageCode);
};

const LanguageSelector = () => {
  useTranslation();
  return (
    <div className="btn-container flex flex-wrap justify-center gap-2 md:gap-4 my-4">
      {languages.map((language) => {
        return (
          <button
            key={language.code}
            onClick={() => changeLanguageFunction(language.code)}
            className="w-full md:w-auto px-4 py-2 md:px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            style={{ marginInline: "20px" }}
          >
            {language.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
