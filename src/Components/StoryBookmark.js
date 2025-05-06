export const saveBookmark = (chapterId, scrollPosition) => {
    try {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        bookmarks[chapterId] = scrollPosition;
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch (error) {
        console.error('Error saving bookmark:', error);
        // Reset bookmarks if corrupted
        localStorage.setItem('bookmarks', JSON.stringify({ [chapterId]: scrollPosition }));
    }
};

export const getBookmark = (chapterId) => {
    try {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        return bookmarks[chapterId] || 0;
    } catch (error) {
        console.error('Error reading bookmarks:', error);
        // Reset bookmarks if corrupted
        localStorage.setItem('bookmarks', JSON.stringify({}));
        return 0;
    }
};