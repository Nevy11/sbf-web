import React from 'react';
import './App.css';
import logo from './assets/logo.jpeg';

const App: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <img src={logo} alt="SBF Logo" className="logo" />
            <span className="brand-name">Smart Blossoming Foundation</span>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#library">Resource Library</a></li>
              <li><a href="#pathway">Growth Pathway</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <span className="lang-toggle">EN | SW</span>
            <button className="pill-button primary">Get Involved</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="container hero">
          <div className="hero-content">
            <h1 className="hero-headline">
              Stories Do Not End In Pain; They Can Blossom Into Purpose.
            </h1>
            <p className="hero-subheadline">
              Empowering you to find your footing, trust your strength, and live your purpose through guided structure and inclusive support.
            </p>
            <div className="hero-actions">
              <button className="pill-button primary">Explore Our Programs</button>
              <button className="pill-button outline">Our Mission</button>
            </div>
          </div>
          <div className="hero-visual">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Community gathering" 
              className="hero-image"
            />
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">Built on Trust and Transparency</h2>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3>Our Mission</h3>
                <p>To provide guided structure, resource categorization, and progress tracking for community members on their journey of personal growth.</p>
              </div>
              <div className="about-card">
                <h3>Our Vision</h3>
                <p>An inclusive world where everyone has the tools to navigate their path from healing to peak self-actualization.</p>
              </div>
              <div className="about-card">
                <h3>Motto</h3>
                <p><strong>Heal. Grow. Blossom.</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library Section */}
        <section id="library" className="library-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Comprehensive Tools</span>
              <h2 className="section-title">An Ocean of Resources</h2>
              <p className="section-description">Access multi-format resources designed to support every aspect of your development.</p>
            </div>
            <div className="library-grid">
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="AI Therapist" className="library-card-image" />
                </div>
                <h3>AI Therapist Integration</h3>
                <p>Interactive guidance and advisory support leveraging AI to assist you in navigating your personal journey.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80" alt="Digital Book Repository" className="library-card-image" />
                </div>
                <h3>Digital Book Repository</h3>
                <p>Explore an "ocean of PDFs" and literature mapping directly linked to your growth stage.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80" alt="Multimedia Content" className="library-card-image" />
                </div>
                <h3>Multimedia Content</h3>
                <p>Curated educational resources integrated directly via YouTube video streaming for visual learning.</p>
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
              <button className="pill-button primary">View Your Dashboard</button>
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
            <button className="pill-button primary">Join A Safe Circle</button>
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

export default App;
