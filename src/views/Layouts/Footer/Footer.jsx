import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
faFacebookSquare,
faLinkedin,
faInstagramSquare,
faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import { ReactComponent as FooterLogo } from "../../../images/footer-logo.svg";

const Footer = () => {
return (
    <div className="footer">
        <div className="footer__links">
            <Link to="/">About Us</Link>
            <Link to="/">Terms and Condition</Link>
            <Link to="/">Privacy-Policy</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact us</Link>
        </div>
        <hr />
        <div className="footer__servicePlace">
            <p>Servicing in - Dhaka & Chittagong</p>
        </div>
        <hr />
        <div className="footer__copyright">
            <FooterLogo className="footer-logo" />
            <p>2020-21 Shobservice Technologies BD PVT. LTD.</p>
            <div className="footer-mediaIcon">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
        </div>
    </div>
);
};

export default Footer;
