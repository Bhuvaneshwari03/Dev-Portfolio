import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';

const Goodbye = () => {
    return (
        <PageWrapper style={{
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="glass-card goodbye-card" style={{ 
                padding: '4rem', 
                textAlign: 'center',
                maxWidth: '600px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'center',
            }}>
                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <h2 style={{ 
                        fontSize: '4rem', 
                        fontWeight: '900', 
                        fontFamily: 'monospace', 
                        color: '#ff3333',
                        letterSpacing: '-2px',
                        marginBottom: '0.5rem',
                        textShadow: '0 0 30px rgba(255, 51, 51, 0.2)'
                    }}>
                        ctrl + s
                    </h2>
                    <h1 style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: '700',
                        color: '#fff',
                        lineHeight: '1.3'
                    }}>
                        Save me in your mind :)
                    </h1>
                </motion.div>

                <div style={{ width: '50px', height: '2px', background: 'rgba(255,255,255,0.2)' }}></div>
            </div>
        </PageWrapper>
    );
};

export default Goodbye;
