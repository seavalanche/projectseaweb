import { useEffect, useState, useRef } from 'react';
import { getBookmark, saveBookmark } from './YCHStoryBookmark'

// Import your chapter components
import TTH from './YCHStoryTTH';
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
                return <TTH />;
            // Add more cases as needed
            default:
                return <TTH />;
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