import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import {
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
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
const INITIAL_THEMES_VISIBLE = 3;

const THEMATIC_CARDS = [
  {
    title: 'Identity & Self-Discovery',
    quote:
      'I spent so much time trying to fit in that I forgot to ask who I really was. Then I began to listen to my own story, discover what mattered to me, and finally understand the person I was becoming.',
    image: '/a_person_blossoming_without_logo.jpeg',
  },
  {
    title: 'Confidence & Self-Belief',
    quote:
      'I used to stay quiet, afraid that my voice wasn\u2019t important. One conversation changed something in me\u2014I realized I didn\u2019t need to become someone else to be confident. I simply needed to believe in myself.',
    image: '/sbf_smile.jpeg',
  },
  {
    title: 'Emotional Wellbeing',
    quote:
      'I thought being strong meant hiding what I felt. Then I found a space where I could speak, listen, and be understood. I learned that acknowledging my emotions was not weakness\u2014it was strength.',
    image: '/transformation.jpg',
  },
  {
    title: 'Purpose & Direction',
    quote:
      'I knew I wanted more, but I didn\u2019t know where to begin. Through reflection and meaningful conversations, I started connecting my strengths with my dreams\u2014and my next step became clearer.',
    image: '/hero-image.jpg',
  },
  {
    title: 'Leadership & Personal Agency',
    quote:
      'I always thought leaders were people with titles. Then I realized leadership begins with me\u2014with the choices I make, the responsibility I take, and the difference I choose to create.',
    image: '/knowledge.jpg',
  },
  {
    title: 'Relationships & Communication',
    quote:
      'I thought being heard was all that mattered. Then I learned to listen, understand, and communicate with intention. The conversations changed\u2014and so did my relationships.',
    image: '/a_person_blossoming.jpeg',
  },
  {
    title: 'Life Skills & Future Readiness',
    quote:
      'The future once felt like something I had to figure out alone. Then I began learning the skills, making better choices, and preparing for opportunities I couldn\u2019t yet see.',
    image: '/hero-image.jpg',
  },
  {
    title: 'Community & Social Impact',
    quote:
      'I came looking for a change in myself. I left wondering how I could create change for someone else. Because when we discover our strength, we can use it to lift others too.',
    image: '/sbf_smile.jpeg',
  },
] as const;

const CASE_STORIES = [
  {
    number: '01',
    category: 'Session Story',
    title: 'The Conversation That Changed How I Saw Myself',
    description:
      'A young participant shares how one meaningful conversation helped them recognize their strengths, find their voice, and see new possibilities for their future.',
  },
  {
    number: '02',
    category: 'Community Story',
    title: 'When Young People Come Together, Possibilities Grow',
    description:
      'A community session brought young people together to share experiences, challenge perspectives, and discover that they were not alone in navigating life\u2019s uncertainties.',
  },
  {
    number: '03',
    category: 'Transformation Story',
    title: 'From \u201cI Don\u2019t Know\u201d to \u201cI Can\u201d',
    description:
      'Sometimes transformation begins with a simple conversation. Discover how a session created a moment of clarity and gave one young person the confidence to take their next step.',
  },
  {
    number: '04',
    category: 'Partnership Story',
    title: 'Together, We Create Greater Impact',
    description:
      'Discover how partnerships bring together people, ideas, resources, and opportunities to create meaningful experiences and lasting impact for young people.',
  },
] as const;

const INITIAL_VOICES_VISIBLE = 3;

const VOICE_CARDS = [
  {
    name: 'Esther Kimani',
    role: 'Community Developer | Social Worker | Mentor',
    quote: 'More than a speaker, she became a mother to us.',
    description:
      'At the launch of Smart Blossoming Foundation, Esther Kimani came through with more than words. She shared lessons on leadership, togetherness, and the power of standing with one another. Her presence reminded us that building a foundation is not just about having a vision, but about learning to walk together, lead with purpose, and support one another along the journey.',
    highlight: 'A Voice That Shaped Our Beginning',
    image: '/hero-image.jpg',
  },
  {
    name: 'Sylvia Wanja',
    role: 'Multimedia Journalist | Mentor',
    quote: 'She didn\u2019t just speak to us; she gave us a foundation to stand on.',
    description:
      'Through her mentorship session on mental and emotional growth, Sylvia Wanja inspired many of us to look within, understand ourselves, and approach life with greater confidence and intention. Her words created a meaningful foundation for personal growth and reminded us of the power of having someone who believes in your journey.',
    image: '/sbf_smile.jpeg',
  },
  {
    name: 'Tonny Kyule',
    role: 'Writer | Communication & PR Specialist',
    quote: 'Young, determined, and ready to make a difference.',
    description:
      'Tonny brought a fresh and practical perspective to Smart Blossoming Foundation through his Career Building & Skills session. With his experience and determination, he challenged young people to take their skills seriously, present themselves with confidence, and prepare intentionally for the opportunities ahead.',
    impact:
      'He reminded us that your age does not limit your ambition\u2014and preparation can turn potential into opportunity.',
    image: '/knowledge.jpg',
  },
] as const;

export const LandingPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllThemes, setShowAllThemes] = useState(false);
  const [showAllVoices, setShowAllVoices] = useState(false);

  const visibleThemes = showAllThemes
    ? THEMATIC_CARDS
    : THEMATIC_CARDS.slice(0, INITIAL_THEMES_VISIBLE);

  const visibleVoices = showAllVoices
    ? VOICE_CARDS
    : VOICE_CARDS.slice(0, INITIAL_VOICES_VISIBLE);

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

      {/* Thematic Stories Section */}
      <section className="thematic-section" aria-labelledby="thematic-heading">
        <div className="thematic-bg" aria-hidden="true" />
        <div className="container">
          <div className="thematic-header text-center">
            <span className="thematic-eyebrow">Stories of growth</span>
            <h2 id="thematic-heading" className="thematic-title">
              Every journey has a theme
            </h2>
            <p className="thematic-lead">
              Real reflections from the kinds of growth we nurture — identity, confidence, purpose,
              and the courage to create change.
            </p>
          </div>

          <div className="thematic-grid">
            {visibleThemes.map((theme) => (
              <article key={theme.title} className="thematic-card">
                <div className="thematic-card-image-wrap">
                  <img
                    src={theme.image}
                    alt=""
                    className="thematic-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="thematic-card-body">
                  <h3 className="thematic-card-title">{theme.title}</h3>
                  <blockquote className="thematic-card-quote">
                    <p>&ldquo;{theme.quote}&rdquo;</p>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          {THEMATIC_CARDS.length > INITIAL_THEMES_VISIBLE && (
            <div className="thematic-actions text-center">
              <button
                type="button"
                className="pill-button outline thematic-toggle-btn"
                onClick={() => setShowAllThemes((expanded) => !expanded)}
                aria-expanded={showAllThemes}
              >
                {showAllThemes ? 'Show less' : 'Read more'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Stories Section */}
      <section id="programs" className="case-stories-section" aria-labelledby="case-stories-heading">
        <div className="container">
          <div className="case-stories-header text-center">
            <span className="case-stories-eyebrow">Case Stories</span>
            <h2 id="case-stories-heading" className="case-stories-title">
              Stories of Becoming
            </h2>
            <p className="case-stories-lead">
              Every story has a moment that can change everything.
            </p>
          </div>

          <div className="case-stories-grid">
            {CASE_STORIES.map((story) => (
              <article key={story.number} className="case-story-card">
                <span className="case-story-label">
                  {story.number} &mdash; {story.category}
                </span>
                <h3 className="case-story-title">{story.title}</h3>
                <p className="case-story-description">{story.description}</p>
              </article>
            ))}
          </div>

          <p className="case-stories-tagline text-center">
            Your story is not where you end; it is where your becoming begins.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="trust-boundaries-section about-us-section">
        <div className="container text-center">
          <div className="trust-card about-us-card">
            <h2 className="about-us-title">About Us</h2>
            <blockquote className="about-us-quote">
              &ldquo;Your story is not where you end; it is where your becoming begins.&rdquo;
            </blockquote>
            <p className="section-description about-us-description">
              We create meaningful spaces where people come together, discover their potential, build
              confidence, and turn personal experiences into purposeful action.
            </p>
            <p className="about-us-tagline">Your story matters. Your future matters.</p>
            <button type="button" className="pill-button primary about-us-btn">
              About us
            </button>
          </div>
        </div>
      </section>

      {/* Voices That Inspire Section */}
      <section id="impact" className="thematic-section voices-section" aria-labelledby="voices-heading">
        <div className="thematic-bg" aria-hidden="true" />
        <div className="container">
          <div className="thematic-header text-center">
            <span className="thematic-eyebrow">Voices that inspire</span>
            <h2 id="voices-heading" className="thematic-title">
              Voices That Inspire
            </h2>
            <p className="thematic-lead">
              Every meaningful conversation is shaped by voices that bring new perspectives, wisdom,
              and experience.
            </p>
          </div>

          <div className="thematic-grid">
            {visibleVoices.map((voice) => (
              <article key={voice.name} className="thematic-card">
                <div className="thematic-card-image-wrap">
                  <img
                    src={voice.image}
                    alt=""
                    className="thematic-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="thematic-card-body">
                  <h3 className="thematic-card-title">{voice.name}</h3>
                  <p className="voices-card-role">{voice.role}</p>
                  <blockquote className="thematic-card-quote">
                    <p>&ldquo;{voice.quote}&rdquo;</p>
                  </blockquote>
                  <p className="voices-card-description">{voice.description}</p>
                  {'highlight' in voice && voice.highlight && (
                    <p className="voices-card-highlight">&ldquo;{voice.highlight}&rdquo;</p>
                  )}
                  {'impact' in voice && voice.impact && (
                    <p className="voices-card-impact">
                      <strong>His impact:</strong> {voice.impact}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {VOICE_CARDS.length > INITIAL_VOICES_VISIBLE && (
            <div className="thematic-actions text-center">
              <button
                type="button"
                className="pill-button outline thematic-toggle-btn"
                onClick={() => setShowAllVoices((expanded) => !expanded)}
                aria-expanded={showAllVoices}
              >
                {showAllVoices ? 'Show less' : 'Read more'}
              </button>
            </div>
          )}
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
