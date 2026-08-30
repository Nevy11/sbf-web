import React from 'react';
import styles from './Dashboard.module.css';

export const BlossomView: React.FC = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Blossom</h1>
        <p className={styles.pageSubtitle}>Review your transformation pathways and purpose journal metrics.</p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 className={styles.sectionTitle}>Transformation Pathway</h2>
        <div className={`${styles.card} ${styles['card-shadow']}`}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--color-secondary)' }}>Current Phase: Discovery</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>60%</span>
          </div>
          <div style={{ height: '8px', backgroundColor: 'rgba(27, 67, 50, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--color-accent)' }}></div>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            You are well on your way to uncovering your core strengths. Your recent journal entries indicate a strong alignment with mentoring others.
          </p>
        </div>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>Foundation Updates & Opportunities</h2>
        <div className={styles.grid}>
          {[
            { tag: 'Program', title: 'Community Mentorship Fall 2026', desc: 'Apply to become a mentor for new members entering the Heal phase.' },
            { tag: 'Event', title: 'Annual Blossom Summit', desc: 'Join us for a weekend of workshops, speakers, and community building.' },
            { tag: 'Field Update', title: 'New Resource Center Opening', desc: 'SBF is expanding! We are opening a new physical location downtown.' }
          ].map((item, idx) => (
            <div key={idx} className={`${styles.card} ${styles['card-shadow']}`} style={{ borderLeft: '4px solid var(--color-accent)' }}>
              <div style={{ padding: '0.25rem 0.5rem', display: 'inline-block', backgroundColor: 'var(--color-dominant)', color: 'var(--color-secondary)', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                {item.tag}
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.4 }}>{item.desc}</p>
              <button style={{ color: 'var(--color-accent)', fontWeight: 600, padding: 0, background: 'none' }}>
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
