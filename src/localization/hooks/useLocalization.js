import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import {
  getLocalizedTextStatic,
  getLocalizedTitleStatic
} from '../utils/localization';

export const useLocalization = () => {
  const { language } = useContext(LanguageContext);

  const t = (text) => getLocalizedTextStatic(text, language);
  const getTitle = (chapter, maxLength) =>
    getLocalizedTitleStatic(chapter, language, maxLength);

  return { t, getTitle, language };
};