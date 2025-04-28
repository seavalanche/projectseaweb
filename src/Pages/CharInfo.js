// import { useTheme } from "../Components/ThemeContext";
// import useTranslation from '../Components/useTranslation';
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

function CharInfo() {
    // const { theme } = useTheme();
    // const { t } = useTranslation();

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