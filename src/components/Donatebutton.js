import React from 'react'
import './Donatebutton.css'
import { Link } from 'react-router-dom'

export function Donatebutton() {
    return (
        <Link to='donate'>
            <button className='btn'><i class="fas fa-tree" />Donate Today</button>
        </Link>
    );
}