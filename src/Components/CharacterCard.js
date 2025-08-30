import { useState } from 'react';
import { useLocalization } from '../localization/hooks/useLocalization';

function CharacterCard({ character }) {
    const [activeTab, setActiveTab] = useState(null); // tracks which tab is open
    const [selectedArt, setSelectedArt] = useState(null);

    const toggleTab = (tabName) => {
        setActiveTab((currentTab) => (currentTab === tabName ? null : tabName));
    };

    const { t, language } = useLocalization();

    // Delay scroll until after DOM updates
    // setTimeout(() => {
    //     const el = document.getElementById(character.id);
    //     if (el) {
    //         el.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //         });
    //     }
        // if (el) {
        //     const yOffset = -80;
        //     const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        //     window.scrollTo({ top: y, behavior: "smooth" });
        // }
    // }, 0);

    return (
        <div id={character.id} className={`character-card ${selectedArt ? 'preview-open' : ''}`} >
            <div style={{ height: '80px', marginTop: '-80px', visibility: 'hidden' }}></div>
            {/* Multiple Tabs! */}
            <div className='charcard-tab-wrapper'>
                <div className={`charcard-tab ${activeTab === 'charcard-moves' ? 'active' : ''}`} onClick={() => toggleTab('charcard-moves')}>
                    {activeTab === 'charcard-moves' ? 'Moves' : 'Moves'}
                </div>
                <div className={`charcard-tab ${activeTab === 'charcard-artworks' ? 'active' : ''}`} onClick={() => toggleTab('charcard-artworks')}>
                    {activeTab === 'charcard-artworks' ? 'Artworks' : 'Artworks'}
                </div>
            </div>

            <div className="charcard-content">
                <div className='charcard-content-main'>
                    {/* Part one */}
                    <div className='charcard-contentA'>
                        <div className='charcard-contentA1'>
                            <img className='charcardPFP' src={character.profilePicture} alt={character.name} />
                            <div className='charcardName'>{character.name}</div>
                            <div className='charcardAltName'>{character.alternateName && (<h3>{character.alternateName}</h3>)}</div>
                        </div>

                        {/* Part two */}
                        <div className='charcard-contentA2'>
                            <div className='charcardProp'>{t("charcard.gender")}</div>
                            <div className='charcardValue'>{character.gender[language] || character.gender.en}</div>
                            <div className='charcardProp'>{t("charcard.species")}</div>
                            <div className='charcardValue'>{character.species[language] || character.species.en}</div>
                            <div className='charcard-contentA2-WH'>
                                <div className='charcard-contentA2-WH1'>
                                    <div className='charcardProp'>{t("charcard.height")}</div>
                                    <div className='charcardValue'>{character.height[language] || character.height.en}</div>
                                </div>
                                <div className='charcard-contentA2-WH2'>
                                    <div className='charcardProp'>{t("charcard.weight")}</div>
                                    <div className='charcardValue'>{character.weight[language] || character.weight.en}</div>
                                </div>
                            </div>
                            <div className='charcardProp'>{t("charcard.createdDate")}</div>
                            <div className='charcardValue'>{character.createdDate[language] || character.createdDate.en}</div>
                            <div className='charcardProp'>{t("charcard.attributes")}</div>
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

                    {/* Part three */}
                    <div className='charcard-contentB'>
                        <div className='charcardProp'>{t("charcard.meaning")}</div>
                        <div className='charcardValue'>{character.nameMeaning[language] || character.nameMeaning.en}</div>
                        <div className='charcard-contentB-bio'>
                            <div className='charcardValue'>{character.bio[language] || character.bio.en}</div>
                        </div>
                    </div>
                </div>
                {/* Extra Info: moves + artworks */}
                {activeTab === 'charcard-moves' && (
                    <div className="charcard-extra">
                        <div className='charcardProp'>{t("charcard.abilities")}</div>
                        <ul className='charcardValue'>
                            {(character.abilities[language] || character.abilities.en).map((ability, idx) => {
                                const [abilityName, ...descParts] = ability.split(/[:：]/);
                                const abilityDesc = descParts.join(/[:：]/);

                                return (
                                    <li key={idx} className='charcard-move-list'>
                                        <span className="charcard-move-name">{abilityName.trim()}</span>: {abilityDesc.trim()}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='charcardProp'>{t("charcard.moves")}</div>
                        <ul className='charcardValue'>
                            {(character.moves[language] || character.moves.en).map((move, idx) => {
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
                )}

                {activeTab === 'charcard-artworks' && (
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
                                    <figtitle className='charcardValue'>{art.title}</figtitle>
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
        </div>
    );
}

export default CharacterCard;
