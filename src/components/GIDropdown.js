import React, { useState } from 'react';
import { GIMenuItems } from './GIMenuItems';
import { Link } from 'react-router-dom'
import './css/Dropdown.css';

function GIDropdown(props) {
  const [click, setClick] = useState(false)
  // eslint-disable-next-line
  const handleClick = () => setClick(!click)

  return (
    <>
      <ul onClick={props.onCloseMobileMenu} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
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
