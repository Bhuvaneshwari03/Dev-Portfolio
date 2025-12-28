import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        © 2025 Bhuvaneshwari
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-quote">
                        "Change is constant. Adapting is a skill."
                    </p>
                    <p className="footer-sub">
                        [Inspired by the Bhagavad Gita]
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
