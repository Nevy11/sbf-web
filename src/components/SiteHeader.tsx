import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const SiteHeader: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const sectionLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-section">
          <img
            src="/sbf_logo_no_background_preview.png"
            alt="Smart Blossoming Foundation Logo"
            className="site-logo"
          />
          <span className="brand-name">Smart Blossoming Foundation</span>
        </Link>

        <nav className="nav-list" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <a href={sectionLink('#impact')}>Impact</a>
          <a href={sectionLink('#resources')}>Resources</a>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <a href={sectionLink('#programs')} className="pill-button outline explore-programs-btn">
            Programs
          </a>
          <NavLink to="/volunteer" className="pill-button primary volunteer-btn">
            Volunteer
          </NavLink>
          <NavLink to="/donate" className="pill-button donate donate-btn">
            Donate
          </NavLink>
        </div>
      </div>
    </header>
  );
};
