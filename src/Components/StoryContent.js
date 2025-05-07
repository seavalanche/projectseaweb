import { useEffect, useState, useRef } from 'react';
import { getBookmark, saveBookmark } from '../Components/StoryBookmark'
// import SpeechPlayer from './SpeechPlayer';

// Import your chapter components
import Prologue from '../Pages/Chapters/Prologue';
import Chapter1 from '../Pages/Chapters/Chapter1';
import Chapter2 from '../Pages/Chapters/Chapter2';
import Chapter3 from '../Pages/Chapters/Chapter3';
// Import more chapters as needed

function StoryContent({ chapterId }) {
    // Progress Tracking + ScrollTOTop
    const [initialScrollDone, setInitialScrollDone] = useState(false);
    const contentRef = useRef(null);
    useEffect(() => {
        // Only run this effect when chapter changes
        const savedPosition = getBookmark(chapterId);

        // Use requestAnimationFrame for more reliable timing
        const scrollTimer = requestAnimationFrame(() => {
            if (savedPosition > 0 && !initialScrollDone) {
                window.scrollTo({
                    top: savedPosition,
                    behavior: 'auto' // Instant scroll
                });
                setInitialScrollDone(true);
            }
        });

        return () => {
            cancelAnimationFrame(scrollTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chapterId]); // Only depend on chapterId
    // Bookmark (?)
    useEffect(() => {
        const handleBeforeUnload = () => {
            saveBookmark(chapterId, window.scrollY);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            saveBookmark(chapterId, window.scrollY);
        };
    }, [chapterId]);
    useEffect(() => {
        // Add to StoryContent.js
        const handleScroll = () => {
            if (initialScrollDone) { // Only save after initial restore
                saveBookmark(chapterId, window.scrollY);
            }
        };

        // Throttle scroll events for better performance
        const throttledScroll = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [chapterId, initialScrollDone]);
    // Throttle utility function
    function throttle(fn, wait) {
        let lastTime = 0;
        return function () {
            const now = Date.now();
            if (now - lastTime >= wait) {
                fn.apply(this, arguments);
                lastTime = now;
            }
        };
    }

    // Import the chapters here!
    const renderChapter = () => {
        switch (chapterId) {
            case 'prologue':
                return <Prologue />;
            case 'chapter1':
                return <Chapter1 />;
            case 'chapter2':
                return <Chapter2 />;
            case 'chapter3':
                return <Chapter3 />;
            // Add more cases as needed
            default:
                return <Chapter1 />;
        }
    };

    // Reading Progress Bar
    const [readingProgress, setReadingProgress] = useState(0);
    useEffect(() => {
        // Track scroll progress
        const handleScroll = () => {
            const contentHeight = document.getElementById('story-content-wrapper')?.scrollHeight || 0;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (contentHeight > windowHeight) {
                const progress = (scrollPosition / (contentHeight - windowHeight)) * 100;
                setReadingProgress(Math.min(100, Math.max(0, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [chapterId]);

    // Get the actual text content for speech
    const [storyText, setStoryText] = useState('');
    // const contentRef = useRef(null);
    useEffect(() => {
        // Extract text from rendered content
        const extractText = () => {
            if (contentRef.current) {
                const clone = contentRef.current.cloneNode(true);
                // Remove elements that shouldn't be read
                const ignoreElements = clone.querySelectorAll(
                    'button, img, .speech-controls, .reading-progress'
                );
                ignoreElements.forEach(el => el.remove());
                setStoryText(clone.textContent.trim());
            }
        };

        // Delay slightly to ensure DOM is ready
        const timer = setTimeout(extractText, 100);
        return () => clearTimeout(timer);
    }, [chapterId]);

    return (
        <div id="story-content-wrapper" ref={contentRef}>
            {/* <SpeechPlayer content={storyText} className="story-speech-player" /> */}
            {renderChapter()}
            <div className="reading-progress-container">
                <div
                    className="reading-progress-bar"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>
        </div>
    );
}

export default StoryContent;