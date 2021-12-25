import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

//useEffect(() => {
 

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        REEMO
                        <i class="fad fa-heart" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className='nav-item'>
                        <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT
                        </Link>
                        </li>
                            <li className='nav-item'>
                        <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu}>
                            PORTFOLIO
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT
                        </Link>
                       
                        </li>
                    </ul>
                
                </div>
            </nav>
        </>
    )
}

export default Navbar
