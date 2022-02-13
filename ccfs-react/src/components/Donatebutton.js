import './Navbutton.css'
import { Link } from 'react-router-dom'

export function Navbutton() {
    return (
        <Link to='donate'>
            <button className='btn'><i class="fa-solid fa-tree" />Donate Today</button>
        </Link>
    )
}