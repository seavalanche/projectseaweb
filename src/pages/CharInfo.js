import { useState } from 'react';
import CharacterCard from "../components/CharacterCard";
import characterData from '../pages/data/character-data.json';
import { HashLink } from 'react-router-hash-link';
import '../styles/CharInfo.css';
import { useLocalization } from '../localization/hooks/useLocalization';

function CharInfo() {
  // const { t, language } = useLocalization();
  const { t } = useLocalization();
  const characters = characterData;
  characters.map(character => (
    <CharacterCard key={character.id} character={character} />
  ))

  // The Top Character Selector
  // 1. First, we filter for ONLY "Character Core" types
  const coreCharacters = characters.filter(char => char.type === "Character Core");

  // 2. Then, we group THAT filtered list by their story_role
  const groupedByRole = coreCharacters.reduce((acc, char) => {
    const role = char.group || 'Other'; // Fallback if a character doesn't have a role
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(char);
    return acc;
  }, {});

  const [viewSelector, setViewSelector] = useState('selectorinactive');
  const [displayContentB, setDisplayContentB] = useState('contentBinactive');

  return (
    <div className="charinfobg">
      <div className='generalbody'>
        <div className='generalbigtitle'>
          {t("charcard.title")}
        </div>
        <div className='generaltitle'>
          {t("charcard.subtitle")}
        </div>
        <div className="character-selector-top">
          {Object.keys(groupedByRole).map((role) => (
            <div key={role} className="character-group">
              <h3 className="group-title">{role}</h3>
              <div className="group-container">
                {groupedByRole[role].map((char, idx) => (
                  <HashLink key={idx} to={`#${char.id}`} className="charinfo-label">
                    <img
                      className="charinfo-icon-2"
                      src={`${process.env.PUBLIC_URL}/${char.profilePicture2}`}
                      alt={char.name}
                    />
                    <div className='charinfo-name-top'>{char.name}</div>
                  </HashLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`charinfowrapper ${displayContentB}`}>
        {characters.map((char, idx) => (
          <CharacterCard key={idx} character={char} />
        ))}
      </div>

      {/* <span className='character-selector-cover'></span> */}
      <div
        className={`contentB-btn  ${viewSelector}`}
      >
        <div className={`contentB-text  ${displayContentB}`}>
          {t("charcard.showbiobtn")}
        </div>
        <div className='contentB-toggle'>
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
              onChange={() =>
                setDisplayContentB(displayContentB === 'contentBactive' ? 'contentBinactive' : 'contentBactive')
              }
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
              <span className="toggle-switch-inner"></span>
              <span className="toggle-switch-switch"></span>
            </label>
          </div>
        </div>
      </div>
      <div className={`character-selector-wrapper  ${viewSelector}`}>
        <div
          className={`character-selector-btn  ${viewSelector}`}
          onClick={() =>
            setViewSelector(viewSelector === 'selectoractive' ? 'selectorinactive' : 'selectoractive')
          }
        >
          <div className={`character-selector-btntext  ${viewSelector}`}>
            {viewSelector === 'selectoractive' ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          </div>
        </div>
        <div
          className={`character-selector`}
          onClick={() =>
            setViewSelector(viewSelector === 'selectoractive' ? 'selectorinactive' : 'selectoractive')
          }
        >
          {characters.map((char, idx) => (
            <HashLink key={idx} to={`#${char.id}`} className="charinfo-icon">
              <img
                src={`${process.env.PUBLIC_URL}/${char.profilePicture2}`} alt={char.name} />
              <div className='charinfo-name'>{char.name}</div>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharInfo;