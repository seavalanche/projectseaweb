import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            // 🍬 Add tiny delay before scrolling
            const timeoutId = setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }, 50); // 50 milliseconds delay!

            // 🍬 Clean up just in case (good habit)
            return () => clearTimeout(timeoutId);
        }
    }, [pathname, hash]);

    return null;
}
