import { useState, useEffect, useRef } from 'react';

export default function SpeechPlayer({ content, className }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rate, setRate] = useState(2); // Default to 1x (index 2)
    const synthRef = useRef(null);
    const utteranceRef = useRef(null);

    // Predefined speed steps
    const speedSteps = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

    // Initialize and cleanup
    useEffect(() => {
        synthRef.current = window.speechSynthesis;
        return () => {
            synthRef.current.cancel();
        };
    }, []);

    // Stop speech when content changes
    useEffect(() => {
        handleStop();
    }, [content]);

    const handlePlayPause = () => {
        if (isPlaying) {
            synthRef.current.pause();
            setIsPlaying(false);
        } else {
            if (synthRef.current.paused) {
                synthRef.current.resume();
            } else {
                const selection = window.getSelection();
                const text = selection.toString() || content;

                // Clean the text - remove any control labels
                const cleanText = text
                    // Remove speed indicators (more comprehensive pattern)
                    .replace(/(Speed|Rate)\s*:?\s*\d+(\.\d+)?x?/gi, '')
                    // Remove voice indicators
                    .replace(/(Voice|Speaker)\s*:?\s*.+/gi, '')
                    // Remove any remaining extra whitespace
                    .replace(/\s+/g, ' ')
                    .trim();

                synthRef.current.cancel();
                utteranceRef.current = new SpeechSynthesisUtterance(cleanText);
                utteranceRef.current.rate = speedSteps[rate];
                utteranceRef.current.onend = () => setIsPlaying(false);
                synthRef.current.speak(utteranceRef.current);
            }
            setIsPlaying(true);
        }
    };

    const handleStop = () => {
        synthRef.current.cancel();
        setIsPlaying(false);
    };

    const handleRateChange = (newRateIndex) => {
        setRate(newRateIndex);
        if (utteranceRef.current) {
            const wasPlaying = isPlaying;
            handleStop();
            if (wasPlaying) handlePlayPause();
        }
    };

    return (
        <div className={className} style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            margin: '1rem 0',
            padding: '0.5rem',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '8px'
        }}>
            <button onClick={handlePlayPause}>
                {isPlaying ? '⏸ Pause' : '▶️ Play'}
            </button>

            <button onClick={handleStop}>⏹ Stop</button>

            <div style={{ marginLeft: '1rem' }}>
                <div style={{ marginBottom: '0.25rem' }}>
                    <span aria-hidden="true">Speed: <strong>{speedSteps[rate]}x</strong></span>
                </div>
                <input
                    type="range"
                    min="0"
                    max={speedSteps.length - 1}
                    step="1"
                    value={rate}
                    onChange={(e) => handleRateChange(parseInt(e.target.value))}
                    style={{ width: '150px' }}
                />
            </div>
        </div>
    );
}