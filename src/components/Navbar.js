import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocalization } from "../localization/hooks/useLocalization";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "../styles/layout/Navbar.css";
import Sparkles from "../components/Sparkles.js";
import { ReactComponent as PfpBg } from "../Assets/Header/header-pfp-0.svg"

const Navbar = ({ theme, themes, toggleTheme }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isSmall = width < 800 && height > 415;
            setIsSmallScreen(isSmall);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    const renderMobileLayout = () => (
        <div className="navbar-mobile">
            <div className="NV-body-primary">
                <div className="NV-branding">
                    <div className="pfp-overlay">
                        <div className="pfpzone A0" />
                        <div className="pfpzone C0" />
                        <div className="pfpzone B0" />
                        <div className="pfpzone A1" />
                        <div className="pfpzone C1" />
                        <div className="pfpzone B1" />
                    </div>
                    <div className="landing-pfp-container">
                        <div className="landing-pfp" />
                        <PfpBg className="landing-pfp-bg" />
                    </div>
                </div>
                <div className="NV-logo">
                    <NavLink className="landing-name" to="/">
                        <Sparkles>
                            veslogo3
                        </Sparkles>
                    </NavLink>
                </div>
                <button className={`NV-menu-toggle`} onClick={handleMenuToggle} activeclassname="active">
                    <svg
                        viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`NV-menu-toggle-btn`}
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H32C32.8284 0.5 33.5 1.17157 33.5 2C33.5 2.82843 32.8284 3.5 32 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM0.5 10C0.5 9.17157 1.17157 8.5 2 8.5H32C32.8284 8.5 33.5 9.17157 33.5 10C33.5 10.8284 32.8284 11.5 32 11.5H2C1.17157 11.5 0.5 10.8284 0.5 10ZM0.5 18C0.5 17.1716 1.17157 16.5 2 16.5H32C32.8284 16.5 33.5 17.1716 33.5 18C33.5 18.8284 32.8284 19.5 32 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18Z" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="NV-menu-body">
                    <NavLink to="/Characters" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.characters1")}
                    </NavLink>
                    <NavLink to="/CharInfo" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.charcard")}
                    </NavLink>
                    <NavLink to="/Art" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                        {t("navbar.art")}
                    </NavLink>
                    <NavLink to="/Story" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.story")}
                    </NavLink>
                    <NavLink to="/Poem" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.poem")}
                    </NavLink>
                    <NavLink to="/GamePage" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                        {t("navbar.gamepage")}
                    </NavLink>
                    <NavLink to="/AboutVesnea" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.about1")}
                    </NavLink>
                    <NavLink to="/ProjectSeaWeb" className={`NV-menu-text`} activeclassname="active" onClick={closeMenu}>
                        {t("navbar.about2")}
                    </NavLink>
                </div>
                <div className="landing-theme-selection">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            className={`landing-theme-button ${String(theme) === String(t.id) ? "active" : ""}`}
                            onClick={() => toggleTheme(t.id)}
                            aria-label={t.label}
                        >
                            <div className={`landing-theme-icon ${t.class}`} />
                        </button>
                    ))}
                </div>
                <LanguageSwitcher />
            </div>
        </div>
    );

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => setMenuOpen(false);

    const { t } = useLocalization();

    return (
        <div className={`NV-body`}>
            {isSmallScreen ? (
                renderMobileLayout()
            ) : (
                <div className="NV-body-wrapper NV-body">
                    <div className="NV-body-primary">
                        <div className="NV-branding">
                            <div className="pfp-overlay">
                                <div className="pfpzone A0" />
                                <div className="pfpzone C0" />
                                <div className="pfpzone B0" />
                                <div className="pfpzone A1" />
                                <div className="pfpzone C1" />
                                <div className="pfpzone B1" />
                            </div>
                            <div className="landing-pfp-container">
                                <div className="landing-pfp" />
                                <PfpBg className="landing-pfp-bg" />
                            </div>
                        </div>
                        <div className="NV-logo">
                            <NavLink className="landing-name" to="/">
                                <Sparkles>
                                    veslogo3
                                </Sparkles>
                            </NavLink>
                        </div>
                        <div className="NV-menu-body">
                            <NavLink to="/Characters" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.characters1")}
                            </NavLink>
                            <NavLink to="/Art" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.art")}
                            </NavLink>
                            <NavLink to="/AboutVesnea" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.about")}
                            </NavLink>
                        </div>
                        <div className="landing-theme-selection">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    className={`landing-theme-button ${String(theme) === String(t.id) ? "active" : ""}`}
                                    onClick={() => toggleTheme(t.id)}
                                    aria-label={t.label}
                                >
                                    <div className={`landing-theme-icon ${t.class}`} />
                                </button>
                            ))}
                        </div>
                        <LanguageSwitcher />
                    </div>
                    <div className="NV-body-secondary">
                        <div className="NV-menu-body">
                            <NavLink to="/Characters" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.characters1")}
                            </NavLink>
                            <NavLink to="/CharInfo" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.charcard")}
                            </NavLink>
                            <NavLink to="/Story" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.story")}
                            </NavLink>
                            <NavLink to="/Poem" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.poem")}
                            </NavLink>
                            <NavLink to="/GamePage" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.gamepage")}
                            </NavLink>
                            <NavLink to="/AboutVesnea" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.about1")}
                            </NavLink>
                            <NavLink to="/ProjectSeaWeb" className={({ isActive }) => `NV-menu-text ${isActive ? "active" : ""}`}>
                                {t("navbar.about2")}
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;