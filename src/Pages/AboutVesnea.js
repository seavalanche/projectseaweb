import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';
import VesneaPFP from '../Assets/About/AboutVesnea/AboutVesnea-PFP.webp';
import MyStyle01 from '../Assets/About/AboutVesnea/AboutMyStyle/01-DigitalArt-Blocky.webp';
import MyStyle02 from '../Assets/About/AboutVesnea/AboutMyStyle/02-DigitalArt-Brushy.webp';
import MyStyle03 from '../Assets/About/AboutVesnea/AboutMyStyle/03-DigitalArt-Clean.webp';
import MyStyle04 from '../Assets/About/AboutVesnea/AboutMyStyle/04-DigitalArt-Artsy.webp';
import MyStyle05 from '../Assets/About/AboutVesnea/AboutMyStyle/05-DigitalArt-Grainy.webp';
import MyStyle06 from '../Assets/About/AboutVesnea/AboutMyStyle/06-DigitalArt-Fluffy.webp';
import MyStyle07 from '../Assets/About/AboutVesnea/AboutMyStyle/07-DigitalArt-Abstract.webp';
import MyStyle08 from '../Assets/About/AboutVesnea/AboutMyStyle/08-DigitalArt-Dreamy.webp';
import MyStyle09 from '../Assets/About/AboutVesnea/AboutMyStyle/09-DigitalArt-3D-Like.webp';
import MyStyle10 from '../Assets/About/AboutVesnea/AboutMyStyle/10-DigitalArt-PixelArt.webp';
import MyStyle11 from '../Assets/About/AboutVesnea/AboutMyStyle/11-DigitalArt-AnimationArt.gif';
import MyStyle12 from '../Assets/About/AboutVesnea/AboutMyStyle/12-2D-Modeling-And-Rigging.webp';
import MyStyle13 from '../Assets/About/AboutVesnea/AboutMyStyle/13-3D-Modeling-And-Rigging.webp';

const About = () => {
    const { t } = useLocalization();
    return (
        <div className='AV-wrapper'>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle'>{t("about.hi")}</div>
                <div className='AV-choicewrapper'>
                    <div className='AVSectionContent'>
                        {t("about.aboutvesnea")}
                    </div>
                    <div className='AVTidy-er' />
                    <Link to='/Projectseaweb' className='AVSectionContent AVLink'>
                        {t("about.aboutseaweb")}
                    </Link>
                </div>
            </div>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle'>{t("about.aboutvesnea")}</div>
                <div className='AVIntroHeader' />
                <div className='AV-introwrapper'>
                    <img className='AVIntroPFP' src={VesneaPFP} alt="Vesnea's portrait" />
                    <div className='AVIntroContent'>
                        {t("about.vesneaintro")}
                    </div>
                </div>
            </div>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle'>{t("about.mystyle")}</div>
                <div className='AV-wrapper3'>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle01} alt={t("about.card1-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card1-name")}
                            <div className='AVMyStyleAlt'>{t("about.card1-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card1-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle02} alt={t("about.card2-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card2-name")}
                            <div className='AVMyStyleAlt'>{t("about.card2-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card2-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle03} alt={t("about.card3-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card3-name")}
                            <div className='AVMyStyleAlt'>{t("about.card3-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card3-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle04} alt={t("about.card4-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card4-name")}
                            <div className='AVMyStyleAlt'>{t("about.card4-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card4-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle05} alt={t("about.card5-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card5-name")}
                            <div className='AVMyStyleAlt'>{t("about.card5-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card5-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle06} alt={t("about.card6-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card6-name")}
                            <div className='AVMyStyleAlt'>{t("about.card6-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card6-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle07} alt={t("about.card7-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card7-name")}
                            <div className='AVMyStyleAlt'>{t("about.card7-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card7-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle08} alt={t("about.card8-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card8-name")}
                            <div className='AVMyStyleAlt'>{t("about.card8-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card8-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle09} alt={t("about.card9-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card9-name")}
                            <div className='AVMyStyleAlt'>{t("about.card9-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card9-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle10} alt={t("about.card10-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card10-name")}
                            <div className='AVMyStyleAlt'>{t("about.card10-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card10-tools")}</div>
                    </div>
                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle11} alt={t("about.card11-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card11-name")}
                            <div className='AVMyStyleAlt'>{t("about.card11-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card11-tools")}</div>
                    </div>

                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle12} alt={t("about.card12-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card12-name")}
                            <div className='AVMyStyleAlt'>{t("about.card12-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card12-tools")}</div>
                    </div>

                    <div className='AVMyStyleCard'>
                        <img className='AVMyStyleImg' src={MyStyle13} alt={t("about.card13-alt")} />
                        <div className='AVMyStyleText'>
                            {t("about.card13-name")}
                            <div className='AVMyStyleAlt'>{t("about.card13-alt")}</div>
                        </div>
                        <div className='AVTidy-er' />
                        <div className='AVMyStyleTools'>{t("about.card13-tools")}</div>
                    </div>
                </div>
            </div>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle'>{t("about.myjourney")}</div>
                <div className='AVTimeline' />
            </div>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle'>{t("about.lovemywork?")}</div>
                <div className='AV-choicewrapper'>
                    <div className='AVSectionContent'>
                        {t("about.commissionme")}
                        <div className='AVSectionContent2-left'>
                            {/* <div className='AVSocials-kofi' /> */}
                            <a href="https://ko-fi.com/seavalanche" target='_blank' rel="noreferrer" className='AVSocials-kofi'> </a>
                        </div>
                    </div>
                    <div className='AVTidy-er' />
                    <div className='AVSectionContent'>
                        {t("about.followme")}
                        <div className='AVSectionContent2-right'>
                            {/* <div className='AVSocials-twitter' /> */}
                            <a href="https://www.twitter.com/CeruleanFrost" target='_blank' rel="noreferrer" className='AVSocials-twitter'> </a>
                            {/* <div className='AVSocials-instagram' /> */}
                            <a href="https://www.instagram.com/seavalanche" target='_blank' rel="noreferrer" className='AVSocials-instagram'> </a>
                            {/* <div className='AVSocials-bluesky' /> */}
                            <a href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer" className='AVSocials-bluesky'> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;