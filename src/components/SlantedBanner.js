import '../styles/components/SlantedBanner.css';
import { useState, useEffect, useRef } from 'react';

// Sub-component to manage individual slice playlists
function SlantedSlice({ section, index, total, getClipPath }) {
    const videoList = section.videos || (section.videoSrc ? [section.videoSrc] : []);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        if (videoList.length > 1) {
            // Move to the next video in the playlist
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
        } else {
            // Safety fallback for single videos: force replay from start
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Autoplay issue:", error);
            });
        }
    }, [currentVideoIndex]);

    const widthPercent = (100 / total) + 12;
    const leftPercent = (index / total) * (100 - 12);

    return (
        <div
            className="slanted-slice"
            style={{
                zIndex: index + 1,
                width: `${widthPercent}%`,
                left: `${leftPercent}%`,
                clipPath: getClipPath(index, total)
            }}
        >
            <video
                ref={videoRef}
                src={videoList[currentVideoIndex]}
                style={{ objectPosition: section.objectPosition || 'center center' }}
                autoPlay
                muted
                playsInline
                preload="auto"
                // --- THIS IS THE FIX ---
                // If there's only 1 video, let the browser handle seamless native looping.
                // If there are multiple, let onEnded handle the playlist transition.
                loop={videoList.length === 1}
                onEnded={handleVideoEnded}
            />
        </div>
    );
}

// Main Banner Component
export default function SlantedBanner({ sections = [] }) {
    const total = sections.length;

    const getClipPath = (index) => {
        if (index === 0) {
            return 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)';
        } else if (index === total - 1) {
            return 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)';
        } else {
            return 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)';
        }
    };

    return (
        <div className="slanted-banner-wrapper">
            {sections.map((section, index) => (
                <SlantedSlice
                    key={index}
                    section={section}
                    index={index}
                    total={total}
                    getClipPath={getClipPath}
                />
            ))}
        </div>
    );
}