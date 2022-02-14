import React, { useState } from 'react';
import { CCFSMenuItems } from './CCFSMenuItems';
import { Link } from 'react-router-dom'
import './css/Dropdown.css';

  const CCFSDropdown = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
       <ul onCLick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {CCFSMenuItems.map((item, index) => {
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

export default CCFSDropdown