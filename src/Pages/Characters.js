import mythseavalanche from '../Assets/About/ACinfo/Myth Seavalanche.png';
import seavalanche from '../Assets/About/ACinfo/Seavalanche.png';
import seava from '../Assets/About/ACinfo/Seava.png';
import vesnea from '../Assets/About/ACinfo/Vesnea.png';
import korazu from '../Assets/About/ACinfo/Korazu.png';
import uzakon from '../Assets/About/ACinfo/Uzakon.png';
import zumiko from '../Assets/About/ACinfo/Zumiko.png';
import baldor from '../Assets/About/ACinfo/AntagonistA/Baldor.webp';
import arna from '../Assets/About/ACinfo/AntagonistA/Arna.webp';
import rakariki from '../Assets/About/ACinfo/AntagonistA/Rakariki.webp';
import fondan from '../Assets/About/ACinfo/AntagonistA/Fondan.webp';
import veranite from '../Assets/About/ACinfo/AntagonistA/Veranite.webp';
import sarchie from '../Assets/About/ACinfo/AntagonistA/Sarchie.webp';
import deimev from '../Assets/About/ACinfo/AntagonistA/Deimev.webp';
import aboutmythseavalanche from '../Assets/About/AC/MythSeavalanche.webp';
import aboutseavalanche from '../Assets/About/AC/Seavalanche.png';
import aboutseava from '../Assets/About/AC/Seava.png';
import aboutvesnea from '../Assets/About/AC/Vesnea.png';
import aboutkorazu from '../Assets/About/AC/Korazu.png';
import aboutuzakon from '../Assets/About/AC/Uzakon.png';
import aboutzumiko from '../Assets/About/AC/Zumiko.png';
import aboutseparator from '../Assets/S75 - Vesnea_b_338x450.gif';
import { useTheme } from "../contexts/ThemeContext";
import useTranslation from '../localization/hooks/useTranslation';
import { Link } from 'react-router-dom';

