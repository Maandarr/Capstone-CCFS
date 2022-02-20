import React, { useState } from 'react';
import { CCFSMenuItems } from './CCFSMenuItems';
import { Link } from 'react-router-dom'
import './css/Dropdown.css';

function CCFSDropdown(props) {
  const [click, setClick] = useState(false)
  // eslint-disable-next-line
  const handleClick = () => setClick(!click)
  
  return (
    <>
       <ul onClick={props.onCloseMobileMenu} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
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