import { useState } from 'react';

export default function ProjectArtworks({ art, projectId, language }) {
    const [selectedArt, setSelectedArt] = useState(null);

    return (
        <div>
            <figure
                className='art-thumbnail'
                onClick={() => setSelectedArt(art)}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/Assets/gallery/${projectId}/${art.filename}`}
                    alt={art.caption[language] || art.caption.en}
                />
            </figure>
            {selectedArt && (
                <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                    <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                        <img src={`${process.env.PUBLIC_URL}/Assets/gallery/${projectId}/${art.filename}`} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                        <div className='charcard-art-preview-content-wrapper'>
                            <div className='charcardProp'>{selectedArt.title}</div>
                            <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                        </div>
                        <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
}
