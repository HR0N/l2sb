import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import axios from "axios";


const language = async function(){  // IP API - https://ip-api.com/docs/api:serialized_php
    let language;
    let myStorage = window.localStorage.i18nextLng;
    language = axios.get('https://l2lb.monster/php/get_ip.php').then((res)=>{
        let data = res.data;
        if(data.countryCode !== "Undefined" && data.countryCode === "UA"){return 'ua'}
        else if(data.countryCode !== "Undefined" && data.countryCode === "RU"){return 'ru'}
        else{return 'en'}
    });
    if(!myStorage){
        let lang = await language;
        i18n.changeLanguage(lang);
        window.location.reload();   // почему то при смене языка не обновляется компонент Header \ это костыль
    }
};

language(); // if person first time on site, set default language for he\she depending countryCode


i18n.use(backend).use(languageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    whitelist: ['ua', 'en', 'ru'],
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