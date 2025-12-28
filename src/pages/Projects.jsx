import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';

const Projects = () => {
    const projects = [
        {
            title: 'Tax Assistant',
            desc: 'A TypeScript-based tax calculation assistant for handling complex calculations and minimizing errors.',
            tech: ['TypeScript', 'React'],
            link: 'https://github.com/Bhuvaneshwari03/TaxAssistant.git'
        },
        {
            title: 'GST Bill Estimation',
            desc: 'A comprehensive GST billing solution built with HTML, CSS, and PHP for small businesses.',
            tech: ['HTML', 'PHP'],
            link: 'https://github.com/Bhuvaneshwari03/GST-Invoice.git'
        },
        {
            title: 'Scratch Animation',
            desc: 'An animation video created using Scratch programming platform.',
            tech: ['Scratch'],
            link: 'https://github.com/Bhuvaneshwari03/ScratchAnimation.git'
        }
    ];

    return (
        <PageWrapper>
            <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>My Projects</h2>
            <div className="projects-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '2rem' 
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-card project-card" style={{ 
                        padding: '0', 
                        overflow: 'hidden', 
                        display: 'flex', 
                        flexDirection: 'column',
                        minHeight: '300px'
                    }}>
                        {/* Placeholder for project image or abstract design */}
                        <div style={{ 
                            height: '140px', 
                            background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}>
                             <h3 style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.1)' }}>{project.title.charAt(0)}</h3>
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: '#b0b0b0', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>
                                {project.desc}
                            </p>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{ 
                                        fontSize: '0.8rem', 
                                        padding: '0.2rem 0.6rem', 
                                        borderRadius: '4px', 
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#ccc' 
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                View on GitHub <FaGithub />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .project-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.4);
                    border-color: rgba(255,255,255,0.2);
                }
            `}</style>
        </PageWrapper>
    );
};

export default Projects;
