import React from 'react'
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    //display a simle Navbar to manage routing process

    return (
        <>
            <nav >
                <div className="Nav-Container">
                    <div className="Logo-Section">
                        <img src={logo} className='nav-logo' alt='' />
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/Home">
                                <button className='Link-BTN' >Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <button className='Link-BTN' >About Us !</button>
                            </Link>
                        </li>
                    </ul>
                    <button className="btn sign-InBTN">
                        Sign In
                    </button>
                </div>
            </nav>
        </>
    )
}
