import React from 'react';
import { Flower, BookOpen, Heart, Handshake, Gift, Users, HeartPulse, TrendingUp, Calendar, MapPin, Activity, CheckCircle } from 'lucide-react';
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

      {/* Quick Paths Section */}
      <section className="quick-paths-section">
        <h2 className="quick-paths-title">I want to...</h2>
        <div className="quick-paths-chips">
          <button className="path-chip"><Users size={16} /> Join a program</button>
          <button className="path-chip"><BookOpen size={16} /> Learn from resources</button>
          <button className="path-chip"><Heart size={16} /> Volunteer</button>
          <button className="path-chip"><Handshake size={16} /> Partner</button>
          <button className="path-chip"><Gift size={16} /> Support</button>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Where are you in your journey?</h2>
          <p className="section-description" style={{ marginBottom: '3rem' }}>
            Choose the path that feels most useful today. You do not need to share your full story to take a first step.
          </p>
          <div className="journey-grid">
            <div className="journey-card">
              <div className="journey-icon-wrapper"><HeartPulse size={32} color="var(--color-forest)" /></div>
              <h3>HEAL</h3>
              <p>Build emotional awareness, self-trust and steady ways to move forward.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon-wrapper"><TrendingUp size={32} color="var(--color-forest)" /></div>
              <h3>GROW</h3>
              <p>Strengthen mindset, practical skills and confidence through learning and mentorship.</p>
            </div>
            <div className="journey-card">
              <div className="journey-icon-wrapper"><Flower size={32} color="var(--color-forest)" /></div>
              <h3>BLOSSOM</h3>
              <p>Connect personal growth with purpose, contribution, leadership and community.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Programs Section */}
      <section id="programs" className="featured-programs-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Featured Programs</h2>
          <div className="programs-grid">
            {/* Card 1 */}
            <div className="program-card">
              <div className="program-badge heal-badge">HEAL</div>
              <h3 className="program-title">Emotional First Aid</h3>
              <div className="program-meta">
                <span className="meta-chip"><Users size={14} /> Adults 18+</span>
                <span className="meta-chip"><MapPin size={14} /> Online</span>
                <span className="meta-chip status-open">Open</span>
                <span className="meta-chip"><Calendar size={14} /> Next: Aug 15</span>
              </div>
              <p className="program-benefit">Learn immediate, practical tools to manage anxiety and regulate your nervous system in moments of stress.</p>
              <button className="pill-button outline full-width">View Program</button>
            </div>
            {/* Card 2 */}
            <div className="program-card">
              <div className="program-badge grow-badge">GROW</div>
              <h3 className="program-title">Confidence Building Workshop</h3>
              <div className="program-meta">
                <span className="meta-chip"><Users size={14} /> Youth 14-17</span>
                <span className="meta-chip"><MapPin size={14} /> In person</span>
                <span className="meta-chip status-upcoming">Upcoming</span>
                <span className="meta-chip"><Calendar size={14} /> Next: Sep 5</span>
              </div>
              <p className="program-benefit">Develop self-trust and communication skills to navigate social situations and academic pressures.</p>
              <button className="pill-button outline full-width">View Program</button>
            </div>
            {/* Card 3 */}
            <div className="program-card">
              <div className="program-badge blossom-badge">BLOSSOM</div>
              <h3 className="program-title">Community Leadership Program</h3>
              <div className="program-meta">
                <span className="meta-chip"><Users size={14} /> All Ages</span>
                <span className="meta-chip"><MapPin size={14} /> Hybrid</span>
                <span className="meta-chip status-closed">Closed</span>
                <span className="meta-chip"><Calendar size={14} /> Next: Spring 2027</span>
              </div>
              <p className="program-benefit">Turn your personal growth into community impact by learning how to mentor and support others.</p>
              <button className="pill-button outline full-width">View Program</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Boundaries Section */}
      <section className="trust-boundaries-section">
        <div className="container text-center">
          <div className="trust-card">
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>A respectful space with clear boundaries.</h2>
            <p className="section-description" style={{ fontSize: '1.1rem', margin: '0 auto', maxWidth: '800px', opacity: 0.9 }}>
              SBF is independent, non-partisan and non-sectarian. Participation is choice-led and personal information is handled with care. SBF programs are not emergency, diagnostic or clinical services.
            </p>
          </div>
        </div>
      </section>

      {/* Early-Stage Impact Section */}
      <section id="impact" className="impact-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Building evidence from the beginning.</h2>
            <p className="section-description" style={{ margin: '0 auto', fontSize: '1.1rem', maxWidth: '800px' }}>
              We publish verified participation, learning and feedback measures with reporting periods, definitions and limitations. Until a full annual report is available, we will share what we delivered, what participants told us and what we are improving.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">85%</div>
              <h4 className="impact-label">Reported Improved Wellbeing</h4>
              <p className="impact-period">Jan-Jun 2026 (N=120)</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">4.8<span style={{ fontSize: '1.5rem', opacity: 0.7 }}>/5</span></div>
              <h4 className="impact-label">Average Program Rating</h4>
              <p className="impact-period">Jan-Jun 2026 (N=200)</p>
            </div>
            <div className="impact-card">
              <div className="impact-number">50+</div>
              <h4 className="impact-label">Community Sessions Delivered</h4>
              <p className="impact-period">YTD 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Story Section */}
      <section className="community-story-section">
        <div className="container">
          <div className="story-card">
            <h2 className="section-title">Community Story</h2>
            <blockquote className="story-quote">
              "Finding this space allowed me to connect with others who understood my journey. The workshops provided practical tools to navigate my daily life with more confidence and clarity. It's been a truly supportive environment for personal growth."
            </blockquote>
            <div className="story-author">— Maya T. (Name changed for privacy)</div>
            <a href="#read-more" className="text-link">Read story <TrendingUp size={16} /></a>
          </div>
        </div>
      </section>

      {/* Freshness & Updates Section */}
      <section id="resources" className="updates-section">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Upcoming & Recent</h2>
          <div className="updates-grid">
            <div className="update-card event-card">
              <span className="update-badge">Upcoming Event</span>
              <h3 className="update-title">Annual Blossoming Retreat</h3>
              <p className="update-date"><Calendar size={14} /> October 12, 2026</p>
              <p className="update-desc">A full-day interactive retreat focusing on community building and resilience.</p>
              <a href="#register" className="text-link">Register Now</a>
            </div>
            <div className="update-card resource-card">
              <span className="update-badge">Recent Resource</span>
              <h3 className="update-title">Guide to Emotional Regulation</h3>
              <p className="update-date"><BookOpen size={14} /> Published: July 20, 2026</p>
              <p className="update-desc">A practical 10-page guide with everyday tools to manage stress.</p>
              <a href="#download" className="text-link">Download PDF</a>
            </div>
            <div className="update-card resource-card">
              <span className="update-badge">Recent Resource</span>
              <h3 className="update-title">Mindset Shift Worksheet</h3>
              <p className="update-date"><BookOpen size={14} /> Published: July 5, 2026</p>
              <p className="update-desc">Exercises to help identify and shift limiting beliefs.</p>
              <a href="#download" className="text-link">Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Partners Grid Section */}
      <section className="partners-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Partners</h2>
          <p className="section-description" style={{ marginBottom: '3rem', margin: '0 auto', maxWidth: '800px' }}>
            We collaborate with verified organizations aligned with our mission to provide extended support and resources.
          </p>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo-placeholder">Mindful Hub</div>
              <p className="partner-relation">Wellness Resource Partner</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo-placeholder">Community Connect</div>
              <p className="partner-relation">Local Venue Partner</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo-placeholder">Growth Institute</div>
              <p className="partner-relation">Curriculum Collaborator</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo-placeholder">Tech for Good</div>
              <p className="partner-relation">Technology Sponsor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="get-involved-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get Involved</h2>
          <p className="section-description" style={{ marginBottom: '3rem', margin: '0 auto', maxWidth: '800px' }}>
            Join our community in making a meaningful impact. Choose the path that fits your capacity and skills.
          </p>
          <div className="involvement-grid">
            <div className="involvement-card">
              <div className="involvement-icon"><Heart size={32} color="var(--color-forest)" /></div>
              <h3>Volunteer</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> 2-4 hours per month</p>
                <p><CheckCircle size={14} /> Background check required</p>
                <p><CheckCircle size={14} /> Mandatory training session</p>
              </div>
              <button className="pill-button outline">Apply to Volunteer</button>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon"><Handshake size={32} color="var(--color-forest)" /></div>
              <h3>Partner</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> Aligned mission & values</p>
                <p><CheckCircle size={14} /> Signed MOU</p>
                <p><CheckCircle size={14} /> Annual review</p>
              </div>
              <button className="pill-button outline">Become a Partner</button>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon"><Gift size={32} color="var(--color-forest)" /></div>
              <h3>Support</h3>
              <div className="involvement-expectations">
                <p><CheckCircle size={14} /> One-time or recurring</p>
                <p><CheckCircle size={14} /> Tax-deductible</p>
                <p><CheckCircle size={14} /> Transparent reporting</p>
              </div>
              <button className="pill-button outline">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Block */}
      <section className="final-cta-section text-center">
        <div className="container">
          <h2 className="section-title" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Take the next step that fits you.</h2>
          <p className="section-description" style={{ color: 'rgba(255,255,255,0.9)', margin: '0 auto 3rem', maxWidth: '600px' }}>
            Explore an upcoming program, ask a private question, volunteer your skills or discuss a partnership.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="#programs" className="pill-button primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', color: 'var(--color-forest)' }}>
              Explore Programs
            </a>
            <a href="#inquiry" className="pill-button outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderColor: '#FFFFFF', color: '#FFFFFF' }}>
              Send Inquiry
            </a>
          </div>
        </div>
      </section>

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
                <label htmlFor="contact">Contact: Email or Phone</label>
                <input type="text" id="contact" className="form-control" placeholder="Your email or phone number" />
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

      {/* Complete Footer */}
      <footer id="contact" className="site-footer">
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
                <p><strong>Official Contact:</strong></p>
                <p>Email: hello@smartblossoming.org</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>PO Box 123, Growth City, ST 12345</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">IN</a>
                <a href="#" className="social-link" aria-label="Twitter">TW</a>
                <a href="#" className="social-link" aria-label="Facebook">FB</a>
                <a href="#" className="social-link" aria-label="Instagram">IG</a>
              </div>
            </div>
            
            <div className="footer-links-group">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#impact">Impact</a></li>
                <li><a href="#get-involved">Get Involved</a></li>
                <li><a href="#inquiry">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-group">
              <h4 className="footer-heading">Governance & Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Safeguarding Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
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
