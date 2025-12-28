import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaCode, FaHackerrank } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulating EmailJS call, replace with actual integration if package installed
        // emailjs.sendForm(...) 
        
        setTimeout(() => {
            setStatus('sent');
            e.target.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <PageWrapper style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
            <div className="glass-card">
                <p style={{ textAlign: 'center', color: '#b0b0b0', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Have a question or want to work together? 
                </p>
                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Name</label>
                            <input type="text" name="user_name" required className="form-input" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" name="user_email" required className="form-input" placeholder="your@email.com" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Message</label>
                        <textarea name="message" rows="5" required className="form-input" placeholder="What's on your mind?"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                        <FaPaperPlane />
                    </button>
                </form>
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Connect on Socials</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://linkedin.com/in/bhuvaneshwari-g-51675724b" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                    <a href="https://github.com/Bhuvaneshwari03" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
                    <a href="https://leetcode.com/u/49wF5B4bOO/" target="_blank" rel="noreferrer" className="social-icon"><FaCode /></a>
                    <a href="https://hackerrank.com/profile/24MCR013" target="_blank" rel="noreferrer" className="social-icon"><FaHackerrank /></a>
                </div>
            </div>

            <style>{`
                .form-input {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    padding: 1rem;
                    color: #fff;
                    width: 100%;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.3s ease;
                }
                .form-input:focus {
                    outline: none;
                    border-color: #fff;
                    background: rgba(255,255,255,0.08);
                }
                .social-icon {
                    font-size: 1.8rem;
                    color: #b0b0b0;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    color: #fff;
                    transform: translateY(-3px);
                }
                @media (max-width: 600px) {
                    .form-group {
                        grid-column: span 2;
                    }
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </PageWrapper>
    );
};

export default Contact;
