import { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { chapters } from '../Pages/Chapters/metadata';
import useTranslation from '../hooks/useTranslation';

function StorySidebar({ visible, toggleSidebar, currentChapter, onChapterSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { language } = useContext(LanguageContext); // Get current language from context
    const { t } = useTranslation();

    // Helper to get all text variations for searching
    const getAllTextValues = (text) => {
        if (typeof text === 'string') return [text.toLowerCase()];
        if (typeof text === 'object') return Object.values(text).map(t => t.toLowerCase());
        return [String(text).toLowerCase()];
    };

    // Helper to get display text in current language (with EN fallback)
    const getDisplayText = (text) => {
        if (typeof text === 'string') return text;
        if (typeof text === 'object') return text[language] || text.en || Object.values(text)[0] || '';
        return String(text);
    };

    const filteredChapters = chapters.filter(chapter => {
        if (!searchTerm) return true; // Show all when no search term
        
        const lowerSearchTerm = searchTerm.toLowerCase();
        const titleVariations = getAllTextValues(chapter.title);
        const descVariations = getAllTextValues(chapter.description);
        
        return (
            titleVariations.some(t => t.includes(lowerSearchTerm)) ||
            descVariations.some(d => d.includes(lowerSearchTerm)) ||
            chapter.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
        );
    });

    return (
        <div className={`sidebar ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}
             onMouseEnter={() => !visible && toggleSidebar()}>
            <div className="sidebar-toc-title">{t("storysidebar.toctitle")}</div>
            {visible && (
                <>
                    <div className="sidebar-search">
                        <input
                            type="text"
                            placeholder={t("storysidebar.searchplaceholder")}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <ul>
                        {filteredChapters.map((chapter) => (
                            <li key={chapter.id}>
                                <div
                                    className={`sidebar-toc-list ${currentChapter === chapter.id ? 'active-chapter' : ''}`}
                                    onClick={() => onChapterSelect(chapter.id)}
                                >
                                    <div className="chapter-title">{getDisplayText(chapter.title)}</div>
                                    <div className="chapter-desc">{getDisplayText(chapter.description)}</div>
                                    {chapter.wordCount && (
                                        <div className="chapter-meta">
                                            {Math.ceil(chapter.wordCount / 200)} {t("storysidebar.minread")}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {filteredChapters.length === 0 && searchTerm && (
                        <div className="no-results">{t("storysidebar.notfound")}</div>
                    )}
                </>
            )}
        </div>
    );
}

export default StorySidebar;