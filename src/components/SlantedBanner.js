import '../styles/components/SlantedBanner.css';
import { useState, useRef } from 'react';

// Sub-component to manage individual slice playlists
function SlantedSlice({ section, index, total, getClipPath }) {
    const videoList = section.videos || (section.videoSrc ? [section.videoSrc] : []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(null);

    const videoRefA = useRef(null);
    const videoRefB = useRef(null);
    const [activeRef, setActiveRef] = useState('A'); // Tracks which video element is currently visible

    const isPlaylist = videoList.length > 1;

    // Handle video ending and trigger crossfade
    const handleEnded = () => {
        if (!isPlaylist) {
            // Single video: just loop it smoothly
            if (activeRef === 'A' && videoRefA.current) {
                videoRefA.current.currentTime = 0;
                videoRefA.current.play();
            } else if (activeRef === 'B' && videoRefB.current) {
                videoRefB.current.currentTime = 0;
                videoRefB.current.play();
            }
            return;
        }

        // Playlist: Calculate next index
        const newNextIndex = (currentIndex + 1) % videoList.length;
        setNextIndex(newNextIndex);

        if (activeRef === 'A') {
            // Prepare B, play it, then crossfade
            if (videoRefB.current) {
                videoRefB.current.currentTime = 0;
                videoRefB.current.play().then(() => {
                    setActiveRef('B');
                    setCurrentIndex(newNextIndex);
                    setNextIndex(null);
                }).catch(err => console.log("Crossfade play error:", err));
            }
        } else {
            // Prepare A, play it, then crossfade
            if (videoRefA.current) {
                videoRefA.current.currentTime = 0;
                videoRefA.current.play().then(() => {
                    setActiveRef('A');
                    setCurrentIndex(newNextIndex);
                    setNextIndex(null);
                }).catch(err => console.log("Crossfade play error:", err));
            }
        }
    };

    const widthPercent = (100 / total) + 12;
    const leftPercent = (index / total) * (100 - 12);

    const nextVideoIndex = nextIndex !== null ? nextIndex : (currentIndex + 1) % videoList.length;

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
            {/* Video Layer A */}
            <video
                ref={videoRefA}
                src={videoList[activeRef === 'A' ? currentIndex : nextVideoIndex]}
                style={{
                    objectPosition: section.objectPosition || 'center center',
                    opacity: activeRef === 'A' ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out' // Smooth crossfade transition duration
                }}
                className="crossfade-video"
                autoPlay
                muted
                playsInline
                preload="auto"
                loop={!isPlaylist}
                onEnded={activeRef === 'A' ? handleEnded : undefined}
            />

            {/* Video Layer B */}
            {isPlaylist && (
                <video
                    ref={videoRefB}
                    src={videoList[activeRef === 'B' ? currentIndex : nextVideoIndex]}
                    style={{
                        objectPosition: section.objectPosition || 'center center',
                        opacity: activeRef === 'B' ? 1 : 0,
                        transition: 'opacity 0.6s ease-in-out'
                    }}
                    className="crossfade-video"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={activeRef === 'B' ? handleEnded : undefined}
                />
            )}
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