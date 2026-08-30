import React from 'react';
import styles from './Dashboard.module.css';

const therapists = [
  { id: 1, name: 'Dr. Sarah Jenkins', spec: 'Trauma & PTSD', availability: 'Available Today' },
  { id: 2, name: 'Michael Osei', spec: 'Anxiety & Depression', availability: 'Next Week' },
  { id: 3, name: 'Dr. Elena Rostova', spec: 'Family Counseling', availability: 'Available Tomorrow' },
];

export const HealView: React.FC = () => {
  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Heal</h1>
        <p className={styles.pageSubtitle}>Your safe space for emotional wellness and psychological check-ins.</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 className={styles.sectionTitle}>Daily Wellness Log</h2>
        <div className={`${styles.card} ${styles.wellnessCard}`}>
          <span style={{ fontSize: '1.5rem' }}>How are you feeling today?</span>
          <div className={styles.emojiRow}>
            {['😢', '😐', '🙂', '😊', '🌟'].map((emoji, i) => (
              <button key={i} className={styles.emojiBtn} onMouseEnter={e => e.currentTarget.style.transform='scale(1.2)'} onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}>
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>Therapist Directory</h2>
        <div className={styles.grid}>
          {therapists.map(t => (
            <div key={t.id} className={`${styles.card} ${styles['card-shadow']}`}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-dominant)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--color-accent)' }}>
                {t.name.charAt(0)}
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', marginBottom: '0.25rem' }}>{t.name}</h3>
              <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(82, 183, 136, 0.1)', color: 'var(--color-accent)', borderRadius: '16px', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>
                {t.spec}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{t.availability}</p>
              <button style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '8px', fontWeight: 600 }}>
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
