// import { useTheme } from "../Components/ThemeContext";
// import useTranslation from '../Components/useTranslation';
import { useState, useEffect, useRef } from 'react';
import CharacterCard from "../Components/CharacterCard";
import characters from "../Characters/index";
import MythSeavalanche from '../Characters/MythSeavalanche';
import Seavalanche from '../Characters/Seavalanche';
import Seava from '../Characters/Seava';
import Vesnea from '../Characters/Vesnea';
import Korazu from '../Characters/Korazu';
import Uzakon from '../Characters/Uzakon';
import Zumiko from '../Characters/Zumiko';
import Baldor from '../Characters/Baldor';
import Arna from '../Characters/Arna';
import Rakariki from '../Characters/Rakariki';
import Veranite from '../Characters/Veranite';
import Fondan from '../Characters/Fondan';
import Sarchie from '../Characters/Sarchie';
import Deimev from '../Characters/Deimev';
import { HashLink } from 'react-router-hash-link';

function CharInfo() {
  // const { theme } = useTheme();
  // const { t } = useTranslation();

  characters.map(character => (
    <CharacterCard key={character.id} character={character} />
  ))
  const [isVisible, setIsVisible] = useState(true);
  const [screenSize, setScreenSize] = useState('large');

  const lastScrollY = useRef(0);
  const hideTimeout = useRef(null);
  const SELECTOR_ORIGINAL_OFFSET = 65; // adjust if needed

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 800) {
        setScreenSize('small');
      } else if (width >= 801 && width <= 1119) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNowFloating = currentScrollY > SELECTOR_ORIGINAL_OFFSET;

      if (!isNowFloating) {
        // At original position → always visible
        setIsVisible(true);
        if (hideTimeout.current) {
          clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
      } else {
        if (screenSize === 'small') {
          // Small screen: Hide when scrolling down, Show when scrolling up
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false); // Scrolling down
          } else {
            setIsVisible(true); // Scrolling up
          }
        } else {
          // Medium and Large screen: floating timer behavior
          setIsVisible(true);
          if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
          }
          hideTimeout.current = setTimeout(() => {
            setIsVisible(false);
          }, 3000); // Hide after 3s floating
        }
      }

      lastScrollY.current = currentScrollY;
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, [screenSize]);

  return (
    <div className="charinfobg">
      <div className={`character-selector ${isVisible ? 'visible' : 'hidden'}`}>
        {characters.map((char, idx) => (
          <HashLink key={idx} to={`#${char.id}`} className="charinfo-icon">
            <img src={char.profilePicture} alt={char.name} />
          </HashLink>
        ))}
      </div>
      <div className="charinfowrapper">
        <CharacterCard character={MythSeavalanche} />
        <CharacterCard character={Seavalanche} />
        <CharacterCard character={Seava} />
        <CharacterCard character={Vesnea} />
        <CharacterCard character={Korazu} />
        <CharacterCard character={Uzakon} />
        <CharacterCard character={Zumiko} />
        <CharacterCard character={Baldor} />
        <CharacterCard character={Arna} />
        <CharacterCard character={Rakariki} />
        <CharacterCard character={Veranite} />
        <CharacterCard character={Fondan} />
        <CharacterCard character={Sarchie} />
        <CharacterCard character={Deimev} />
      </div>
    </div>
  )
}

export default CharInfo;