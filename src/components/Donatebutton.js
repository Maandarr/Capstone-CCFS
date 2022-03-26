import React from 'react'
import './css/Donatebutton.css'
import { Link } from 'react-router-dom'

export function Donatebutton() {
    return (
        <figure className='btn-wrapper'>
            <Link to='/donate'>
                <button className='donate-btn'><i className='fas fa-tree'></i>Donate today</button>
            </Link>
        </figure>

    );
}

export default Donatebutton