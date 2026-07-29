import React from 'react';
import { Flower, BookOpen, Heart, Handshake, Gift, Users, HeartPulse, TrendingUp } from 'lucide-react';
import '../App.css';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <Flower color="var(--color-forest)" size={32} />
            <span className="brand-name">Smart Blossoming Foundation</span>
          </div>
          <nav className="nav-list">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#impact">Impact</a>
            <a href="#resources">Resources</a>
            <a href="#get-involved">Get Involved</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#programs" className="pill-button primary explore-programs-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Explore Programs
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <span className="hero-eyebrow">Personal growth, confidence and purpose</span>
          <h1 className="hero-headline">Your story can blossom into purpose.</h1>
          <p className="hero-subheadline">
            Smart Blossoming Foundation creates safe, community-centred spaces to heal emotionally, grow mentally, build confidence and live with purpose.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="pill-button primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Explore Programs
            </a>
            <a href="#inquiry" className="pill-button outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              Ask Privately
            </a>
          </div>
          <p className="hero-trust">Respectful. Choice-led. Community-centred.</p>
        </div>
        <div className="hero-image-container">
          <img src="https://images.unsplash.com/photo-1528716321680-815a8cdb8c56?auto=format&fit=crop&q=80&w=800" alt="Person blossoming and looking confident" className="hero-image" />
        </div>
      </section>

      {/* Quick Paths Section */}
      <section className="quick-paths-section">
        <h2 className="quick-paths-title">I want to...</h2>
        <div className="quick-paths-chips">
          <button className="path-chip"><Users size={16} /> Join a program</button>
          <button className="path-chip"><BookOpen size={16} /> Learn from resources</button>
          <button className="path-chip"><Heart size={16} /> Volunteer</button>
          <button className="path-chip"><Handshake size={16} /> Partner</button>
          <button className="path-chip"><Gift size={16} /> Support</button>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Where are you in your journey?</h2>
          <p className="section-description" style={{ marginBottom: '3rem' }}>
            Choose the path that feels most useful today. You do not need to share your full story to take a first step.
          </p>
          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-icon-wrapper"><HeartPulse size={32} color="var(--color-forest)" /></div>
              <h3>HEAL</h3>
              <p>Build emotional awareness, self-trust and steady ways to move forward.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon-wrapper"><TrendingUp size={32} color="var(--color-forest)" /></div>
              <h3>GROW</h3>
              <p>Strengthen mindset, practical skills and confidence through learning and mentorship.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon-wrapper"><Flower size={32} color="var(--color-forest)" /></div>
              <h3>BLOSSOM</h3>
              <p>Connect personal growth with purpose, contribution, leadership and community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
