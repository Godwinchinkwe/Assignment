import React from 'react'
import {FaTimes, FaBeer} from 'react-icons/fa'
import './Header'

function MobileNav(props) {
    const { toggle } = props
    console.log(toggle)
    return (
        <div className="Nav2">
            <a>HOME </a>
            <a>ABOUT </a>
            <a>CONTACT </a>
            <FaTimes onClick={ toggle} fontSize='30px'/>
        </div>
    )
}

export default MobileNav