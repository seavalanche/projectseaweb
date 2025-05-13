import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import translations from '../../translations/Translations';
import { localize } from '../utils/localization';

export const useLocalization = () => {
  const { language, setLanguage } = useContext(LanguageContext);

    const toggleLang = (newLang) => {
    setLanguage(newLang);
    document.documentElement.setAttribute("data-language", newLang);
    localStorage.setItem("language", newLang);
  };
  
  const t = (text) => localize(text, translations, language);
  
  // Optional: Keep story-specific helpers
  const getTitle = (chapter, maxLength) => {
    const title = t(chapter?.title);
    return maxLength && title.length > maxLength 
      ? `${title.substring(0, maxLength)}...`
      : title;
  };
  
  return { t, getTitle, language, toggleLang };
};