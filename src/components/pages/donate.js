import React from 'react'
import '../css/donate.css'

export default function Donate() {
    return (
        <div className='donation-content'>
            <h1 className='banner-title donate-title'>Donate Today</h1>
            <div className="form-section">
                <img src="./images/land-trust.png" alt="" />
                <div className="form-section-container">
                    <div className="form-about">
                        <p>
                            The Cumberland Forest is an interconnected system of forest, creeks, trails, wetlands and riparian areas adjacent to the Village of Cumberland on Vancouver Island in the traditional territory of the K’omoks Nation.This forest is part of both the Trent and Puntledge Watersheds, feeds Comox Lake, and forms a critical link in a habitat corridor that connects mountains and lakes to the Salish Sea.
                            <br />
                            <br />

                            This forest is all scheduled to be logged.
                            <br />
                            <br />

                            Since the year 2000 the CCFS has purchased and protected 500 acres of threatened forest including our most recent purchase of 225 acres along Perseverance Creek in 2020. This area is all protected as parkland for future generations.
                            <br />
                            <br />

                            <em>But we’re not done yet!</em> Your support will help us continue to make conservation history on Vancouver Island by supporting our land protection, restoration and biodiversity efforts.</p>
                        <h2>Donate today!</h2>
                        <h3>Powered by</h3>
                        <figure className='canada-helps-section'>
                            <img className='canada-helps-logo' src="https://www.cumberlandforest.com/backwoods/wp-content/uploads/2017/11/header-logo-en.png" alt="" />
                            <p><strong>If you already use CanadaHelps.org</strong> to keep track of your donations, we are happy to accept your help via <a className='profile-here' href="https://www.canadahelps.org/en/dn/m/6143/donation">our profile here</a>.</p>
                        </figure>

                    </div>
                    <div className="iframe-container">
                        <iframe className='donation-form'
                            src="https://www.canadahelps.org/en/dn/m/57684/donation"
                            scrolling='no'
                        />
                    </div>

                </div>


            </div>
        </div>

    )
}