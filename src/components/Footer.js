import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';
import { ReactComponent as Footbarlogo1 } from '../Assets/footer/footbarlogo-seavalanche.svg';
import { ReactComponent as Footbarlogo2 } from '../Assets/footer/footbarlogo-star.svg';
import { ReactComponent as Footbarlogo3 } from '../Assets/footer/footbarlogo-oshyarena.svg';
import '../styles/layout/Footnav.css';
import '../styles/layout/Footbar.css';

const Footer = () => {
    const { t } = useLocalization();
    return (
        <div>
            <div className={`footnav`}>
                <div className={`footnav-positioner`}>
                    <div className='footnav-box'>
                        <div className='footnav-card'>
                            <h6 className='footnav-title'>{t("footer.quicklinks")}</h6>
                            <div className='footnav-menu'>
                                <Link to='/' className='footnav-link'>{t("navbar.home")}</Link>
                                <Link to='/Characters' className='footnav-link'>{t("navbar.characters1")}</Link>
                                <Link to='/Story' className='footnav-link'>{t("navbar.story")}</Link>
                                {/* <div className='footnav-link'>Animations</div> */}
                                <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='footnav-link'>{t("home.commsectC1")}</a>
                                <Link to='/AboutVesnea' className='footnav-link'>{t("navbar.about")}</Link>
                            </div>
                        </div>
                        <div className='footnav-card'>
                            <h6 className='footnav-title'>{t("footer.extlinks")}</h6>
                            <div className='footnav-menu'>
                                <a href="https://ko-fi.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-link'>Ko-fi</a>
                                <a href="https://www.twitter.com/CeruleanFrost" target='_blank' rel="noreferrer" className='footnav-link'>Twitter</a>
                                <a href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer" className='footnav-link'>Bluesky</a>
                                <a href="https://www.instagram.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-link'>Instagram</a>
                                <a href="https://www.pixiv.net/en/users/14390223" target='_blank' rel="noreferrer" className='footnav-link'>Pixiv</a>
                                {/* <a href="https://discord.gg/Hm7DwngzJb" target='_blank' rel="noreferrer" className='footnav-link'>Discord Server</a> */}
                                <a href="https://www.youtube.com/@seavalanche" target='_blank' rel="noreferrer" className='footnav-link'>Youtube</a>
                                <a href="https://mastodon.art/@seava" target='_blank' rel="noreferrer" className='footnav-link'>Mastodon</a>
                                <a href="https://www.deviantart.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-link'>Deviantart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`footbar`}>
                <div className='footbar-wrapper'>
                    <div className={`footbar-logo`}>
                        <Footbarlogo1 className='footbarlogo logo1' />
                        <Footbarlogo2 className='footbarlogo logo2' />
                        <Footbarlogo3 className='footbarlogo logo3' />
                    </div>
                    <div className={`footbar-text`}>Copyright © 2015 - 2026 Seavalanche</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;