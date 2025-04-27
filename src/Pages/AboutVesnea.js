import useTranslation from '../Components/useTranslation';
import { Link } from 'react-router-dom';
const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='projectsshowcase'>
                ( 🦺 Under Construction 🦺 )
            </div>
            <div className="abouthero">
                <div className="aboutherocontainer">
                    <div className="aboutherotitle">{t("about.title1")}</div>
                    <p>{t("about.title1p1")}</p>
                    <p>{t("about.title1p2")}</p>
                    <p>{t("about.title1p3")}</p>
                    <p>{t("about.title1p4")}</p>
                    <p>{t("about.title1p5")}</p>
                    <p>{t("about.title1p6")}</p>
                </div>
            </div>
            <Link to='/Projectseaweb' className="aboutwebsite">
                {t("about.aboutwebsite")}
            </Link>
        </div>
    )
}

export default About;