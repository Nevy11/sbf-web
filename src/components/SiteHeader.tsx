import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionLink = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header${menuOpen ? ' menu-open' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-section">
          <img
            src="/sbf_logo_no_background_preview.png"
            alt="Smart Blossoming Foundation Logo"
            className="site-logo"
          />
          <span className="brand-name">Smart Blossoming Foundation</span>
        </Link>

        <button
          type="button"
          className="header-menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>

        <div className={`header-panel${menuOpen ? ' is-open' : ''}`}>
          <nav className="nav-list" aria-label="Main navigation">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <a href={sectionLink('#impact')} onClick={() => setMenuOpen(false)}>
              Impact
            </a>
            <a href={sectionLink('#resources')} onClick={() => setMenuOpen(false)}>
              Resources
            </a>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <a
              href={sectionLink('#programs')}
              className="pill-button outline explore-programs-btn"
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </a>
            <NavLink
              to="/volunteer"
              className="pill-button primary volunteer-btn"
              onClick={() => setMenuOpen(false)}
            >
              Volunteer
            </NavLink>
            <NavLink
              to="/donate"
              className="pill-button donate donate-btn"
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
