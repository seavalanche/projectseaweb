import { useState } from 'react';
import useTranslation from '../Components/useTranslation';

function CharacterCard({ character }) {
    const [expanded, setExpanded] = useState(false);

    const toggleCard = () => {
        setExpanded(!expanded);
    };

    const { t, language } = useTranslation();

    return (
        <div className={`character-card ${expanded ? 'expanded' : ''}`}>
            <div className="tab" onClick={toggleCard}>
                {expanded ? '▲ Hide' : '▼ More'}
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
                {expanded && (
                    <div className="extra">
                        <h4>{t("charcard.moves")}</h4>
                        <ul>
                            {(character.moves[language] || character.moves.en).map((move, idx) => (
                                <li key={idx}>{move}</li>
                            ))}
                        </ul>

                        <h4>{t("charcard.artworks")}</h4>
                        <div className="artworks">
                            {character.artworks.map((art, idx) => (
                                <figure key={idx}>
                                    <img src={art.src} alt={art.caption[language] || art.caption.en} />
                                    <figcaption>{art.caption[language] || art.caption.en}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CharacterCard;
