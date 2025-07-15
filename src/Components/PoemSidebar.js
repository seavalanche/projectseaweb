import { useState, useContext } from 'react';
import { useEffect, useRef } from "react";
import { LanguageContext } from '../localization/contexts/LanguageContext';
import { chapters } from '../Pages/Chapters/poem-metadata';
import { useLocalization } from '../localization/hooks/useLocalization';

function StorySidebar({ visible, toggleSidebar, currentChapter, onChapterSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { language } = useContext(LanguageContext); // Get current language from context
    const { t } = useLocalization();

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

    const [isVisible, setIsVisible] = useState(true);
    const [screenSize, setScreenSize] = useState('large');
    const lastScrollY = useRef(0);
    const hideTimeout = useRef(null);
    const SELECTOR_ORIGINAL_OFFSET = 65;

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 800) {
                setScreenSize('small');
            } else if (width <= 1119) {
                setScreenSize('medium');
            } else {
                setScreenSize('large');
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isNowFloating = currentScrollY > SELECTOR_ORIGINAL_OFFSET;

            if (!isNowFloating) {
                setIsVisible(true);
                if (hideTimeout.current) {
                    clearTimeout(hideTimeout.current);
                    hideTimeout.current = null;
                }
            } else {
                setIsVisible(currentScrollY <= lastScrollY.current);
            }

            lastScrollY.current = currentScrollY;
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, [screenSize]);

    return (
        <div className={`sidebar ${visible ? 'sidebar-visible' : 'sidebar-hidden'} ${isVisible ? 'sidebar-scrolled-visible' : 'sidebar-scrolled-hidden'}`}
            onMouseEnter={() => !visible && toggleSidebar()}>
            <div className="sidebar-toc-title">{t("storysidebar.toctitle")}</div>
            {visible && (
                <>
                    <div className="sidebar-search">
                        <input
                            type="text"
                            placeholder={t("storysidebar.searchplaceholder2")}
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