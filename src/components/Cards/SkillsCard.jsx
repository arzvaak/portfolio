import React from 'react';

const SkillsCard = () => {
    const skills = [
        "Python", "React", "JavaScript", "C", "Verilog", "ASM", "SQL", "R"
    ];

    return (
        <div className="card skills-card" style={{ gridColumn: 'span 1', gridRow: 'span 1' }}>
            <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>Tech Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map(skill => (
                    <span key={skill} style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)'
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;
