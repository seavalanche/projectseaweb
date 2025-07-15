import { useState, useEffect, useCallback, useRef } from "react";
import { chapters } from '../Pages/Chapters/poem-metadata';
import { useLocalization } from "../localization/hooks/useLocalization";

function PoemFnBar({
    toggleSidebar,
    sidebarVisible,
    currentChapter,
    setCurrentChapter,
}) {
    const { t, getTitle } = useLocalization();

    // const [isBetweenSizes, setIsBetweenSizes] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    // const [showSizes, setShowSizes] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null); // can be 'sizes', 'styles', or null

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            // const inRange = width >= 1200 && width <= 1715;
            const isSmall = width < 1200;

            // setIsBetweenSizes(inRange);
            setIsSmallScreen(isSmall);

            // Reset view based on screen size
            // if (!inRange) setShowSizes(true); // show both if out of toggle range
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
                    {/* {sidebarVisible ? '↑' : '↓'} */}
                    {sidebarVisible ?
                        <div className="sidebar-btn-mobile-open"></div>
                        :
                        <div className="sidebar-btn-mobile-close"></div>
                    }
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
                <div className="fnbar-default-menu" onClick={resetToDefault}></div>
            </div>
        </div>
    );

    // State initialization with loading flag
    const [isLoaded, setIsLoaded] = useState(false);
    const [settings, setSettings] = useState({
        fontSize2: '--Fs-Content',
        fontFamily2: '--F-Content',
        fontColor2: '#000000',
        bgColor2: '--text-color-1b',
        contentPadding2: '--content-padding2',
        lineHeight2: '--line-height2',
        paragraphGap2: '--paragraph-gap2',
        letterSpacing2: '--letter-spacing2',
        wordSpacing2: '--word-spacing2',
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
            fontSize2: getNumericValue('--Fs-Content'),
            fontFamily2: styles.getPropertyValue('--F-Content').trim(),
            fontColor2: styles.getPropertyValue('--text-color-1b').trim(),
            bgColor2: styles.getPropertyValue('--bg-color-3').trim(),
            contentPadding2: getNumericValue('--content-padding2'),
            lineHeight2: getNumericValue('--line-height2'),
            paragraphGap2: getNumericValue('--paragraph-gap2'),
            letterSpacing2: getNumericValue('--letter-spacing2'),
            wordSpacing2: getNumericValue('--word-spacing2'),
        };
    }, []);

    // Apply styles to DOM
    const applyStyles = useCallback(() => {
        const root = document.getElementById('poem-content-wrapper');
        if (!root) return;

        root.style.setProperty('--Fs-Content', `${settings.fontSize2}pt`);
        root.style.setProperty('--F-Content', settings.fontFamily2);
        root.style.setProperty('--text-color-1b', settings.fontColor2);
        root.style.setProperty('--bg-color-3', settings.bgColor2);
        root.style.setProperty('--content-padding2', `${settings.contentPadding2}vw`);
        root.style.setProperty('--line-height2', settings.lineHeight2);
        root.style.setProperty('--paragraph-gap2', `${settings.paragraphGap2}px`);
        root.style.setProperty('--letter-spacing2', `${settings.letterSpacing2}px`);
        root.style.setProperty('--word-spacing2', `${settings.wordSpacing2}px`);
    }, [settings]);

    // Load initial settings
    useEffect(() => {
        const loadSettings = () => {
            const cssDefaults = getCSSDefaults();
            const savedSettings = {
                fontSize2: parseFloat(localStorage.getItem('fontSize2')) || cssDefaults.fontSize2,
                fontFamily2: localStorage.getItem('fontFamily2') || cssDefaults.fontFamily2,
                fontColor2: localStorage.getItem('fontColor2') || cssDefaults.fontColor2,
                bgColor2: localStorage.getItem('bgColor2') || cssDefaults.bgColor2,
                contentPadding2: parseFloat(localStorage.getItem('contentPadding2')) || cssDefaults.contentPadding2,
                lineHeight2: parseFloat(localStorage.getItem('lineHeight2')) || cssDefaults.lineHeight2,
                paragraphGap2: parseFloat(localStorage.getItem('paragraphGap2')) || cssDefaults.paragraphGap2,
                letterSpacing2: parseFloat(localStorage.getItem('letterSpacing2')) || cssDefaults.letterSpacing2,
                wordSpacing2: parseFloat(localStorage.getItem('wordSpacing2')) || cssDefaults.wordSpacing2,
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
        if (key === 'fontSize2') newValue = Math.max(8, Math.min(36, newValue));
        if (key === 'contentPadding2') newValue = Math.max(1, Math.min(40, newValue));
        if (key === 'lineHeight2') newValue = Math.max(1.0, Math.min(3.0, newValue));
        if (key === 'paragraphGap2') newValue = Math.max(1, Math.min(50, newValue));
        if (key === 'letterSpacing2') newValue = Math.max(0, Math.min(5, newValue));
        if (key === 'wordSpacing2') newValue = Math.max(0, Math.min(5, newValue));

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
            fontFamily2: family
        };
        setSettings(newSettings);
        localStorage.setItem('fontFamily2', family);
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
                {sidebarVisible ?
                    <div className="sidebar-btn-open"></div>
                    :
                    <div className="sidebar-btn-close"></div>
                }
            </div>
            {isSmallScreen ? (
                renderMobileLayout()
            ) : (
                <div className="fnbar-main">
                    <div className="fnbar-sub">
                        <div className="fnbar-sub-sizes">
                            {/* <div
                            className="fnbar-sub-sizes"
                            style={{
                                display: isBetweenSizes ? (showSizes ? 'flex' : 'none') : 'flex',
                            }}
                        > */}
                            <div className="fnbar-sub-sizes-part">
                                {/* Font Size */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.fontsize")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="12"
                                                max="36"
                                                step="1"
                                                value={settings.fontSize2}
                                                onChange={(e) => updateSetting('fontSize2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize2', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Letter Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.letterspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.letterSpacing2}
                                                onChange={(e) => updateSetting('letterSpacing2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing2', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Word Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.wordspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.wordSpacing2}
                                                onChange={(e) => updateSetting('wordSpacing2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing2', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fnbar-sub-sizes-part">
                                {/* Padding */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.padding")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="40"
                                                step="1"
                                                value={settings.contentPadding2}
                                                onChange={(e) => updateSetting('contentPadding2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding2', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Line Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.linespacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight2', -0.1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1.0"
                                                max="3.0"
                                                step="0.1"
                                                value={settings.lineHeight2}
                                                onChange={(e) => updateSetting('lineHeight2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight2', 0.1)}>+</button>
                                    </div>
                                </div>
                                {/* Paragraph Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.paragraphspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="50"
                                                step="1"
                                                value={settings.paragraphGap2}
                                                onChange={(e) => updateSetting('paragraphGap2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap2', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fnbar-sub-sizes2">
                            <div className="fnbar-sub-sizes-part">
                                {/* Font Size */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.fontsize")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="12"
                                                max="36"
                                                step="1"
                                                value={settings.fontSize2}
                                                onChange={(e) => updateSetting('fontSize2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('fontSize2', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Letter Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.letterspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.letterSpacing2}
                                                onChange={(e) => updateSetting('letterSpacing2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('letterSpacing2', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fnbar-sub-sizes-part">
                                {/* Word Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.wordspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="1"
                                                value={settings.wordSpacing2}
                                                onChange={(e) => updateSetting('wordSpacing2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('wordSpacing2', 1)}>+</button>
                                    </div>
                                </div>
                                {/* Padding */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.padding")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="40"
                                                step="1"
                                                value={settings.contentPadding2}
                                                onChange={(e) => updateSetting('contentPadding2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('contentPadding2', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="fnbar-sub-sizes-part">
                                {/* Line Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.linespacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight2', -0.1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1.0"
                                                max="3.0"
                                                step="0.1"
                                                value={settings.lineHeight2}
                                                onChange={(e) => updateSetting('lineHeight2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('lineHeight2', 0.1)}>+</button>
                                    </div>
                                </div>
                                {/* Paragraph Spacing */}
                                <div className="fnbar-comps">
                                    <span>{t("storyfnbar.paragraphspacing")}</span>
                                    <div className="slider-wrapper">
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap2', -1)}>-</button>
                                        <div className="slide-container">
                                            <input
                                                className="slider"
                                                type="range"
                                                min="1"
                                                max="50"
                                                step="1"
                                                value={settings.paragraphGap2}
                                                onChange={(e) => updateSetting('paragraphGap2', e.target.value)}
                                            />
                                        </div>
                                        <button className="slider-btn" onClick={() => adjustSetting('paragraphGap2', 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fnbar-sub-styles">
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
                                    <button className="fnbar-font-family-title2" onClick={() => handleFontFamilyChange('F-Content')}>Montserrat</button>
                                    <button onClick={() => handleFontFamilyChange('Quicksand')}>Quicksand</button>
                                    <button onClick={() => handleFontFamilyChange('Open Sans')}>Open Sans</button>
                                    <button onClick={() => handleFontFamilyChange('OpenDyslexic')}>Open Dyslexic</button>
                                    <button className="fnbar-font-family-title2" onClick={() => handleFontFamilyChange('F-Title')}>Lora</button>
                                    <button onClick={() => handleFontFamilyChange('F-CharCardName')}>Constantia</button>
                                    <button onClick={() => handleFontFamilyChange('Roboto Light')}>Roboto Light</button>
                                </div>
                            </div>
                            <div className="fnbar-sub-styles2">
                                <div className="chapter-nav2">
                                    {prevChapter && (
                                        <button className="chapter-nav-lrg-btn" onClick={() => setCurrentChapter(prevChapter.id)}>
                                            {getTitle(prevChapter, 25)}
                                        </button>
                                    )}
                                </div>
                                <div className="fnbar-sub-colors">
                                    {/* Text Color */}
                                    <div className="fnbar-comps">
                                        <span>{t("storyfnbar.textcolor")}</span>
                                        <input
                                            type="color"
                                            value={settings.fontColor2}
                                            onChange={(e) => handleColorChange('fontColor2', e.target.value)}
                                        />
                                    </div>

                                    {/* Background Color */}
                                    <div className="fnbar-comps">
                                        <span>{t("storyfnbar.backgroundcolor")}</span>
                                        <input
                                            type="color"
                                            value={settings.bgColor2}
                                            onChange={(e) => handleColorChange('bgColor2', e.target.value)}
                                        />
                                    </div>
                                    <button className="fnbar-default-sub2" onClick={resetToDefault}>{t("storyfnbar.reset")}</button>
                                </div>
                                <div className="chapter-nav2">
                                    {nextChapter && (
                                        <button className="chapter-nav-lrg-btn" onClick={() => setCurrentChapter(nextChapter.id)}>
                                            {getTitle(nextChapter, 25)} →
                                        </button>
                                    )}
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


                </div>
            )}
        </div>
    );
}

export default PoemFnBar;