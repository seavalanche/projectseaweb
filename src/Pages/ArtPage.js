import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';

const GamePage = () => {
    const { t } = useLocalization();

    return (
        <div className='generalbody'>
            <div className='generalbigtitle'>
                {t("artpage.title")}
            </div>
            <div className='generaltitle'>
                {t("artpage.subtitle")}
            </div>
            <div className='generalcontent'>
                <ul>
                    <div className='listseparator first'>{t("artpage.separator1")}</div>
                    <li><Link to='/Characters' className='li'>{t("artpage.chars")}</Link></li>
                    <li><Link to='/Story' className='li'>{t("artpage.story")}</Link></li>
                    <li><Link to='/Poem' className='li'>{t("artpage.poem")}</Link></li>
                    <li><Link to='/Poem/UmbreonJourney' className='li'>{t("artpage.umbreonjourney")}</Link></li>

                    <div className='listseparator'>{t("artpage.separator2")}</div>
                    <li><Link to='/GamePage' className='li'>{t("artpage.games")}</Link></li>
                    <li><Link to='/ProjectSeaWeb' className='li'>{t("artpage.seaweb")}</Link></li>
                    <li><Link to='/Themes' className='li'>{t("artpage.themes")}</Link></li>
                    <li><Link to='/Merch' className='li'>{t("artpage.merch")}</Link></li>

                    <div className='listseparator'>{t("artpage.separator3")}</div>
                    <li><Link to='/SeaWebTree' className='li'>{t("artpage.seawebtree")}</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default GamePage;