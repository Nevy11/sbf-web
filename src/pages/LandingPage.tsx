import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <img src="/logo.jpeg" alt="SBF Logo" className="logo" />
            <span className="brand-name">Smart Blossoming Foundation</span>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="pill-button explore-programs-btn" onClick={() => navigate('/#programs')}>Explore Programs</button>
          </div>
        </div>
      </header>

      <main>
        <div className="foundation-title">
          Smart Blossoming Foundation
        </div>
        {/* Hero Section */}
        <section id="home" className="container hero">
          <div className="hero-content">
            <div className="hero-eyebrow">Personal growth, confidence and purpose</div>
            <h1 className="hero-headline">
              Your story can blossom into purpose.
            </h1>
            <p className="hero-subheadline">
              Smart Blossoming Foundation creates safe, community-centred spaces to heal emotionally, grow mentally, build confidence and live with purpose.
            </p>
            <div className="hero-actions">
              <button className="pill-button primary" onClick={() => navigate('/#programs')}>Explore Programs</button>
              <button className="pill-button outline" onClick={() => navigate('/#inquiry')}>Ask Privately</button>
            </div>
            <div className="hero-trust">Respectful. Choice-led. Community-centred.</div>
          </div>
          <div className="hero-visual">
            <img 
              src="/hero-image.jpg" 
              alt="Community support" 
              className="hero-image"
            />
          </div>
        </section>

        {/* Quick Paths Section */}
        <section className="quick-paths-section container">
          <h2 className="quick-paths-title">I want to...</h2>
          <div className="quick-paths-chips">
            <button className="path-chip">Join a program</button>
            <button className="path-chip">Learn from resources</button>
            <button className="path-chip">Volunteer</button>
            <button className="path-chip">Partner</button>
            <button className="path-chip">Support</button>
          </div>
        </section>

        {/* Heal-Grow-Blossom Journey Section */}
        <section id="programs" className="journey-section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Where are you in your journey?</h2>
              <p className="section-description">Choose the path that feels most useful today. You do not need to share your full story to take a first step.</p>
            </div>
            <div className="journey-grid">
              <div className="journey-card">
                <h3>HEAL</h3>
                <p>Build emotional awareness, self-trust and steady ways to move forward.</p>
              </div>
              <div className="journey-card">
                <h3>GROW</h3>
                <p>Strengthen mindset, practical skills and confidence through learning and mentorship.</p>
              </div>
              <div className="journey-card">
                <h3>BLOSSOM</h3>
                <p>Connect personal growth with purpose, contribution, leadership and community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Section */}
        <section id="resources" className="library-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Our Support Structure</span>
              <h2 className="section-title">Nurturing Your Journey</h2>
              <p className="section-description">Resources designed to provide care, facilitate growth, and inspire your unique blossoming.</p>
            </div>
            <div className="library-grid">
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://picsum.photos/seed/mental/800/600" alt="Mental Caring" className="library-card-image" />
                </div>
                <h3>Mental Caring & Support</h3>
                <p>Compassionate resources and support systems focused on emotional healing and psychological safety.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://picsum.photos/seed/knowledge/800/600" alt="Digital Book Repository" className="library-card-image" />
                </div>
                <h3>Knowledge Repository</h3>
                <p>Curated literature and tools mapping directly to your stage of personal growth and mental development.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="/sbf_smile.jpeg" alt="Blossoming" className="library-card-image" />
                </div>
                <h3>Transformation & Blossoming</h3>
                <p>Guided pathways to help you embody your purpose and blossom into your best, empowered self.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Pathway Section */}
        <section id="pathway" className="pathway-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">The Journey</span>
              <h2 className="section-title">Your Structured Path to Blossoming</h2>
            </div>
            <div className="pathway-timeline">
              <div className="pathway-stage">
                <div className="stage-number">01</div>
                <div className="stage-content">
                  <h3>Healing Phase</h3>
                  <p>Focused on baseline recovery, mental wellness, and resolving initial blockages. Find your ground.</p>
                </div>
              </div>
              <div className="pathway-stage">
                <div className="stage-number">02</div>
                <div className="stage-content">
                  <h3>Growing Phase</h3>
                  <p>Targeting continuous skill-building, mental development, and habit formation. Strengthen your roots.</p>
                </div>
              </div>
              <div className="pathway-stage">
                <div className="stage-number">03</div>
                <div className="stage-content">
                  <h3>Blossoming Phase</h3>
                  <p>Advanced tier focused on peak self-actualization, empowerment, and long-term sustainability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracking Section */}
        <section className="tracking-section">
          <div className="container tracking-container">
            <div className="tracking-content">
              <span className="section-subtitle">Metrics-Backed Feedback</span>
              <h2 className="section-title">Growth Rating System</h2>
              <p>Our integrated dashboard systematically rates and tracks your level of growth, providing clear direction for your next steps.</p>
              <ul className="tracking-features">
                <li>Personalized Growth Score</li>
                <li>Milestone Achievements</li>
                <li>Dynamic Feedback Loop</li>
              </ul>
              <button className="pill-button primary" onClick={() => navigate('/login')}>View Your Dashboard</button>
            </div>
            <div className="tracking-visual">
              <div className="dashboard-mockup">
                {/* Simplified dashboard mockup graphic */}
                <div className="mockup-header">Growth Level: Blossoming</div>
                <div className="mockup-progress-bar"><div className="progress-fill"></div></div>
                <div className="mockup-stats">
                  <span>85% Healing</span>
                  <span>70% Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility/Localization Callout */}
        <section className="localization-section">
          <div className="container text-center">
            <h2 className="section-title">Tunajali. We Care.</h2>
            <p className="localization-p">To break down literacy barriers, our platform is fully inclusive with bilingual support in <strong>English & Kiswahili</strong>. No one is left behind.</p>
          </div>
        </section>

        {/* Callout Block */}
        <section className="callout-block">
          <div className="container callout-content">
            <h2 className="callout-statement">
              "We are dedicated to personal transformation and creating safe spaces for self-discovery."
            </h2>
            <span className="callout-preamble">Smart Blossoming Foundation Preamble</span>
            <button className="pill-button primary" onClick={() => navigate('/login')}>Join A Safe Circle</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-rights">
            © {new Date().getFullYear()} Smart Blossoming Foundation (SBF). All rights reserved.
          </div>
          <div className="footer-motto">
            Heal. Grow. Blossom.
          </div>
        </div>
      </footer>
    </div>
  );
};


