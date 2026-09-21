// import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import smallintro1 from '../Assets/Homepage/shortintro/s98-vesnea-see-you.png';
import smallintro2 from '../Assets/Homepage/shortintro/2023-18-sprigatito.jpg';
import { useLocalization } from '../localization/hooks/useLocalization';
import '../styles/Homepage.css'
import { wallpapers } from './data/wallpapers';
import { favpkmn } from './data/favorite-pokemon';

import { ReactComponent as LogoBluesky } from '../Assets/Header/header-bsky.svg'

const Homepage = () => {
    const { t } = useLocalization();

    // for targetid scroll
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         const targetElement = document.getElementById('targetSection');
    //         if (targetElement) {
    //             targetElement.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }, 3000);
    //     return () => clearTimeout(timer);
    // }, []);

    const [currentCarousel, setCurrentCarousel] = useState(0);
    useEffect(() => {
        if (!wallpapers.length) return;

        const timer = setInterval(() => {
            setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [currentCarousel]);
    const handlePrev = useCallback(() => {
        if (!wallpapers.length) return;
        setCurrentCarousel((prev) =>
            prev === 0 ? wallpapers.length - 1 : prev - 1
        );
    }, []);
    const handleNext = useCallback(() => {
        if (!wallpapers.length) return;
        setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
    }, []);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handlePrev, handleNext]);

    return (
        <div>
            <div className="HPcarousel">
                {wallpapers.map((item, idx) => (
                    <div
                        key={item.src || idx}
                        className={`HPcarousel-slide ${idx === currentCarousel ? "active drift" : ""}`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hp-carousel/' + item.src})` }}
                    ></div>
                ))}
                <button className="HPcarousel-btn HPcarousel-prev" onClick={handlePrev}>‹</button>
                <button className="HPcarousel-btn HPcarousel-next" onClick={handleNext}>›</button>
                <div className="HPcarousel-indicators">
                    {wallpapers[currentCarousel] && (
                        <div className="HPcarousel-info">
                            <h3>{wallpapers[currentCarousel].title}</h3>
                            <p>{wallpapers[currentCarousel].description}</p>
                        </div>
                    )}
                    {wallpapers.map((_, idx) => (
                        <span
                            key={idx}
                            className={`HPcarousel-dot ${idx === currentCarousel ? "active" : ""}`}
                            onClick={() => setCurrentCarousel(idx)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className='HPheader'>
                <div className='HPheader-head'>
                    <div className='HPheader-side'>
                        <div className='HPheader-size-gender'>
                            Female ♀
                            <span className='pronoun-badge'>She/Her</span>
                        </div>
                        <div className='HPheader-size-favpkmn'>
                            Favorite Pokémon
                            <div className='HPheader-size-favpkmn-list'>
                                {favpkmn.map((item, idx) => (
                                    <div className='HPheader-size-favpkmn-icon'>
                                        <img
                                            key={item.src || idx}
                                            src={process.env.PUBLIC_URL + '/favpkmn/' + item.src}
                                            alt={item.alt}
                                        />
                                        <div className='HPheader-size-favpkmn-name'>{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='HPheader-main'>
                        <h3>Hi~!</h3>
                        <p>I'm Seavalanche Vesnea, but you can just call me Vesnea! I'm a hobbyist digital artist driven by cuteness.</p>
                        <p>My favorite color is baby pink & baby blue.</p>
                        <p>I draw 2D digital illustrations on Clip Studio Paint as my favorite software. But I also create very short animations, I also create some Live2D avatars, and I also create some 3D models on Blender that works in VRChat!</p>
                    </div>
                </div>
                <div className='HPheader-tail'>
                    <div className='comm-banner'>

                    </div>
                    <div className='follow-me'>
                        <h4>Follow me!</h4>
                        <a className='follow-me-link' href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer">
                            <div className='follow-me-link-icon'><LogoBluesky /></div>
                            <div className='follow-me-link-name'>Bluesky</div>
                        </a>
                    </div>
                    {/* <div className='AVSectionContent title'>
                        {t("about.followme")}
                        <div className='AVSectionContent2-right'>
                            <a href="https://www.twitter.com/CeruleanFrost" target='_blank' rel="noreferrer" className='AVSocials twitter'><Twitter /></a>
                            <a href="https://www.instagram.com/seavalanche" target='_blank' rel="noreferrer" className='AVSocials instagram'><Instagram /></a>
                            <a href="https://bsky.app/profile/seavalanche.bsky.social" target='_blank' rel="noreferrer" className='AVSocials bluesky'><Bluesky /></a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="welcome">
                <div className={`welcomewrapper`}>
                    <div className='welcometextwrap'>
                        {/* <div id="targetSection" className={`welcometitle`}>{t("home.welcome")}</div> */}
                        <h1 className={`welcometitle`}>{t("home.welcome")}</h1>
                        <span className={`welcometext`}>{t("home.welcometext1")}</span>
                        <span className={`welcometext`}>{t("home.welcometext2")}</span>
                    </div>
                </div>
            </div>
            <div className={`shortintro`}>
                <span className='shortintro1'>
                    {t("home.intro1")}
                    <img className='smallintro1' src={smallintro1} alt="Vesnea" />
                </span>
                <span className='shortintro2'>
                    <img className='smallintro2' src={smallintro2} alt="2023 - 18 - Sprigatito" />
                    {t("home.intro2")}
                    {t("home.intro3")}
                </span>
                <span className='shortintro3'>
                    {t("home.intro4")}
                </span>
            </div>
            {/* <div className='commsect'>
                <div className='commsectbanner'></div>
                <div className='commsectitem'>
                    <div className='commsectitemcard'>
                        <h2 className='commsectitemtitle'>{t("home.commsectA1")}</h2>
                        <span className='commsectitemtext'>
                            {t("home.commsectA2")}<br /><br />
                            {t("home.commsectA3")}<br /><br />
                            {t("home.commsectA4")}</span><br />
                        <Link to='/Projects' className='commsectlearnmore'>{t("home.learnmore")}</Link>
                    </div>
                    <div className='commsectitemcard'>
                        <h2 className='commsectitemtitle'>{t("home.commsectB1")}</h2>
                        <span className='commsectitemtext'>
                            {t("home.commsectB2")}<br /><br />
                            {t("home.commsectB3")}
                        </span><br />
                        <a href='https://ko-fi.com/seavalanche/commissions' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <h2 className='commsectitemtitle'>{t("home.commsectC1")}</h2>
                        <span className='commsectitemtext'>
                            {t("home.commsectC2")}<br /><br />
                            {t("home.commsectC3")}<br /><br />
                            {t("home.commsectC4")}
                        </span><br />
                        <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <h2 className='commsectitemtitle'>{t("home.commsectD1")}</h2>
                        <span className='commsectitemtext'>
                            {t("home.commsectD2")}<br /><br />
                            {t("home.commsectD3")}
                        </span><br />
                        <a href='https://ko-fi.com/seavalanche/shop' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Homepage;