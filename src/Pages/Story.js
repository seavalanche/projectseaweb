import StorySidebar from '../Components/StorySidebar'
import StoryFnBar from '../Components/StoryFnBar'
import StoryContent from '../Components/StoryContent'
import { useState } from 'react'

function Story() {
    const [sidebarVisible, setSidebarVisible] = useState(true)

    const toggleSidebar = () => setSidebarVisible(prev => !prev)

    return (
        <div className="story-1st-wrapper">
            <StorySidebar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div className="story-2nd-wrapper">
                <StoryFnBar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <StoryContent />
            </div>
        </div>

    )
}

export default Story;