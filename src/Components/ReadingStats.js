import { useEffect, useState } from 'react';

function ReadingStats() {
    const [stats, setStats] = useState({
        totalChapters: 0,
        completedChapters: 0,
        totalWords: 0,
        readingTime: 0
    });

    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem('readingProgress') || '{}');
        const metadata = require('../Pages/Chapters/metadata').chapters;
        
        const completed = metadata.filter(ch => savedProgress[ch.id] >= 90).length;
        const totalWords = metadata.reduce((sum, ch) => sum + (ch.wordCount || 0), 0);
        const readingTime = Math.ceil(totalWords / 200); // 200 wpm
        
        setStats({
            totalChapters: metadata.length,
            completedChapters: completed,
            totalWords,
            readingTime
        });
    }, []);

    return (
        <div className="reading-stats">
            <h3>Your Reading Progress</h3>
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-value">{stats.completedChapters}/{stats.totalChapters}</div>
                    <div className="stat-label">Chapters</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{stats.totalWords.toLocaleString()}</div>
                    <div className="stat-label">Words</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{stats.readingTime}</div>
                    <div className="stat-label">Minutes</div>
                </div>
            </div>
        </div>
    );
}

export default ReadingStats;