import React from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import { Phone, Mail } from 'lucide-react';
import '../App.css';

export const EventsPrograms: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/sbf_logo_no_background_preview.png" alt="Smart Blossoming Foundation Logo" style={{ width: 'auto', height: '85px', objectFit: 'contain' }} />
            <span className="brand-name">Smart Blossoming Foundation</span>
          </Link>
          <nav className="nav-list">
            <Link to="/">Home</Link>
            <a href="/#impact">Impact</a>
            <a href="/#resources">Resources</a>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="header-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href="/#programs" className="pill-button outline explore-programs-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Programs
            </a>
            <Link to="/volunteer" className="pill-button primary volunteer-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Volunteer
            </Link>
            <Link to="/donate" className="pill-button donate donate-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Donate
            </Link>
          </div>
        </div>
      </header>

      <main style={{ paddingBottom: '6rem', minHeight: 'calc(100vh - 200px)' }}>
        
        {/* Simplified Hero Section */}
        <section className="hero container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
            <span className="hero-eyebrow">2026 Theme: Discovering & Empowering Growth</span>
            <h1 className="hero-headline" style={{ fontSize: '3rem' }}>Our Programs & Events</h1>
            <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
              We offer structured mentorship, career-building skills, and special growth events tailored to help you at every stage of your journey.
            </p>
          </div>
        </section>

        {/* Core Programs Section */}
        <section id="programs" className="featured-programs-section" style={{ paddingTop: '0' }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Core Mentorship Programs</h2>
            <div className="programs-grid">
              <div className="program-card program-card-heal">
                <div className="program-badge heal-badge">HEAL</div>
                <h3 className="program-title">Emotional First Aid</h3>
                <div className="program-meta">
                  <span className="meta-chip">Adults 18+</span>
                  <span className="meta-chip">Online</span>
                  <span className="meta-chip status-open">Open</span>
                  <span className="meta-chip">Monthly</span>
                </div>
                <p className="program-benefit">Learn immediate, practical tools to manage anxiety and regulate your nervous system in moments of stress.</p>
                <button className="pill-button outline full-width">Join Program</button>
              </div>

              <div className="program-card program-card-grow">
                <div className="program-badge grow-badge">GROW</div>
                <h3 className="program-title">Confidence Building Workshop</h3>
                <div className="program-meta">
                  <span className="meta-chip">Youth 14-17</span>
                  <span className="meta-chip">In person</span>
                  <span className="meta-chip status-upcoming">Upcoming</span>
                  <span className="meta-chip">Weekly</span>
                </div>
                <p className="program-benefit">Develop self-trust and communication skills to navigate social situations and academic pressures.</p>
                <button className="pill-button outline full-width">Join Program</button>
              </div>

              <div className="program-card program-card-blossom">
                <div className="program-badge blossom-badge">BLOSSOM</div>
                <h3 className="program-title">Community Leadership Program</h3>
                <div className="program-meta">
                  <span className="meta-chip">All Ages</span>
                  <span className="meta-chip">Hybrid</span>
                  <span className="meta-chip status-closed">Closed</span>
                  <span className="meta-chip">Next: Spring 2027</span>
                </div>
                <p className="program-benefit">Turn your personal growth into community impact by learning how to mentor and support others.</p>
                <button className="pill-button outline full-width">View Details</button>
              </div>
            </div>
          </div>
        </section>

        {/* Summarized Major Events Section */}
        <section className="updates-section" style={{ backgroundColor: '#f9f9f9', padding: '4rem 0', marginTop: '4rem' }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Major Upcoming Events (2026)</h2>
            <div className="updates-grid">
              <div className="update-card event-card">
                <span className="update-badge">Mental & Emotional Growth</span>
                <h3 className="update-title">Mega Conference</h3>
                <p className="update-date">June 2026</p>
                <p className="update-desc">A major mid-year gathering focused on mental and emotional breakthroughs with guest speakers and interactive workshops.</p>
                <button type="button" className="pill-button outline update-card-cta">Get Notified</button>
              </div>

              <div className="update-card event-card">
                <span className="update-badge">Community Outreach</span>
                <h3 className="update-title">Field Visits & Volunteering</h3>
                <p className="update-date">Starting July 2026</p>
                <p className="update-desc">Join us as we visit schools, children's homes, and rehab centers to extend our impact directly into the community.</p>
                <Link to="/volunteer" className="pill-button outline update-card-cta">Volunteer With Us</Link>
              </div>

              <div className="update-card event-card">
                <span className="update-badge">Celebration</span>
                <h3 className="update-title">First Anniversary (AGM)</h3>
                <p className="update-date">January 17, 2027</p>
                <p className="update-desc">Reflect on a year of empowerment and discovering growth as we hold our Annual General Meeting.</p>
                <button type="button" className="pill-button outline update-card-cta">Save the Date</button>
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
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> hello@smartblossoming.org</p>
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