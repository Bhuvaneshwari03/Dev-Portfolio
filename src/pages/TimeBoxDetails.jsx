import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const TimeBoxDetails = () => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    
    return (
        <PageWrapper className="timebox-details">
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
                        TimeBox
                    </h1>
                    <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#b0b0b0', 
                        marginBottom: '1.5rem',
                        lineHeight: '1.5'
                    }}>
                        Personal Time-Based Task Planning App.
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
                                    src="/images/timebox.png" 
                                    alt="TimeBox"
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
                        Self contain time-boxing, planning and scheduling application that aims to help users plan the tasks with clear start and end times. Built to foster mindful planning (as opposed to random task dumping), the app is all about structure, clarity and executing your list on a daily basis.
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
                            User authentication with Firebase Auth
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
                            New task by date, start time and end time using an inline custom-bottom-sheet UI
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
                            Firestore real-time task storage and synchronization
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
                            Visually strike through completed tasks with a single tap of the your finger
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
                            Smart validation to avoid invalid or past time ranges
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
                            Custom home screen greeting based on stored user profile data
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
                            Jump to Task highlighting for instant task searching by title
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
                            Clean, focused and minimal user interface designed for daily planning
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
                        lineHeight: '1.7',
                        marginBottom: '0.75rem'
                    }}>
                        With this app, users are able to schedule their day in a strict time-boxing style and every item's start and end time must be scheduled. Tasks are written to users Firestore and presented in a tidy, time-sorted list. Users have the ability to check off completed tasks, search for tasks, and jump right into a task from anywhere in an App just by searching.
                    </p>
                    <p style={{ 
                        fontSize: '1rem', 
                        color: '#d0d0d0', 
                        lineHeight: '1.7'
                    }}>
                        The process of creating a task through bottom-sheet, which offers to pick the date and scroll-based time slots to get the precise schedule. Live updates – see any alterations to tasks in real time with no need for manual refreshing.
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
                        The long to-do: Most to-do apps emphasize collecting tasks, not completing them. The app that I made Forced Clarity — if there is something you can work on, it must fit into time. This encourages users to become more aware of their real level of daily capacity, and not plan fantastically. The app is an embodiment of my passion for developing pragmatic, user-centered applications that have clean UI, and rigorous validation along with being practically useful to society.
                    </p>
                </section>

                </div>
            </PageWrapper>
    );
};

export default TimeBoxDetails;

