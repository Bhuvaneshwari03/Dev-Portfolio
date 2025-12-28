import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaMobileAlt, FaNodeJs, FaGitAlt, FaFigma, FaFire, FaPaperPlane } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';

const Home = () => {
    return (
        <PageWrapper className="home-container">
            <section className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="glass-card" style={{ maxWidth: '800px', width: '100%' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1.2' }}>
                        Hello, <br /> I'm Bhuvaneshwari
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: '#b0b0b0', marginBottom: '2rem' }}>
                        Developer | Public Speaker | Problem Solver
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#d0d0d0', lineHeight: '1.8', marginBottom: '2rem' }}>
                        I love solving problems, whether it's debugging software or tackling real-life challenges. 
                        My curiosity to find solutions has helped me do well in competitions and projects.
                    </p>
                </div>
            </section>

            <section className="about-section" style={{ marginBottom: '4rem' }}>
                <h2 className="section-title">About Me</h2>
                <div className="glass-card">
                    <p style={{ fontSize: '1.1rem', color: '#d0d0d0', lineHeight: '1.8' }}>
                        When I'm not coding, I spend my time improving my communication skills through public speaking and anchoring events.
                        I also work on sharpening my aptitude, learning Data Structures and Algorithms (DSA), and solving problems on platforms like LeetCode.
                    </p>
                </div>
            </section>

            <section className="skills-section">
                <h2 className="section-title">My Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    
                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Core</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <span className="skill-tag"><FaJava /> Java</span>
                            <span className="skill-tag"><FaDatabase /> SQL</span>
                            <span className="skill-tag"><FaHtml5 /> HTML</span>
                            <span className="skill-tag"><FaCss3Alt /> CSS</span>
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Frameworks</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <span className="skill-tag"><FaReact /> React</span>
                            <span className="skill-tag"><FaMobileAlt /> Flutter</span>
                            <span className="skill-tag"><FaNodeJs /> Node.js</span>
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Tools</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <span className="skill-tag"><FaGitAlt /> Git</span>
                            <span className="skill-tag"><FaFigma /> Figma</span>
                            <span className="skill-tag"><FaFire /> Firebase</span>
                            <span className="skill-tag"><FaPaperPlane /> Postman</span>
                        </div>
                    </div>

                </div>
            </section>

            <style>{`
                .skill-tag {
                    background: rgba(255,255,255,0.1);
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.9rem;
                    color: #fff;
                    transition: all 0.3s ease;
                }
                .skill-tag:hover {
                    background: rgba(255,255,255,0.2);
                    transform: translateY(-2px);
                }
            `}</style>
        </PageWrapper>
    );
};

export default Home;
