import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import image from './portfimg.jpg'

function Cards() {
    return (
        <div className='cards'>
            {/* <h1>Check these out!</h1> */}
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                             src={image}
                            text='COMING SOON!'
                            label='Portfolio'
                            path='/portfolio'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
