import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import { Phone, Mail } from 'lucide-react';
import '../App.css';

const AMOUNTS = [500, 1000, 2500, 5000];

export const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/sbf_logo_no_background_preview.png" alt="Smart Blossoming Foundation Logo" style={{ width: 'auto', height: '85px', objectFit: 'contain' }} />
            <span className="brand-name">Smart Blossoming Foundation</span>
          </Link>
          <nav className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/events-programs">Programs & Events</Link>
            <a href="/#impact">Impact</a>
            <a href="/#resources">Resources</a>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="header-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Link to="/volunteer" className="pill-button primary volunteer-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Volunteer
            </Link>
            <Link to="/donate" className="pill-button donate donate-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontWeight: 'bold' }}>
              Donate
            </Link>
          </div>
        </div>
      </header>

      <main style={{ paddingBottom: '6rem', minHeight: 'calc(100vh - 200px)' }}>
        <section className="hero container" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
          <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
            <span className="hero-eyebrow">Support our mission</span>
            <h1 className="hero-headline" style={{ fontSize: '3rem' }}>Make a Donation</h1>
            <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
              Your gift helps create safe, community-centred spaces where people can heal emotionally, grow mentally, and live with purpose.
            </p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '4rem' }}>
          <div className="programs-grid programs-grid-narrow">
            <div className="program-card program-card-heal">
              <span className="involvement-tag">Where it goes</span>
              <h3 className="program-title">Fund Healing</h3>
              <p className="program-benefit">Support emotional first-aid workshops and safe spaces for adults and youth.</p>
            </div>
            <div className="program-card program-card-grow">
              <span className="involvement-tag">Build skills</span>
              <h3 className="program-title">Grow Confidence</h3>
              <p className="program-benefit">Enable mentorship, skills training, and confidence-building programs.</p>
            </div>
            <div className="program-card program-card-blossom">
              <span className="involvement-tag">Reach further</span>
              <h3 className="program-title">Community Impact</h3>
              <p className="program-benefit">Help field visits, school outreach, and community leadership initiatives.</p>
            </div>
          </div>
        </section>

        <section id="donate-form" className="inquiry-section" style={{ paddingTop: '4rem' }}>
          <div className="container">
            <div className="inquiry-card inquiry-card-narrow">
              <h2 className="section-title text-center" style={{ marginBottom: '0.75rem', fontSize: '2rem' }}>Choose your gift</h2>
              <p className="text-center" style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
                One-time or recurring. Transparent reporting. Every contribution matters.
              </p>

              <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label id="frequency-label">Frequency</label>
                  <div className="amount-chip-group" role="radiogroup" aria-labelledby="frequency-label">
                    <button
                      type="button"
                      className={`amount-chip ${frequency === 'one-time' ? 'selected' : ''}`}
                      onClick={() => setFrequency('one-time')}
                      aria-pressed={frequency === 'one-time'}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      className={`amount-chip ${frequency === 'monthly' ? 'selected' : ''}`}
                      onClick={() => setFrequency('monthly')}
                      aria-pressed={frequency === 'monthly'}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label id="amount-label">Amount (KES)</label>
                  <div className="amount-chip-group" role="group" aria-labelledby="amount-label">
                    {AMOUNTS.map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`amount-chip ${amount === value ? 'selected' : ''}`}
                        onClick={() => setAmount(value)}
                        aria-pressed={amount === value}
                      >
                        {value.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`amount-chip ${amount === 'custom' ? 'selected' : ''}`}
                      onClick={() => setAmount('custom')}
                      aria-pressed={amount === 'custom'}
                    >
                      Custom
                    </button>
                  </div>
                  {amount === 'custom' && (
                    <input
                      type="number"
                      min={1}
                      className="form-control"
                      style={{ marginTop: '0.75rem' }}
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      aria-label="Custom donation amount in KES"
                    />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="donor-name">Full Name</label>
                  <input type="text" id="donor-name" className="form-control" placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="donor-email">Email</label>
                  <input type="email" id="donor-email" className="form-control" placeholder="you@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="donor-phone">Phone (optional)</label>
                  <input type="tel" id="donor-phone" className="form-control" placeholder="07XX XXX XXX" />
                </div>

                <div className="form-group">
                  <label htmlFor="donor-note">Message (optional)</label>
                  <textarea id="donor-note" className="form-control" rows={3} placeholder="Dedication, note, or how you heard about us..." />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="donate-consent" />
                    <span>I consent to Smart Blossoming Foundation processing my donation details as outlined in the Privacy Policy.</span>
                  </label>
                </div>

                <button type="submit" className="pill-button donate full-width">
                  Continue to Donate
                </button>

                <ul className="involvement-expectations benefit-list">
                  <li>One-time or recurring gifts welcome</li>
                  <li>Tax-deductible where applicable</li>
                  <li>Transparent impact reporting</li>
                </ul>

                <div className="form-footer-note">
                  <strong>Payment:</strong> Online payment processing will be confirmed securely after you submit this form.<br />
                  <strong>Privacy:</strong> Donor information is stored securely and never sold.<br />
                  <strong style={{ color: 'var(--color-forest)' }}>Questions?</strong> Email hello@smartblossoming.org or call 0735231262.
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="container text-center" style={{ paddingTop: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Prefer another way to help?</h2>
          <p className="section-description" style={{ marginBottom: '2rem' }}>
            Share your time and skills through volunteering, or explore our programs and events.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/volunteer" className="pill-button primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Volunteer With Us
            </Link>
            <Link to="/events-programs" className="pill-button outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
              View Programs
            </Link>
          </div>
        </section>
      </main>

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
