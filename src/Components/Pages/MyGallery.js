import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import './MyGallery.css';
import stingray from './Stingray.jpeg';
import pp from './Reempp.png' ;
import portrait from './portrait.jpeg' ;
import imow from './inmyownworld.png';
import figs from './figs.png';

import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
  
  <Gallery>
    <div className='row'>
    <Item
      original={stingray}
      width="2048"
      height="2732"
    >
      {({ ref, open }) => (
        <img className='gall' ref={ref} onClick={open} src={stingray} alt='' />
      )}
    </Item>
    <Item
      original={pp}
      width="2048"
      height="2048"
    >
      {({ ref, open }) => (
        <img className='gall' ref={ref} onClick={open} src={pp} alt='' />
      )}
    </Item>
    <Item
      original={portrait}
      width="2048"
      height="2732"
    >
      {({ ref, open }) => (
        <img className='gall' ref={ref} onClick={open} src={portrait} alt='' />
      )}
    </Item>
    <Item
      original={imow}
      width="2048"
      height="2048"
    >
      {({ ref, open }) => (
        <img className='gall' ref={ref} onClick={open} src={imow} alt='' />
      )}
    </Item>
    <Item
      original={figs}
      width="2048"
      height="2048"
    >
      {({ ref, open }) => (
        <img className='gall' ref={ref} onClick={open} src={figs} alt='' />
      )}
    </Item>
    </div>
  </Gallery>
  
  
)

export default MyGallery;

