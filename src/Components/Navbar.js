// import LightLogo from '../Assets/Navbar/NavbarLogo-light.png';
// import DarkLogo from '../Assets/Navbar/NavbarLogo-dark.png';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { useTheme } from "../ThemeContext";
import UzakonMoon from "../Assets/Navbar/UzakonMoon.svg";
// import KorazuSun from "../Assets/Navbar/KorazuSun.svg";
// import NavbarButton from '../Assets/Navbar/NavbarButton.svg';

function Navbar() {
    // const [menuOpen, setMenuOpen] = useState(false);

    // const handleMenuToggle = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // const { theme, toggleTheme } = useTheme();

    return (
        <div className={`navbar`}>
            <div className='navbar-wrapper'>
                < NavLink to='/' >
                    <img
                        className='brand-logo'
                        activeClassname='active'
                        alt="Seavalanche logo"
                        // src={theme === "dark" ? DarkLogo : LightLogo}
                        src={UzakonMoon}
                    />
                </NavLink>
                <div className={`navbar-menu`}>
                    {/* <NavLink to='/Projects' className={`navbar-menu-text ${theme || "light"}`} activeClassname='active'>Projects</NavLink> */}
                    {/* <NavLink to='/Commissions' className={`navbar-menu-text ${theme || "light"}`} activeClassname='active'>Commissions</NavLink> */}
                    {/* <NavLink to='/About' className={`navbar-menu-text ${theme || "light"}`} activeClassname='active'>About</NavLink> */}
                    <NavLink to='/Characters' className={`navbar-menu-text`} activeClassname='active'>Characters</NavLink>
                    <NavLink to='/Story' className={`navbar-menu-text`} activeClassname='active'>Story</NavLink>
                    <NavLink to='/AboutVesnea' className={`navbar-menu-text`} activeClassname='active'>About Vesnea</NavLink>
                </div>
                {/* <div className={`navbar-menu-toggle ${theme || "light"}`} onClick={handleMenuToggle}>
                    <svg
                        width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`navbar-button ${theme || "light"}`}
                    >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H32C32.8284 0.5 33.5 1.17157 33.5 2C33.5 2.82843 32.8284 3.5 32 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM0.5 10C0.5 9.17157 1.17157 8.5 2 8.5H32C32.8284 8.5 33.5 9.17157 33.5 10C33.5 10.8284 32.8284 11.5 32 11.5H2C1.17157 11.5 0.5 10.8284 0.5 10ZM0.5 18C0.5 17.1716 1.17157 16.5 2 16.5H32C32.8284 16.5 33.5 17.1716 33.5 18C33.5 18.8284 32.8284 19.5 32 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18Z" fill="currentColor" />
                    </svg>
                </div>
                <div className={`navbar-func ${menuOpen ? 'open' : ''} ${theme || "light"}`}>
                    <button onClick={toggleTheme} className="theme-toggle-btn">
                        <img
                            src={theme === 'light' ? UzakonMoon : KorazuSun}
                            alt={theme === 'light' ? "UzakonMoon" : "KorazuSun"}
                            className="theme-icon"
                        />
                    </button>
                    <div className={`navbar-func-text ${theme || "light"}`}>EN / JP</div>

                </div> */}
            </div >
        </ div >
    )
}

export default Navbar;