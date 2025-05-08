/**
 * Unified text localizer
 * @param {string|object} text - Can be:
 *    - String: "Hello" (direct display)
 *    - Object: {en: "Hello", jp: "こんにちは"} 
 *    - Keypath: "header.title" (for JSON translations)
 * @param {object} translations - Your JSON translations
 * @param {string} language - Target language
 */
export const localize = (text, translations, language = 'en') => {
  if (!text) return '';
  
  // Case 1: Already a string
  if (typeof text === 'string') {
    // Check if it's a translation key (contains dot)
    if (text.includes('.')) {
      const keys = text.split('.');
      let value = translations[language];
      for (const key of keys) {
        value = value?.[key];
        if (!value) break;
      }
      return value || translations.en?.[keys] || text;
    }
    return text; // Regular string
  }
  
  // Case 2: Translation object
  if (typeof text === 'object') {
    return text[language] || text.en || Object.values(text)[0] || '';
  }
  
  return String(text);
};