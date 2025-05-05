function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
function StorySidebar({ visible, toggleSidebar }) {
    return (
        <div
            className={`sidebar ${visible ? 'sidebar-visible' : 'sidebar-hidden'}`}
            onMouseEnter={() => !visible && toggleSidebar()}
        >
            <div className="sidebar-toc-title">Table of Contents</div>
            {visible && (
                <ul>
                    <li><div className="sidebar-toc-list" onClick={() => scrollToSection('chapter1')}>Chapter 1</div></li>
                    <li><div className="sidebar-toc-list" onClick={() => scrollToSection('chapter2')}>Chapter 2</div></li>
                </ul>
            )}
        </div>
    )
}

export default StorySidebar;