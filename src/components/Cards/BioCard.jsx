import React from 'react';

const BioCard = () => {
    return (
        <div className="card bio-card" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="text-gradient">About Me</h3>

            <div className="timeline">
                <div className="timeline-item" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: 'var(--text-primary)' }}>Manipal Institute of Technology</h4>
                        <span className="text-accent" style={{ fontSize: '0.8rem' }}>Current</span>
                    </div>
                    <p className="text-muted">B.Tech in Electrical & Electronics Engineering</p>
                </div>

                <div className="timeline-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ color: 'var(--text-primary)' }}>Delhi University</h4>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>Dropped Out</span>
                    </div>
                    <p className="text-muted">Bachelor of Arts (Previous)</p>
                </div>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginTop: 'auto' }}>
                From Arts to Engineering, my journey has been driven by curiosity.
                Currently focused on <span style={{ color: 'var(--accent-gold)' }}>Measurements & Instrumentation</span> lab work.
            </p>
        </div>
    );
};

export default BioCard;
