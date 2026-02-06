import React from 'react';

const LabWorkCard = () => {
    return (
        <div className="card lab-card" style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="text-gradient">Lab Work</h3>
                <span style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)'
                }}>
                    Current Focus
                </span>
            </div>

            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Measurements & Instrumentation</h4>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>
                Designing and analyzing precision measurement systems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                {['Bridge Circuits', 'Transducers', 'Signal Conditioning', 'Error Analysis'].map(item => (
                    <div key={item} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                    }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }}></div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LabWorkCard;
