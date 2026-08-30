import React from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import { Phone, Mail } from 'lucide-react';
import { SiteHeader } from '../components/SiteHeader';
import '../App.css';

export const Volunteer: React.FC = () => {
  return (
    <div className="landing-page">
      <SiteHeader />

      <main className="inner-page-main">
        <section className="hero container page-hero" style={{ paddingBottom: '3rem' }}>
          <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
            <span className="hero-eyebrow">Give your time & skills</span>
            <h1 className="hero-headline page-hero-headline">Volunteer With Us</h1>
            <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
              Join a respectful, choice-led community helping people heal, grow, and blossom. Choose a role that fits your capacity and strengths.
            </p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '4rem' }}>
          <div className="involvement-grid involvement-grid-narrow">
            <div className="involvement-card involvement-card-volunteer">
              <span className="involvement-tag">Your schedule</span>
              <h3>Time Commitment</h3>
              <ul className="involvement-expectations">
                <li>Flexible scheduling</li>
                <li>Online or in person</li>
              </ul>
            </div>
            <div className="involvement-card involvement-card-partner">
              <span className="involvement-tag">What we need</span>
              <h3>Requirements</h3>
              <ul className="involvement-expectations">
                <li>Background check required</li>
                <li>Mandatory training session</li>
                <li>Safeguarding agreement</li>
              </ul>
            </div>
            <div className="involvement-card involvement-card-donate">
              <span className="involvement-tag">Your reward</span>
              <h3>What You Gain</h3>
              <ul className="involvement-expectations">
                <li>Meaningful community impact</li>
                <li>Skills & mentorship growth</li>
                <li>Supportive team culture</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="featured-programs-section" style={{ paddingTop: '0' }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Volunteer Roles</h2>
            <div className="programs-grid">
              <div className="program-card program-card-heal">
                <div className="program-badge heal-badge">SUPPORT</div>
                <h3 className="program-title">Program & Workshop Support</h3>
                <div className="program-meta">
                  <span className="meta-chip">Adults 18+</span>
                  <span className="meta-chip">Hybrid</span>
                  <span className="meta-chip status-open">Open</span>
                </div>
                <p className="program-benefit">Help facilitate sessions, welcome participants, and create a calm, respectful environment during Heal and Grow programs.</p>
              </div>

              <div className="program-card program-card-grow">
                <div className="program-badge grow-badge">OUTREACH</div>
                <h3 className="program-title">Field Visits & Community Outreach</h3>
                <div className="program-meta">
                  <span className="meta-chip">Adults 18+</span>
                  <span className="meta-chip">In person</span>
                  <span className="meta-chip status-upcoming">From July 2026</span>
                </div>
                <p className="program-benefit">Join visits to schools, children’s homes, and rehab centres to extend care and encouragement into the community.</p>
              </div>

              <div className="program-card program-card-blossom">
                <div className="program-badge blossom-badge">EVENTS</div>
                <h3 className="program-title">Events & Communications</h3>
                <div className="program-meta">
                  <span className="meta-chip">All skills welcome</span>
                  <span className="meta-chip">Hybrid</span>
                  <span className="meta-chip status-open">Open</span>
                </div>
                <p className="program-benefit">Support conferences, social content, registration desks, and guest hospitality for major community gatherings.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteer-form" className="inquiry-section" style={{ paddingTop: '4rem' }}>
          <div className="container">
            <div className="inquiry-card inquiry-card-narrow">
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
