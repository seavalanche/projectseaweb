/**
 * Context-free version for use outside components
 * @param {string|object} text - The text to localize
 * @param {string} language - The target language
 * @returns {string} Localized text
 */
export const getLocalizedTextStatic = (text, language = 'en') => {
    if (!text) return '';
    
    // Handle string (backward compatibility)
    if (typeof text === 'string') return text;
    
    // Handle translation object
    if (typeof text === 'object') {
      return text[language] || text.en || Object.values(text)[0] || '';
    }
    
    return String(text);
  };
  
  /**
   * Context-free version for chapter titles
   * @param {object} chapter - Chapter object
   * @param {string} language - Target language
   * @param {number} [maxLength] - Optional max length
   * @returns {string} Localized title
   */
  export const getLocalizedTitleStatic = (chapter, language = 'en', maxLength) => {
    if (!chapter || !chapter.title) return '';
    
    const title = getLocalizedTextStatic(chapter.title, language);
    
    if (maxLength && title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };