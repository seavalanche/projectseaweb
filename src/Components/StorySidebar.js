import { useState } from 'react';
import { chapters } from '../Pages/Chapters/metadata';
// import ReadingStats from '../Components/ReadingStats';

function StorySidebar({ visible, toggleSidebar, currentChapter, onChapterSelect }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredChapters = chapters.filter(chapter =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div
            className={`sidebar ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}
            onMouseEnter={() => !visible && toggleSidebar()}
        >
            <div className="sidebar-toc-title">Table of Contents</div>
            {visible && (
                <>
                    {/* <ReadingStats /> */}
                    <div className="sidebar-search">
                        <input
                            type="text"
                            placeholder="Search chapters..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <ul>
                        {filteredChapters.map((chapter) => (
                            <li key={chapter.id}>
                                <div
                                    className={`sidebar-toc-list ${currentChapter === chapter.id ? 'active-chapter' : ''}`}
                                    onClick={() => onChapterSelect(chapter.id)}
                                >
                                    <div className="chapter-title">{chapter.title}</div>
                                    <div className="chapter-desc">{chapter.description}</div>
                                    {chapter.wordCount && (
                                        <div className="chapter-meta">
                                            {Math.ceil(chapter.wordCount / 200)} min read
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {filteredChapters.length === 0 && (
                        <div className="no-results">No chapters found</div>
                    )}
                </>
            )}
        </div>
    )
}

export default StorySidebar;