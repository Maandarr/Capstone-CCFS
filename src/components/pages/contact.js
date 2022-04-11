import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <h1 className='banner-title'>Contact</h1>
            <section className="contact-container">
                <h2 className='large-subheading'>Cumberland Community Forest Society (CCFS)
                </h2>
                <p>
                    <Link to='/the-ccfs' className='email'>The Cumberland Community Forest Society (CCFS)</Link> is a grass roots charitable not for profit dedicated to purchasing, protecting and restoring the Cumberland Forest that borders the Village of Cumberland on Vancouver Island, BC, Canada. This forest is part of a significant habitat and recreation corridor that runs from the Beaufort Range and Comox Glacier to the Salish Sea.

                    <br />
                    <br />

                    We respectfully acknowledge that we do our work within the unceded traditional territory of the <a className='email' href="https://komoks.ca/" rel="noreferrer" target="_blank">K’ómoks Nation</a>.</p>
                <h3>CCFS TEAM</h3>
                <ul className='ccfs-team'>
                    <li><strong>Meaghan Cursons</strong> – Executive Director <a className='email' href="mailto:meaghan@cumberlandforest.com">meaghan@cumberlandforest.com</a>
                    </li>
                    <li><strong>Kirsten Harris</strong> – Donor Management <a className='email' href="mailto:donate@cumberlandforest.com">donate@cumberlandforest.com</a>
                    </li>
                    <li><strong>Sarah Hampton</strong> – Special Events Logistics <a className='email' href="mailto:sarah@cumberlandforest.com">sarah@cumberlandforest.com</a>
                    </li>
                    <li><strong>Bookkeeping </strong> <a className='email' href="mailto:admin@cumberlandforest.com">admin@cumberlandforest.com</a>
                    </li>
                    <li><Link to='/board' className='email'>Click here for a list of our board members.</Link> </li>
                </ul>
                <h3>MAILING ADDRESS</h3>
                <p>Box 1239, Cumberland, BC, VOR1S0

                </p>
            </section>
        </div>
    )
}