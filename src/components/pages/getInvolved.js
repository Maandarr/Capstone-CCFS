import React from 'react'
import { Link } from 'react-router-dom'
import '../css/get-involved.css'

export default function GetInvolved() {
    return (
        <>
            <h1 className='banner-title'>Get Involved</h1>
            <section className='card-section'>
                <div className="card-container">
                    <div className="card">
                    <h2 className='get-involved-heading'>Save Our Forest</h2>
                        <img src={require("../../images/banner-boardwalk.jpeg")} alt="Forest board walk" />
                        <p>The Cumberland Forest is part of an interconnected system of forests, creeks, wetlands and riparian areas that form part of both the Trent and Puntledge Watersheds. The ecosystem is an important link that connects the mountains, rivers and lakes of Vancouver Island to the shores of the Salish Sea.</p>
                        <Link to='/the-forest' className='card-read-more'>
                            <p>Read More &gt; &gt;</p>
                        </Link>
                    </div>
                    <div className="card">
                    <h2 className='get-involved-heading'>You Can Help</h2>
                        <img src={require("../../images/banner-babyferns-1184x592.jpeg")} alt="Ferns in the forest" />
                        <p>There are many ways that you can support this exciting community conservation effort. You can become a monthly donor, a one time contributor or develop a unique business campaign to raise funds. You can also share your skills, talents and energy as a volunteer for one of our super fun events.</p>
                        <Link to='/donate' className='card-read-more'>
                            <p>Read More &gt; &gt;</p>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}