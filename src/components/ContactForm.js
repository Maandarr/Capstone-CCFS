import React, {useState} from 'react';
import './contactFormStyles.scss';
import InputField from "../../ui/InputField/InputField";

const ContactForm = props => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const coolFunctionHandler = e => {
      // your code here
    }


    return (
      <form className="mc__form" onSubmit={(e) => coolFunctionHandler(e)}>


<InputField
          label="Name"
          onChangeHandler={setName}
          type="text"
          value={name}
          placeholder="Jane Smith"
          isRequired
          name="name"
        />

        <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
          name="email"
        />

        <InputField
          label="Message"
          onChangeHandler={setMessage}
          type="textarea"
          value={message}
          placeholder="How can we help..."
          isRequired
          name="message"
        />

        <InputField
          label="send"
          type="submit"
          formValues={[email, name, message]}
        />

      </form>
    )
}

export default ContactForm;
