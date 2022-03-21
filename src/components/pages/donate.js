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
            <section className="payment-methods">
                <div className="payment-methods-container">
                    <div className="bank-transfers">
                        <h4 className='payment-methods-heading'>Bank Transfers</h4>
                        <p>
                            Would you like to become a monthly donor to the Cumberland Community Forest Society and avoid any fees going to 3rd party platforms insead of the CCFS?
                            <br />
                            <br />
                            The best way to make sure 100% of your donation goes to the CCFS is to donate directly from your bank account through setting up an auto payment or providing us with a void cheque.
                            <br />
                            <br />
                            Old school!
                        </p>
                        <div className="bank-transfer-wrapper">
                        <button className='bank-transfer-form'><a href="https://www.cumberlandforest.com/backwoods/wp-content/uploads/2021/11/2021-2022-CCFS-Donor-Form.pdf">Here's the Bank Transfer Form</a></button>
                        </div>
                        
                    </div>
                    <div className="paypal">
                        <h4 className='payment-methods-heading'>Donate via Paypal</h4>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" defaultValue="9TXWQTDCF7FBW" />
                            <input type="hidden" name="no_recurring" defaultValue={0} />
                            <input type="hidden" name="currency_code" defaultValue="CAD" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" border={0} />
                            <img alt="" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width={1} height={1} border={0} />
                        </form>
                        <h4 className='payment-methods-heading second-payment-methods-heading'>Donate securities and multiply your investment!</h4>
                        <p>
                            <a className='click-here-link' href="https://www.canadahelps.org/en/dn/s/57510/donate">CLICK HERE.</a> 
                            <br />
                            <br />
                            The Cumberland Community Forest Society is a charitable organization.
                            <br />
                            <br />
                            Charitable tax number: 88895 0219 RR0001
                        </p>
                    </div>
                    <div className="other-ways">
                        <h4 className='payment-methods-heading'>Other ways to donate</h4>
                        <p>
                            eTransfer 
                            <br />
                            <a className='email' href="mailto:donate@cumberlandforest.com">donate@cumberlandforest.com</a>
                            <br />
                            Message
                            <br />
                            <a className='email' href="mailto:donate@cumberlandforest.com">donate@cumberlandforest.com</a> to set up a donation process that works for you.
                            <br />
                            <br />
                            Talk to us about how we can work with you to develop the online donor tools and communications for gift funds for weddings and celebrations or memorial funds for friends or family.
                            <br />
                            <br />
                            Message us at <a className='email' href="mailto:info@cumberlandforest.com">info@cumberlandforest.com</a> to discuss further.
                        </p>
                    </div>
                </div>

            </section>

        </div>

    )
}