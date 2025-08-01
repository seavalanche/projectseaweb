import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocalization } from '../localization/hooks/useLocalization';

const GameLayout = ({
    title,
    subtitle,
    description,
    date,
    engine,
    genre,
    instructions,
    iframeSrc,
    iframeStyles = {},
    containerStyles = {},
    gamewidth,
    gameheight,
    mgameheight,
}) => {
    const { t } = useLocalization();

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < parseInt(gamewidth));
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const DescriptionBlock = () => (
        <div className="gamedesc-containerwrapper">
            <div className="gamedesc-container">
                <div className="label">{t("gamepage.desc")}</div>
                <div className="value">{description}</div>

                <div className="label">{t("gamepage.date")}</div>
                <div className="value">{date}</div>

                <div className="label">{t("gamepage.engine")}</div>
                <div className="value">{engine}</div>

                <div className="label">{t("gamepage.genre")}</div>
                <div className="value">{genre}</div>
            </div>
        </div>
    );

    const Frame = () => (
        <div
            style={{
                ...containerStyles, // Custom container styles per game
                width: gamewidth,
                maxWidth: "100%",
                height: isSmallScreen ? mgameheight : gameheight,
                border: "none",
                overflow: "hidden"
            }}
        >
            <iframe
                title={title}
                src={iframeSrc}
                style={{ ...iframeStyles, border: 'none' }} // Custom iframe styles per game
                width="100%"
                height="100%"
            ></iframe>
        </div>
    );

    return (
        <div className="generalbody">
            <div className="generalbigtitle">{title}</div>
            <div className="generaltitle">{subtitle}</div>
            <DescriptionBlock />
            {instructions && <div className="gamedesc generalcontent">{instructions}</div>}
            <Frame />
            <div className="gamedesc-return generalbody">
                <div className="generalcontent">
                    {t("gamepage.return")}
                </div>
                <Link to='/GamePage'> &gt;&gt;&gt; &nbsp; {t("gamepage.linkback")} &nbsp; &lt;&lt;&lt; </Link>
            </div>
        </div>
    );
};

export default GameLayout;
