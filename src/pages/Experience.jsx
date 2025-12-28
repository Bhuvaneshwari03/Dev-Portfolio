import React from 'react';
import { motion } from 'framer-motion';

import PageWrapper from '../components/PageWrapper';

const Experience = () => {
    const experiences = [
        {
            year: '2025',
            title: 'Tax Assistant',
            description: 'Developed a tax assistant using TypeScript to handle complex calculations and minimize errors.'
        },
        {
            year: '2024',
            title: 'On Duty Leave Management System',
            description: 'Built a seamless leave request and approval platform for educational institutions using MERN stack.'
        },
        {
            year: '2023',
            title: 'GST Bill Estimation',
            description: 'Created a billing solution for small businesses using HTML, CSS, and PHP.'
        },
        {
            year: '2022',
            title: 'First Scratch Project',
            description: 'Started the journey with animation videos using Scratch.'
        }
    ];

    return (
        <PageWrapper>
            <h2 className="section-title">My Journey</h2>
            <div className="timeline-container" style={{ position: 'relative', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'rgba(255,255,255,0.1)'
                }}></div>

                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item" style={{ marginBottom: '3rem', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            left: window.innerWidth < 768 ? '-2.55rem' : '-2.6rem', // Slight adjustment logic if needed, but CSS is better. 
                            // Actually, let's keep it simple and assume standard view. 
                            // Better approach involves media queries in CSS, but inline we can just ensure it floats correctly.
                            left: '-2.6rem',
                            top: '0.5rem',
                            width: '20px',
                            height: '20px',
                            background: '#0a0a0a',
                            border: '4px solid #fff',
                            borderRadius: '50%',
                            zIndex: 1
                        }}></div>
                        
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <span style={{ 
                                display: 'inline-block', 
                                padding: '0.2rem 0.8rem', 
                                background: 'rgba(255,255,255,0.1)', 
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                marginBottom: '1rem',
                                color: '#b0b0b0'
                            }}>
                                {exp.year}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.title}</h3>
                            <p style={{ color: '#b0b0b0', lineHeight: '1.6' }}>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default Experience;
