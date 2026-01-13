import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

const MindDumpDetails = () => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    
    return (
        <PageWrapper className="minddump-details">
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
                        MindDump
                    </h1>
                    <p style={{ 
                        fontSize: '0.95rem', 
                        color: '#b0b0b0', 
                        marginBottom: '1.5rem',
                        lineHeight: '1.5'
                    }}>
                        An AI-powered mental inbox to capture, organize, and clear your thoughts effortlessly.
                    </p>

                    {/* Images Section - At the top after title */}
                    <div style={{ 
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '1rem',
                        marginBottom: '2rem',
                        paddingBottom: '10px',
                        scrollSnapType: 'x mandatory'
                    }}>
                        <div style={{ 
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            minWidth: '400px',
                            scrollSnapAlign: 'start',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            {imageError ? (
                                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', padding: '2rem' }}>Image Placeholder 1</div>
                            ) : (
                                <img 
                                    src="/images/minddump.png" 
                                    alt="MindDump"
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
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            minWidth: '400px',
                            scrollSnapAlign: 'start',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <img 
                                src="/images/minddump-2.png" 
                                alt="MindDump Dashboard"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block'
                                }}
                            />
                        </div>
                        <div style={{ 
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            minWidth: '400px',
                            scrollSnapAlign: 'start',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <img 
                                src="/images/minddump-3.png" 
                                alt="MindDump Focus Mode"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block'
                                }}
                            />
                        </div>
                        <div style={{ 
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            minWidth: '400px',
                            scrollSnapAlign: 'start',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <img 
                                src="/images/minddump-4.png" 
                                alt="MindDump Focus Timer"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block'
                                }}
                            />
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
                        MindDump is AI-driven web app designed to help users declutter their minds as a space to brain dump anything on your mind: thoughts, ideas, emotions, tasks. It's about cutting down on overwhelm, by structuring thoughts in opinionated but not-too-strict tasks.
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
                            React (TypeScript)
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Supabase
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Gemini API
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Tailwind CSS
                        </span>
                        <span style={{ 
                            fontSize: '0.95rem', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '8px',
                            background: '#2a2a2a',
                            color: '#fff',
                            fontWeight: '500'
                        }}>
                            Vite
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
                                Narrative free-flight with no fixed format
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
                                AI powered thoughts categorization in sensible groups
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
                                Smart Detection of tasks vs pure thoughts
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
                                Focus Mode with Pomodoro timer for actionable tasks
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
                                Force touch on recent shortcuts to trigger action
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
                                Urgency awareness for deadline based entries
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
                                Dashboard to help you view, edit, move or delete thoughts
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
                                Weekly stats to reflect on use patterns
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
                                Secure access to make sure users' information is kept private
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
                        MindDump is designed to allow you to quickly dump out what's on your mind, without first deciding if it's a task, note or thought! The AI processes every entry to learn about its meaning and category, so you only get the stuff you can really action as a task without putting pressure on your personal thoughts.
                    </p>
                    <p style={{ 
                        fontSize: '1rem', 
                        color: '#d0d0d0', 
                        lineHeight: '1.7'
                    }}>
                        Users can organize their tasks via a clean dashboard, execute them one by one with the Focus Mode and see insights of weekly activities to know how they think. This app is meant to remain as basic and non-overwhelming as possible.
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
                        I realized that it is common (especially among students and people with overtaxed brains) to find organizing fragmented trains of thought difficult. I found most productivity apps stilted and anxiety-inducing. I developed MindDump to be a place where you can think freely first and organize later, so that mental clarity feels natural rather than forced.
                    </p>
                </section>

                </div>
            </PageWrapper>
    );
};

export default MindDumpDetails;

