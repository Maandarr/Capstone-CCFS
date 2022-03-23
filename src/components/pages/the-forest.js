import React from 'react'
import '../css/the-forest.css'
import { Donatebutton } from '../Donatebutton'
import Slug from '../../images/slug.jpg'
import CCFSVideo from '../videos/CCFS - Cumberland Community Forest Society.mp4'

export default function Forest() {
    return (
        <div className='forest'>
            <h1 className='banner-title'>What is the Cumberland Forest?</h1>
            <section className='forest-container'>
                <div className="main-info">
                    <h3>
                        The Cumberland Forest cradles the Village of Cumberland, in the Comox Valley, on the eastern edge of Vancouver Island in the traditional territory of the K’omoks First Nation.</h3>
                    <p>
                        This beautiful mature Coastal Douglas Fir forest is filled with diverse flora and fauna, at-risk species, salmon bearing creeks, wetlands and riparian areas, 2 watershed systems, important logging and mining heritage landmarks and a robust community trail network.
                        <br />
                        <br />
                        The Forest is also part of an important habitat corridor that runs from the Beaufort Range and the Comox Glacier to the Salish Sea.
                        <br />
                        <br />
                        A vibrant community of conservationists, families, mountain bikers, runners, herbalists, hikers, artists, school groups, adventure racers, photographers, and many others consider the Cumberland Forest to be an integral part of a community that defines itself by it’s proximity to the woods – a Village in the Forest.
                        <br />
                        <br />
                        The Cumberland Forest is also privately owned as part of the legacy of the E&N Land Transfer in the 1870’s that saw over 2 million acres of land along the eastern side of Vancouver Island transfer into private hands in exchange for building a railway.</p>

                    <h3>
                        All the unprotected Cumberland Forest lands are slated to be logged.</h3>
                    <p>
                        The Cumberland Community Forest Society (CCFS) is dedicated to purchasing these lands and returning them to the community and the commons. To date, the CCFS has purchased 500 acres with the most recent purchase being completed on Sept 1 2020. This forest is connected to the Coal Creek Heritage Park and together these parcels are forming a contiguous corridor of protected natural areas. We wish to see this important protected corridor continue to grow.</p>

                    <h3>We're not done yet.</h3>

                    <p>
                        The CCFS is committed to continuing its work to further establish the Cumberland Forest as a protected space for generations to come! Donors and supporters are being actively sought to make future purchases possible.</p>
                        <iframe className='ccfs-video' src="https://www.youtube.com/embed/WPiF88giqSM" allowfullscreen="allowfullscreen" width="560" height="315" frameborder="0"></iframe>
                
                        

                </div>
                <div className="donate-aside">
                    <Donatebutton />
                    <img className='slug' src={Slug} alt="Slug on ground" />
                    <h3>Did you know?</h3>
                    <p>
                        The Forest is home to Red Legged Frogs, Roosevelt Elk, Small Eared Bats and other at risk species and is an important link in an extensive habitat corridor that connects the mountains, rivers and lakes of Vancouver Island to the shores of the Salish Sea.</p>
                </div>
            </section>

        </div>
    )
}