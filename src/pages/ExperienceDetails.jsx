import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const ExperienceDetails = () => {
    const navigate = useNavigate();

    return (
        <PageWrapper style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#000', 
            zIndex: 9999, // Ensure it sits on top of everything including Navbar/Footer/Background
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            overflowY: 'auto' // Allow scrolling if content overflows
        }}>
           <button 
                onClick={() => navigate(-1)} 
                className="btn"
                style={{ 
                    alignSelf: 'flex-start', 
                    marginBottom: '2rem', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}
            >
                <FaArrowLeft /> Back
            </button>
            
            <div style={{ color: '#fff', maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '10vh' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Project Details</h1>
                <p style={{ color: '#b0b0b0' }}>[Content will be added here later]</p>
            </div>
        </PageWrapper>
    );
};

export default ExperienceDetails;
