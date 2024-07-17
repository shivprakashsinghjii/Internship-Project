// i18n.js or similar

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Default fallback language
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          logout: "Logout",
          home: "Home",
          welcome: "Welcome",
        },
      },
      es: {
        translation: {
          greeting: "¡Hola, Bienvenido!",
          logout: "Cerrar sesión",
          home: "Inicio",
          welcome: "Bienvenido",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है!",
          logout: "लॉग आउट",
          home: "होम",
          welcome: "आपका स्वागत है",
        },
      },
      pt: {
        translation: {
          greeting: "Olá, Bem-vindo!",
          logout: "Sair",
          home: "Início",
          welcome: "Bem-vindo",
        },
      },
      zh: {
        translation: {
          greeting: "你好，欢迎！",
          logout: "登出",
          home: "首页",
          welcome: "欢迎",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue !",
          logout: "Déconnexion",
          home: "Accueil",
          welcome: "Bienvenue",
        },
      },
      // Add translations for other languages as needed
    },
  });

export default i18n;
