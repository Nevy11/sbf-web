import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sprout,
  Users,
  BookOpen,
  HandHeart,
  Gift,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { SiteHeader } from '../components/SiteHeader';
import '../App.css';

const HERO_SLIDES: Array<{
  image: string;
  headline: string;
  subheadline: string;
}> = [
  {
    image: '/a_person_blossoming_without_logo.jpeg',
    headline: 'Your story can blossom into purpose.',
    subheadline:
      'Smart Blossoming Foundation creates safe, community-centred spaces to heal emotionally, grow mentally, build confidence and live with purpose.',
  },
  {
    image: '/sbf_smile.jpeg',
    headline: 'Every Young Person Deserves Space to Become.',
    subheadline:
      'More than just sessions, we create experiences that spark self-discovery, build confidence, shift perspectives, and inspire action. Every session is a step toward becoming more intentional, empowered, and ready for what\u2019s next.',
  },
  {
    image: '/transformation.jpg',
    headline: 'Where healing meets purpose.',
    subheadline:
      'Find a community that believes in your potential, supports your growth, and walks with you as you discover your voice, confidence, and purpose.',
  },
  {
    image: '/hero-image.jpg',
    headline: 'Creating Moments That Transform Lives.',
    subheadline:
      'Smart Blossoming Foundation brings young people together through meaningful sessions, conversations, and mentorship that inspire confidence, clarity, self-discovery, and purposeful action.',
  },
  {
    image: '/knowledge.jpg',
    headline: 'Together, We Create Greater Impact.',
    subheadline:
      'At Smart Blossoming Foundation, we believe meaningful change happens when we work together. We partner with individuals, organizations, communities, and institutions to create transformative experiences that equip young people with the confidence, knowledge, connections, and opportunities to shape their future.',
  },
];

const SLIDE_INTERVAL_MS = 5000;

