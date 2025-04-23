import { Link } from 'react-router-dom';
import smallintro1 from '../Assets/Homepage/shortintro/S98 - Vesnea See You.png';
import smallintro2 from '../Assets/Homepage/shortintro/2023-18-Sprigatito.jpg';
import useTranslation from '../useTranslation';

const Homepage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <div className="introduction">
            </div>
            <div className="welcome">
                <div className={`welcomewrapper`}>
                    <div className='welcometextwrap'>
                        <div className={`welcometitle`}>{t("home.welcome")}</div>
                        <div className={`welcometext`}>{t("home.welcometext1")}</div>
                        <div className={`welcometext`}>{t("home.welcometext2")}</div>
                    </div>
                </div>
            </div>
            <div className={`shortintro`}>
                <div className='shortintro1'>
                    {t("home.intro1")}
                    <img className='smallintro1' src={smallintro1} alt="Vesnea" />
                </div>
                <div className='shortintro2'>
                    <img className='smallintro2' src={smallintro2} alt="2023 - 18 - Sprigatito" />
                    {t("home.intro2")}
                    {t("home.intro3")}
                </div>
                <div className='shortintro3'>
                    {t("home.intro4")}
                </div>
            </div>
            <div className='commsect'>
                <div className='commsectbanner'></div>
                <div className='commsectitem'>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectA1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectA2")}<br /><br />
                            {t("home.commsectA3")}<br /><br />
                            {t("home.commsectA4")}</div><br />
                        <Link to='/Projects' className='commsectlearnmore'>{t("home.learnmore")}</Link>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectB1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectB2")}<br /><br />
                            {t("home.commsectB3")}
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/commissions' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectC1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectC2")}<br /><br />
                            {t("home.commsectC3")}<br /><br />
                            {t("home.commsectC4")}
                        </div><br />
                        <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectD1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectD2")}<br /><br />
                            {t("home.commsectD3")}
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/shop' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;