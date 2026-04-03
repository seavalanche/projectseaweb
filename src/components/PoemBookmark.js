// src/utils/bookmarks.js
let saveTimeout = null;

export const saveBookmark = (chapterId, scrollPosition) => {
    // Debounce the save operation
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        try {
            const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
            bookmarks[chapterId] = scrollPosition;
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        } catch (error) {
            console.error('Error saving bookmark:', error);
            localStorage.setItem('bookmarks', JSON.stringify({}));
        }
    }, 100); // 100ms debounce
};

export const getBookmark = (chapterId) => {
    try {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        return Number(bookmarks[chapterId]) || 0;
    } catch (error) {
        console.error('Error reading bookmarks:', error);
        localStorage.setItem('bookmarks', JSON.stringify({}));
        return 0;
    }
};