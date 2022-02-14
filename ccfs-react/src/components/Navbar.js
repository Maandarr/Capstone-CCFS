import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import GIDropdown from './GIDropdown'
import CCFSDropdown from './CCFSDropdown'


function Navbar() {
    const [click, setClick] = useState(false);
    const [GIdropdown, setGIDropdown] = useState(false);
    const [CCFSdropdown, setCCFSDropdown] = useState(false);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    CCFS
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            The Forest
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/getInvolved' className='nav-links' onClick={closeMobileMenu}>
                            Get Involved <i className='fas fa-caret-down' />
                        </Link>
                        {GIdropdown && <GIDropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/the-ccfs' className='nav-links' onClick={closeMobileMenu}>
                            The CCFS <i className='fas fa-caret-down' />
                        </Link>
                        {CCFSdropdown && <CCFSDropdown />}
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
        </>
    );
        
    
}

export default Navbar;