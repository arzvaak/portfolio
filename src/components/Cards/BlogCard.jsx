import React from 'react';

const BlogCard = () => {
    const posts = [
        { title: "Transitioning from Arts to Engineering", date: "Oct 2025" },
        { title: "Climbing to Immortal: A Mental Game", date: "Sep 2025" }
    ];

    return (
        <div className="card blog-card" style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 className="text-gradient">Latest Thoughts</h3>
                <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>View All &rarr;</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {posts.map((post, idx) => (
                    <div key={idx} className="blog-item" style={{
                        padding: '0.8rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        transition: 'background 0.2s ease'
                    }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{post.title}</h4>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{post.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
