import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    &copy; 2025 Portfolio Tracker. All Rights Reserved.
                </p>
                <div className="social-links">
                    <a
                        href="https://github.com/Manu270"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chitti-manogna-b6b9a2250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaLinkedin size={16} />
                    </a>
                    <a
                        href="mailto:chittimanu2703@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <FaEnvelope size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
