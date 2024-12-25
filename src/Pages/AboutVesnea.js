import useTranslation from '../useTranslation';
const About = () => {
    const { t } = useTranslation();
    return (
        <div>
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
        </div>
    )
}

export default About;