import { useState, useRef } from 'react';
import '../styles/components/ReceivedArt.css';

const receivedArtData = [
    {
        image: 'by-april-20261101.webp',
        charid: 'vesnea',
        type: 'giftarts',
        details: [
            { label: 'Character', value: 'Vesnea' },
            { label: 'Artist', value: 'April' },
            { label: 'Date', value: '2026-11-01' },
            { label: 'Type', value: 'Gift art' },
        ],
    },
    {
        image: '',
        charid: '',
        type: 'giftarts',
        details: [
            { label: 'Character', value: 'Myth Seavalanche and Seravyn' },
            { label: 'Artist', value: 'Enma Jibakoma' },
            { label: 'Date', value: '2026-09-21' },
            { label: 'Type', value: 'Gift art (Not public)' },
        ],
    },
    {
        image: 'by-super-ex1-20260917.webp',
        charid: 'seravyn',
        type: 'giftarts',
        details: [
            { label: 'Character', value: 'Seravyn' },
            { label: 'Artist', value: 'super_EX1' },
            { label: 'Date', value: '2026-09-17' },
            { label: 'Type', value: 'Gift art' },
        ],
    },
];

const ReceivedArt = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleCarouselClick = (direction) => {
        // 1. Calculate the next index
        let nextIndex = currentIndex + direction;

        // Handle wrapping around (looping)
        if (nextIndex >= receivedArtData.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = receivedArtData.length - 1;

        setCurrentIndex(nextIndex);

        setTimeout(() => {
            const cards = scrollRef.current.querySelectorAll('.received-art-card');
            if (cards[nextIndex]) {
                cards[nextIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }, 10);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    return (
        <div className='generalbody'>
            <div className='generaltitle'>Bonus Part:</div>
            <div className='generalcontent'>The latest three art I received from other artists!</div>
            <div className='received-art-carousel'>
                <div className="received-art-carousel-buttons">
                    <button onClick={() => handleCarouselClick(-1)} className="prev">‹</button>
                    <button onClick={() => handleCarouselClick(1)} className="next">›</button>
                </div>
                <div className="received-art-carousel-track" ref={scrollRef}>
                    {receivedArtData.map((art, idx) => {
                        const isMain = idx === currentIndex;
                        const isFirst = idx === 0;
                        const isLast = idx === receivedArtData.length - 1;

                        const imageSrc = art.image
                            ? `${process.env.PUBLIC_URL}/characters/${art.charid}/${art.type}/${art.image}`
                            : `${process.env.PUBLIC_URL}/assets/placeholder.webp`;

                        return (
                            <div
                                key={idx}
                                className={`received-art-card ${isMain ? 'main-card' : 'side-card'} ${isFirst ? 'is-first' : ''} ${isLast ? 'is-last' : ''}`}
                            >
                                <img
                                    src={imageSrc}
                                    alt={art.charid}
                                    onClick={() => handleImageClick(imageSrc)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <ul className='received-art-details'>
                {receivedArtData[currentIndex].details.map((detail, detailIdx) => (
                    <li className='received-art-item' key={detailIdx}>
                        <div className='received-art-label'>{detail.label}</div>
                        <div className='received-art-colon'>:</div>
                        <div className='received-art-value'>{detail.value}</div>
                    </li>
                ))}
            </ul>
            {isModalOpen && (
                <div className="received-art-enlarged" onClick={() => setIsModalOpen(false)}>
                    <span className="received-art-close-button">&times;</span>
                    <img src={selectedImage} alt="Enlarged view" />
                </div>
            )}
        </div>
    );
};

export default ReceivedArt;
