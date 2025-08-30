import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// const PAGES_TO_SKIP = ['/Story', '/CharInfo'];

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Skip completely for Story page
        if (pathname.includes('/Story')) return;
        // if (PAGES_TO_SKIP.some(p => pathname.includes(p))) return;

        // Original behavior for other pages
        if (!hash) {
            const timeoutId = setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }, 50);

            return () => clearTimeout(timeoutId);
        }
    }, [pathname, hash]);

    return null;
}