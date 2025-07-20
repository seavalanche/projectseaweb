import { Link } from 'react-router-dom';
// import linktreebg from '../Assets/Project Sea Web/weblinktree/Vesnea.png';
import showcasepict1 from '../Assets/Project Sea Web/webshowcase/V1 Website 1.png';
import showcasepict2 from '../Assets/Project Sea Web/webshowcase/V1 Website 2.png';
import showcasepict3 from '../Assets/Project Sea Web/webshowcase/V1 Website 3.png';
import showcasepict4 from '../Assets/Project Sea Web/webshowcase/V1 Website 4.png';
import showcasepict5 from '../Assets/Project Sea Web/webshowcase/V1 Website 5.png';
import showcasepict6 from '../Assets/Project Sea Web/webshowcase/V2 Website 1.png';
import showcasepict7 from '../Assets/Project Sea Web/webshowcase/V2 Website 2.png';
import showcasepict8 from '../Assets/Project Sea Web/webshowcase/V2 Website 3.png';
import showcasepict9 from '../Assets/Project Sea Web/webshowcase/V2 Website 4.png';
import showcasepict10 from '../Assets/Project Sea Web/webshowcase/V2 Website 5.png';
import showcasepict11 from '../Assets/Project Sea Web/webshowcase/V2 Website 6.png';
// import separator1 from '../Assets/Project Sea Web/webshowcase/Separator1.png';
// import separator2 from '../Assets/Project Sea Web/webshowcase/Separator2.png';
// import colorstyle from '../Assets/Project Sea Web/webshowcase/SeaWebColorStyles.png';
import { useLocalization } from '../localization/hooks/useLocalization';

function ProjectSeaWeb() {
    const { t } = useLocalization();
    return (
        <div className='AV-wrapper'>
            <div className='AV-wrapper2'>
                <div className='AVSectionTitle bigtitle'>{t("about.hi")}</div>
                <div className='AV-choicewrapper'>
                    <Link to='/AboutVesnea' className='AVSectionContent AVLink title'>
                        {t("about.aboutvesnea")}
                    </Link>
                    <div className='AVTidy-er' />
                    <div className='AVSectionContent title'>
                        {t("about.aboutseaweb")}
                    </div>
                </div>
            </div>
            {/* <div className='projectsshowcase'>
                ( 🦺 Under Construction 🦺 )
            </div> */}
            <div className="AV-wrapper2 projecthero">
                <div className="AVSectionTitle bigtitle">Project Sea Web</div>
                <div className='AVSectionContent title'>{t("aboutwebsite.titledesc")}</div>
                <div className="projectcard">
                    <div className="projectcarditem">
                        <div className="AVSectionContent title">V1</div>
                        <div className="AVIntroContent">
                            {t("aboutwebsite.titleV1")}
                        </div>
                        <a href="https://seavalanche.wixsite.com/seava" target='_blank' rel="noreferrer" className='AVMyStyleAlt'>https://seavalanche.wixsite.com/seava</a>
                    </div>
                    <div className="projectcarditem">
                        <div className="AVSectionContent title">V2</div>
                        <div className="AVIntroContent">
                            {t("aboutwebsite.titleV2")}<br />
                            {t("aboutwebsite.titleV2b")}
                        </div>
                        <a href="https://seavalanche.github.io/" target='_blank' rel="noreferrer" className='AVMyStyleAlt'>https://seavalanche.github.io/</a>
                    </div>
                    <div className="projectcarditem">
                        <div className="AVSectionContent title">V3</div>
                        <div className="AVIntroContent">
                            {t("aboutwebsite.titleV3")}<br />
                            {t("aboutwebsite.titleV3b")}
                        </div>
                        <a href="https://seavalanche.github.io/projectseaweb" target='_blank' rel="noreferrer" className='AVMyStyleAlt'>https://seavalanche.github.io/projectseaweb</a>
                    </div>
                </div>
                <div className="webshowcase">
                    {/* <div className='AVSectionTitle'>{t("about.hi")}</div> */}
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict1} alt="V1" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV1A1")}</div>
                            <div>{t("aboutwebsite.scV1A2")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV1")}</b></i>
                        </div>
                    </div>
                    <div className="webshowcase-wrapper">
                        <div className="webshowcase-text2">
                            <div>{t("aboutwebsite.scV1B1")}</div>
                            <div>{t("aboutwebsite.scV1B2")}</div>
                            <i><b>{t("aboutwebsite.scV1")} &gt;</b></i>
                        </div>
                        <img className='webshowcase-img' src={showcasepict2} alt="V1" />
                    </div>
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict3} alt="V1" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV1C1")}</div>
                            <div>{t("aboutwebsite.scV1C2")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV1")}</b></i>
                        </div>
                    </div>
                    <div className="webshowcase-wrapper">
                        <div className="webshowcase-text2">
                            <div>{t("aboutwebsite.scV1D1")}</div>
                            <div>{t("aboutwebsite.scV1D2")}</div>
                            <i><b>{t("aboutwebsite.scV1")} &gt;</b></i>
                        </div>
                        <img className='webshowcase-img' src={showcasepict4} alt="V1" />
                    </div>
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict5} alt="V1" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV1E1")}</div>
                            <div>{t("aboutwebsite.scV1E2")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV1")}</b></i>
                        </div>
                    </div>
                    <div className="webshowcase-wrapper">
                        <div className="webshowcase-text2">
                            <div>{t("aboutwebsite.scV2A1")}</div>
                            <div>{t("aboutwebsite.scV2A2")}</div>
                            <div>{t("aboutwebsite.scV2A3")}</div>
                            <i><b>{t("aboutwebsite.scV2")} &gt;</b></i>
                        </div>
                        <img className='webshowcase-img' src={showcasepict6} alt="V2" />
                    </div>
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict7} alt="V2" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV2B1")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV2")}</b></i>
                        </div>
                    </div>
                    <div className="webshowcase-wrapper">
                        <div className="webshowcase-text2">
                            <div>{t("aboutwebsite.scV2C1")}</div>
                            <div>{t("aboutwebsite.scV2C2")}</div>
                            <i><b>{t("aboutwebsite.scV2")} &gt;</b></i>
                        </div>
                        <img className='webshowcase-img' src={showcasepict8} alt="V2" />
                    </div>
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict9} alt="V2" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV2D1")}</div>
                            <div>{t("aboutwebsite.scV2D2")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV2")}</b></i>
                        </div>
                    </div>
                    <div className="webshowcase-wrapper">
                        <div className="webshowcase-text2">
                            <div>{t("aboutwebsite.scV2E1")}</div>
                            <i><b>{t("aboutwebsite.scV2")} &gt;</b></i>
                        </div>
                        <img className='webshowcase-img' src={showcasepict10} alt="V2" />
                    </div>
                    <div className="webshowcase-wrapper">
                        <img className='webshowcase-img' src={showcasepict11} alt="V2" />
                        <div className="webshowcase-text1">
                            <div>{t("aboutwebsite.scV2F1")}</div>
                            <i><b>&lt; {t("aboutwebsite.scV2")}</b></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSeaWeb;