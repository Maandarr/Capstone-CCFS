import React from 'react'
import { Link } from 'react-router-dom'
import SubscriptionCTABanner from '../SubscriptionCTABanner'
import backgroundVideo from '../videos/lets-protect-our-forest.mp4'
import '../css/home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <h1 className='home-title'>Welcome to the Forest</h1>
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <section className='home-about'>
                <p>The Cumberland Forest is part of an interconnected system of forests, salmon bearing creeks, wetlands and riparian areas adjacent to the Village of Cumberland on Vancouver Island in the traditional territory of the Pentlach, SaLαLt, Säsitla and Eiksαn people, known today as the K’omoks First Nation.
                    <br />
                    <br />
                    This forest is an integral part of both the Trent and Puntledge Watersheds, feeds Comox Lake, and forms a critical link in an extensive biodiversity corridor that connects mountains and lakes to the Salish Sea. This forest is privately owned by timber companies.
                    <br />
                    <br />
                    The Cumberland Forest has given a great deal to our community. Cumberland was built on logging and mining and the Cumberland Forest was a base for both activities. Today an extensive multi-use trail network winds its way through the area that is enjoyed by hikers, mountain bikers, trail runners, naturalists, children and families, school groups and many others.</p>
                <p>The Cumberland Community Forest Society (CCFS) is a charitable society formed 21 years ago with the mission to purchase, protect and care for the Cumberland Forest. Guided by the belief that this forest is worth more to our community than as timber, the society is supported by individuals, organizations and businesses from across the region and beyond.
                    <br />
                    <br />
                    To date the society has purchased 500 acres of forest and placed it under a conservation covenant to ensure its future protection as a Village park. Their most recent purchase was September 1st 2020 when 225 acres known as Project Perseverance was purchased outright by the community.
                    <br />
                    <br />
                    We are currently working to purchase and protect an additional 25 acres of beautiful creekside forest in the Lower Perseverance Creek corridor. This biodiversity corridor closes the gap between protected parklands, Perseverance Creek and Comox Lake. Please support our ongoing land protection and stewardship efforts by becoming a donor today.</p>
            </section>
            <Link to='/donate' className='donate-heading'>
                <p>Help us make conservation history!</p>
                <p>Become a supporter today.</p>
            </Link>
            <p className='hashtag-p'>#protectcumberlandforest #restorethecommons #weshareawatershed #cvconservation #projectperseverance</p>
            <Link to='/the-forest' className='read-more'>
                <p>Read More &gt; &gt; &gt;</p>
            </Link>
            <SubscriptionCTABanner />
        </div>
    )
}