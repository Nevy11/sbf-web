import React from 'react';
import { Flower } from 'lucide-react';
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
    </div>
  );
};
