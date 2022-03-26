import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/FooterNav.css'



function FooterNav() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div className='footer-bar-container'>
            <nav className='footer-nav'>
                <div className='footer-menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ click ? 'footer-menu active' : 'footer-menu'}>
                    <li className='footer-item'>
                        <Link to='/the-forest' className='footer-links' onClick={closeMobileMenu}>
                            The Forest
                        </Link>
                    </li>
                    <li className='footer-item'>
                        <Link to='/getInvolved' className='footer-links' onClick={closeMobileMenu}>
                            Get Involved
                        </Link>
                    </li>
                    <li className='footer-item'>
                        <Link to='/the-ccfs' className='footer-links' onClick={closeMobileMenu}>
                            The CCFS
                        </Link>
                    </li>
                    <li className='footer-item'>
                        <Link to='/board' className='footer-links' onClick={closeMobileMenu}>
                            Our Board and Staff
                        </Link>
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
