import { useState, useEffect, useCallback, useRef } from "react";
import { chapters } from '../Pages/Chapters/metadata';
import { useLocalization } from "../hooks/useLocalization";
import useTranslation from '../hooks/useTranslation';

function StoryFnBar({
    toggleSidebar,
    sidebarVisible,
    currentChapter,
    setCurrentChapter,
}) {
    const { getTitle } = useLocalization();
    const { t } = useTranslation();

    const [isBetweenSizes, setIsBetweenSizes] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showSizes, setShowSizes] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null); // can be 'sizes', 'styles', or null

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const inRange = width >= 1201 && width <= 1670;
            const isSmall = width < 1200;

            setIsBetweenSizes(inRange);
            setIsSmallScreen(isSmall);

            // Reset view based on screen size
            if (!inRange) setShowSizes(true); // show both if out of toggle range
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const renderMobileLayout = () => (
        <div className="fnbar-main">
            <div className="fnbar-sub">
                <div className="fnbar-sub-sizes"
                    style={{
                        display: activeMenu === 'sizes' ? 'flex' : 'none',
                    }}>
                    <div className="fnbar-sub-sizes-part-0">
                        <div className="fnbar-sub-sizes-part">
                            {/* Font Size */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.fontsize")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('fontSize', -1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="8"
                                            max="24"
                                            step="1"
                                            value={settings.fontSize}
                                            onChange={(e) => updateSetting('fontSize', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('fontSize', 1)}>+</button>
                                </div>
                            </div>
                            {/* Letter Spacing */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.letterspacing")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('letterSpacing', -1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="0"
                                            max="5"
                                            step="1"
                                            value={settings.letterSpacing}
                                            onChange={(e) => updateSetting('letterSpacing', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('letterSpacing', 1)}>+</button>
                                </div>
                            </div>
                            {/* Word Spacing */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.wordspacing")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('wordSpacing', -1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="0"
                                            max="5"
                                            step="1"
                                            value={settings.wordSpacing}
                                            onChange={(e) => updateSetting('wordSpacing', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('wordSpacing', 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="fnbar-sub-sizes-part">
                            {/* Padding */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.padding")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('contentPadding', -1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="1"
                                            max="25"
                                            step="1"
                                            value={settings.contentPadding}
                                            onChange={(e) => updateSetting('contentPadding', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('contentPadding', 1)}>+</button>
                                </div>
                            </div>
                            {/* Line Spacing */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.linespacing")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('lineHeight', -0.1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="1.0"
                                            max="3.0"
                                            step="0.1"
                                            value={settings.lineHeight}
                                            onChange={(e) => updateSetting('lineHeight', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('lineHeight', 0.1)}>+</button>
                                </div>
                            </div>
                            {/* Paragraph Spacing */}
                            <div className="fnbar-comps">
                                <span>{t("storyfnbar.paragraphspacing")}</span>
                                <div className="slider-wrapper">
                                    <button className="slider-btn" onClick={() => adjustSetting('paragraphGap', -1)}>-</button>
                                    <div className="slide-container">
                                        <input
                                            className="slider"
                                            type="range"
                                            min="1"
                                            max="50"
                                            step="1"
                                            value={settings.paragraphGap}
                                            onChange={(e) => updateSetting('paragraphGap', e.target.value)}
                                        />
                                    </div>
                                    <button className="slider-btn" onClick={() => adjustSetting('paragraphGap', 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fnbar-sub-styles"
                    style={{
                        display: activeMenu === 'styles' ? 'flex' : 'none',
                    }}>
                    <div className="fnbar-sub-fonts">
                        {/* Font Family */}
                        <div className="fnbar-comps font-family">
                            <span className="fnbar-font-family-title">{t("storyfnbar.fontfamily")}</span>
                            <button onClick={() => handleFontFamilyChange('F-Content')}>Montserrat</button>
                            <button onClick={() => handleFontFamilyChange('Quicksand')}>Quicksand</button>
                            <button onClick={() => handleFontFamilyChange('Open Sans')}>Open Sans</button>
                            <button onClick={() => handleFontFamilyChange('OpenDyslexic')}>Open Dyslexic</button>
                            <button onClick={() => handleFontFamilyChange('F-Title')}>Lora</button>
                            <button onClick={() => handleFontFamilyChange('F-CharCardName')}>Constantia</button>
                            <button onClick={() => handleFontFamilyChange('Roboto Light')}>Roboto Light</button>
                        </div>
                    </div>
                    <div className="fnbar-sub-colors">
                        {/* Text Color */}
                        <div className="fnbar-comps">
                            <span>{t("storyfnbar.textcolor")}</span>
                            <input
                                type="color"
                                value={settings.fontColor}
                                onChange={(e) => handleColorChange('fontColor', e.target.value)}
                            />
                        </div>

                        {/* Background Color */}
                        <div className="fnbar-comps">
                            <span>{t("storyfnbar.backgroundcolor")}</span>
                            <input
                                type="color"
                                value={settings.bgColor}
                                onChange={(e) => handleColorChange('bgColor', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fnbar-sub-menu">
                <div className={`sidebar-btn-mobile ${isVisible ? 'visible' : 'hidden'}`}
                    onClick={() => { setActiveMenu(prev => (prev === 'sizes' ? null : null)); toggleSidebar(); }
                    }
                >
                    {sidebarVisible ? '↑' : '↓'}
                </div>
                {prevChapter && (
                    <button className="chapter-nav-sub-btn" onClick={() => setCurrentChapter(prevChapter.id)}>
                        &lt;
                    </button>
                )}
                <button className="fnbar-sub-menu-btn-sizes"
                    onClick={() => { setActiveMenu(prev => (prev === 'sizes' ? null : 'sizes')); sidebarVisible && toggleSidebar(); }
                    }
                >
                    {t("storyfnbar.sizes")}
                </button>
                <button className="fnbar-sub-menu-btn-styles"
                    onClick={() => { setActiveMenu(prev => (prev === 'styles' ? null : 'styles')); sidebarVisible && toggleSidebar(); }
                    }
                >
                    {t("storyfnbar.styles")}
                </button>
                {nextChapter && (
                    <button className="chapter-nav-sub-btn" onClick={() => setCurrentChapter(nextChapter.id)}>
                        &gt;
                    </button>
                )}
                <div className="fnbar-default-menu" onClick={resetToDefault}>R</div>
            </div>
        </div>
    );

    // State initialization with loading flag
    const [isLoaded, setIsLoaded] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: '--Fs-Content',
        fontFamily: '--F-Content',
        fontColor: '#000000',
        bgColor: '--text-color-1b',
        contentPadding: '--content-padding',
        lineHeight: '--line-height',
        paragraphGap: '--paragraph-gap',
        letterSpacing: '--letter-spacing',
        wordSpacing: '--word-spacing',
    });

    // Get CSS defaults with proper unit handling
    const getCSSDefaults = useCallback(() => {
        const root = document.documentElement;
        const styles = getComputedStyle(root);

        const getNumericValue = (varName) => {
            const value = styles.getPropertyValue(varName).trim();
            return parseFloat(value);
        };

        return {
            fontSize: getNumericValue('--Fs-Content'),
            fontFamily: styles.getPropertyValue('--F-Content').trim(),
            fontColor: styles.getPropertyValue('--text-color-1b').trim(),
            bgColor: styles.getPropertyValue('--bg-color-3').trim(),
            contentPadding: getNumericValue('--content-padding'),
            lineHeight: getNumericValue('--line-height'),
            paragraphGap: getNumericValue('--paragraph-gap'),
            letterSpacing: getNumericValue('--letter-spacing'),
            wordSpacing: getNumericValue('--word-spacing'),
        };
    }, []);

    // Apply styles to DOM
    const applyStyles = useCallback(() => {
        const root = document.getElementById('story-content-wrapper');
        if (!root) return;

        root.style.setProperty('--Fs-Content', `${settings.fontSize}pt`);
        root.style.setProperty('--F-Content', settings.fontFamily);
        root.style.setProperty('--text-color-1b', settings.fontColor);
        root.style.setProperty('--bg-color-3', settings.bgColor);
        root.style.setProperty('--content-padding', `${settings.contentPadding}vw`);
        root.style.setProperty('--line-height', settings.lineHeight);
        root.style.setProperty('--paragraph-gap', `${settings.paragraphGap}px`);
        root.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
        root.style.setProperty('--word-spacing', `${settings.wordSpacing}px`);
    }, [settings]);

    // Load initial settings
    useEffect(() => {
        const loadSettings = () => {
            const cssDefaults = getCSSDefaults();
            const savedSettings = {
                fontSize: parseFloat(localStorage.getItem('fontSize')) || cssDefaults.fontSize,
                fontFamily: localStorage.getItem('fontFamily') || cssDefaults.fontFamily,
                fontColor: localStorage.getItem('fontColor') || cssDefaults.fontColor,
                bgColor: localStorage.getItem('bgColor') || cssDefaults.bgColor,
                contentPadding: parseFloat(localStorage.getItem('contentPadding')) || cssDefaults.contentPadding,
                lineHeight: parseFloat(localStorage.getItem('lineHeight')) || cssDefaults.lineHeight,
                paragraphGap: parseFloat(localStorage.getItem('paragraphGap')) || cssDefaults.paragraphGap,
                letterSpacing: parseFloat(localStorage.getItem('letterSpacing')) || cssDefaults.letterSpacing,
                wordSpacing: parseFloat(localStorage.getItem('wordSpacing')) || cssDefaults.wordSpacing,
            };

            setSettings(savedSettings);
            setIsLoaded(true);
        };

        loadSettings();
    }, [getCSSDefaults]);

    // Apply styles when settings change
    useEffect(() => {
        if (!isLoaded) return;
        applyStyles();
    }, [isLoaded, settings, applyStyles]);

    // Reset to CSS defaults
    const resetToDefault = () => {
        const cssDefaults = getCSSDefaults();
        setSettings(cssDefaults);

        // Clear localStorage
        Object.keys(cssDefaults).forEach(key => {
            localStorage.removeItem(key);
        });
    };

    // Update numeric settings with constraints
    const updateSetting = (key, value) => {
        let newValue = parseFloat(value);

        // Apply constraints
        if (key === 'fontSize') newValue = Math.max(8, Math.min(36, newValue));
        if (key === 'contentPadding') newValue = Math.max(1, Math.min(40, newValue));
        if (key === 'lineHeight') newValue = Math.max(1.0, Math.min(3.0, newValue));
        if (key === 'paragraphGap') newValue = Math.max(1, Math.min(50, newValue));
        if (key === 'letterSpacing') newValue = Math.max(0, Math.min(5, newValue));
        if (key === 'wordSpacing') newValue = Math.max(0, Math.min(5, newValue));

        const newSettings = {
            ...settings,
            [key]: newValue
        };

        setSettings(newSettings);
        localStorage.setItem(key, newValue);
    };

    // Handle button adjustments
    const adjustSetting = (key, delta) => {
        updateSetting(key, settings[key] + delta);
    };

    // Handle color changes
    const handleColorChange = (key, color) => {
        const newSettings = {
            ...settings,
            [key]: color
        };
        setSettings(newSettings);
        localStorage.setItem(key, color);
    };

    // Handle font family change
    const handleFontFamilyChange = (family) => {
        const newSettings = {
            ...settings,
            fontFamily: family
        };
        setSettings(newSettings);
        localStorage.setItem('fontFamily', family);
    };

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


    if (!isLoaded) return null;

    // Previous/Next Chapter buttons
    const currentIndex = chapters.findIndex(ch => ch.id === currentChapter);
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    return (
        <div className={`function-bar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`sidebar-btn ${isVisible ? 'visible' : 'hidden'}`}
                onClick={() => { toggleSidebar(); }}>
                {sidebarVisible ? '←' : '→'}
            </div>
            {isSmallScreen ? (
                renderMobileLayout()
            ) : (
                <div className="fnbar-main">
                    <div className="fnbar-sub">
                        <div
                            className="fnbar-sub-sizes"
                            style={{
                                display: isBetweenSizes ? (showSizes ? 'flex' : 'none') : 'flex',
                            }}
                        >
                            <div className="fnbar-sub-sizes-part">
                                {/* Font Size */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.fontsize")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="12"
                                                max="36"
                                                step="1"
                                                value={settings.fontSize}
                                                onChange={(e) => updateSetting('fontSize', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Letter Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.letterspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.letterSpacing}
                                                onChange={(e) => updateSetting('letterSpacing', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Word Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.wordspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.wordSpacing}
                                                onChange={(e) => updateSetting('wordSpacing', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fnbar-sub-sizes-part">
                                {/* Padding */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.padding")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="40"
                                                step="1"
                                                value={settings.contentPadding}
                                                onChange={(e) => updateSetting('contentPadding', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Line Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.linespacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight', -0.1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1.0"
                                                max="3.0"
                                                step="0.1"
                                                value={settings.lineHeight}
                                                onChange={(e) => updateSetting('lineHeight', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight', 0.1)}>+</button>
                                    </div>
                                </div>
                                {/* Paragraph Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.paragraphspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="50"
                                                step="1"
                                                value={settings.paragraphGap}
                                                onChange={(e) => updateSetting('paragraphGap', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="fnbar-sub-styles"
                            style={{
                                display: isBetweenSizes ? (showSizes ? 'none' : 'flex') : 'flex',
                            }}
                        >
                            <div className="chapter-nav">
                                {prevChapter && (
                                    <button className="chapter-nav-lrg-btn" onClick={() => setCurrentChapter(prevChapter.id)}>
                                        {getTitle(prevChapter, 15)}
                                    </button>
                                )}
                            </div>
                            <div className="fnbar-sub-fonts">
                                {/* Font Family */}
                                <div className="fnbar-comps font-family">
                                    <span className="fnbar-font-family-title">{t("storyfnbar.fontfamily")}</span>
                                    {/* <button onClick={() => handleFontFamilyChange('F-Content')}>Montserrat</button> */}
                                    <button onClick={() => handleFontFamilyChange('Quicksand')}>Quicksand</button>
                                    <button onClick={() => handleFontFamilyChange('Open Sans')}>Open Sans</button>
                                    <button onClick={() => handleFontFamilyChange('OpenDyslexic')}>Open Dyslexic</button>
                                    {/* <button onClick={() => handleFontFamilyChange('F-Title')}>Lora</button> */}
                                    <button onClick={() => handleFontFamilyChange('F-CharCardName')}>Constantia</button>
                                    <button onClick={() => handleFontFamilyChange('Roboto Light')}>Roboto Light</button>
                                </div>
                            </div>
                            <div className="fnbar-sub-colors">
                                {/* Text Color */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.textcolor")}</span>
                                    <input
                                        type="color"
                                        value={settings.fontColor}
                                        onChange={(e) => handleColorChange('fontColor', e.target.value)}
                                    />
                                </div>

                                {/* Background Color */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.backgroundcolor")}</span>
                                    <input
                                        type="color"
                                        value={settings.bgColor}
                                        onChange={(e) => handleColorChange('bgColor', e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="fnbar-default-sub" onClick={resetToDefault}>{t("storyfnbar.reset")}</button>
                            <div className="chapter-nav">
                                {nextChapter && (
                                    <button className="chapter-nav-lrg-btn" onClick={() => setCurrentChapter(nextChapter.id)}>
                                        {getTitle(nextChapter, 15)} →
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {isBetweenSizes && (
                        <div className="fnbar-sub-menu">
                            {showSizes && (
                                <button className="fnbar-sub-menu-btn-styles" onClick={() => setShowSizes(false)}>
                                    {t("storyfnbar.styles")}
                                </button>
                            )}
                            {!showSizes && (
                                <button className="fnbar-sub-menu-btn-sizes" onClick={() => setShowSizes(true)}>
                                    {t("storyfnbar.sizes")}
                                </button>
                            )}
                            <button className="fnbar-default-menu" onClick={resetToDefault}>{t("storyfnbar.reset")}</button>
                            <div className="chapter-nav">
                                {prevChapter && (
                                    <button onClick={() => setCurrentChapter(prevChapter.id)}>
                                        {/* ← {prevChapter.title} */}
                                        {/* ← {prevChapter.title.substring(0, 20)}{prevChapter.title.length > 20 ? '...' : ''} */}
                                        &lt;
                                    </button>
                                )}
                                {nextChapter && (
                                    <button onClick={() => setCurrentChapter(nextChapter.id)}>
                                        {/* {nextChapter.title} → */}
                                        {/* {nextChapter.title.substring(0, 20)}{nextChapter.title.length > 20 ? '...' : ''} → */}
                                        &gt;
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
}

export default StoryFnBar;