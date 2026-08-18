import React from 'react';
import { Flower } from '../components/Icon3D';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import '../App.css';

export const Contact: React.FC = () => {
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
            <Link to="/events-programs">Programs & Events</Link> {/* <-- Added Programs & Events link */}
            <a href="/#impact">Impact</a>
            <a href="/#resources">Resources</a>
            <Link to="/contact" style={{ fontWeight: 'bold', color: 'var(--color-forest)' }}>Contact</Link> {/* <-- Highlighted active page */}
          </nav>
          <div className="header-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Link to="/events-programs" className="pill-button outline explore-programs-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Programs
            </Link> {/* <-- Updated to route to the new page */}
            <a href="/#get-involved" className="pill-button primary volunteer-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Volunteer
            </a>
            <a href="/#get-involved" className="pill-button donate donate-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Donate
            </a>
          </div>
        </div>
      </header>

      <main style={{ padding: '6rem 0', minHeight: 'calc(100vh - 200px)' }}>
        {/* Safe Inquiry Form Section */}
        <section id="inquiry" className="inquiry-section">
          <div className="container">
            <div className="inquiry-card">
              <h2 className="section-title text-center" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Safe Inquiry Form</h2>
              <p className="text-center" style={{ marginBottom: '3rem', opacity: 0.8 }}>
                Send us a secure message. We handle your information with care and respect.
              </p>
              <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="purpose">Purpose of Inquiry</label>
                  <select id="purpose" className="form-control" defaultValue="">
                    <option value="" disabled>Select a purpose</option>
                    <option value="programs">Programs</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="general">General</option>
                    <option value="safeguarding">Safeguarding Concern</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name or Preferred Name</label>
                  <input type="text" id="name" className="form-control" placeholder="How should we address you?" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-input">Contact: Email or Phone</label>
                  <input type="text" id="contact-input" className="form-control" placeholder="Your email or phone number" />
                </div>
                <div className="form-group">
                  <label id="response-method-label">Preferred Response Method</label>
                  <div className="radio-group" role="radiogroup" aria-labelledby="response-method-label">
                    <label className="radio-label"><input type="radio" name="responseMethod" value="email" /> Email</label>
                    <label className="radio-label"><input type="radio" name="responseMethod" value="phone" /> Phone</label>
                    <label className="radio-label"><input type="radio" name="responseMethod" value="no-response" /> No response needed</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (OPTIONAL)</label>
                  <textarea id="message" className="form-control" rows={4} placeholder="Share as much or as little as you'd like..."></textarea>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="privacy-consent" />
                    <span>I consent to Smart Blossoming Foundation handling my information as outlined in the Privacy Policy to process this inquiry.</span>
                  </label>
                </div>
                <button type="submit" className="pill-button primary full-width">Send Secure Inquiry</button>
                
                <div className="form-footer-note">
                  <strong>Response Time:</strong> We aim to reply within 2-3 business days.<br/>
                  <strong>Privacy Statement:</strong> Your information is stored securely and never shared with third parties without explicit consent.<br/>
                  <strong style={{ color: 'var(--color-forest)' }}>Disclaimer:</strong> This form is not monitored 24/7. It is not an emergency, crisis response, or clinical service. If you need immediate help, please contact your local emergency services.
                </div>
              </form>
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
                <li><Link to="/events-programs">Programs & Events</Link></li> {/* <-- Added Programs & Events link */}
                <li><a href="/#impact">Impact</a></li>
                <li><a href="/#resources">Resources</a></li>
                <li><a href="/#get-involved">Get Involved</a></li>
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