export const LandingPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const goToPrevSlide = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(goToNextSlide, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [activeSlide, goToNextSlide, isPaused]);

  return (
    <div className="landing-page">
      <SiteHeader />

      {/* Hero Carousel */}
      <section
        className="hero-carousel"
        aria-roledescription="carousel"
        aria-label="Foundation highlights"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div
          className="hero-carousel-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <article
              key={slide.headline}
              className={`hero-carousel-slide${index === activeSlide ? ' is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={index !== activeSlide}
            >
              <div className="hero-carousel-content container">
                <h1 className="hero-carousel-headline">{slide.headline}</h1>
                <p className="hero-carousel-subheadline">{slide.subheadline}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-arrow-prev"
          aria-label="Previous slide"
          onClick={goToPrevSlide}
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-arrow-next"
          aria-label="Next slide"
          onClick={goToNextSlide}
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>

        <div className="hero-carousel-controls">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.headline}
              type="button"
              className={`hero-carousel-dot${index === activeSlide ? ' is-active' : ''}`}
              aria-label={`Go to slide ${index + 1}: ${slide.headline}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Welcome Bridge — mission & pathways */}
      <section className="welcome-bridge-section" aria-labelledby="welcome-bridge-heading">
        <div className="welcome-bridge-bg" aria-hidden="true" />
        <div className="container">
          <div className="welcome-bridge-header text-center">
            <span className="welcome-bridge-eyebrow">Smart Blossoming Foundation</span>
            <h2 id="welcome-bridge-heading" className="welcome-bridge-title">
              A community where young people heal, grow&nbsp;and blossom.
            </h2>
            <p className="welcome-bridge-lead">
              We create safe, choice-led spaces for emotional wellbeing, personal growth and purposeful
              living — walking alongside every young person with compassion, mentorship and community.
            </p>
          </div>

          <div className="welcome-pillars">
            <article className="welcome-pillar welcome-pillar-heal">
              <div className="welcome-pillar-icon" aria-hidden="true">
                <Heart size={28} strokeWidth={2} />
              </div>
              <h3>Safe &amp; Respectful</h3>
              <p>Warm, non-judgmental spaces where you can share at your own pace — no pressure, no labels.</p>
            </article>
            <article className="welcome-pillar welcome-pillar-grow">
              <div className="welcome-pillar-icon" aria-hidden="true">
                <Sprout size={28} strokeWidth={2} />
              </div>
              <h3>Guided Growth</h3>
              <p>Practical tools, mentorship and programs that build confidence, skills and emotional resilience.</p>
            </article>
            <article className="welcome-pillar welcome-pillar-blossom">
              <div className="welcome-pillar-icon" aria-hidden="true">
                <Users size={28} strokeWidth={2} />
              </div>
              <h3>Community-Centred</h3>
              <p>Connect with peers and mentors who understand your journey and celebrate every step forward.</p>
            </article>
          </div>

          <div className="welcome-actions">
            <p className="welcome-actions-label">What would you like to do today?</p>
            <div className="welcome-action-grid">
              <a href="#programs" className="welcome-action-card">
                <span className="welcome-action-icon welcome-action-icon-programs" aria-hidden="true">
                  <Sprout size={22} strokeWidth={2.25} />
                </span>
                <span className="welcome-action-text">
                  <strong>Join a program</strong>
                  <span>Explore Heal, Grow &amp; Blossom pathways</span>
                </span>
                <ArrowRight size={18} className="welcome-action-arrow" aria-hidden="true" />
              </a>
              <a href="#resources" className="welcome-action-card">
                <span className="welcome-action-icon welcome-action-icon-resources" aria-hidden="true">
                  <BookOpen size={22} strokeWidth={2.25} />
                </span>
                <span className="welcome-action-text">
                  <strong>Learn from resources</strong>
                  <span>Guides, worksheets &amp; tools</span>
                </span>
                <ArrowRight size={18} className="welcome-action-arrow" aria-hidden="true" />
              </a>
              <Link to="/volunteer" className="welcome-action-card welcome-action-card-highlight">
                <span className="welcome-action-icon welcome-action-icon-volunteer" aria-hidden="true">
                  <HandHeart size={22} strokeWidth={2.25} />
                </span>
                <span className="welcome-action-text">
                  <strong>Volunteer</strong>
                  <span>Give your time &amp; skills</span>
                </span>
                <ArrowRight size={18} className="welcome-action-arrow" aria-hidden="true" />
              </Link>
              <a href="#get-involved" className="welcome-action-card">
                <span className="welcome-action-icon welcome-action-icon-partner" aria-hidden="true">
                  <Handshake size={22} strokeWidth={2.25} />
                </span>
                <span className="welcome-action-text">
                  <strong>Partner with us</strong>
                  <span>Align missions &amp; collaborate</span>
                </span>
                <ArrowRight size={18} className="welcome-action-arrow" aria-hidden="true" />
              </a>
              <Link to="/donate" className="welcome-action-card welcome-action-card-donate">
                <span className="welcome-action-icon welcome-action-icon-donate" aria-hidden="true">
                  <Gift size={22} strokeWidth={2.25} />
                </span>
                <span className="welcome-action-text">
                  <strong>Donate</strong>
                  <span>Fuel the mission</span>
                </span>
                <ArrowRight size={18} className="welcome-action-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
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
            <div className="journey-card journey-card-heal">
              <span className="journey-step">01</span>
              <h3>HEAL</h3>
              <p>Build emotional awareness, self-trust and steady ways to move forward.</p>
            </div>
            <div className="journey-card journey-card-grow">
              <span className="journey-step">02</span>
              <h3>GROW</h3>
              <p>Strengthen mindset, practical skills and confidence through learning and mentorship.</p>
            </div>
            <div className="journey-card journey-card-blossom">
              <span className="journey-step">03</span>
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
            <div className="program-card program-card-heal">
              <div className="program-badge heal-badge">HEAL</div>
              <h3 className="program-title">Emotional First Aid</h3>
              <div className="program-meta">
                <span className="meta-chip">Adults 18+</span>
                <span className="meta-chip">Online</span>
                <span className="meta-chip status-open">Open</span>
                <span className="meta-chip">Next: Aug 15</span>
              </div>
              <p className="program-benefit">Learn immediate, practical tools to manage anxiety and regulate your nervous system in moments of stress.</p>
              <button className="pill-button outline full-width">View Program</button>
            </div>
            <div className="program-card program-card-grow">
              <div className="program-badge grow-badge">GROW</div>
              <h3 className="program-title">Confidence Building Workshop</h3>
              <div className="program-meta">
                <span className="meta-chip">Youth 14-17</span>
                <span className="meta-chip">In person</span>
                <span className="meta-chip status-upcoming">Upcoming</span>
                <span className="meta-chip">Next: Sep 5</span>
              </div>
              <p className="program-benefit">Develop self-trust and communication skills to navigate social situations and academic pressures.</p>
              <button className="pill-button outline full-width">View Program</button>
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
            <a href="#read-more" className="text-link">Read story</a>
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
              <p className="update-date">October 12, 2026</p>
              <p className="update-desc">A full-day interactive retreat focusing on community building and resilience.</p>
              <a href="#register" className="text-link">Register Now</a>
            </div>
            <div className="update-card resource-card">
              <span className="update-badge">Recent Resource</span>
              <h3 className="update-title">Guide to Emotional Regulation</h3>
              <p className="update-date">Published: July 20, 2026</p>
              <p className="update-desc">A practical 10-page guide with everyday tools to manage stress.</p>
              <a href="#download" className="text-link">Download PDF</a>
            </div>
            <div className="update-card resource-card">
              <span className="update-badge">Recent Resource</span>
              <h3 className="update-title">Mindset Shift Worksheet</h3>
              <p className="update-date">Published: July 5, 2026</p>
              <p className="update-desc">Exercises to help identify and shift limiting beliefs.</p>
              <a href="#download" className="text-link">Download PDF</a>
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
            <div className="involvement-card involvement-card-volunteer">
              <span className="involvement-tag">Give your time</span>
              <h3>Volunteer</h3>
              <ul className="involvement-expectations">
                <li>2-4 hours per month</li>
                <li>Background check required</li>
                <li>Mandatory training session</li>
              </ul>
              <Link to="/volunteer" className="pill-button primary involvement-cta">Apply to Volunteer</Link>
            </div>
            <div className="involvement-card involvement-card-partner">
              <span className="involvement-tag">Work together</span>
              <h3>Partner</h3>
              <ul className="involvement-expectations">
                <li>Aligned mission & values</li>
                <li>Signed MOU</li>
                <li>Annual review</li>
              </ul>
              <Link to="/contact" className="pill-button outline involvement-cta">Become a Partner</Link>
            </div>
            <div className="involvement-card involvement-card-donate">
              <span className="involvement-tag">Fuel the mission</span>
              <h3>Donate</h3>
              <ul className="involvement-expectations">
                <li>One-time or recurring</li>
                <li>Tax-deductible</li>
                <li>Transparent reporting</li>
              </ul>
              <Link to="/donate" className="pill-button donate involvement-cta">Make a Donation</Link>
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
                <li><a href="#impact">Impact</a></li>
                <li><a href="#resources">Resources</a></li>
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
