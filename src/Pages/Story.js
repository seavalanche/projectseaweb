import { useState, useEffect } from 'react'
import StorySidebar from '../Components/StorySidebar'
import StoryFnBar from '../Components/StoryFnBar'
import StoryContent from '../Components/StoryContent'

function Story() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const isSmall = width < 1200;

            setIsSmallScreen(isSmall);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const renderMobileLayout = () => (
        <div className="story-1st-wrapper">
            <div className="story-2nd-wrapper">
                <StoryContent />
                <StorySidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
                <StoryFnBar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            </div>
        </div>
    );

    const [sidebarVisible, setSidebarVisible] = useState(false)
    const [currentChapter, setCurrentChapter] = useState('chapter1');
    // Load saved chapter from localStorage when component mounts
    useEffect(() => {
        const savedChapter = localStorage.getItem('lastReadChapter');
        if (savedChapter) {
            setCurrentChapter(savedChapter);
        }
    }, []);
    // Save current chapter to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lastReadChapter', currentChapter);
    }, [currentChapter]);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleChapterSelect = (chapterId) => {
        setCurrentChapter(chapterId);
        // Close sidebar after selection if on mobile
        if (window.innerWidth < 768) {
            setSidebarVisible(false);
        }
    };

    return (
        <div>
            {isSmallScreen ? (renderMobileLayout()) : (
                <div className="story-1st-wrapper">
                    <StorySidebar
                        visible={sidebarVisible}
                        toggleSidebar={toggleSidebar}
                        currentChapter={currentChapter}
                        onChapterSelect={handleChapterSelect}
                    />
                    <div className="story-2nd-wrapper">
                        <StoryFnBar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                        <StoryContent chapterId={currentChapter} />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Story;