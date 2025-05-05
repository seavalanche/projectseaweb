import { useState, useEffect, useCallback, useRef } from "react";

function StoryFnBar({ toggleSidebar, sidebarVisible }) {
    // Menu when in smaller screen
    // const [menuOpen, setMenuOpen] = useState(false);
    // const handleMenuToggle = () => {
    //     setMenuOpen(!menuOpen);
    // };
    // const closeMenu = () => setMenuOpen(false);
    const [isBetweenSizes, setIsBetweenSizes] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showSizes, setShowSizes] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const inRange = width >= 1201 && width <= 1675;
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
        <div className="fnbar-mobile">
            <div className="fnbar-mobile-header">💖 Pick your options!</div>
            <div className="fnbar-mobile-buttons">
                <button onClick={() => alert("Sizes go here~")}>Sizes</button>
                <button onClick={() => alert("Styles go here~")}>Styles</button>
            </div>
            <button className="fnbar-default-menu" onClick={resetToDefault}>Default</button>
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
        paragraphGap: '--paragraph-gap'
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
            paragraphGap: getNumericValue('--paragraph-gap')
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
                paragraphGap: parseFloat(localStorage.getItem('paragraphGap')) || cssDefaults.paragraphGap
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
        if (key === 'fontSize') newValue = Math.max(12, Math.min(36, newValue));
        if (key === 'contentPadding') newValue = Math.max(1, Math.min(25, newValue));
        if (key === 'lineHeight') newValue = Math.max(1.0, Math.min(3.0, newValue));
        if (key === 'paragraphGap') newValue = Math.max(1, Math.min(50, newValue));

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

    return (
        <div className={`function-bar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`sidebar-btn ${isVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebar}>
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
                                    <span>Font Size:</span>
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
                                {/* Padding */}
                                <div className="fnbar-comps">
                                    <span>Padding:</span>
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
                            </div>
                            <div className="fnbar-sub-sizes-part">
                                {/* Line Spacing */}
                                <div className="fnbar-comps">
                                    <span>Line Spacing:</span>
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
                                    <span>Paragraph Spacing:</span>
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
                            <div className="fnbar-sub-fonts">
                                {/* Font Family */}
                                <div className="fnbar-comps font-family">
                                    <span className="fnbar-font-family-title">Font:</span>
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
                                    <span>Text Color:</span>
                                    <input
                                        type="color"
                                        value={settings.fontColor}
                                        onChange={(e) => handleColorChange('fontColor', e.target.value)}
                                    />
                                </div>

                                {/* Background Color */}
                                <div className="fnbar-comps">
                                    <span>Background:</span>
                                    <input
                                        type="color"
                                        value={settings.bgColor}
                                        onChange={(e) => handleColorChange('bgColor', e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="fnbar-default-sub" onClick={resetToDefault}>Default</button>
                        </div>
                    </div>
                    {isBetweenSizes && (
                        <div className="fnbar-sub-menu">
                            {showSizes && (
                                <button className="fnbar-sub-menu-btn-styles" onClick={() => setShowSizes(false)}>
                                    Styles
                                </button>
                            )}
                            {!showSizes && (
                                <button className="fnbar-sub-menu-btn-sizes" onClick={() => setShowSizes(true)}>
                                    Sizes
                                </button>
                            )}
                            <button className="fnbar-default-menu" onClick={resetToDefault}>Default</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default StoryFnBar;