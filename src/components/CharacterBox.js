import React, { useState } from 'react';
import characterData from '../pages/data/character-data.json';
import { HashLink } from 'react-router-hash-link';
import '../styles/CharInfo.css';
import { useLocalization } from '../localization/hooks/useLocalization';

function CharacterBox() {
    const { t } = useLocalization();
    const characters = characterData;
    const coreCharacters = characters.filter(char => char.type === "Character Core");

    const [selectedChar, setSelectedChar] = useState(coreCharacters[0] || null);

    return (
        <div className='character-box-wrapper'>
            <div className='character-box-left'>
                <div className='generaltitle'>
                    {t("charcard.title")}
                </div>
                <div className='character-box'>
                    {coreCharacters.map((char, idx) => (
                        <HashLink
                            key={idx}
                            to={`#${char.id}`}
                            className="charbox-label"
                            onClick={() => setSelectedChar(char)}
                        >
                            <img
                                className="charbox-icon"
                                src={`${process.env.PUBLIC_URL}/${char.profilePicture2}`}
                                alt={char.name}
                            />
                        </HashLink>
                    ))}
                </div>
            </div>
            <div className='character-box-right'>
                {selectedChar ? (
                    <div className="charbox-details">
                        <div className='charbox-pfp'>
                            <img
                                className="charbox-icon-large"
                                src={`${process.env.PUBLIC_URL}/${selectedChar.profilePicture2}`}
                                alt={selectedChar.name}
                            />
                            <div className='generaltitle'>{selectedChar.name}</div>
                        </div>
                        <div className='charbox-desc'>{selectedChar.bio}</div>
                    </div>
                ) : (
                    <div className='charbox-name-top'>{t("charcard.selectPrompt", "Select a character")}</div>
                )}
            </div>
        </div>
    )

}

export default CharacterBox;