import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import GIDropdown from './GIDropdown'
import CCFSDropdown from './CCFSDropdown'
import logo from '../images/ccfs-black.png'



function Navbar() {
    const [click, setClick] = useState(false);
    const [GIdropdown, setGIDropdown] = useState(false);
    const [CCFSdropdown, setCCFSDropdown] = useState(false);
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const GIextendElement = () => {
        GIdropdown ? setGIDropdown(false) : setGIDropdown(true);
    }
    const CCFSextendElement = () => {
        CCFSdropdown ? setCCFSDropdown(false) : setCCFSDropdown(true);
    }

    const GIonMouseEnter = () => {
        (window.innerWidth < 960) ? setGIDropdown(false) : setGIDropdown(true)
    }
    const GIonMouseLeave = () => {
        (window.innerWidth < 960) ? setGIDropdown(false) : setGIDropdown(false)
    }
    const CCFSonMouseEnter = () => {
        (window.innerWidth < 960) ? setCCFSDropdown(false) : setCCFSDropdown(true)
    }
    const CCFSonMouseLeave = () => {
        (window.innerWidth < 960) ? setCCFSDropdown(false) : setCCFSDropdown(false)
    }
    

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='logo' src={logo} alt="" />
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
                    <li className='nav-item' 
                        onMouseEnter={GIonMouseEnter}
                        onMouseLeave={GIonMouseLeave}
                        onClick={GIextendElement}>
                        <Link to='/getInvolved' className='nav-links' onClick={closeMobileMenu}>
                            Get Involved <i className='fas fa-caret-down' />
                        </Link>
                        {GIdropdown && <GIDropdown onCloseMobileMenu={closeMobileMenu}/>}
                    </li>
                    <li className='nav-item' 
                        onMouseEnter={CCFSonMouseEnter}
                        onMouseLeave={CCFSonMouseLeave}
                        onClick={CCFSextendElement}>
                        <Link to='/the-ccfs' className='nav-links' onClick={closeMobileMenu}>
                            The CCFS <i className='fas fa-caret-down' />
                        </Link>
                        {CCFSdropdown && <CCFSDropdown onCloseMobileMenu={closeMobileMenu}/>}
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