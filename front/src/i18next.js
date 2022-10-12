import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

i18n.use(backend).use(languageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    whitelist: ['ua', 'ru'],
    debug: false,
    detection: {
        order: ['localStorage', 'cookie'],
        cache: ['localStorage'],
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;