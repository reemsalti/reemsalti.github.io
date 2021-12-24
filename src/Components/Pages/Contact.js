import React from 'react';
import './Contact.css';
import Footer from './Footer';
import image from "./htb.gif";



function Contact() {
    return (
            <>
            <div className='page'>
                <div className='contact-container'>
                    <div className='content'>
                        <h1>CONTACT ME</h1>
                            <div className='info'>
                                <p className='phone'>Mobile: +1(289)-795-2288</p>
                                <p className='email'>Email: reemsalti@icloud.com </p>
                            </div>
                    </div> 
                </div>
                <img className='drake' src={image} alt="" />
                </div>
            <div>
            <   Footer />
            </div>
        </>
    );
}

export default Contact
