import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';

const Projects = () => {
    const [imageErrors, setImageErrors] = useState({});
    const navigate = useNavigate();

    const projects = [
        {
            title: 'PulseFund',
            desc: 'Real-Time Micro-Fundraising & Donation Platform.',
            tech: ['Flutter', 'Firebase Authentication', 'Cloud Firestore', 'Google Sign-In', 'Dart'],
            image: 'pulsefund.png',
            link: '/projects/pulsefund'
        },
        {
            title: 'TimeBox',
            desc: 'Personal Time-Based Task Planning App.',
            tech: ['Flutter', 'Firebase Authentication', 'Cloud Firestore', 'Dart'],
            image: 'timebox.png',
            link: '/projects/timebox'
        },
        {
            title: 'MindDump',
            desc: 'An AI-powered mental inbox to capture, organize, and clear your thoughts effortlessly.',
            tech: ['React (TypeScript)', 'Supabase', 'Gemini API', 'Tailwind CSS', 'Vite'],
            image: 'minddump.png',
            link: '/projects/minddump'
        }
    ];

    const handleImageError = (index) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    return (
        <PageWrapper>
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>My Projects</h2>
            <div className="projects-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '2rem',
                alignItems: 'stretch'
            }}>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="glass-card project-card" 
                        onClick={() => project.link && navigate(project.link)}
                        style={{ 
                            padding: '0', 
                            overflow: 'hidden', 
                            display: 'flex', 
                            flexDirection: 'column',
                            height: '100%',
                            cursor: project.link ? 'pointer' : 'default'
                        }}
                    >
                        {/* Project image */}
                        <div style={{ 
                            height: '140px', 
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '2px solid rgba(255,255,255,0.1)',
                            overflow: 'hidden'
                        }}>
                             {imageErrors[index] ? (
                             <h3 style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.1)' }}>{project.title.charAt(0)}</h3>
                             ) : (
                                <img 
                                    src={`/images/${project.image}`} 
                                    alt={project.title}
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover' 
                                    }}
                                    onError={() => handleImageError(index)}
                                />
                             )}
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '200px' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: '#b0b0b0', fontSize: '0.95rem', marginBottom: '1rem', flex: 1, lineHeight: '1.6' }}>
                                {project.desc}
                            </p>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{ 
                                        fontSize: '0.85rem', 
                                        padding: '0.4rem 0.8rem', 
                                        borderRadius: '8px', 
                                        background: '#2a2a2a',
                                        color: '#fff',
                                        fontWeight: '500'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .project-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    background: #000000 !important;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0,0,0,1), inset 0 0 0 1px rgba(0, 0, 0, 0.5);
                    border-color: rgba(255,255,255,0.15);
                }
                .project-card[style*="cursor: pointer"]:hover {
                    border-color: rgba(255,255,255,0.2);
                }
            `}</style>
            {/* Gemini Credit */}
            <div style={{
                textAlign: 'center',
                margin: '2rem 0 1.4rem',
                color: '#b0b0b0',
                fontSize: '0.92rem',
                opacity: 0.64,
                fontWeight: 500,
                letterSpacing: '0.01em'
            }}>
                Images on this page were created with <span style={{color:'#02d296'}}>Gemini</span>.
            </div>
        </PageWrapper>
    );
};

export default Projects;
