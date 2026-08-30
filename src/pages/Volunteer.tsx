import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Heart, CheckCircle, Users, Calendar, MapPin } from '../components/Icon3D';
import { Phone, Mail } from 'lucide-react';
import '../App.css';

export const Volunteer: React.FC = () => {
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
            <Link to="/volunteer" className="pill-button primary volunteer-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontWeight: 'bold' }}>
              Volunteer
            </Link>
            <Link to="/donate" className="pill-button donate donate-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Donate
            </Link>
          </div>
        </div>
      </header>

      <main style={{ paddingBottom: '6rem', minHeight: 'calc(100vh - 200px)' }}>
        <section className="hero container" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
          <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
            <span className="hero-eyebrow">Give your time & skills</span>
            <h1 className="hero-headline" style={{ fontSize: '3rem' }}>Volunteer With Us</h1>
            <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
              Join a respectful, choice-led community helping people heal, grow, and blossom. Choose a role that fits your capacity and strengths.
            </p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '4rem' }}>
          <div className="involvement-grid" style={{ maxWidth: '1000px', margin: '0 auto', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="involvement-card" style={{ border: '2px solid var(--color-sage)' }}>
              <div className="involvement-icon"><Heart size={28} color="var(--color-forest)" /></div>
              <h3>Time Commitment</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> Flexible scheduling</p>
                <p><CheckCircle size={14} /> Online or in person</p>
              </div>
            </div>
            <div className="involvement-card" style={{ border: '2px solid var(--color-sage)' }}>
              <div className="involvement-icon"><Users size={28} color="var(--color-forest)" /></div>
              <h3>Requirements</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> Background check required</p>
                <p><CheckCircle size={14} /> Mandatory training session</p>
                <p><CheckCircle size={14} /> Safeguarding agreement</p>
              </div>
            </div>
            <div className="involvement-card" style={{ border: '2px solid var(--color-sage)' }}>
              <div className="involvement-icon"><Calendar size={28} color="var(--color-forest)" /></div>
              <h3>What You Gain</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> Meaningful community impact</p>
                <p><CheckCircle size={14} /> Skills & mentorship growth</p>
                <p><CheckCircle size={14} /> Supportive team culture</p>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-programs-section" style={{ paddingTop: '0' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Volunteer Roles</h2>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-badge heal-badge">SUPPORT</div>
                <h3 className="program-title">Program & Workshop Support</h3>
                <div className="program-meta">
                  <span className="meta-chip"><Users size={14} /> Adults 18+</span>
                  <span className="meta-chip"><MapPin size={14} /> Hybrid</span>
                  <span className="meta-chip status-open">Open</span>
                </div>
                <p className="program-benefit">Help facilitate sessions, welcome participants, and create a calm, respectful environment during Heal and Grow programs.</p>
              </div>

              <div className="program-card">
                <div className="program-badge grow-badge">OUTREACH</div>
                <h3 className="program-title">Field Visits & Community Outreach</h3>
                <div className="program-meta">
                  <span className="meta-chip"><Users size={14} /> Adults 18+</span>
                  <span className="meta-chip"><MapPin size={14} /> In person</span>
                  <span className="meta-chip status-upcoming">From July 2026</span>
                </div>
                <p className="program-benefit">Join visits to schools, children’s homes, and rehab centres to extend care and encouragement into the community.</p>
              </div>

              <div className="program-card">
                <div className="program-badge blossom-badge">EVENTS</div>
                <h3 className="program-title">Events & Communications</h3>
                <div className="program-meta">
                  <span className="meta-chip"><Users size={14} /> All skills welcome</span>
                  <span className="meta-chip"><MapPin size={14} /> Hybrid</span>
                  <span className="meta-chip status-open">Open</span>
                </div>
                <p className="program-benefit">Support conferences, social content, registration desks, and guest hospitality for major community gatherings.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteer-form" className="inquiry-section" style={{ paddingTop: '4rem' }}>
          <div className="container">
            <div className="inquiry-card" style={{ maxWidth: '760px' }}>
              <h2 className="section-title text-center" style={{ marginBottom: '0.75rem', fontSize: '2rem' }}>Volunteer Application</h2>
              <p className="text-center" style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
                Tell us a little about yourself. We review applications carefully and respond within a few business days.
              </p>

              <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="vol-name">Full Name</label>
                  <input type="text" id="vol-name" className="form-control" placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="vol-email">Email</label>
                  <input type="email" id="vol-email" className="form-control" placeholder="you@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="vol-phone">Phone</label>
                  <input type="tel" id="vol-phone" className="form-control" placeholder="07XX XXX XXX" />
                </div>

                <div className="form-group">
                  <label htmlFor="vol-role">Preferred Role</label>
                  <select id="vol-role" className="form-control" defaultValue="">
                    <option value="" disabled>Select a role</option>
                    <option value="program-support">Program & Workshop Support</option>
                    <option value="outreach">Field Visits & Community Outreach</option>
                    <option value="events">Events & Communications</option>
                    <option value="other">Other / Open to guidance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="vol-availability">Availability</label>
                  <select id="vol-availability" className="form-control" defaultValue="">
                    <option value="" disabled>Select availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="vol-skills">Skills & Experience (optional)</label>
                  <textarea id="vol-skills" className="form-control" rows={4} placeholder="Share skills, interests, or relevant experience..." />
                </div>

                <div className="form-group" id="vol-location-group">
                  <span className="form-legend" id="vol-location-label">Preferred Location</span>
                  <div className="radio-group" role="radiogroup" aria-labelledby="vol-location-label">
                    <label className="radio-label"><input type="radio" name="location" value="online" /> Online</label>
                    <label className="radio-label"><input type="radio" name="location" value="in-person" /> In person</label>
                    <label className="radio-label"><input type="radio" name="location" value="hybrid" /> Hybrid</label>
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="vol-safeguarding" />
                    <span>I understand that volunteering requires a background check, mandatory training, and adherence to the Safeguarding Policy.</span>
                  </label>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="vol-privacy" />
                    <span>I consent to Smart Blossoming Foundation handling my information as outlined in the Privacy Policy to process this application.</span>
                  </label>
                </div>

                <button type="submit" className="pill-button primary full-width">
                  Submit Application
                </button>

                <div className="form-footer-note">
                  <strong>Response Time:</strong> We aim to reply within 3–5 business days.<br />
                  <strong>Safeguarding:</strong> The wellbeing of participants is our priority. See our <Link to="/safeguarding-policy" style={{ color: 'var(--color-forest)', textDecoration: 'underline' }}>Safeguarding Policy</Link>.<br />
                  <strong style={{ color: 'var(--color-forest)' }}>Disclaimer:</strong> Volunteering with SBF is not clinical or crisis work. If you or someone else needs immediate help, contact local emergency services.
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="container text-center" style={{ paddingTop: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Support in another way</h2>
          <p className="section-description" style={{ marginBottom: '2rem' }}>
            If volunteering isn’t the right fit right now, a donation still helps programs reach more people.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/donate" className="pill-button donate" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Make a Donation
            </Link>
            <Link to="/contact" className="pill-button outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
              Ask a Question
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
