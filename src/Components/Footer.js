import LightLogo from '../Assets/Footer/FootbarLogoX2_LightMode.png';
import DarkLogo from '../Assets/Footer/FootbarLogoX2_DarkMode.png';
import { Link } from 'react-router-dom';
import { useTheme } from "../ThemeContext";
import useTranslation from '../useTranslation';

const Footer = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <div>
            <div className={`footnav ${theme || "light"}`}>
                <div className={`footnavbg ${theme || "light"}`}>
                    <div className={`footnav-wrapper ${theme || "light"}`}>
                        <div className='footnav-wrapper1'>
                            <div className='footnav-title'>{t("footer.quicklinks")}</div>
                            <div className='footnav-menu'>
                                <Link to='/' className='footnav-text'>{t("navbar.home")}</Link>
                                <Link to='/Characters' className='footnav-text'>{t("navbar.characters")}</Link>
                                <Link to='/Story' className='footnav-text'>{t("navbar.story")}</Link>
                                {/* <div className='footnav-text'>Animations</div> */}
                                <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='footnav-text'>{t("home.commsectC1")}</a>
                                <Link to='/AboutVesnea' className='footnav-text'>{t("navbar.about")}</Link>
                            </div>
                        </div>
                        <div className='footnav-wrapper2'>
                            <div className='footnav-title'>{t("footer.extlinks")}</div>
                            <div className='footnav-menu'>
                                <a href="https://ko-fi.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Ko-fi</a>
                                <a href="https://www.twitter.com/CeruleanFrost" target='_blank' rel="noreferrer" className='footnav-text'>Twitter</a>
                                <a href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer" className='footnav-text'>Bluesky</a>
                                <a href="https://www.instagram.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Instagram</a>
                                <a href="https://www.pixiv.net/en/users/14390223" target='_blank' rel="noreferrer" className='footnav-text'>Pixiv</a>
                                <a href="https://discord.gg/Hm7DwngzJb" target='_blank' rel="noreferrer" className='footnav-text'>Discord Server</a>
                                <a href="https://www.youtube.com/@seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Youtube</a>
                                <a href="https://mastodon.art/@seava" target='_blank' rel="noreferrer" className='footnav-text'>Mastodon</a>
                                {/* <a href="https://www.deviantart.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Deviantart</a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`footbar ${theme || "light"}`}>
                <div className='footbar-wrapper'>
                    <img
                        className={`footbarlogo ${theme || "light"}`}
                        src={theme === 'light' ? LightLogo : DarkLogo}
                        alt="Seavalanche & Oshyarena logo"
                    />
                    <div className={`footbar-text ${theme || "light"}`}>Copyright © 2021 - 2025 Seavalanche</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;