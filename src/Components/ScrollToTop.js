import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Skip completely for Story page
        if (pathname.includes('/Story')) return;

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