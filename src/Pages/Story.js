import { useState, useEffect } from 'react'
import StorySidebar from '../Components/StorySidebar'
import StoryFnBar from '../Components/StoryFnBar'
import StoryContent from '../Components/StoryContent'

function Story() {
    // This is for rendering the mobile version of the Story page
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
                <StoryContent
                    chapterId={currentChapter}
                />
                <StorySidebar
                    readingProgress={readingProgress}
                    visible={sidebarVisible}
                    toggleSidebar={toggleSidebar}
                    currentChapter={currentChapter}
                    onChapterSelect={setCurrentChapter}
                />
                <StoryFnBar
                    toggleSidebar={toggleSidebar}
                    sidebarVisible={sidebarVisible}
                    currentChapter={currentChapter}
                    setCurrentChapter={setCurrentChapter}
                />
            </div>
        </div>
    );

    // Sidebar things
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const [currentChapter, setCurrentChapter] = useState('intro');
    useEffect(() => {
        // Load saved chapter from localStorage when component mounts
        const savedChapter = localStorage.getItem('lastReadChapter');
        if (savedChapter) {
            setCurrentChapter(savedChapter);
        }
    }, []);
    useEffect(() => {
        // Save current chapter to localStorage whenever it changes
        localStorage.setItem('lastReadChapter', currentChapter);
    }, [currentChapter]);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Progress Tracking System
    const [readingProgress, setReadingProgress] = useState({});
    useEffect(() => {
        // Load progress from localStorage
        const savedProgress = localStorage.getItem('readingProgress');
        if (savedProgress) {
            setReadingProgress(JSON.parse(savedProgress));
        }
    }, []);
    useEffect(() => {
        // Save progress to localStorage
        localStorage.setItem('readingProgress', JSON.stringify(readingProgress));
    }, [readingProgress]);

    return (
        <div>
            {isSmallScreen ? (renderMobileLayout()) : (
                <div className="story-1st-wrapper">
                        <StorySidebar
                            readingProgress={readingProgress}
                            visible={sidebarVisible}
                            toggleSidebar={toggleSidebar}
                            currentChapter={currentChapter}
                            onChapterSelect={setCurrentChapter}
                        />
                    <div className="story-2nd-wrapper">
                        <StoryFnBar
                            toggleSidebar={toggleSidebar}
                            sidebarVisible={sidebarVisible}
                            currentChapter={currentChapter}
                            setCurrentChapter={setCurrentChapter}
                        />
                        <StoryContent
                            chapterId={currentChapter}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Story;