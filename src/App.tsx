import React from 'react';
import './App.css';

const App: React.FC = () => {
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
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="foundation-title">
          Smart Blossoming Foundation
        </div>
        {/* Hero Section */}
        <section id="home" className="container hero">
          <div className="hero-content">
            <h1 className="hero-headline">
              Heal Emotionally. Grow Mentally. Blossom Purposefully.
            </h1>
            <p className="hero-subheadline">
              A dedicated space for mental wellness, continuous learning, and personal transformation. We turn stories of pain into journeys of purpose.
            </p>
            <div className="hero-actions">
              <button className="pill-button primary">Start Your Journey</button>
              <a href="/sbf-constitution.pdf" download className="pill-button outline">Download Constitution</a>
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

        {/* Pillars Section */}
        <section id="programs" className="about-section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-subtitle">Our Core Pillars</span>
              <h2 className="section-title">The Path to Self-Actualization</h2>
            </div>
            <div className="about-grid">
              <div className="about-card">
                <h3>Heal (Mental Health)</h3>
                <p>Establishing psychological safety and emotional wellness. We provide the foundation for resolving internal challenges.</p>
              </div>
              <div className="about-card">
                <h3>Grow (Knowledge)</h3>
                <p>Acquiring new insights and skills. We foster continuous mental expansion to build your strength.</p>
              </div>
              <div className="about-card">
                <h3>Blossom (Transformation)</h3>
                <p>Embodying your purpose. We support you in becoming the best version of yourself, confident and purposeful.</p>
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
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Mental Caring" className="library-card-image" />
                </div>
                <h3>Mental Caring & Support</h3>
                <p>Compassionate resources and support systems focused on emotional healing and psychological safety.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80" alt="Digital Book Repository" className="library-card-image" />
                </div>
                <h3>Knowledge Repository</h3>
                <p>Curated literature and tools mapping directly to your stage of personal growth and mental development.</p>
              </div>
              <div className="library-item">
                <div className="library-image-container">
                  <img src="https://images.unsplash.com/photo-1490730141101-6c45963284aa?auto=format&fit=crop&w=800&q=80" alt="Blossoming" className="library-card-image" />
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
