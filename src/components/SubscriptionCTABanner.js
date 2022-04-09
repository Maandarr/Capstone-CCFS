import React from 'react'
import axios from 'axios';
import './css/Sub-Banner-CTA.css'
import MailchimpFormContainer from './CustomForm'


const API_PATH = 'http://localhost:3000/ccfs-react-app/src/api/index.php';


export class SubscriptionCTABanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            dataSent: ''
        }
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        axios({
            method: 'post',
            url: API_PATH,
            headers: {
                'content-type': 'application/json'
            },
            data: this.state
        })
            .then(result => {
                console.log(result.data)
                this.setState({
                    dataSent: result.data.sent,
                })
                console.log(this.state)
            })
            .catch(error => this.setState({
                error: error.message
            }));
    }


    render() {
        return (
            <div className="sub-banner-container">
                <div className="sub-banner-content">
                    <div className="banner-text-left">
                        <i className="fas fa-tree" />
                        <h2 className='stay-updated'>Stay Updated!</h2>
                        <p>Get on the Cumberland Community Forest email list for updates on fundraising initiatives, purchases and random fun.</p>
                    </div>
                    <div className="sub-banner-form">
                        <MailchimpFormContainer />
                        {/* <div>
                            <label htmlFor="name" className='visually-hidden'>Name</label>
                            <input id='name' className="sub-input" type="text"
                                placeholder="Your Name"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='visually-hidden'>Email</label>
                            <input id='email' className="sub-input" type="text"
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div>
                            <input className="sub-submit-btn" type="submit"
                                value="Subscribe"
                                onClick={e => this.onSubmit(e)}
                            />
                        </div> */}
                        <p>By clicking the Sign Up button you agree to receive communications from the Cumberland Community Forest Society. We take your privacy seriously and will not share your contact information. You can unsubscribe from email communications at any time</p>

                    </div>


                </div>
            </div>
        );
    }
}

export default SubscriptionCTABanner

