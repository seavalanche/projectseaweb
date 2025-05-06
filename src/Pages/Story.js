import StorySidebar from '../Components/StorySidebar'
import StoryFnBar from '../Components/StoryFnBar'
import StoryContent from '../Components/StoryContent'
import { useState, useEffect } from 'react'

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

    const [sidebarVisible, setSidebarVisible] = useState(true)
    const toggleSidebar = () => setSidebarVisible(prev => !prev)

    return (
        <div>
            {isSmallScreen ? (renderMobileLayout()) : (
                <div className="story-1st-wrapper">
                    <StorySidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
                    <div className="story-2nd-wrapper">
                        <StoryFnBar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                        <StoryContent />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Story;