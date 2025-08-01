import GameLayout from '../../Components/GameLayout.js';
import { useLocalization } from '../../localization/hooks/useLocalization.js';

const TicTacToePage = () => {
    const { t } = useLocalization();
    
    return (
        <GameLayout
            gamewidth="570px"
            gameheight="530px"
            mgameheight="93vw"
            title={t("tictactoe.title")}
            subtitle={t("tictactoe.subtitle")}
            description={t("tictactoe.description")}
            date={t("tictactoe.date")}
            engine={t("tictactoe.engine")}
            genre={t("tictactoe.genre")}
            instructions={t("tictactoe.instructions")}
            iframeSrc={`${process.env.PUBLIC_URL}/game/TicTacToe.html`}
        />
    );
};

export default TicTacToePage;
