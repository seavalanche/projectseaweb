import { useState } from 'react';
import { useLocalization } from '../localization/hooks/useLocalization';
import { useRef } from 'react';

function CharacterCard({ character }) {
    const { t, language } = useLocalization();

    const [activeTab, setActiveTab] = useState(null); // tracks which tab is open
    const [activeArt, setActiveArt] = useState(null); // tracks which tab is open
    const [selectedArt, setSelectedArt] = useState(null);

    const cardRef = useRef(null); // tracks which card is the last focus
    const toggleTab = (tabName) => {
        setActiveTab((currentTab) => (currentTab === tabName ? null : tabName));
        setTimeout(() => {
            cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };
    const artRef = useRef(null); // tracks which card is the last focus
    const toggleArt = (tabName) => {
        setActiveArt((currentArt) => (currentArt === tabName ? null : tabName));
        setTimeout(() => {
            artRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };

    return (
        <div id={character.id} ref={cardRef} className='character-card-container'>
            {activeTab === 'charcard-optional' && (
                <div className={`charcard-optional character-card${selectedArt ? 'preview-open' : ''}`}>
                    <div className='charcard-optional-text'>See other menu here:</div>
                    <div className='charcard-tab-wrapper'>
                        <div className={`charcard-tab ${activeTab === 'charcard-tradearts' ? 'active' : ''}`} onClick={() => toggleTab('charcard-tradearts')}>
                            {activeTab === 'charcard-tradearts' ? 'TradeArts' : 'TradeArts'}
                        </div>
                        <div className={`charcard-tab ${activeTab === 'charcard-collabarts' ? 'active' : ''}`} onClick={() => toggleTab('charcard-collabarts')}>
                            {activeTab === 'charcard-collabarts' ? 'CollabArts' : 'CollabArts'}
                        </div>
                        <div className={`charcard-tab ${activeTab === 'charcard-giftarts' ? 'active' : ''}`} onClick={() => toggleTab('charcard-giftarts')}>
                            {activeTab === 'charcard-giftarts' ? 'GiftArts' : 'GiftArts'}
                        </div>
                        <div className={`charcard-tab ${activeTab === 'charcard-commarts' ? 'active' : ''}`} onClick={() => toggleTab('charcard-commarts')}>
                            {activeTab === 'charcard-commarts' ? 'CommArts' : 'CommArts'}
                        </div>
                    </div>
                </div>
            )}
            <div className={`character-card ${selectedArt ? 'preview-open' : ''} ${activeTab ? 'opened' : ''}`} >
                <div style={{ height: '80px', marginTop: '-80px', visibility: 'hidden' }}></div>
                {/* Multiple Tabs! */}
                <div className='charcard-tab-wrapper'>
                    <div className={`charcard-tab2 charcard-tab ${activeTab === 'charcard-optional' ? 'active' : ''}`} onClick={() => toggleTab('charcard-optional')}>
                        {activeTab === 'charcard-optional' ? '🎁' : '🎁'}
                    </div>
                    <div className={`charcard-tab ${activeTab === 'charcard-description' ? 'active' : ''}`} onClick={() => toggleTab('charcard-description')}>
                        {activeTab === 'charcard-description' ? 'Desc' : 'Desc'}
                    </div>
                    <div className={`charcard-tab ${activeTab === 'charcard-moves' ? 'active' : ''}`} onClick={() => toggleTab('charcard-moves')}>
                        {activeTab === 'charcard-moves' ? 'Moves' : 'Moves'}
                    </div>
                    <div
                        className={`charcard-tab ${activeTab === 'charcard-artworks' ? 'active' : ''}`}
                        onClick={() => {
                            toggleTab('charcard-artworks');
                            setActiveArt('charcard-artworks');
                        }}
                    >
                        {activeTab === 'charcard-artworks' ? 'Artworks' : 'Artworks'}
                    </div>
                </div>
                <div className="charcard-content">
                    <div className='charcard-content-main'>
                        <div className='charcard-contentA'>
                            <div className='charcard-contentA1'>
                                <img className='charcardPFP' src={character.profilePicture} alt={character.name} />
                                <div className='charcardName'>{character.name}</div>
                                <div className='charcardAltName'>{character.alternateName && (<h3>{character.alternateName}</h3>)}</div>
                            </div>
                            <div className='charcard-contentA2'>
                                <div className='charcardProp'>{t("charcard.gender")}</div>
                                <div className={`charcardValue ${character.genderColor}`}>{character.gender}</div>
                                <div className='charcardProp'>{t("charcard.species")}</div>
                                <div className='charcardValue'>{character.species}</div>
                                <div className='charcard-contentA2-WH'>
                                    <div className='charcard-contentA2-WH1'>
                                        <div className='charcardProp'>{t("charcard.height")}</div>
                                        <div className='charcardValue'>{character.height}</div>
                                    </div>
                                    <div className='charcard-contentA2-WH2'>
                                        <div className='charcardProp'>{t("charcard.weight")}</div>
                                        <div className='charcardValue'>{character.weight}</div>
                                    </div>
                                </div>
                                <div className='charcardProp'>{t("charcard.createdDate")}</div>
                                <div className='charcardValue'>{character.createdDate}</div>
                                <div className='charcardProp charcardAttributes'>{t("charcard.attributes")}</div>
                                {/* Attributes */}
                                <div className="charcardAttributes">
                                    {character.attributes.map((attr) => (
                                        <span key={attr} className={`attribute-badge ${attr.toLowerCase()}`}>
                                            {attr}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='charcard-contentB'>
                            {/* <div className='charcard-contentB-parts'> */}
                            <div className='charcardValue'>{character.bio}</div>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* <div className='charcard-contentB'> */}
                    {activeTab === 'charcard-description' && (
                        <div className='charcard-extra'>
                            <div className='charcard-contentB-parts'>
                                <div className='charcardProp'>{t("charcard.meaning")}</div>
                                <div className='charcardValue'>{character.nameMeaning}</div>
                            </div>
                            <div className='charcard-contentB-parts even'>
                                <div className='charcardProp'>{t("charcard.lifeBackground")}</div>
                                <div className='charcardValue'>{character.lifeBackground}</div>
                            </div>
                            <div className='charcard-contentB-parts'>
                                <div className='charcardProp'>{t("charcard.personality")}</div>
                                <ul>
                                    <li className='charcardValue charcardpersonality'>
                                        <span className='charcardpersonality-label'>{t("charcard.personalityTraits")}</span>
                                        <span className="charcardpersonality-colon">:</span>
                                        <span className='charcardpersonality-value'>{character.personalityTraits}</span>
                                    </li>
                                    <li className='charcardValue charcardpersonality'>
                                        <span className='charcardpersonality-label'>{t("charcard.personalityValues")}</span>
                                        <span className="charcardpersonality-colon">:</span>
                                        <span className='charcardpersonality-value'>{character.personalityValues}</span>
                                    </li>
                                    <li className='charcardValue charcardpersonality'>
                                        <span className='charcardpersonality-label'>{t("charcard.personalityFlaws")}</span>
                                        <span className="charcardpersonality-colon">:</span>
                                        <span className='charcardpersonality-value'>{character.personalityFlaws}</span>
                                    </li>
                                    <li className='charcardValue charcardpersonality'>
                                        <span className='charcardpersonality-label'>{t("charcard.personalityQuirks")}</span>
                                        <span className="charcardpersonality-colon">:</span>
                                        <span className='charcardpersonality-value'>{character.personalityQuirks}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='charcard-contentB-parts even'>
                                <div className='charcardProp'>{t("charcard.bodyShapeDescription")}</div>
                                <div className='charcardValue'>{character.bodyShapeDescription}</div>
                            </div>
                        </div>
                    )}
                    {/* Extra Info: moves + artworks */}
                    {activeTab === 'charcard-moves' && (
                        <div className="charcard-extra">
                            <div className='charcard-contentB-parts'>
                                <div className='charcardProp'>{t("charcard.abilities")}</div>
                                <ul className='charcardValue'>
                                    {(character.abilities).map((ability, idx) => {
                                        const [abilityName, ...descParts] = ability.split(/[:：]/);
                                        const abilityDesc = descParts.join(/[:：]/);
                                        return (
                                            <li key={idx} className='charcard-move-list'>
                                                <span className="charcard-move-name">{abilityName.trim()}</span>: {abilityDesc.trim()}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='charcard-contentB-parts even'>
                                <div className='charcardProp'>{t("charcard.moves")}</div>
                                <ul className='charcardValue'>
                                    {(character.moves).map((move, idx) => {
                                        const [moveName, ...descParts] = move.split(/[:：]/);
                                        const moveDesc = descParts.join(/[:：]/);
                                        return (
                                            <li key={idx} className='charcard-move-list'>
                                                <span className="charcard-move-name">{moveName.trim()}</span>: {moveDesc.trim()}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}
                    {activeTab === 'charcard-artworks' && (
                        <div className="charcard-extra">
                            <div className={`charcard-artworkselections ${selectedArt ? 'preview-open' : ''}`}>
                                <div className='charcard-tab-wrapper'>
                                    <div className={`charcard-tab ${activeArt === 'charcard-artworks' ? 'active' : ''}`} onClick={() => toggleArt('charcard-artworks')}>
                                        {activeArt === 'charcard-artworks' ? 'Artworks' : 'Artworks'}
                                    </div>
                                    <div className={`charcard-tab ${activeArt === 'charcard-tradearts' ? 'active' : ''}`} onClick={() => toggleArt('charcard-tradearts')}>
                                        {activeArt === 'charcard-tradearts' ? 'TradeArts' : 'TradeArts'}
                                    </div>
                                    <div className={`charcard-tab ${activeArt === 'charcard-collabarts' ? 'active' : ''}`} onClick={() => toggleArt('charcard-collabarts')}>
                                        {activeArt === 'charcard-collabarts' ? 'CollabArts' : 'CollabArts'}
                                    </div>
                                    <div className={`charcard-tab ${activeArt === 'charcard-giftarts' ? 'active' : ''}`} onClick={() => toggleArt('charcard-giftarts')}>
                                        {activeArt === 'charcard-giftarts' ? 'GiftArts' : 'GiftArts'}
                                    </div>
                                    <div className={`charcard-tab ${activeArt === 'charcard-commarts' ? 'active' : ''}`} onClick={() => toggleArt('charcard-commarts')}>
                                        {activeArt === 'charcard-commarts' ? 'CommArts' : 'CommArts'}
                                    </div>
                                </div>
                            </div>

                            {activeArt === 'charcard-artworks' && (
                                <div className="charcard-extra">
                                    <div className='charcardProp'>{t("charcard.artworks")}</div>
                                    <div className="charcard-artworks">
                                        {character.artworks.map((art, idx) => (
                                            <figure
                                                key={idx}
                                                className='charcard-artworks-wrapper'
                                                onClick={() => setSelectedArt(art)}
                                            >
                                                <img
                                                    src={art.src}
                                                    alt={art.caption[language] || art.caption.en}
                                                    className="charcard-art-thumb"
                                                />
                                                {/* <figtitle className='charcardValue'>{art.title}</figtitle> */}
                                            </figure>
                                        ))}
                                    </div>
                                    {selectedArt && (
                                        <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                            <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                                                <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                                <div className='charcard-art-preview-content-wrapper'>
                                                    <div className='charcardProp'>{selectedArt.title}</div>
                                                    <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                                </div>
                                                <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {activeArt === 'charcard-tradearts' && (
                                <div className="charcard-extra">
                                    <div className='charcardProp'>{t("charcard.tradearts")}</div>
                                    <div className="charcard-artworks">
                                        {character.tradearts.map((art, idx) => (
                                            <figure
                                                key={idx}
                                                className='charcard-artworks-wrapper'
                                                onClick={() => setSelectedArt(art)}
                                            >
                                                <img
                                                    src={art.src}
                                                    alt={art.caption[language] || art.caption.en}
                                                    className="charcard-art-thumb"
                                                />
                                                {/* <figtitle className='charcardValue'>{art.title}</figtitle> */}
                                            </figure>
                                        ))}
                                    </div>
                                    {selectedArt && (
                                        <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                            <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                                                <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                                <div className='charcard-art-preview-content-wrapper'>
                                                    <div className='charcardProp'>{selectedArt.title}</div>
                                                    <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                                </div>
                                                <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {activeArt === 'charcard-collabarts' && (
                                <div className="charcard-extra">
                                    <div className='charcardProp'>{t("charcard.collabarts")}</div>
                                    <div className="charcard-artworks">
                                        {character.collabarts.map((art, idx) => (
                                            <figure
                                                key={idx}
                                                className='charcard-artworks-wrapper'
                                                onClick={() => setSelectedArt(art)}
                                            >
                                                <img
                                                    src={art.src}
                                                    alt={art.caption[language] || art.caption.en}
                                                    className="charcard-art-thumb"
                                                />
                                                {/* <figtitle className='charcardValue'>{art.title}</figtitle> */}
                                            </figure>
                                        ))}
                                    </div>
                                    {selectedArt && (
                                        <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                            <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                                                <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                                <div className='charcard-art-preview-content-wrapper'>
                                                    <div className='charcardProp'>{selectedArt.title}</div>
                                                    <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                                </div>
                                                <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {activeArt === 'charcard-giftarts' && (
                                <div className="charcard-extra">
                                    <div className='charcardProp'>{t("charcard.giftarts")}</div>
                                    <div className="charcard-artworks">
                                        {character.giftarts.map((art, idx) => (
                                            <figure
                                                key={idx}
                                                className='charcard-artworks-wrapper'
                                                onClick={() => setSelectedArt(art)}
                                            >
                                                <img
                                                    src={art.src}
                                                    alt={art.caption[language] || art.caption.en}
                                                    className="charcard-art-thumb"
                                                />
                                                {/* <figtitle className='charcardValue'>{art.title}</figtitle> */}
                                            </figure>
                                        ))}
                                    </div>
                                    {selectedArt && (
                                        <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                            <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                                                <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                                <div className='charcard-art-preview-content-wrapper'>
                                                    <div className='charcardProp'>{selectedArt.title}</div>
                                                    <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                                </div>
                                                <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {activeArt === 'charcard-commarts' && (
                                <div className="charcard-extra">
                                    <div className='charcardProp'>{t("charcard.commarts")}</div>
                                    <div className="charcard-artworks">
                                        {character.commarts.map((art, idx) => (
                                            <figure
                                                key={idx}
                                                className='charcard-artworks-wrapper'
                                                onClick={() => setSelectedArt(art)}
                                            >
                                                <img
                                                    src={art.src}
                                                    alt={art.caption[language] || art.caption.en}
                                                    className="charcard-art-thumb"
                                                />
                                                {/* <figtitle className='charcardValue'>{art.title}</figtitle> */}
                                            </figure>
                                        ))}
                                    </div>
                                    {selectedArt && (
                                        <div className="charcard-art-preview-overlay" onClick={() => setSelectedArt(null)}>
                                            <div className="charcard-art-preview-content" onClick={(e) => e.stopPropagation()}>
                                                <img src={selectedArt.src} alt={selectedArt.caption[language] || selectedArt.caption.en} />
                                                <div className='charcard-art-preview-content-wrapper'>
                                                    <div className='charcardProp'>{selectedArt.title}</div>
                                                    <div className='charcardValue'>{selectedArt.caption[language] || selectedArt.caption.en}</div>
                                                </div>
                                                <button className="charcard-close-btn" onClick={() => setSelectedArt(null)}>✕</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
