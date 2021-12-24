import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <h1 
                className='footer-subsription-heading'>
                    Subscribe to get a cute email from me.
                </h1>
                
                 <div className='input-areas'>
                    <form>
                        <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                    <p className='footer-subscription-text'>
                    You can unsubscribe at anytime
                    <p className='lol'>...Although I don't know why you would want to do that...</p>
                </p>
                </div> 
            </section> */}
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                {/* <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div> */}
                <div class='footer-link-items'>
                    {/* <h2>Contact Me</h2> */}
                    <Link className='cont' to='/Contact'>CONTACT ME</Link>
                    {/* <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link> */}
                </div>
                </div>
                <div className='footer-link-wrapper'>
                {/* <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div> */}
                {/* <div class='footer-link-items'> */}
                    {/* <h2>Social Media</h2> */}
                    <div class='social-icons'>
                    <a
                    class='social-icon-link instagram'
                    href='https://www.instagram.com/realizedbeings/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </a>
                    {/* <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link> */}
                    <a
                    class='social-icon-link linkedIn'
                    href='https://www.linkedin.com/in/reem-al-salti-7b9474217/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </a>
                {/* </div><a href='https://www.instagram.com/realizedbeings/'target='_blank'>Instagram</a> */}
                </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                    REEMO
                    <i class="fad fa-heart" />
                    </Link>
                </div>
                <small class='website-rights'>REEMO © 2021</small>
                
                </div>
            </section>
            </div>
    );
}

export default Footer;
