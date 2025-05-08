import { Link } from 'react-router-dom';
import linktreebg from '../Assets/Project Sea Web/weblinktree/Vesnea.png';
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
import separator1 from '../Assets/Project Sea Web/webshowcase/Separator1.png';
import separator2 from '../Assets/Project Sea Web/webshowcase/Separator2.png';
import colorstyle from '../Assets/Project Sea Web/webshowcase/SeaWebColorStyles.png';
import { useLocalization } from '../localization/hooks/useLocalization';

function ProjectSeaWeb() {
    const { t } = useLocalization();
    return (
        <div>
            <div className='projectsshowcase'>
                ( 🦺 Under Construction 🦺 )
            </div>
            <div className="projectshero">
                <div className="projectsheroheader">
                    <div className="projectsherotitle">Project Sea Web</div>
                    {t("aboutwebsite.titledesc")}
                </div>
                <div className="projectsheroitem">
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V1</div>
                        <div className="projectsheroitemtext">
                            {t("aboutwebsite.titleV1")}
                        </div>
                        <a href="https://seavalanche.wixsite.com/seava" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.wixsite.com/seava</a>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V2</div>
                        <div className="projectsheroitemtext">
                            {t("aboutwebsite.titleV2")}<br /><br />
                            {t("aboutwebsite.titleV2b")}
                        </div>
                        <a href="https://seavalanche.github.io/" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.github.io/</a>
                    </div>
                    <div className="projectsheroitemcard">
                        <div className="projectsheroitemtitle">V3</div>
                        <div className="projectsheroitemtext">
                            {t("aboutwebsite.titleV3")}<br /><br />
                            {t("aboutwebsite.titleV3b")}
                        </div>
                        <a href="https://seavalanche.github.io/projectseaweb" target='_blank' rel="noreferrer" className='projectsherolearnmore'>https://seavalanche.github.io/projectseaweb</a>
                    </div>
                </div>
            </div>
            <div className="websitelinktree">
                <img className='linktreebg' src={linktreebg} alt="Vesnea" />
                <div className="websitelinktree-wrapper">
                    <div className='websitelinktree-title'>This website's link tree:</div>
                    <div className="websitelinktree-wrapper1">
                        <Link to='/' className='websitelinktree-text'><b>Homepage</b></Link>
                    </div>

                    <div className="websitelinktree-wrapper1">
                        <div className='websitelinktree-text'><b>Collections</b></div>
                        <div className='websitelinktree-text'>Favorite Artworks Collage</div>
                        <div className='websitelinktree-text'>Animations</div>
                        <div className='websitelinktree-text'>Merchandises</div>
                        <Link to='/Projects' className='websitelinktree-text'>Projects</Link>
                        <ul>
                            <li>
                                <div className='websitelinktree-text'>~ Project Rea</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Oshyarena</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Seava</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project Rinrinmochi</div>
                            </li>
                            <li>
                                <div className='websitelinktree-text'>~ Project CAD</div>
                            </li>
                        </ul>
                        <Link to='/Commissions' className='websitelinktree-text'>Commissions</Link>
                    </div>

                    <div className="websitelinktree-wrapper1">
                        <Link to='/About' className='websitelinktree-text'><b>About Page</b></Link>
                        <div className='websitelinktree-text'>Characters</div>
                        <li>
                            <div className='websitelinktree-text'>~ Featuring page</div>
                        </li>
                        <Link to='/ProjectSeaWeb' className='websitelinktree-text'>Project Sea Web</Link>
                        <div className='websitelinktree-text'>Contacts</div>
                    </div>
                </div>
            </div>
            <div className="webshowcase">
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
            <div className="webstyle">
                <img className='separator' src={separator1} alt="separator" />
                <div className="webstyle-wrapperA">
                    <div className="webstyle-wrapperA-text">hey... suddenly the website looks different here???</div>
                    <div className="webstyle-wrapperB">
                        <div className="webstyle-wrapperB-text">✨✨ Project Sea Web’s Color Styles! ✨✨</div>
                        <img className="colorstyle" src={colorstyle} alt="SeaWeb Color's Styles" />
                    </div>
                </div>
                <img className='separator' src={separator2} alt="separator" />
            </div>
        </div>
    )
}

export default ProjectSeaWeb;