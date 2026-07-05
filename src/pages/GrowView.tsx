import React from 'react';
import styles from './Dashboard.module.css';

export const GrowView: React.FC = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Grow</h1>
        <p className={styles.pageSubtitle}>Track your learning progress and access the resource library.</p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Personalized Growth Score</h2>
        <div className={`${styles.card} ${styles['card-shadow']}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg, var(--color-secondary) 0%, #2D6A4F 100%)', color: 'white', border: 'none' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 500 }}>Your Score</h3>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-accent)' }}>742</div>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: '0.5rem' }}>+24 points this week</p>
          </div>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '8px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Top 15%
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>Resource Library</h2>
        <div className={styles.grid}>
          {[
            { title: 'Understanding Triggers', type: 'Article', time: '5 min read' },
            { title: 'Guided Meditation: Centering', type: 'Audio', time: '12 min listen' },
            { title: 'Building Resilience in Work', type: 'Course', time: '3 modules' }
          ].map((item, idx) => (
            <div key={idx} className={`${styles.card} ${styles['card-shadow']}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ padding: '0.25rem 0.75rem', backgroundColor: 'rgba(27, 67, 50, 0.05)', color: 'var(--color-secondary)', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  {item.type}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.time}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>{item.title}</h3>
              <button style={{ color: 'var(--color-accent)', fontWeight: 600, padding: 0, background: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Access Material &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
