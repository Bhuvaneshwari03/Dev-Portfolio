import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-tamil">
                            புவனேஸ்வரி
                        </div>
                        <h2 className="footer-name">Bhuvaneshwari</h2>
                        <p className="footer-role">Full Stack Developer</p>

                    </div>

                    <div className="footer-right">
                        <nav className="footer-nav">
                            <NavLink to="/" className="footer-link">About</NavLink>
                            <NavLink to="/projects" className="footer-link">Projects</NavLink>
                            <NavLink to="/contact" className="footer-link">Contact</NavLink>
                            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
                        </nav>
                        
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/in/bhuvaneshwari-dev" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Bhuvaneshwari03" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaGithub />
                            </a>
                            <a href="https://x.com/whysobhuma?t=yQH4Zb01DNmD_8zi3nlvRg&s=03" target="_blank" rel="noreferrer" className="footer-social-link">
                                <FaXTwitter />
                            </a>
                            <a 
                                href="mailto:bhuvaneshwari.2003g@gmail.com"
                                className="footer-social-link"
                                onClick={(e) => {
                                   // We keep the default behavior (open mail client) 
                                   // but also copy to clipboard just in case
                                   navigator.clipboard.writeText("bhuvaneshwari.2003g@gmail.com");
                                   // Optional: show a small toast or alert if needed, but 'mailto' usually works.
                                   // The user asked for "copy... and give a small msg".
                                   alert("Email address copied to clipboard!");
                                }}
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">© 2026 Bhuvaneshwari. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
