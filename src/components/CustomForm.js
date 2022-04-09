import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";
import env from "react-dotenv";

const CustomForm = ({ status, message, onValidated }) => {

    // const {modalOpen, setModalOpen} = useState();

    const [email, setEmail] = useState('');
    const [yourName, setYourName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        yourName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: yourName,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    

    const clearFields = () => {
        setEmail('');
        setYourName('');
    }

    

    return (
        <form className="mc__form"
        onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">
        {status === "success" 
            ? "Success!" 
            : "Stay Updated!"
          }
            </h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

{status !== "success" ? (
        <div className="mc__field-container">
        <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
          <InputField
            label="Your Name"
            onChangeHandler={setYourName}
            type="text"
            value={yourName}
            placeholder="Your Name"
            isRequired
          />

        </div>
        
        ) : null}
             

       {
          status === 'success' ? <button
            // onClick={() => setModalOpen(false)}
            className="g__justify-self-center">Close</button> : <InputField
                 label="subscribe"
                 type="submit"
                 formValues={[email, yourName]}
               />
        }
 
      </form>
    );
};

const MailchimpFormContainer = props => {

    const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=${env.REACT_APP_MAILCHIMP_U}&id=${env.REACT_APP_MAILCHIMP_ID}`
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
    );
};

export default MailchimpFormContainer;