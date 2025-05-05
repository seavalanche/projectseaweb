import { useState, useEffect, useRef } from "react";

function StoryFnBar({ toggleSidebar, sidebarVisible }) {
    const [fontSize, setFontSize] = useState('--Fs-Content');
    const [fontFamily, setFontFamily] = useState('--F-Content');
    const [fontColor, setFontColor] = useState('--text-color-1b');
    const [bgColor, setBgColor] = useState('--bg-color-3');
    const [contentPadding, setContentPadding] = useState('2rem 10rem');
    const [lineHeight, setLineHeight] = useState('1.6');
    const [paragraphGap, setParagraphGap] = useState('10px');

    const loadDefaultsFromCSS = () => {
        const root = document.documentElement;
        const styles = getComputedStyle(root);

        return {
            size: styles.getPropertyValue('--Fs-Content').trim(),
            family: styles.getPropertyValue('--story-font').trim(),
            color: styles.getPropertyValue('--text-color-1b').trim(),
            bg: styles.getPropertyValue('--bg-color-3').trim(),
            padding: styles.getPropertyValue('--story-padding').trim(),
            lineHeight: styles.getPropertyValue('--line-height').trim(),
            paragraphGap: styles.getPropertyValue('--paragraph-gap').trim()
        };
    };

    const clearManualOverrides = () => {
        const root = document.documentElement;
        root.style.removeProperty('--Fs-Content');
        root.style.removeProperty('--F-Content');
        root.style.removeProperty('--text-color-1b');
        root.style.removeProperty('--bg-color-3');
        root.style.removeProperty('--Content-Padding');
        root.style.removeProperty('--line-height');
        root.style.removeProperty('--paragraph-gap');
    };

    useEffect(() => {
        const observer = new MutationObserver(() => {
            clearManualOverrides();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    const resetToDefault = () => {
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontFamily');
        localStorage.removeItem('fontColor');
        localStorage.removeItem('bgColor');
        localStorage.removeItem('contentPadding');
        localStorage.removeItem('lineHeight');
        localStorage.removeItem('paragraphGap');

        const { size, family, color, bg, padding } = loadDefaultsFromCSS();

        setFontSize(size);
        setFontFamily(family);
        setFontColor(color);
        setBgColor(bg);
        setContentPadding(padding);
        setLineHeight(lineHeight);
        setParagraphGap(paragraphGap);

        applyStyle(size, family, color, bg, padding, lineHeight, paragraphGap);
    };

    const applyStyle = (size, family, color, bg, padding, lineHeight, paragraphGap) => {
        const root = document.getElementById('story-content-wrapper');

        if (root) {
            root.style.setProperty('--Fs-Content', size);
            root.style.setProperty('--F-Content', family);
            root.style.setProperty('--text-color-1b', color);
            root.style.setProperty('--bg-color-3', bg);
            root.style.setProperty('--Content-Padding', padding);
            root.style.setProperty('--line-height', lineHeight);
            root.style.setProperty('--paragraph-gap', paragraphGap);
        }
    };

    const changeFontSize = (direction) => {
        let size = parseInt(fontSize);
        size = direction === 'up' ? size + 2 : size - 2;
        const newSize = `${size}pt`;
        setFontSize(newSize);
        localStorage.setItem('fontSize', newSize);
        applyStyle(newSize, fontFamily, fontColor, bgColor, contentPadding, lineHeight, paragraphGap);
    };

    const changePadding = (newPadding) => {
        setContentPadding(newPadding);
        localStorage.setItem('contentPadding', newPadding);
        applyStyle(fontSize, fontFamily, fontColor, bgColor, newPadding, lineHeight, paragraphGap);
    };
    const changeLineHeight = (newLineHeight) => {
        setLineHeight(newLineHeight);
        localStorage.setItem('lineHeight', newLineHeight);
        applyStyle(fontSize, fontFamily, fontColor, bgColor, contentPadding, newLineHeight, paragraphGap);
    };
    const changeParagraphGap = (newParagraphGap) => {
        setParagraphGap(newParagraphGap);
        localStorage.setItem('paragraphGap', newParagraphGap);
        applyStyle(fontSize, fontFamily, fontColor, bgColor, contentPadding, lineHeight, newParagraphGap);
    };

    const changeFontFamily = (family) => {
        setFontFamily(family);
        localStorage.setItem('fontFamily', family);
        applyStyle(fontSize, family, fontColor, bgColor, contentPadding, lineHeight, paragraphGap);
    };

    const changeFontColor = (color) => {
        setFontColor(color);
        localStorage.setItem('fontColor', color);
        applyStyle(fontSize, fontFamily, color, bgColor, contentPadding, lineHeight, paragraphGap);
    };

    const changeBgColor = (color) => {
        setBgColor(color);
        localStorage.setItem('bgColor', color);
        applyStyle(fontSize, fontFamily, fontColor, color, contentPadding, lineHeight, paragraphGap);
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

    return (
        <div className={`function-bar ${isVisible ? 'visible' : 'hidden'}`}>
            <div className={`sidebar-btn ${isVisible ? 'visible' : 'hidden'}`} onClick={toggleSidebar}>
                {sidebarVisible ? '←' : '→'}
            </div>
            <div className="fnbar-main">
                <div className="fnbar-sub">
                    <div className="fnbar-comps">
                        <span>Font Size:</span>
                        <button onClick={() => changeFontSize('down')}>A-</button>
                        <button onClick={() => changeFontSize('up')}>A+</button>
                    </div>
                    <div className="fnbar-comps">
                        <span>Padding:</span>
                        <button onClick={() => changePadding('2rem 5vw')}>1</button>
                        <button onClick={() => changePadding('2rem 10vw')}>2</button>
                        <button onClick={() => changePadding('2rem 15vw')}>3</button>
                    </div>
                    <div className="fnbar-comps">
                        <span>Line Spacing:</span>
                        <button onClick={() => changeLineHeight('1.4')}>1</button>
                        <button onClick={() => changeLineHeight('1.6')}>2</button>
                        <button onClick={() => changeLineHeight('2.0')}>3</button>
                    </div>
                    <div className="fnbar-comps">
                        <span>Paragraph Spacing:</span>
                        <button onClick={() => changeParagraphGap('5px')}>1</button>
                        <button onClick={() => changeParagraphGap('10px')}>2</button>
                        <button onClick={() => changeParagraphGap('20px')}>3</button>
                    </div>
                </div>
                <div className="fnbar-sub">
                    <div className="fnbar-comps">
                        <span>Font:</span>
                        <button onClick={() => changeFontFamily('F-Content')}>Montserrat</button>
                        <button onClick={() => changeFontFamily('Quicksand')}>Quicksand</button>
                        <button onClick={() => changeFontFamily('Open Sans')}>Open Sans</button>
                        <button onClick={() => changeFontFamily('OpenDyslexic')}>Open Dyslexic</button>
                        <button onClick={() => changeFontFamily('F-Title')}>Lora</button>
                        <button onClick={() => changeFontFamily('F-CharCardName')}>Constantia</button>
                        <button onClick={() => changeFontFamily('Roboto Light')}>Roboto Light</button>
                    </div>
                    <div className="fnbar-comps">
                        <span>Text Color:</span>
                        <input type="color" value={fontColor} onChange={(e) => changeFontColor(e.target.value)} />
                    </div>
                    <div className="fnbar-comps">
                        <span>Background:</span>
                        <input type="color" value={bgColor} onChange={(e) => changeBgColor(e.target.value)} />
                    </div>
                    <button onClick={resetToDefault}>Default</button>
                </div>
            </div>
        </div>
    );
}

export default StoryFnBar;
