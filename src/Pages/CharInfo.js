import { useState, useEffect } from 'react';
import CharacterCard from "../Components/CharacterCard";
import { HashLink } from 'react-router-hash-link';
import '../css/charinfo.css';
import { useLocalization } from '../localization/hooks/useLocalization';

function CharInfo() {
  const { t, language } = useLocalization();

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function loadCharacters() {
      const res = await fetch(`${process.env.PUBLIC_URL}/characters/index.json`);
      const ids = await res.json();

      const loadedCharacters = await Promise.all(
        ids.map(async (id) => {
          // Fetch base data
          const baseRes = await fetch(`${process.env.PUBLIC_URL}/characters/${id}/data.json`);
          const baseData = await baseRes.json();

          // Fetch selected language file
          const localeRes = await fetch(`${process.env.PUBLIC_URL}/characters/${id}/locales/${language}.json`);
          const localeData = await localeRes.json();

          // Merge them
          const charData = {
            ...baseData,
            ...localeData
          };

          return {
            ...charData,
            profilePicture: `${process.env.PUBLIC_URL}/characters/${id}/${charData.profilePicture}`,
            profilePicture2: `${process.env.PUBLIC_URL}/characters/${id}/${charData.profilePicture2}`,
            artworks: charData.artworks.map((art) => ({
              ...art,
              src: `${process.env.PUBLIC_URL}/characters/${id}/artworks/${art.src}`
            })),
            tradearts: charData.tradearts.map((art) => ({
              ...art,
              src: `${process.env.PUBLIC_URL}/characters/${id}/tradearts/${art.src}`
            })),
            collabarts: charData.collabarts.map((art) => ({
              ...art,
              src: `${process.env.PUBLIC_URL}/characters/${id}/collabarts/${art.src}`
            })),
            giftarts: charData.giftarts.map((art) => ({
              ...art,
              src: `${process.env.PUBLIC_URL}/characters/${id}/giftarts/${art.src}`
            })),
            commarts: charData.commarts.map((art) => ({
              ...art,
              src: `${process.env.PUBLIC_URL}/characters/${id}/commarts/${art.src}`
            }))
          };
        })
      );

      setCharacters(loadedCharacters);
    } loadCharacters();
  }, [language]);

  characters.map(character => (
    <CharacterCard key={character.id} character={character} />
  ))

  const [viewSelector, setViewSelector] = useState('selectorinactive');
  const [displayContentB, setDisplayContentB] = useState('contentBinactive');

  return (
    <div className="charinfobg">
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
              <img src={char.profilePicture2} alt={char.name} />
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharInfo;