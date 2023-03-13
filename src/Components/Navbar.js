import logo from '../Assets/Logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <NavLink to='/'><img className='logo' activeClassname='active' src={logo} alt="Seavalanche logo"/></NavLink>
                {/* <div className='navbar-menu'>
                    <Link to='/Projects' className='navbar-menu-text'>Projects</Link>
                    <Link to='/Commissions' className='navbar-menu-text'>Commissions</Link>
                    <Link to='/About' className='navbar-menu-text'>About</Link>
                </div> */}
                <div className='navbar-menu'>
                    <NavLink to='/Projects' className='navbar-menu-text' activeClassname='active'>Projects</NavLink>
                    <NavLink to='/Commissions' className='navbar-menu-text' activeClassname='active'>Commissions</NavLink>
                    <NavLink to='/About' className='navbar-menu-text' activeClassname='active'>About</NavLink>
                </div>
                <div className='navbar-func'>
                    <div className='navbar-func-text'>Dark Theme</div>
                    <div className='navbar-func-text'>EN / JP</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;