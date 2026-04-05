import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import smallintro1 from '../Assets/Homepage/shortintro/s98-vesnea-see-you.png';
import smallintro2 from '../Assets/Homepage/shortintro/2023-18-sprigatito.jpg';
import { useLocalization } from '../localization/hooks/useLocalization';
import '../styles/Homepage.css'
import '../styles/HPCarousel.css';

const wallpapers = [
    `${process.env.PUBLIC_URL}/hp-carousel/hpc01.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc02.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc03.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc04.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc05.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc06.jpg`,
    `${process.env.PUBLIC_URL}/hp-carousel/hpc07.jpg`,
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
            <div className='commsect'>
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
            </div>
        </div>
    )
}

export default Homepage;