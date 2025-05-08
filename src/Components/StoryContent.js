import { useEffect, useState, useRef } from 'react';
import { getBookmark, saveBookmark } from '../Components/StoryBookmark'
import { useLocalization } from '../localization/hooks/useLocalization';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function StoryContent({ chapterId }) {
    const { language } = useLocalization();
    const [markdownContent, setMarkdownContent] = useState('');
    const contentRef = useRef(null);

    // Load markdown content
    useEffect(() => {
        const loadChapter = async () => {
            try {
                const content = await import(
                    `../translations/${language}/storychapters/${chapterId}.md`
                );
                const response = await fetch(content.default);
                const text = await response.text();
                setMarkdownContent(text);
            } catch (error) {
                console.error('Error loading chapter:', error);
                // Fallback to English if translation missing
                if (language !== 'en') {
                    const enContent = await import(
                        `../translations/en/storychapters/${chapterId}.md`
                    );
                    const response = await fetch(enContent.default);
                    const text = await response.text();
                    setMarkdownContent(text);
                }
            }
        };

        loadChapter();
    }, [chapterId, language]);

    // Progress Tracking + ScrollTOTop
    const [initialScrollDone, setInitialScrollDone] = useState(false);
    // const contentRef = useRef(null);
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
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h2: ({ node, ...props }) => (
                        // eslint-disable-next-line jsx-a11y/heading-has-content
                        <h2 className="story-title" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                        <p className="story-paragraph" {...props} />
                    )
                }}
            >
                {markdownContent}
            </ReactMarkdown>
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