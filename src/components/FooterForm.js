import React from "react";

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required />
        <label htmlFor="email" className="visually-hidden">Email</label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required />
        <input id="subscribe" type="submit" value="Subscribe" aria-labelledby="subscribe" />
      </form>
    );
  }
}

export default SubscribeForm