import React, { useState } from 'react'
import { Navbutton } from './Navbutton'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    CCFS
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
            </nav>
        </>
    );
        
    
}

export default Navbar;