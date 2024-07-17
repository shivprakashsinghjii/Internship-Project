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
          userInformation: "User Information",
          browser: "Browser:",
          operatingSystem: "Operating System:",
          deviceType: "Device Type:",
          yourIpAddress: "Your IP Address",
        },
      },
      es: {
        translation: {
          greeting: "¡Hola, Bienvenido!",
          logout: "Cerrar sesión",
          home: "Inicio",
          welcome: "Bienvenido",
          userInformation: "Información del Usuario",
          browser: "Navegador:",
          operatingSystem: "Sistema Operativo:",
          deviceType: "Tipo de Dispositivo:",
          yourIpAddress: "Tu Dirección IP",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है!",
          logout: "लॉग आउट",
          home: "होम",
          welcome: "आपका स्वागत है",
          userInformation: "उपयोगकर्ता जानकारी",
          browser: "ब्राउज़र:",
          operatingSystem: "ऑपरेटिंग सिस्टम:",
          deviceType: "डिवाइस का प्रकार:",
          yourIpAddress: "आपका आईपी पता",
        },
      },
      pt: {
        translation: {
          greeting: "Olá, Bem-vindo!",
          logout: "Sair",
          home: "Início",
          welcome: "Bem-vindo",
          userInformation: "Informações do Usuário",
          browser: "Navegador:",
          operatingSystem: "Sistema Operacional:",
          deviceType: "Tipo de Dispositivo:",
          yourIpAddress: "Seu Endereço IP",
        },
      },
      zh: {
        translation: {
          greeting: "你好，欢迎！",
          logout: "登出",
          home: "首页",
          welcome: "欢迎",
          userInformation: "用户信息",
          browser: "浏览器:",
          operatingSystem: "操作系统:",
          deviceType: "设备类型:",
          yourIpAddress: "您的IP地址",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue !",
          logout: "Déconnexion",
          home: "Accueil",
          welcome: "Bienvenue",
          userInformation: "Informations Utilisateur",
          browser: "Navigateur:",
          operatingSystem: "Système d'Exploitation:",
          deviceType: "Type de Périphérique:",
          yourIpAddress: "Votre Adresse IP",
        },
      },
      // Add translations for other languages as needed
    },
  });

export default i18n;
