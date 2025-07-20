import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useLocalization } from '../localization/hooks/useLocalization';
import { LanguageSwitcher } from './LanguageSwitcher';

const Navbar = ({ toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => setMenuOpen(false);

    const { t } = useLocalization();

    return (
        <div className={`navbar`}>
            <div className='navbar-wrapper'>
                < NavLink to='/' className={"brand-logo"}>
                </NavLink>
                <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <div className='navbar-menu-extended'>
                        <NavLink to='/Characters' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                            {t("navbar.characters1")}
                        </NavLink>
                        <div className='navbar-extended'>
                            <div className='navbar-extended-item'>
                                <NavLink to='/Characters' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.characters2")}
                                </NavLink>
                            </div>
                            <div className='navbar-extended-item'>
                                <NavLink to='/CharInfo' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.charcard")}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-menu-extended'>
                        <NavLink to='/Story' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                            {t("navbar.art")}
                        </NavLink>
                        <div className='navbar-extended'>
                            <div className='navbar-extended-item'>
                                <NavLink to='/Story' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.story")}
                                </NavLink>
                            </div>
                            <div className='navbar-extended-item'>
                                <NavLink to='/Poem' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.poem")}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-menu-extended'>
                        <NavLink to='/AboutVesnea' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                            {t("navbar.about")}
                        </NavLink>
                        <div className='navbar-extended'>
                            <div className='navbar-extended-item'>
                                <NavLink to='/AboutVesnea' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.about1")}
                                </NavLink>
                            </div>
                            <div className='navbar-extended-item'>
                                <NavLink to='/ProjectSeaWeb' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                    {t("navbar.about2")}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`navbar-menu-toggle`} onClick={handleMenuToggle}>
                    <svg
                        width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`navbar-button`}
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H32C32.8284 0.5 33.5 1.17157 33.5 2C33.5 2.82843 32.8284 3.5 32 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM0.5 10C0.5 9.17157 1.17157 8.5 2 8.5H32C32.8284 8.5 33.5 9.17157 33.5 10C33.5 10.8284 32.8284 11.5 32 11.5H2C1.17157 11.5 0.5 10.8284 0.5 10ZM0.5 18C0.5 17.1716 1.17157 16.5 2 16.5H32C32.8284 16.5 33.5 17.1716 33.5 18C33.5 18.8284 32.8284 19.5 32 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18Z" fill="currentColor" />
                    </svg>
                </button>
                <div className={`navbar-func ${menuOpen ? 'open' : ''}`}>
                    <div className="theme-wrapper">
                        <div className='theme-wrapper theme-wrapper-mid'>
                            <NavLink to='/CharInfo' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                {t("navbar.charcard")}
                            </NavLink>
                            <NavLink to='/Poem' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                {t("navbar.poem")}
                            </NavLink>
                            <NavLink to='/ProjectSeaWeb' className={`navbar-menu-text`} activeclassname='active' onClick={closeMenu}>
                                {t("navbar.about2")}
                            </NavLink>
                        </div>
                        <button className="theme-btn1" onClick={() => toggleTheme("light")} aria-label="Switch Theme" />
                        <button className="theme-btn2" onClick={() => toggleTheme("star")} aria-label="Switch Theme" />
                        <button className="theme-btn3" onClick={() => toggleTheme("dark")} aria-label="Switch Theme" />
                    </div>
                    <LanguageSwitcher />
                </div>
            </div >
        </ div >
    )
}

export default Navbar;