import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../pages/Dashboard.module.css';

export function SafeguardingPolicy() {
  return (
    <div className="page-container" style={{ minHeight: '100vh', backgroundColor: 'var(--color-sand)', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-forest)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 style={{ color: 'var(--color-forest)', fontSize: '2.5rem', marginBottom: '1rem' }}>Safeguarding Policy</h1>
        <p style={{ color: 'var(--color-sage)', fontSize: '0.9rem', marginBottom: '2rem' }}>Effective Date: January 2026</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Our Commitment to Safety</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            The Smart Blossoming Foundation (SBF) is dedicated to ensuring a psychologically safe, respectful, and empowering environment for everyone involved in our programs, including participants, staff, volunteers, and partners. We believe that stories do not end in pain, but can blossom into purpose—and this transformation is only possible when individuals feel completely secure and supported.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Foundational Principles of Behavior</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            All individuals acting on behalf of or participating in any SBF program, event, or platform must uphold the following standards:
          </p>
          <ul style={{ lineHeight: 1.6, color: 'var(--color-text)', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li><strong>Compassionate Presence and Respect:</strong> Treat everyone with dignity, empathy, and kindness.</li>
            <li><strong>Upholding Safety and Boundaries:</strong> Recognize and respect personal, emotional, and physical boundaries at all times.</li>
            <li><strong>Integrity and Transparency:</strong> Act honestly and communicate openly while respecting confidentiality.</li>
            <li><strong>Growth and Professionalism:</strong> Foster an environment that encourages continuous learning and mutual support.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Non-Discrimination</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            SBF strictly prohibits discrimination or harassment based on race, color, religion, tribe, national origin, age, sex, gender identity, sexual orientation, disability, or marital status. We are committed to maintaining a community where everyone can thrive without fear of prejudice.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Enforcement and Reporting</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            We take all safeguarding concerns seriously. Our policy includes a mandatory obligation to report any behavior that violates this policy, compromises safety, or constitutes abuse or harassment.
          </p>
          <ul style={{ lineHeight: 1.6, color: 'var(--color-text)', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li><strong>Obligation to Report:</strong> Any participant or staff member who witnesses or experiences a violation must report it immediately.</li>
            <li><strong>Investigation and Action:</strong> All reports will be handled promptly, confidentially, and impartially by the foundation’s leadership to ensure appropriate action is taken.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact for Safeguarding Concerns</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            If you have a safeguarding concern or need to report an incident, please contact us immediately in strict confidence:<br /><br />
            <strong>Email:</strong> hello@smartblossoming.org<br />
            <strong>Phone:</strong> 0735231262
          </p>
        </section>
      </div>
    </div>
  );
}
