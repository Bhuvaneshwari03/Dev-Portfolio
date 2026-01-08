import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const PulseFundDetails = () => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    
    return (
        <PageWrapper className="pulsefund-details">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <button 
                        onClick={() => navigate(-1)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#b0b0b0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginBottom: '1rem',
                            marginTop: '2rem',
                            padding: '0.5rem 0'
                        }}
                    >
                        <FaArrowLeft /> Back
                    </button>
                    <h1 style={{ 
                        fontSize: '3rem', 
                        fontWeight: '900', 
                        marginBottom: '0.5rem',
                        color: '#fff'
                    }}>
                        PulseFund
                    </h1>
                    <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#b0b0b0', 
                        marginBottom: '1.5rem',
                        lineHeight: '1.5'
                    }}>
                        Real-Time Micro-Fundraising & Donation Platform.
                    </p>

                    {/* Images Section - At the top after title */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ 
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            {imageError ? (
                                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', padding: '2rem' }}>Image Placeholder 1</div>
                            ) : (
                                <img 
                                    src="/images/pulsefund.png" 
                                    alt="PulseFund"
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block'
                                    }}
                                    onError={() => setImageError(true)}
                                />
                            )}
                        </div>
                        <div style={{ 
                            minHeight: '200px',
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.3)',
                            fontSize: '0.9rem',
                            padding: '2rem'
                        }}>
                            Image Placeholder 2
                        </div>
                        <div style={{ 
                            minHeight: '200px',
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.3)',
                            fontSize: '0.9rem',
                            padding: '2rem'
                        }}>
                            Image Placeholder 3
                        </div>
                    </div>

                {/* About Section */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.75rem',
                        color: '#fff'
                    }}>
                        About
                    </h2>
                    <p style={{ 
                        fontSize: '1rem', 
                        color: '#d0d0d0', 
                        lineHeight: '1.7'
                    }}>
                        PulseFund is a timely Android fundraising app that raises local small scale donation campaigns to the level of transparency and reliability. The app lets both people and organizations set up fundraisers, and enables donors to safely donate with live donation telemetry. More than just an admin dashboard for across-the board tracking of accounts, users and activity on the platform.
                    </p>
                </section>

                {/* Tech Stack Section */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.75rem',
                        color: '#fff'
                    }}>
                        Tech Stack
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Flutter
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Firebase Authentication
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Cloud Firestore
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Google Sign-In
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Dart
                        </span>
                    </div>
                </section>

                {/* Key Features Section */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.75rem',
                        color: '#fff'
                    }}>
                        Key Features
                    </h2>
                    <ul style={{ 
                        listStyle: 'none', 
                        padding: 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '0.5rem'
                    }}>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Role-based access for Donors, Creators and Admins
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Organization/Trust page verification for profile before Creating campaign
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Real-time campaign progress updates over Firestore streams
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Safe donation process with amount validation to check for over-funding
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Creator dashboard for campaign level donation details view
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Donor history screen to see a list of previous donations
                        </li>
                        <li style={{ 
                            color: '#d0d0d0', 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.25rem'
                        }}>
                            <span style={{ color: '#fff', marginRight: '0.5rem' }}>✓</span>
                            Admin dashboard to monitor platform health and transparency
                        </li>
                    </ul>
                </section>

                {/* Details Section */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.75rem',
                        color: '#fff'
                    }}>
                        Details
                    </h2>
                    <p style={{ 
                        fontSize: '1rem', 
                        color: '#d0d0d0', 
                        lineHeight: '1.7'
                    }}>
                        PulseFund is developed with a clean MVC style, separating UI, business logic and data models nicely. All campaign information, donations and users profiles are stored in Firestore with realtime listeners to receive instant updates throughout the app. Security rules in Firestore dictate what type of data and how much of it a client can access and who is authorized to act upon the data.
                    </p>
                </section>

                {/* Why I Built It Section */}
                <section style={{ marginBottom: '2rem' }}>
                    <h2 style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '800', 
                        marginBottom: '0.75rem',
                        color: '#fff'
                    }}>
                        Why I Built It
                    </h2>
                    <p style={{ 
                        fontSize: '1rem', 
                        color: '#d0d0d0', 
                        lineHeight: '1.7'
                    }}>
                        I created PulseFund to see how real-time systems, role-based access and secure transactions look in a production like mobile application. The project allowed me to reinforce my basic knowledge around Flutter and Firebase integration, as well as systems design principles, all while developing a tool rooted in transparency and real-world application.
                    </p>
                </section>

                </div>
            </PageWrapper>
    );
};

export default PulseFundDetails;

