import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contac = () => {

        const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "71e46b0e-9226-430b-8a12-96d7356ef3ae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Contact Me</h1>
                  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"10px", marginBottom:"30px"}} />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>lets talk</h1>
                    <p>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /><p>crahmanbahal@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /><p>252614779930</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /><p>wadajir, nastexo</p>
                            </div>
                        </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">your name</label>
                    <input type="text" placeholder='Enter your name'  name='name'/>
                    <label htmlFor="">your email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">your message</label> 
                    <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contac;
