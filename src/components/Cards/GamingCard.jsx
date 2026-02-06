import React from 'react';

const GamingCard = () => {
    return (
        <div className="card gaming-card" style={{
            gridColumn: 'span 1',
            gridRow: 'span 1',
            background: 'linear-gradient(135deg, var(--card-bg) 0%, rgba(255, 70, 85, 0.1) 100%)',
            borderColor: 'rgba(255, 70, 85, 0.3)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--accent-red)' }}>COMPETITIVE</h3>
            </div>

            <div style={{ marginTop: 'auto' }}>
                <h4 style={{ fontSize: '1.2rem' }}>VALORANT</h4>
                <div style={{ marginTop: '0.5rem' }}>
                    <p className="text-muted" style={{ fontSize: '0.85rem' }}>Current Rank</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>Immortal 3</p>
                </div>

                <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-muted" style={{ fontSize: '0.85rem' }}>Premier Division</p>
                    <p style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>Invite (Tier 3 Pro)</p>
                </div>
            </div>
        </div>
    );
};

export default GamingCard;