function About() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <div>
            <div className={`ACinfo ${theme || "light"}`}>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='mythseavalanche' src={mythseavalanche} alt="mythseavalanche" />
                        <div className={`ACinfoitemtitle0 ${theme || "light"}`}>Myth Seavalanche</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.mythseavalanche1")}<br />
                            {t("ACinfo.mythseavalanche2")}<br /><br />
                            {t("ACinfo.mythseavalanche3")}</div><br />
                    </div>
                </div>
                <div className='ACspacer'><br /><br /></div>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='seavalanche' src={seavalanche} alt="seavalanche" />
                        <div className={`ACinfoitemtitle1 ${theme || "light"}`}>Seavalanche</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.seavalanche1")}<br /><br />
                            {t("ACinfo.seavalanche2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='seava' src={seava} alt="seava" />
                        <div className={`ACinfoitemtitle2 ${theme || "light"}`}>Seava</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.seava1")}<br /><br />
                            {t("ACinfo.seava2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='vesnea' src={vesnea} alt="vesnea" />
                        <div className={`ACinfoitemtitle3 ${theme || "light"}`}>Vesnea</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.vesnea1")}<br /><br />
                            {t("ACinfo.vesnea2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='korazu' src={korazu} alt="korazu" />
                        <div className={`ACinfoitemtitle4 ${theme || "light"}`}>Korazu</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.korazu1")}<br /><br />
                            {t("ACinfo.korazu2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='uzakon' src={uzakon} alt="uzakon" />
                        <div className={`ACinfoitemtitle5 ${theme || "light"}`}>Uzakon</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.uzakon1")}<br /><br />
                            {t("ACinfo.uzakon2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='zumiko' src={zumiko} alt="zumiko" />
                        <div className={`ACinfoitemtitle6 ${theme || "light"}`}>Zumiko</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.zumiko1")}<br /><br />
                            {t("ACinfo.zumiko2")}</div><br />
                    </div>
                </div>
                <div className='ACinfoitem'>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={baldor} alt="baldor" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Baldor</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.baldor1")}<br /><br />
                            {t("ACinfo.baldor2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={arna} alt="arna" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Arna</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.arna1")}<br /><br />
                            {t("ACinfo.arna2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={rakariki} alt="rakariki" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Rakariki</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.rakariki1")}<br /><br />
                            {t("ACinfo.rakariki2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={fondan} alt="fondan" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Fondan</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.fondan1")}<br /><br />
                            {t("ACinfo.fondan2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={veranite} alt="veranite" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Veranite</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.veranite1")}<br /><br />
                            {t("ACinfo.veranite2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={sarchie} alt="sarchie" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Sarchie</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.sarchie1")}<br /><br />
                            {t("ACinfo.sarchie2")}</div><br />
                    </div>
                    <div className='ACinfoitemcard'>
                        <img className='Antagonist1' src={deimev} alt="deimev" />
                        <div className={`ACinfoitemtitleA1 ${theme || "light"}`}>Deimev</div>
                        <div className={`ACinfoitemtext ${theme || "light"}`}>
                            {t("ACinfo.deimev1")}<br /><br />
                            {t("ACinfo.deimev2")}</div><br />
                    </div>
                </div>
            </div>
            <Link to='/CharInfo' className="aboutchar">
                {t("charcard.aboutchar")}
            </Link>
            <div className={`AC ${theme || "light"}`} id='targetmythseavalanche'>
                <img className='aboutmythseavalanche' src={aboutmythseavalanche} alt="Seavalanche aka Myth Seavalanche" />
                <div className={`ACmythseavalancheint ${theme || "light"}`}>
                    <div className={`ACmythseavalancheinttitle ${theme || "light"}`}> Seavalanche<br />
                        <div className='ACmythseavalancheinttitleB'>aka Myth Seavalanche</div>
                    </div>
                    {t("ACtitle.mythseavalanche")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.mythseavalancheA1")}<br /><br />
                            {t("ACcontent.mythseavalancheA2")}<br /><br />
                            {t("ACcontent.mythseavalancheA3")}<br /><br />
                            {t("ACcontent.mythseavalancheA4")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.mythseavalancheB1")}<br /><br />
                            {t("ACcontent.mythseavalancheB2")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetseavalanche'>
                <img className='aboutseavalanche' src={aboutseavalanche} alt="Seavalanche" />
                <div className={`ACseavalancheint ${theme || "light"}`}>
                    <div className={`ACseavalancheinttitle ${theme || "light"}`}>Seavalanche</div>
                    {t("ACtitle.seavalanche")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.seavalancheA1")}<br /><br />
                            {t("ACcontent.seavalancheA2")}<br /><br />
                            {t("ACcontent.seavalancheA3")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.seavalancheB1")}<br /><br />
                            {t("ACcontent.seavalancheB2")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetseava'>
                <img className='aboutseava' src={aboutseava} alt="Seava" />
                <div className={`ACseavaint ${theme || "light"}`}>
                    <div className={`ACseavainttitle ${theme || "light"}`}>Seava</div>
                    {t("ACtitle.seava")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.seavaA1")}<br /><br />
                            {t("ACcontent.seavaA2")}<br /><br />
                            {t("ACcontent.seavaA3")}<br /><br />
                            {t("ACcontent.seavaA4")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.seavaB1")}<br /><br />
                            {t("ACcontent.seavaB2")}<br /><br />
                            {t("ACcontent.seavaB3")}<br /><br />
                            {t("ACcontent.seavaB4")}<br /><br />
                            <b>Frost Force:</b><br />
                            {t("ACcontent.seavaB5")}<br /><br />
                            {t("ACcontent.seavaB6")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetvesnea'>
                <img className='aboutvesnea' src={aboutvesnea} alt="Vesnea" />
                <div className={`ACvesneaint ${theme || "light"}`}>
                    <div className={`ACvesneainttitle ${theme || "light"}`}>Vesnea</div>
                    {t("ACtitle.vesnea")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.vesneaA1")}<br /><br />
                            {t("ACcontent.vesneaA2")}<br /><br />
                            {t("ACcontent.vesneaA3")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.vesneaB1")}<br /><br />
                            {t("ACcontent.vesneaB2")}<br /><br />
                            {t("ACcontent.vesneaB3")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetkorazu'>
                <img className='aboutkorazu' src={aboutkorazu} alt="Korazu" />
                <div className={`ACkorazuint ${theme || "light"}`}>
                    <div className={`ACkorazuinttitle ${theme || "light"}`}>Korazu</div>
                    {t("ACtitle.korazu")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.korazuA1")}<br /><br />
                            {t("ACcontent.korazuA2")}<br /><br />
                            {t("ACcontent.korazuA3")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.korazuB1")}<br /><br />
                            {t("ACcontent.korazuB2")}<br /><br />
                            {t("ACcontent.korazuB3")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetuzakon'>
                <img className='aboutuzakon' src={aboutuzakon} alt="Uzakon" />
                <div className={`ACuzakonint ${theme || "light"}`}>
                    <div className={`ACuzakoninttitle ${theme || "light"}`}>Uzakon</div>
                    {t("ACtitle.uzakon")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.uzakonA1")}<br /><br />
                            {t("ACcontent.uzakonA2")}<br /><br />
                            {t("ACcontent.uzakonA3")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.uzakonB1")}<br /><br />
                            {t("ACcontent.uzakonB2")}<br /><br />
                            {t("ACcontent.uzakonB3")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`AC ${theme || "light"}`} id='targetzumiko'>
                <img className='aboutzumiko' src={aboutzumiko} alt="Zumiko" />
                <div className={`ACzumikoint ${theme || "light"}`}>
                    <div className={`ACzumikointtitle ${theme || "light"}`}>Zumiko</div>
                    {t("ACtitle.zumiko")}
                </div>
                <div className={`ACitem ${theme || "light"}`}>
                    <div className='ACcard1'>
                        <div className='ACcardtitle'>{t("ACtitle.Left")}</div>
                        <div className='ACcontent1'>
                            {t("ACcontent.zumikoA1")}<br /><br />
                            {t("ACcontent.zumikoA2")}<br /><br />
                            {t("ACcontent.zumikoA3")}
                        </div>
                    </div>
                    <div className='ACcard2'>
                        <div className='ACcardtitle'>{t("ACtitle.Right")}</div>
                        <div className='ACcontent2'>
                            {t("ACcontent.zumikoB1")}<br /><br />
                            {t("ACcontent.zumikoB2")}<br /><br />
                            {t("ACcontent.zumikoB3")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutseparator'>
                <img src={aboutseparator} className='aboutseparatorimg1' alt='Vesnea' />
            </div>
        </div>
    )
}

export default About;