import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
//import backgroundImage from './Pages/background.JPG';
import Cards from './Cards';
import Footer from "./Pages/Footer";

function HeroSection() {
    return (
        <>
        <div className='hero-container'>
            {/* <img src='./Pages/background2.JPG' alt="" /> */}
                <h1>I'm Reem!</h1>
                <p className="welcome">Welcome to my website!</p>
                 {/* <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                       ARTWORK     
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                       CONTACT     
                    </Button>
                </div> */}
                {/* <Cards /> */}
                
        </div>
        <Footer />
        </>
    )
}


export default HeroSection;