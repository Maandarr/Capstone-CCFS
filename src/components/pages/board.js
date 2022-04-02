import React from 'react'
import Donatebutton from '../Donatebutton'
import '../css/board.css'
import BannerFerns from '../../images/banner-ferns-1184x592.jpeg'
import BoardMembers from '../../images/board-top-pic-768x512.jpeg'

export default function Board() {
    return (
        <div className='board'>
            <h1 className='banner-title'>Our Board and Staff</h1>

            <section className='board-container'>
                <div className="board-info">
                    <h3>
                        THE BOARD</h3>
                    <ul className='board-list'>
                        <li><a className='email' href="mailto:egough@shaw.ca">Evan Gough</a> – Chair</li>
                        <li>Jason Ross – Vice Chair
                        </li>
                        <li>Andrew Nicoll – Past Chair
                        </li>
                        <li>Caroline Tymchuk – Treasurer
                        </li>
                        <li>Lisa Levesque
                        </li>
                        <li>Angela Boss
                        </li>
                        <li>Jason Straka
                        </li>
                        <li>John Gower
                        </li>
                        <li>Annabelle Sproule
                        </li>
                        <li>Shawn Gabel
                        </li>
                        <li>Catherine Worthy
                        </li>
                        <li>Sarah Falloon
                        </li>
                    </ul>
                    <p>Thank you to our retiring board members in 2021 – Craig Keeping
                    </p>
                    <h3 className='staff'>
                        STAFF</h3>
                    <p>
                        Executive Director – Meaghan Cursons
                        <br />
                        (<a className='email' href="mailto:meaghan@cumberlandforest.com">meaghan@cumberlandforest.com</a>)
                        <br />
                        <br />

                        Donor Management – Kirsten Harris
                        <br />
                        (<a className='email' href="mailto:donate@cumberlandforest.com">donate@cumberlandforest.com</a>)
                        <br />
                        <br />
                        Accounts Payable/Receivable
                        <br />
                        (<a className='email' href="mailto:admin@cumberlandforest.com">admin@cumberlandforest.com</a>)</p>

                    <img className='board-members' src={BoardMembers} alt="Cumberland Forest Society Boards members posing in the forest" />
                </div>
                <div className="board-aside">
                    <Donatebutton />
                    <img className='banner-ferns' src={BannerFerns} alt="Close up of ferns in the forest" />
                    <h3>Did you know?</h3>
                    <p>
                        From coho salmon and coastrange sculpin in Perseverance Creek to cougars and Columbian black-tailed deer in the woods, Cumberland’s forests provide habitat for an immense number of animals. Each species has specialized requirements for cover, forage, nesting, denning and other necessities of life.  The complexity and diversity of habitats in the Cumberland Community Forest provides both general (coarse-scale) and specialized (fine-scale) habitat requirements.</p>
                </div>
            </section>
        </div>
    )
}