// import { useTheme } from "../Components/ThemeContext";
// import useTranslation from '../Components/useTranslation';
// import { useParams } from 'react-router-dom';
import CharacterCard from "../Components/CharacterCard";
import characters from "../Characters/index";
import MythSeavalanche from '../Characters/MythSeavalanche';
import Seavalanche from '../Characters/Seavalanche';
import Seava from '../Characters/Seava';
import Vesnea from '../Characters/Vesnea';

function CharInfo() {
    // const { theme } = useTheme();
    // const { t } = useTranslation();

    // const { characterId } = useParams();
    // const character = characters[characterId] || characters.Vesnea;
    characters.map(character => (
        <CharacterCard key={character.id} character={character} />
    ))

    return (
        <div className="charinfobg">
            <div className='projectsshowcase'>
                ( 🦺 Under Construction 🦺 )
            </div>
            <div className="charinfowrapper">
                <CharacterCard character={MythSeavalanche} />
                <CharacterCard character={Seavalanche} />
                <CharacterCard character={Seava} />
                <CharacterCard character={Vesnea} />
            </div>
        </div>
    )
}

export default CharInfo;