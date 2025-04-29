import { useState } from 'react';
import useTranslation from '../Components/useTranslation';

function CharacterCard({ character }) {
    const [activeTab, setActiveTab] = useState(null); // tracks which tab is open
    const [selectedArt, setSelectedArt] = useState(null);

    const toggleTab = (tabName) => {
        setActiveTab((currentTab) => (currentTab === tabName ? null : tabName));
    };

    const { t, language } = useTranslation();

    return (
        <div id={character.id} className={`character-card ${selectedArt ? 'preview-open' : ''}`} >
            <div style={{ height: '80px', marginTop: '-80px', visibility: 'hidden' }}></div>
            {/* Multiple Tabs! */}
            <div className='tab-wrapper'>
                <div className={`tab ${activeTab === 'moves' ? 'active' : ''}`} onClick={() => toggleTab('moves')}>
                    {activeTab === 'moves' ? '▲ Moves' : '▼ Moves'}
                </div>
                <div className={`tab ${activeTab === 'artworks' ? 'active' : ''}`} onClick={() => toggleTab('artworks')}>
                    {activeTab === 'artworks' ? '▲ Artworks' : '▼ Artworks'}
                </div>
            </div>

            <div className="content">
                {/* Part one */}
                <div className='contentA'>
                    <div className='contentA1'>
                        <img className='charcardPFP' src={character.profilePicture} alt={character.name} />
                        <div className='charcardName'>{character.name}</div>
                        <div className='charcardAltName'>{character.alternateName && (<h3>{character.alternateName}</h3>)}</div>
                    </div>

                    {/* Part two */}
                    <div className='contentA2'>
                        <div className='charcardProp'>{t("charcard.gender")}</div>
                        <div className='charcardValue'>{character.gender[language] || character.gender.en}</div>
                        <div className='charcardProp'>{t("charcard.species")}</div>
                        <div className='charcardValue'>{character.species[language] || character.species.en}</div>
                        <div className='contentA2-WH'>
                            <div className='contentA2-WH1'>
                                <div className='charcardProp'>{t("charcard.height")}</div>
                                <div className='charcardValue'>{character.height[language] || character.height.en}</div>
                            </div>
                            <div className='contentA2-WH2'>
                                <div className='charcardProp'>{t("charcard.weight")}</div>
                                <div className='charcardValue'>{character.weight[language] || character.weight.en}</div>
                            </div>
                        </div>
                        <div className='charcardProp'>{t("charcard.createdDate")}</div>
                        <div className='charcardValue'>{character.createdDate[language] || character.createdDate.en}</div>
                        <div className='charcardProp'>{t("charcard.attributes")}</div>
                        {/* Attributes */}
                        <div className="attributes">
                            {character.attributes.map((attr) => (
                                <span key={attr} className={`attribute-badge ${attr.toLowerCase()}`}>
                                    {attr}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part three */}
                <div className='contentB'>
                    <div className='charcardProp'>{t("charcard.meaning")}</div>
                    <div className='charcardValue'>{character.nameMeaning[language] || character.nameMeaning.en}</div>
                    <div className='contentB-bio'>
                        <div className='charcardValue'>{character.bio[language] || character.bio.en}</div>
                    </div>
                </div>

                {/* Extra Info: moves + artworks */}
                {activeTab === 'moves' && (
                    <div className="extra">
                        <div className='charcardProp'>{t("charcard.moves")}</div>
                        <ul className='charcardValue'>
                            {(character.moves[language] || character.moves.en).map((move, idx) => {
                                const [moveName, moveDesc] = move.split(':');
                                return (
                                    <li key={idx} className='move-list'>
                                        <span className="move-name">{moveName.trim()}</span>: {moveDesc.trim()}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                {activeTab === 'artworks' && (
                    <div className="extra">
                        <div className='charcardProp'>{t("charcard.artworks")}</div>
                        <div className="artworks">
                            {character.artworks.map((art, idx) => (
                                <figure
                                    key={idx}
                                    className='artworks-wrapper'
                                    onClick={() => setSelectedArt(art)}
                                >
                                    <img
                                        src={art.src}
                                        alt={art.caption[language] || art.caption.en}
                                        className="art-thumb"
                                    />
                                    <figtitle className='charcardValue'>{art.title}</figtitle>
                                </figure>
                            ))}
                        </div>
                        {selectedArt && (
                            <div className="art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                <div className="art-preview-content" onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                    <div className='art-preview-content-wrapper'>
                                        <div className='charcardProp'>{selectedArt.title}</div>
                                        <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                    </div>
                                    <button className="close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CharacterCard;
