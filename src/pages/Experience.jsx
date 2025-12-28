import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';

const Experience = () => {
    const navigate = useNavigate();

    const experiences = [
        {
            year: '2025',
            title: 'TimeBox App',
            description: 'A productivity app that combines task management with time-boxing to help users plan, focus, and complete work effectively.'
        },
        {
            year: '2025',
            title: 'PulseFund App',
            description: 'A real-time, role-based fundraising platform enabling transparent campaign creation, donations, and admin oversight.'
        },
        {
            year: '2025',
            title: 'MindDump',
            description: 'An AI-powered web app that captures unstructured thoughts and automatically organizes them into actionable categories.'
        },
        {
            year: '2024',
            title: 'Accord',
            description: 'A role-based web system that digitizes student leave and on-duty approvals, reducing paperwork and delays.'
        }
    ];

    const handleItemClick = () => {
        navigate('/experience/details');
    };

    return (
        <PageWrapper>
            <h2 className="section-title">My Projects</h2>
            <div className="timeline-container" style={{ position: 'relative', paddingLeft: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    background: 'rgba(255,255,255,0.4)' // Significantly brighter line
                }}></div>

                {experiences.map((exp, index) => (
                    <div 
                        key={index} 
                        className="timeline-item" 
                        onClick={handleItemClick}
                        style={{ marginBottom: '3rem', position: 'relative', cursor: 'pointer' }}
                    >
                         <div style={{
                            position: 'absolute',
                            left: '-2.6rem', // Aligned with the vertical line
                            top: '50%', // Center vertically
                            transform: 'translateY(-50%)', // Center alignment adjustment
                            width: '20px',
                            height: '20px',
                            background: '#0a0a0a',
                            border: '4px solid #fff', // Whiter, thicker border
                            borderRadius: '50%',
                            zIndex: 1,
                            boxShadow: '0 0 10px rgba(255,255,255,0.3)' // Glow effect for better visibility
                        }}></div>
                        
                        <div className="glass-card experience-card" style={{ padding: '1.5rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
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
            <style>{`
                .experience-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
                    border-color: rgba(255,255,255,0.2);
                    background: linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(20, 20, 20, 0.8)); /* Slightly lighter on hover to pop */
                }
            `}</style>
        </PageWrapper>
    );
};

export default Experience;
