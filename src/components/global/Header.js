import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';

let Header = ({toggleNav}) => {
    return (
        <header>
            <img alt="coffee roaster logo" className="logo" src={Logo} />
            <nav>
                <Link to="/">
                    <p>HOME</p>
                </Link>

                <Link to="/about">
                    <p>ABOUT</p>
                </Link>

                <Link to="/subscription">
                    <p>CREATE A PLAN</p>
                </Link>
            </nav>
            <div onClick={() => toggleNav()} className="hamburger"></div>
        </header>
    )
}

export default Header