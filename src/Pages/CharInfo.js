// import { useTheme } from "../Components/ThemeContext";
// import useTranslation from '../Components/useTranslation';
import { useState } from 'react';
import CharacterCard from "../Components/CharacterCard";
import characters from "../Characters/index";
import { HashLink } from 'react-router-hash-link';
import '../css/charinfo.css';

function CharInfo() {
  characters.map(character => (
    <CharacterCard key={character.id} character={character} />
  ))

  // const { theme } = useTheme();
  // const { t } = useTranslation();
  const [viewSelector, setViewSelector] = useState('selectorinactive');
  const [displayContentB, setDisplayContentB] = useState('contentBinactive');

  // const [isVisible, setIsVisible] = useState(true);
  // const [screenSize, setScreenSize] = useState('large');

  // const lastScrollY = useRef(0);
  // const hideTimeout = useRef(null);
  // const SELECTOR_ORIGINAL_OFFSET = 65; // adjust if needed

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width < 800) {
  //       setScreenSize('small');
  //     } else if (width >= 801 && width <= 1119) {
  //       setScreenSize('medium');
  //     } else {
  //       setScreenSize('large');
  //     }
  //   };

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const isNowFloating = currentScrollY > SELECTOR_ORIGINAL_OFFSET;

  //     if (!isNowFloating) {
  //       // At original position → always visible
  //       setIsVisible(true);
  //       if (hideTimeout.current) {
  //         clearTimeout(hideTimeout.current);
  //         hideTimeout.current = null;
  //       }
  //     } else {
  //       if (screenSize === 'small') {
  //         // Small screen: Hide when scrolling down, Show when scrolling up
  //         if (currentScrollY > lastScrollY.current) {
  //           setIsVisible(false); // Scrolling down
  //         } else {
  //           setIsVisible(true); // Scrolling up
  //         }
  //       } else {
  //         // Medium and Large screen: floating timer behavior
  //         setIsVisible(true);
  //         if (hideTimeout.current) {
  //           clearTimeout(hideTimeout.current);
  //         }
  //         hideTimeout.current = setTimeout(() => {
  //           setIsVisible(false);
  //         }, 3000); // Hide after 3s floating
  //       }
  //     }

  //     lastScrollY.current = currentScrollY;
  //   };

  //   handleResize(); // Initial check

  //   window.addEventListener('resize', handleResize);
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     window.removeEventListener('scroll', handleScroll);
  //     if (hideTimeout.current) {
  //       clearTimeout(hideTimeout.current);
  //     }
  //   };
  // }, [screenSize]);

  return (
    <div className="charinfobg">
      <div className={`charinfowrapper ${displayContentB}`}>
        {characters.map((char, idx) => (
          <CharacterCard key={idx} character={char} />
        ))}
      </div>

      <div
        className={`contentB-btn  ${viewSelector}`}
      >
        <div className={`contentB-text  ${displayContentB}`}>
          Show Description
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
            {viewSelector === 'selectoractive' ? '˄' : '˅'}
          </div>
        </div>
        <div
          // className={`character-selector ${isVisible ? 'visible' : 'hidden'} ${viewSelector}`}
          className={`character-selector`}
          onClick={() =>
            setViewSelector(viewSelector === 'selectoractive' ? 'selectorinactive' : 'selectoractive')
          }
        >
          {characters.map((char, idx) => (
            <HashLink key={idx} to={`#${char.id}`} className="charinfo-icon">
              <img src={char.profilePicture} alt={char.name} />
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharInfo;