import React from 'react'
import backgroundVideo from '../videos/lets-protect-our-forest.mp4'
// import ReactPlayer from 'react-player'
import '../css/home.css'

export default function Home() {
    // const VIDEO_WIDTH = 1920;
    // const VIDEO_HEIGHT = 600;
    return (
        <div className='home-container'>
            <h1 className='home-title'>Welcome to the Forest</h1>
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
        </div>
    )
}