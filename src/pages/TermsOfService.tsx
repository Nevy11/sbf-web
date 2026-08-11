import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../pages/Dashboard.module.css';

export function TermsOfService() {
  return (
    <div className="page-container" style={{ minHeight: '100vh', backgroundColor: 'var(--color-sand)', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-forest)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 600 }}>
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 style={{ color: 'var(--color-forest)', fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--color-sage)', fontSize: '0.9rem', marginBottom: '2rem' }}>Effective Date: January 2026</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            By accessing and using the Smart Blossoming Foundation (SBF) website, programs, and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our platform.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Our Mission</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            SBF is an independent, non-sectarian, and non-partisan organization dedicated to helping individuals heal emotionally, grow mentally, build confidence, and find purpose. We strive to provide a psychologically safe, respectful, and empowering environment.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Code of Conduct</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            All individuals interacting with the SBF platform, including participants, donors, and partners, are expected to uphold our core values of empathy, growth, confidence, purpose, and community. Specifically, you agree to:
          </p>
          <ul style={{ lineHeight: 1.6, color: 'var(--color-text)', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Maintain a compassionate presence and treat all members with respect.</li>
            <li>Uphold safety and boundaries within the community.</li>
            <li>Engage with integrity and transparency.</li>
            <li>Not engage in any form of discrimination, harassment, or abusive behavior.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Content and Intellectual Property</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            The materials and content provided on this website, including our Heal, Grow, and Blossom frameworks, are the property of the Smart Blossoming Foundation unless otherwise stated. They are provided for your personal, non-commercial use to aid in your personal transformation and continuous cultivation.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Non-Distribution and Private Benefit</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            SBF operates as a non-profit foundation. Our resources and platform are designed to further our public mission. Users must not utilize our platform for unauthorized commercial gain or distribution that conflicts with our non-distribution constraints.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>6. Limitation of Liability</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            While we provide guidance and resources for emotional wellness and personal growth, our services are not a substitute for professional medical or psychiatric advice. SBF is not liable for any personal outcomes resulting from the use of our educational and empowerment programs.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>7. Modifications to the Terms</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            The Smart Blossoming Foundation reserves the right to update or modify these Terms of Service at any time. Continued use of our platform after any such changes shall constitute your consent to such changes.
          </p>
        </section>
      </div>
    </div>
  );
}
