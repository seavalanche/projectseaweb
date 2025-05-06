import { useEffect, useState } from 'react';
import { getBookmark, saveBookmark } from '../Components/StoryBookmark'

// Import your chapter components
import Prologue from '../Pages/Chapters/Prologue';
import Chapter1 from '../Pages/Chapters/Chapter1';
import Chapter2 from '../Pages/Chapters/Chapter2';
import Chapter3 from '../Pages/Chapters/Chapter3';
// Import more chapters as needed

function StoryContent({ chapterId }) {
    // Progress Tracking + ScrollTOTop
    // keep the progress tracking while still having some control over scrolling
    const [initialLoad, setInitialLoad] = useState(true);
    useEffect(() => {
        // Only restore position on initial load
        if (initialLoad) {
            const savedPosition = getBookmark(chapterId);
            window.scrollTo(0, savedPosition);
            setInitialLoad(false);
        }

        return () => {
            if (!initialLoad) {
                saveBookmark(chapterId, window.scrollY);
            }
        };
    }, [chapterId, initialLoad]);

    // Scroll to top when chapter changes
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [chapterId]);

    // Render the selected chapter
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

    return (
        <div id="story-content-wrapper">
            {renderChapter()}
        </div>
    );
}

export default StoryContent;