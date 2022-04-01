import React from 'react'
import Donatebutton from '../Donatebutton'
import '../css/the-ccfs.css'
import { Link } from 'react-router-dom'
import '../css/responsive.css'

export default function CCFS() {
    return (
        <div className='ccfs'>
            <h1 className='banner-title'>The CCFS</h1>
            <section className='forest-container'>
                <div className="main-info">
                    <h2 className='large-subheading'>
                        Who We Are</h2>
                    <p>
                        The Cumberland Community Forest Society is a grass roots community based charitable not for profit dedicated to purchasing, protecting and restoring the Cumberland Forest that borders the Village of Cumberland on Vancouver Island, BC, Canada. This forest is part of a significant habitat and recreation corridor that runs from the Beaufort Range and Comox Glacier to the Salish Sea.
                        <br />
                        <br />

                        The CCFS has up to <Link to='/board' className='board-link'>
                            13 member volunteer board of directors
                        </Link> elected from our members at our annual general meeting. The board meets once a month and meetings are always open to members. Day to day organizational leadership for the organization is delegated to Executive Director.
                        <br />
                        <br />

                        Members of the CCFS are donors who have made a charitable donation of $25 or more in the previous fiscal year. From time to time the CCFS may appoint members from our volunteer base or assign a life time membership status on a long term donor or supporter.
                        <br />
                        <br />

                        For more information, check out:
                        <br />
                        <Link to='/board' className='board-link'>
                            Our Board and Staff
                        </Link>
                    </p>

                </div>
                <div className="ccfs-donate-aside">
                    <Donatebutton />
                    <div className="donate-aside-container">
                    <p className='ccfs-contact'>
                        Cumberland Community Forest Society
                        <br />
                        Box 1239
                        <br />
                        Cumberland, BC
                        <br />
                        VOR1S0
                        <br />
                        <br />
                        info@cumberlandforest.com
                    </p>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}