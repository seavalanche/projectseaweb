import { useEffect } from 'react';

// Import your chapter components
import Chapter1 from '../Pages/chapters/Chapter1';
import Chapter2 from '../Pages/chapters/Chapter2';
// Import more chapters as needed

function StoryContent({ chapterId }) {
    // Scroll to top when chapter changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapterId]);

    // Render the selected chapter
    const renderChapter = () => {
        switch(chapterId) {
            case 'chapter1':
                return <Chapter1 />;
            case 'chapter2':
                return <Chapter2 />;
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