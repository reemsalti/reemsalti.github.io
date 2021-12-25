import React from 'react';
import './AboutMe.css'
import Footer from './Footer';
import me from "./thisisme.jpg";
    


function AboutMe() {
    return (
        <>
        <div className='page'>
            <div className='aboutme-container'>
                <h1>ABOUT ME</h1>
                <div className='stack'>
                    <div className='profile'>
                        <img className='thisisme'src={me} alt='' />
                    
                    <div className='bio'>
                <p className='biotext'>My name is Reem Salti. I am a multi-media artist with a newfound interest in programming. In my free time I like to mess around on procreate, check out my portfolio!</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default AboutMe;
