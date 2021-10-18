import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contactMe.css';
import Address from '../pics/address.png';
import Email from '../pics/email.png';
import Phone from '../pics/phone.png';



const ContactMe = () => {
    const formRef = useRef();

    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_uud42zp', 'template_h51gjss', formRef.current, 'user_Ix3ptCs7XaO3YXlqhFvoY')
            .then(result => {
                console.log(result.text);
                setSent(true)
            }, err => {
                console.log(err.text);
            });
    };

    return (

        <div className="contacts" id="contactMe">

            <h1 className="contactMe__heading">Contact Me</h1>

            <div className="contact__wrapper">
                <div className="contacts-wrapper__left">
                    <h2>Contact Info:</h2>
                    <div className='contact__items'>
                        <img src={Address} alt="" className="img" />
                        <p className='contacts__text'>66, 4th Avenue, Gwarinpa, Abuja</p>
                    </div>
                    <div className='contact__items'>
                        <img src={Email} alt="" className="img" />
                        <p className='contacts__text'>ogefereogheneruno@gmail.com</p>
                    </div>
                    <div className='contact__items'>
                        <img src={Phone} alt="" className="img" />
                        <p className='contacts__text'>08188150495, 08162623101</p>
                    </div>
                </div>

                <div className="contacts-wrapper__right">
                    <h2>Get In Touch</h2>
                    <form ref={formRef} onSubmit={sendEmail} className='clear'>
                        <div className="contactme">
                            <label className='contactme__label' htmlFor="name">Name:</label>
                            <input type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        <div className="contactme">
                            <label className='contactme__label' htmlFor="eamil">Email:</label>
                            <input className='email__input' type="email" name="email" placeholder="Your Email" required/>
                        </div>
                        <div className="contactme">
                            <label className='contactme__label' htmlFor="messasge">Message:</label>
                            <textarea name="message" id="" cols="34" rows="10" placeholder="Type message..." required/>
                        </div>
                        <button className='contactme__button' type='submit'>Send</button>
                        {sent && " Message Sent, Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ContactMe
