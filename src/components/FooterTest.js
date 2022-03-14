import React from 'react'
import axios from 'axios'
import './css/Footer.css'

const API_PATH = 'http://localhost:3000/ccfs-react-app/src/api/index.php';

class FooterTest extends React.Component {

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
            <div className="form-container">
                <div className="form">
                    {this.state.dataSent ?
                        <div className="success-option">
                            <h2 className="success">SUCCESS</h2>
                            <p>
                                Thanks for submitting your feedback.
                                We appreciate your time.</p>
                        </div>
                        :
                        <h2 className="updated">Stay Updated!</h2>
                    }
                    <div>
                        <input className="input-style" type="text"
                            placeholder="Your Name"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div>
                        <input className="input-style" type="text"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div>
                        <input className="submit-btn" type="submit"
                            value="Subscribe"
                            onClick={e => this.onSubmit(e)}
                        />
                    </div>

                </div>
            </div>
        );
    }

}

export default FooterTest