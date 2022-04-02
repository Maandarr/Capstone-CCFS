import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import logo from '../images/ccfs-black.png'



function Navbar() {
    const [click, setClick] = useState(false);
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='logo' src={logo} alt="Cumberland Community Forest Society text logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/the-forest' className='nav-links' onClick={closeMobileMenu}>
                            The Forest
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/the-ccfs' className='nav-links' onClick={closeMobileMenu}>
                            The CCFS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/board' className='nav-links' onClick={closeMobileMenu}>
                            Our Board and Staff
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                            Donate Today
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
        
    
}

export default Navbar;