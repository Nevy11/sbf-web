import React from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import { Phone, Mail, Heart, TrendingUp, Star, Target, Users } from 'lucide-react';
import { SiteHeader } from '../components/SiteHeader';
import '../App.css';

export const About: React.FC = () => {
  return (
    <div className="landing-page">
      <SiteHeader />

      <main className="inner-page-main">
        
        {/* Hero Section matching theme */}
        <section className="hero container page-hero">
          <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
            <span className="hero-eyebrow">Heal. Grow. Blossom.</span>
            <h1 className="hero-headline page-hero-headline">About Us</h1>
            <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
              The Smart Blossoming Foundation is established to help individuals heal emotionally, grow mentally, build confidence, and find purpose.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="featured-programs-section" style={{ paddingTop: '0' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '2.5rem' }}>Our Foundation</h2>
            <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              
              {/* Vision Card */}
              <div className="program-card program-card-heal" style={{ padding: '2.5rem 2rem' }}>
                <div className="program-badge heal-badge">VISION</div>
                <h3 className="program-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
                <p className="program-benefit" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  To create a world where individuals blossom into the best version of themselves emotionally healed, mentally empowered, confident and purposeful.
                </p>
              </div>

              {/* Mission Card */}
              <div className="program-card program-card-grow" style={{ padding: '2.5rem 2rem' }}>
                <div className="program-badge grow-badge">MISSION</div>
                <h3 className="program-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h3>
                <p className="program-benefit" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Empowering you to find your footing, trust your strength, and live your purpose.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="updates-section" style={{ backgroundColor: '#f9f9f9', padding: '4rem 0', marginTop: '2rem' }}>
          <div className="container text-center">
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Core Values</h2>
            <p className="section-description" style={{ marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--color-text-secondary)' }}>
              These five pillars guide every program we run, every partnership we build, and every interaction within our community.
            </p>
            
            <div className="programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              
              <div className="program-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ margin: '0 auto 1rem auto', display: 'flex', justifyContent: 'center' }}>
                  <Heart size={36} color="var(--color-forest)" />
                </div>
                <h3 className="program-title" style={{ fontSize: '1.25rem' }}>Empathy</h3>
              </div>

              <div className="program-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ margin: '0 auto 1rem auto', display: 'flex', justifyContent: 'center' }}>
                  <TrendingUp size={36} color="var(--color-forest)" />
                </div>
                <h3 className="program-title" style={{ fontSize: '1.25rem' }}>Growth</h3>
              </div>

              <div className="program-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ margin: '0 auto 1rem auto', display: 'flex', justifyContent: 'center' }}>
                  <Star size={36} color="var(--color-forest)" />
                </div>
                <h3 className="program-title" style={{ fontSize: '1.25rem' }}>Confidence</h3>
              </div>

              <div className="program-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ margin: '0 auto 1rem auto', display: 'flex', justifyContent: 'center' }}>
                  <Target size={36} color="var(--color-forest)" />
                </div>
                <h3 className="program-title" style={{ fontSize: '1.25rem' }}>Purpose</h3>
              </div>

              <div className="program-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ margin: '0 auto 1rem auto', display: 'flex', justifyContent: 'center' }}>
                  <Users size={36} color="var(--color-forest)" />
                </div>
                <h3 className="program-title" style={{ fontSize: '1.25rem' }}>Community</h3>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Complete Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-section" style={{ marginBottom: '1.5rem', color: '#FFFFFF' }}>
                <Flower color="#FFFFFF" size={32} />
                <span className="brand-name">Smart Blossoming Foundation</span>
              </div>
              <p className="footer-description">
                Creating safe, community-centred spaces to heal emotionally, grow mentally, build confidence and live with purpose.
              </p>
              <div className="footer-contact-details">
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> 0735231262</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> smartblossomingfoundation@gmail.com</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" title="Twitter">𝕏</a>
                <a href="#" className="social-link" title="Facebook">f</a>
                <a href="#" className="social-link" title="YouTube">▶</a>
                <a href="#" className="social-link" title="LinkedIn">in</a>
                <a href="#" className="social-link" title="Instagram">📷</a>
                <a href="#" className="social-link" title="TikTok">♪</a>
              </div>
            </div>
            
            <div className="footer-links-group">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events-programs">Programs & Events</Link></li>
                <li><a href="/#impact">Impact</a></li>
                <li><a href="/#resources">Resources</a></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h4 className="footer-heading">Governance & Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/safeguarding-policy">Safeguarding Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><a href="#">Governance Documents</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="copyright-notice">&copy; {new Date().getFullYear()} Smart Blossoming Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};