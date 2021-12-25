import React from 'react';
import './Portfolio.css';
import Footer from './Footer';
import MyGallery from './MyGallery';
import Cards from '../Cards';



function Portfolio() {
    return (
        <>
        <div className='mypage'>
            <div className='portfolio-container'>
                <h1>PORTFOLIO</h1>
                <div className='artsection'>
                    <h2>ART</h2>
                    <MyGallery />
                    <p className='enlarge'>Click to enlarge images!</p>
                    <div className='artgallery'>
                        {/* <li><img src={stingray} alt='' /></li>
                        <li><img src={pp} alt='' /></li>
                        <li><img src={portrait} alt='' /></li>
                        <li><img src={imow} alt='' /></li>
                        <li><img src={figs} alt='' /></li> */}
                       
                    
                    </div>
                </div>
                <div className='projsection'>
                    <h2>PROJECTS</h2>
                <div>
                    <iframe className='tet' title='Tetris App' src='https://reemsalti.github.io/react-tetris/'>
                    </iframe>
                    <a 
                    className='fullscreen' 
                    href='https://reemsalti.github.io/react-tetris/' 
                    target='_blank'>
                        <br></br>
                        PLAY IN FULLSCREEN
                        </a>
                    </div>
                </div>
            </div>
        </div>    
        <div>
                <Footer />
                </div>
            </>
    )
}

export default Portfolio;
