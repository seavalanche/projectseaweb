// function scrollToSection(id) {
//     const el = document.getElementById(id);
//     if (el) {
//         el.scrollIntoView({ behavior: 'smooth' });
//     }
// }
function StorySidebar({ visible, toggleSidebar, currentChapter, onChapterSelect  }) {
        // Define your chapters data
        const chapters = [
            { id: 'chapter1', title: 'Chapter 1: The Dream Begins' },
            { id: 'chapter2', title: 'Chapter 2: A Fragmented Heart' },
            // Add more chapters as needed
        ];

    return (
        <div
            className={`sidebar ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}
            onMouseEnter={() => !visible && toggleSidebar()}
        >
            <div className="sidebar-toc-title">Table of Contents</div>
            {visible && (
                // <ul>
                //     <li><div className="sidebar-toc-list" onClick={() => scrollToSection('chapter1')}>Chapter 1</div></li>
                //     <li><div className="sidebar-toc-list" onClick={() => scrollToSection('chapter2')}>Chapter 2</div></li>
                // </ul>
                <ul>
                {chapters.map((chapter) => (
                    <li key={chapter.id}>
                        <div 
                            className={`sidebar-toc-list ${currentChapter === chapter.id ? 'active-chapter' : ''}`}
                            onClick={() => onChapterSelect(chapter.id)}
                        >
                            {chapter.title}
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default StorySidebar;