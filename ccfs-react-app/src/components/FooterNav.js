import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/FooterNav.css'
import GIDropdown from './GIDropdown'
import CCFSDropdown from './CCFSDropdown'



function FooterNav() {
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
        <div className='footer-bar-container'>
            <nav className='footer-nav'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'footer-menu active' : 'footer-menu'}>
                    <li className='footer-item'>
                        <Link to='/the-forest' className='footer-links' onClick={closeMobileMenu}>
                            The Forest
                        </Link>
                    </li>
                    <li className='footer-item' 
                        onMouseEnter={GIonMouseEnter}
                        onMouseLeave={GIonMouseLeave}
                        onClick={GIextendElement}>
                        <Link to='/getInvolved' className='footer-links' onClick={closeMobileMenu}>
                            Get Involved <i className='fas fa-caret-down' />
                        </Link>
                        {GIdropdown && <GIDropdown onCloseMobileMenu={closeMobileMenu}/>}
                    </li>
                    <li className='footer-item' 
                        onMouseEnter={CCFSonMouseEnter}
                        onMouseLeave={CCFSonMouseLeave}
                        onClick={CCFSextendElement}>
                        <Link to='/the-ccfs' className='footer-links' onClick={closeMobileMenu}>
                            The CCFS <i className='fas fa-caret-down' />
                        </Link>
                        {CCFSdropdown && <CCFSDropdown onCloseMobileMenu={closeMobileMenu}/>}
                    </li>
                    <li className='footer-item'>
                        <Link to='/contact' className='footer-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='footer-item'>
                        <Link to='/donate' className='footer-links' onClick={closeMobileMenu}>
                            Donate Today
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
        
    
}

export default FooterNav
