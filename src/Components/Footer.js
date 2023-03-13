import logo from '../Assets/Footbar Logo.png';
import { Link } from 'react-router-dom';
import footnavbg from '../Assets/FootNav-bg.jpg';

function Footer() {
    return (
        <div>
            <div className='footnav'>
                <img className='footnavbg' src={footnavbg} alt="Vesnea waving~" />
                <div className='footnav-wrapper'>
                    <div className='footnav-wrapper1'>
                        <div className='footnav-title'>Quick Links</div>
                        <div className='footnav-menu'>
                            <Link to='/' className='footnav-text'>Home</Link>
                            <div className='footnav-text'>Characters</div>
                            <div className='footnav-text'>Animations</div>
                            <Link to='/About' className='footnav-text'>About</Link>
                        </div>
                    </div>
                    <div className='footnav-wrapper2'>
                        <div className='footnav-title'>External Links</div>
                        <div className='footnav-menu'>
                            <a href="https://www.twitter.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Twitter</a>
                            <a href="https://mastodon.art/@seava" target='_blank' rel="noreferrer" className='footnav-text'>Mastodon</a>
                            <a href="https://www.instagram.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Instagram</a>
                            <a href="https://www.pixiv.net/en/users/14390223" target='_blank' rel="noreferrer" className='footnav-text'>Pixiv</a>
                            <a href="https://www.deviantart.com/seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Deviantart</a>
                            <a href="https://discord.gg/Hm7DwngzJb" target='_blank' rel="noreferrer" className='footnav-text'>Discord Server</a>
                            <a href="https://www.youtube.com/@seavalanche" target='_blank' rel="noreferrer" className='footnav-text'>Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footbar'>
                <div className='footbar-wrapper'>
                    <img className='logo' src={logo} alt="Seavalanche & Oshyarena logo" />
                    <div className='footbar-text'>Copyright © 2023 Seavalanche</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;