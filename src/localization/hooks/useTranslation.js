// import { useContext } from "react";
// import { LanguageContext } from "../contexts/LanguageContext";
// import translations from "../Translations";
import { useLocalization } from './useLocalization';

// const useTranslation = () => {
//     const { language, setLanguage } = useContext(LanguageContext);

//     const translate = (keyPath) => {
//         const keys = keyPath.split(".");
//         let value = translations[language];

//         for (const key of keys) {
//             value = value?.[key];
//             if (!value) break;
//         }

//         return value || translations["en"]?.[keyPath] || "Missing translation";
//     };

//     return { t: translate, language, setLanguage }; 
// };

// export default useTranslation;
export default useLocalization; // Temporary alias