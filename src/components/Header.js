import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';

let Header = () => {
    return (
        <header>
            <img alt="coffee roaster logo" src={Logo} />
            <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>

                <Link to="/about">
                    <p>About</p>
                </Link>

                <Link to="/subscription">
                    <p>Create a Plan</p>
                </Link>
            </nav>
            <div className="hamburger"></div>
        </header>
    )
}

export default Header