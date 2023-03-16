import logo from '../Assets/Logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <NavLink to='/'><img className='logo' activeClassname='active' src={logo} alt="Seavalanche logo" /></NavLink>
                <div className='navbar-menu-toggle' onClick={handleMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <NavLink to='/Projects' className='navbar-menu-text' activeClassname='active'>Projects</NavLink>
                    <NavLink to='/Commissions' className='navbar-menu-text' activeClassname='active'>Commissions</NavLink>
                    <NavLink to='/About' className='navbar-menu-text' activeClassname='active'>About</NavLink>
                </div>
                <div className={`navbar-func ${menuOpen ? 'open' : ''}`}>
                    <div className='navbar-func-text'>Dark Theme</div>
                    <div className='navbar-func-text'>EN / JP</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;