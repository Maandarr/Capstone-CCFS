import React from 'react'
import './css/Donatebutton.css'
import { Link } from 'react-router-dom'

export function Donatebutton() {
    return (
        <Link to='/donate'>
            <p className='donate-btn'><i className='fas fa-tree'></i>Donate today</p>
        </Link>
    );
}

export default Donatebutton