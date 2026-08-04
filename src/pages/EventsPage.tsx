import React, { useState } from 'react';
import { Calendar, MapPin, Users, BookOpen, HeartPulse, Filter, Flower } from 'lucide-react';
import '../App.css';

interface SBFEvent {
  id: string;
  title: string;
  monthlyTheme: string;
  eventType: 'Mentorship' | 'Career Skills' | 'Engage' | 'Special Growth';
  date: string;
  location: string;
  targetAudience: string;
  description: string;
  status: 'upcoming' | 'open' | 'closed';
  badgeClass: string; 
}

const MOCK_EVENTS: SBFEvent[] = [
  {
    id: 'aug-2',
    title: 'Mentorship Session',
    monthlyTheme: 'August: Delay gratification', 
    eventType: 'Mentorship',
    date: 'Aug 12, 2026', 
    location: 'Online',
    targetAudience: 'All Members',
    description: 'A guided session focused on understanding and practicing delayed gratification for long-term emotional and mental growth.',
    status: 'upcoming',
    badgeClass: 'heal-badge' 
  },
  {
    id: 'aug-3',
    title: 'Career Building: LinkedIn Skills', 
    monthlyTheme: 'August: Delay gratification', 
    eventType: 'Career Skills',
    date: 'Aug 19, 2026', 
    location: 'Online',
    targetAudience: 'Youth & Adults',
    description: 'Learn how to position your professional story online and build capacity through strategic LinkedIn networking.',
    status: 'upcoming',
    badgeClass: 'grow-badge'
  },
  {
    id: 'sept-2',
    title: 'Mentorship Session',
    monthlyTheme: 'September: Character and choices', 
    eventType: 'Mentorship',
    date: 'Sep 9, 2026', 
    location: 'Hybrid',
    targetAudience: 'All Members',
    description: 'Deep dive into character development and how our daily choices shape our path from pain to purpose.',
    status: 'upcoming',
    badgeClass: 'heal-badge'
  },
  {
    id: 'sept-3',
    title: 'Career Building: Public Speaking', 
    monthlyTheme: 'September: Character and choices', 
    eventType: 'Career Skills',
    date: 'Sep 16, 2026', 
    location: 'In Person',
    targetAudience: 'Youth & Adults',
    description: 'Build confidence and find your voice in this interactive public speaking workshop.',
    status: 'upcoming',
    badgeClass: 'blossom-badge'
  },
  {
    id: 'oct-2',
    title: 'Mentorship Session',
    monthlyTheme: 'October: Leadership', 
    eventType: 'Mentorship',
    date: 'Oct 14, 2026', 
    location: 'Online',
    targetAudience: 'All Members',
    description: 'Exploring what it means to be a leader in your community and taking ownership of your personal growth.',
    status: 'upcoming',
    badgeClass: 'heal-badge'
  }
];

export const EventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredEvents = activeFilter === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(event => event.eventType === activeFilter || event.monthlyTheme.includes(activeFilter));

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-section">
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <Flower color="var(--color-forest)" size={32} />
              <span className="brand-name">Smart Blossoming Foundation</span>
            </a>
          </div>
          <nav className="nav-list">
            <a href="/">Home</a>
            <a href="/#programs">Programs</a>
            <a href="/events">Events</a>
            <a href="/#impact">Impact</a>
            <a href="/#resources">Resources</a>
            <a href="/#get-involved">Get Involved</a>
            <a href="/#contact">Contact</a>
          </nav>
          <a href="/#programs" className="pill-button primary explore-programs-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Explore Programs
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container" style={{ paddingBottom: '2rem', paddingTop: '8rem' }}>
        <div className="hero-content text-center" style={{ margin: '0 auto', alignItems: 'center' }}>
          <span className="hero-eyebrow">2026 Theme: DISCOVERING AND EMPOWERING GROWTH</span>
          <h1 className="hero-headline" style={{ fontSize: '3rem' }}>Calendar of Activities</h1>
          <p className="hero-subheadline" style={{ maxWidth: '700px', textAlign: 'center' }}>
            Join our structured monthly programs designed to help you heal, grow, and blossom. 
            Each month carries a unique theme to guide our journey together.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="quick-paths-section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="quick-paths-chips" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className={`path-chip ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
              style={activeFilter === 'All' ? { backgroundColor: 'var(--color-forest)', color: 'white' } : {}}
            >
              <Filter size={16} /> All Events
            </button>
            <button 
              className={`path-chip ${activeFilter === 'August' ? 'active' : ''}`}
              onClick={() => setActiveFilter('August')}
              style={activeFilter === 'August' ? { backgroundColor: 'var(--color-forest)', color: 'white' } : {}}
            >
              <Calendar size={16} /> August (Delay Gratification)
            </button>
            <button 
              className={`path-chip ${activeFilter === 'September' ? 'active' : ''}`}
              onClick={() => setActiveFilter('September')}
              style={activeFilter === 'September' ? { backgroundColor: 'var(--color-forest)', color: 'white' } : {}}
            >
              <Calendar size={16} /> September (Character)
            </button>
            <button 
              className={`path-chip ${activeFilter === 'Mentorship' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Mentorship')}
              style={activeFilter === 'Mentorship' ? { backgroundColor: 'var(--color-forest)', color: 'white' } : {}}
            >
              <HeartPulse size={16} /> Mentorships
            </button>
            <button 
              className={`path-chip ${activeFilter === 'Career Skills' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Career Skills')}
              style={activeFilter === 'Career Skills' ? { backgroundColor: 'var(--color-forest)', color: 'white' } : {}}
            >
              <BookOpen size={16} /> Career & Skills
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section id="events" className="featured-programs-section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="programs-grid">
            {filteredEvents.map((event) => (
              <div className="program-card" key={event.id}>
                <div className={`program-badge ${event.badgeClass}`}>
                  {event.eventType.toUpperCase()}
                </div>
                
                <h3 className="program-title" style={{ marginTop: '2.5rem' }}>{event.title}</h3>
                
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--color-forest)', 
                  fontWeight: 600,
                  marginBottom: '1rem' 
                }}>
                  {event.monthlyTheme}
                </p>

                <div className="program-meta">
                  <span className="meta-chip"><Calendar size={14} /> {event.date}</span>
                  <span className="meta-chip"><MapPin size={14} /> {event.location}</span>
                  <span className="meta-chip"><Users size={14} /> {event.targetAudience}</span>
                  <span className={`meta-chip status-${event.status}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                
                <p className="program-benefit">{event.description}</p>
                
                <button className="pill-button outline full-width">
                  Register / View Details
                </button>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center" style={{ padding: '4rem 0', color: '#666' }}>
              <p>No events found for this filter. Please try selecting another category.</p>
            </div>
          )}
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
            </div>
            
            <div className="footer-links-group">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#programs">Programs</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/#impact">Impact</a></li>
                <li><a href="/#get-involved">Get Involved</a></li>
                <li><a href="/#contact">Contact</a></li>
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