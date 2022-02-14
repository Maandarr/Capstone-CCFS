import React, { useState } from 'react';
import { GIMenuItems } from './GIMenuItems';
import { Link } from 'react-router-dom'
import './css/GIDropdown.css';

const GIDropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <ul onCLick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {GIMenuItems.map((item, index) => {
          return ( 
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GIDropdown
