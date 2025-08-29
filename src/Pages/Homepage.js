import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import smallintro1 from '../Assets/Homepage/shortintro/S98 - Vesnea See You.png';
import smallintro2 from '../Assets/Homepage/shortintro/2023-18-Sprigatito.jpg';
import { useLocalization } from '../localization/hooks/useLocalization';
import '../css/HPcarousel.css';

const wallpapers = [
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC01.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC02.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC03.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC04.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC05.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC06.jpg`,
    `${process.env.PUBLIC_URL}/homepage_carousel/HPC07.jpg`,
];

const Homepage = () => {
    const { t } = useLocalization();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Scroll to the element with id "targetSection"
            const targetElement = document.getElementById('targetSection');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 3000); // 3000ms = 3 seconds

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const [currentCarousel, setCurrentCarousel] = useState(0);
    // autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
        }, 10000); // 10s
        return () => clearInterval(timer);
    }, []);
    // handlers
    const handlePrev = () => {
        setCurrentCarousel((prev) =>
            prev === 0 ? wallpapers.length - 1 : prev - 1
        );
    };
    const handleNext = () => {
        setCurrentCarousel((prev) => (prev + 1) % wallpapers.length);
    };

    return (
        <div>
            <div className="HPcarousel">
                {wallpapers.map((src, idx) => (
                    <div
                        key={idx}
                        className={`HPcarousel-slide ${idx === currentCarousel ? "active drift" : ""}`}
                        style={{ backgroundImage: `url(${src})` }}
                    ></div>
                ))}
                <button className="HPcarousel-btn HPcarousel-prev" onClick={handlePrev}>
                    ‹
                </button>
                <button className="HPcarousel-btn HPcarousel-next" onClick={handleNext}>
                    ›
                </button>
                <div className="HPcarousel-indicators">
                    {wallpapers.map((_, idx) => (
                        <span
                            key={idx}
                            className={`HPcarousel-dot ${idx === currentCarousel ? "active" : ""}`}
                            onClick={() => setCurrentCarousel(idx)}
                        ></span>
                    ))}
                </div>
            </div>
            {/* <div className="introduction">
            </div> */}
            <div className="welcome">
                <div className={`welcomewrapper`}>
                    <div className='welcometextwrap'>
                        {/* <div id="targetSection" className={`welcometitle`}>{t("home.welcome")}</div> */}
                        <div className={`welcometitle`}>{t("home.welcome")}</div>
                        <div className={`welcometext`}>{t("home.welcometext1")}</div>
                        <div className={`welcometext`}>{t("home.welcometext2")}</div>
                    </div>
                </div>
            </div>
            <div className={`shortintro`}>
                <div className='shortintro1'>
                    {t("home.intro1")}
                    <img className='smallintro1' src={smallintro1} alt="Vesnea" />
                </div>
                <div className='shortintro2'>
                    <img className='smallintro2' src={smallintro2} alt="2023 - 18 - Sprigatito" />
                    {t("home.intro2")}
                    {t("home.intro3")}
                </div>
                <div className='shortintro3'>
                    {t("home.intro4")}
                </div>
            </div>
            <div className='commsect'>
                <div className='commsectbanner'></div>
                <div className='commsectitem'>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectA1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectA2")}<br /><br />
                            {t("home.commsectA3")}<br /><br />
                            {t("home.commsectA4")}</div><br />
                        <Link to='/Projects' className='commsectlearnmore'>{t("home.learnmore")}</Link>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectB1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectB2")}<br /><br />
                            {t("home.commsectB3")}
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/commissions' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectC1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectC2")}<br /><br />
                            {t("home.commsectC3")}<br /><br />
                            {t("home.commsectC4")}
                        </div><br />
                        <a href='https://www.pixiv.net/en/users/14390223/illustrations/Ugoira' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                    <div className='commsectitemcard'>
                        <div className='commsectitemtitle'>{t("home.commsectD1")}</div>
                        <div className='commsectitemtext'>
                            {t("home.commsectD2")}<br /><br />
                            {t("home.commsectD3")}
                        </div><br />
                        <a href='https://ko-fi.com/seavalanche/shop' target='_blank' rel="noreferrer" className='commsectlearnmore'>{t("home.learnmore")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;