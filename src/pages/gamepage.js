import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';

const GamePage = () => {
    const { t } = useLocalization();

    return (
        <div className='generalbody'>
            <div className='generalbigtitle'>
                {t("gamepage.title")}
            </div>
            <div className='generaltitle'>
                {t("gamepage.subtitle")}
            </div>
            <div className='generalcontent'>
                <ul>
                    <div className='listseparator first'>{t("gamepage.separator1")}</div>
                    <li>
                        <Link to='/Game/TicTacToe' className='li'>{t("tictactoe.title")}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default GamePage;