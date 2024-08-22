import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';


const Homepage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <div className="header-top-bar">
                    <div className="header-contact-info">
                        <span><FontAwesomeIcon icon={faPhone} /> (362) 555-55 55</span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> monocle@gmail.com</span>
                    </div>
                    <div className="header-social-media">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <nav className="header-navigation">
                    <div className="brand-logo">
                        <h1>MONOCLE</h1> 
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/pages">Pages</a></li>
                    </ul>
                    <div className="header-actions">
                        <a href="/login">Login / Register</a>
                        <a href="/cart"><FontAwesomeIcon icon={faCartShopping} /> (1)</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Homepage;