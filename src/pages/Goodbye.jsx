import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';

const Goodbye = () => {
    return (
        <PageWrapper style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', 
            marginTop: '-80px', // Counteract navbar height if needed, or just let it be
            paddingTop: '80px',
        }}>

            {/* MacOS Window Style Card */}
            <div className="glass-card goodbye-card" style={{ 
                padding: '0', 
                maxWidth: '600px',
                width: '90%', // Responsive width
                display: 'flex',
                flexDirection: 'column',
                background: '#1e1e1e', // VS Code dark theme background
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px', // MacOS rounded corners
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Title Bar */}
                <div style={{
                    background: '#2d2d2d', // Title bar color
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start', // Align dots to left
                    borderBottom: '1px solid #000'
                }}>
                    {/* Traffic Lights */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div> {/* Red */}
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div> {/* Yellow */}
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div> {/* Green */}
                    </div>
                    {/* Optional spacing or title could go here if requested, keeping it clean for now */}
                </div>

                {/* Window Content */}
                <div style={{
                    padding: '4rem 2rem', 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                     <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     >
                        <h2 style={{ 
                            fontSize: 'clamp(3rem, 5vw, 5rem)', 
                            fontWeight: '900', 
                            fontFamily: '"Fira Code", monospace', 
                            color: '#fff', 
                            letterSpacing: '-2px',
                            marginBottom: '0.5rem',
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.4)'
                        }}>
                            CTRL + S
                        </h2>
                        <h1 style={{ 
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                            fontWeight: '700',
                            color: '#b0b0b0', 
                            lineHeight: '1.3',
                            fontFamily: '"Inter", sans-serif',
                        }}>
                            Save me in your mind :)
                        </h1>
                    </motion.div>

                    <div style={{ width: '50px', height: '2px', background: 'rgba(255, 255, 255, 0.3)' }}></div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Goodbye;
