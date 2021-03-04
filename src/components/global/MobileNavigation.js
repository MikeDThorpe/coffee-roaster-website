import React from 'react'
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";


let MobileNavigation = ({show, toggleNav}) => {
    return (
        <section style={ show ? {display: "block"} : {display: "none"}} className="mobile-nav">
            <section>
                <img className="logo" alt="coffee roaster logo" src={Logo} />
                <div onClick={() => toggleNav()} className="cross"></div>
            </section>
            <nav>
                <Link onClick={() => toggleNav()} to="/">
                    <h4>Home</h4>
                </Link>
                <Link onClick={() => toggleNav()} to="/about">
                    <h4>About Us</h4>
                </Link>
                <Link onClick={() => toggleNav()} to="/subscription">
                    <h4>Create Your Plan</h4>
                </Link>
            </nav>
        </section>
    )
}

export default MobileNavigation