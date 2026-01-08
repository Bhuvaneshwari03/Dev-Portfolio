import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PageWrapper from '../components/PageWrapper';

const Contact = () => {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || "FORM_ID_MISSING");

    return (
        <PageWrapper style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
            <div className="glass-card">
                <p style={{ textAlign: 'center', color: '#b0b0b0', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Have a question or want to work together? 
                </p>
                {state.succeeded ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: 'center', padding: '2rem' }}
                    >
                        <h3 style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '1.5rem' }}>Message Sent Successfully!</h3>
                        <p style={{ color: '#e0e0e0' }}>Thanks for reaching out. I'll get back to you soon.</p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="btn btn-primary" 
                            style={{ marginTop: '2rem' }}
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Name</label>
                                <input type="text" name="name" id="name" required className="form-input" placeholder="Your Name" />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" name="email" id="email" required className="form-input" placeholder="your@email.com" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem' }}>Message</label>
                            <textarea name="message" id="message" rows="5" required className="form-input" placeholder="Tell me how I can help"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={state.submitting} style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {state.submitting ? 'Sending...' : 'Send Message'}
                            <FaPaperPlane />
                        </button>
                    </form>
                )}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1.5rem', color: '#fff' }}>Connect on Socials</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://www.linkedin.com/in/bhuvaneshwari-dev" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
                    <a href="https://github.com/Bhuvaneshwari03" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
                    <a href="https://x.com/whysobhuma?t=yQH4Zb01DNmD_8zi3nlvRg&s=03" target="_blank" rel="noreferrer" className="social-icon"><FaXTwitter /></a>
                    <a 
                        href="mailto:bhuvaneshwari.2003g@gmail.com" 
                        className="social-icon"
                        onClick={(e) => {
                           navigator.clipboard.writeText("bhuvaneshwari.2003g@gmail.com");
                           alert("Email address copied to clipboard!");
                        }}
                    >
                        <FaEnvelope />
                    </a>
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
