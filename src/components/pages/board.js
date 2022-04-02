import React from 'react'
import Donatebutton from '../Donatebutton'
import '../css/board.css'
import BannerFerns from '../../images/banner-ferns-1184x592.jpeg'

export default function Board() {
    return (
        <div className='board'>
            <h1 className='banner-title'>Our Board and Staff</h1>

            <section className='board-container'>
                <div className="board-info">
                    <h3>
                        THE BOARD</h3>
                    <ul>
                        <li>Evan Gough – Chair</li>
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
                    <h3>
                        STAFF</h3>
                    <p>
                        Executive Director – Meaghan Cursons (<a className='email' href="mailto:meaghan@cumberlandforest.com">meaghan@cumberlandforest.com</a>)
                        <br />
                        <br />

                        Donor Management – Kirsten Harris
                        (<a className='email' href="mailto:donate@cumberlandforest.com">donate@cumberlandforest.com</a>)
                        <br />
                        <br />
                        Accounts Payable/Receivable – (<a className='email' href="mailto:admin@cumberlandforest.com">admin@cumberlandforest.com</a>)</p>

                    <h3>We're not done yet.</h3>
                    <img src="../../images/board-top-pic-768x512.jpeg" alt="Cumberland Forest Society Boards members posing in the forest" />
                </div>
                <div className="donate-aside">
                    <Donatebutton />
                    <img className='slug' src={BannerFerns} alt="Slug on ground" />
                    <h3>Did you know?</h3>
                    <p>
                        The Forest is home to Red Legged Frogs, Roosevelt Elk, Small Eared Bats and other at risk species and is an important link in an extensive habitat corridor that connects the mountains, rivers and lakes of Vancouver Island to the shores of the Salish Sea.</p>
                </div>
            </section>
        </div>
    )
}