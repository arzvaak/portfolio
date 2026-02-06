import React from 'react';

const HeroCard = () => {
    return (
        <div className="card hero-card" style={{ gridColumn: 'span 2', gridRow: 'span 2', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="avatar-container" style={{ marginBottom: '1.5rem', position: 'relative' }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--accent-red)',
                    boxShadow: '0 0 20px var(--accent-glow)'
                }}>
                    <img
                        src={`${import.meta.env.BASE_URL}assets/arzvakpfp.png`}
                        alt="Ayush Yadav (Arzvak)"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                Ayush <span className="text-accent">"Arzvak"</span> Yadav
            </h1>

            <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '80%' }}>
                EEE Undergrad @ MIT Manipal • Valorant Immortal 3
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <button style={{
                    background: 'var(--accent-red)',
                    color: 'white',
                    border: 'none',
                    padding: '0.8rem 1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default HeroCard;
