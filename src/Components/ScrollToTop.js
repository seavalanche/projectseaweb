import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // List of paths where we don't want auto-scroll
        const noScrollPaths = ['/Story', '/other-path'];

        if (!hash && !noScrollPaths.some(path => pathname.includes(path))) {
            const timeoutId = setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }, 50);

            return () => clearTimeout(timeoutId);
        }
    }, [pathname, hash]);
}