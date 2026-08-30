import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flower } from '../components/Icon3D';
import { Phone, Mail } from 'lucide-react';
import '../App.css';

const AMOUNTS = [500, 1000, 2500, 5000] as const;

const IMPACT_BY_AMOUNT: Record<number, string> = {
  500: 'Funds workshop materials for one emotional wellness session.',
  1000: 'Sponsors one young person through a confidence-building workshop.',
  2500: 'Supports a small-group mentoring circle for one month.',
  5000: 'Helps deliver a full community outreach visit to schools.',
};

const IMPACT_STATS = [
  { value: '85%', label: 'Reported improved wellbeing', period: 'Jan–Jun 2026' },
  { value: '50+', label: 'Community sessions delivered', period: 'YTD 2026' },
  { value: '4.8/5', label: 'Average program rating', period: 'Participant feedback' },
  { value: '100%', label: 'Mission-led spending', period: 'Programs & outreach' },
];

const IMPACT_PILLARS = [
  {
    tag: 'Heal',
    title: 'Fund Emotional Safety',
    description: 'Your gift opens doors to first-aid workshops, safe spaces, and guided support for adults and youth navigating stress and uncertainty.',
    accent: 'heal',
  },
  {
    tag: 'Grow',
    title: 'Invest in Confidence',
    description: 'Help young people build self-trust, practical skills, and the resilience to shape their own futures through mentorship and learning.',
    accent: 'grow',
  },
  {
    tag: 'Blossom',
    title: 'Scale Community Impact',
    description: 'Power field visits, school outreach, and leadership programs that turn personal growth into lasting community contribution.',
    accent: 'blossom',
  },
];

function getSelectedAmount(amount: number | 'custom', customAmount: string): number | null {
  if (amount === 'custom') {
    const parsed = Number(customAmount);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }
  return amount;
}

function getImpactMessage(amount: number | 'custom', customAmount: string): string {
  if (amount !== 'custom') {
    return IMPACT_BY_AMOUNT[amount];
  }

  const parsed = Number(customAmount);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 'Every gift — large or small — helps us reach more young people with care, choice and dignity.';
  }
  if (parsed < 1000) return IMPACT_BY_AMOUNT[500];
  if (parsed < 2500) return IMPACT_BY_AMOUNT[1000];
  if (parsed < 5000) return IMPACT_BY_AMOUNT[2500];
  return IMPACT_BY_AMOUNT[5000];
}

export const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const selectedAmount = getSelectedAmount(amount, customAmount);
  const impactMessage = useMemo(() => getImpactMessage(amount, customAmount), [amount, customAmount]);

  const donateCtaLabel = selectedAmount
    ? `Give KES ${selectedAmount.toLocaleString()}${frequency === 'monthly' ? ' monthly' : ''}`
    : 'Continue to Donate';

  return (
    <div className="landing-page donate-page">
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

      <main className="donate-main">
        <section className="donate-hero">
          <div className="donate-hero-overlay" />
          <div className="container donate-hero-content">
            <span className="donate-hero-eyebrow">Invest in human potential</span>
            <h1 className="donate-hero-headline">Your gift helps a young person become who they are meant to be.</h1>
            <p className="donate-hero-subheadline">
              Smart Blossoming Foundation creates safe, transformative spaces where young people heal emotionally,
              grow with confidence, and step into purpose. When you give, you are not just funding programs —
              you are investing in futures.
            </p>
            <div className="donate-hero-actions">
              <a href="#donate-form" className="pill-button donate donate-hero-cta">
                Make a Gift Today
              </a>
              <a href="#impact-tiers" className="pill-button outline donate-hero-cta-outline">
                See Your Impact
              </a>
            </div>
            <p className="donate-hero-trust">Transparent reporting · Tax-deductible where applicable · Every shilling accounted for</p>
          </div>
        </section>

        <section className="donate-stats-strip">
          <div className="container donate-stats-grid">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="donate-stat">
                <div className="donate-stat-value">{stat.value}</div>
                <div className="donate-stat-label">{stat.label}</div>
                <div className="donate-stat-period">{stat.period}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="impact-tiers" className="donate-tiers-section">
          <div className="container">
            <div className="donate-section-header text-center">
              <span className="donate-section-eyebrow">Your gift in action</span>
              <h2 className="section-title">See exactly what your generosity makes possible</h2>
              <p className="section-description" style={{ margin: '1rem auto 0' }}>
                Clear, measurable outcomes — so you know your investment is creating real change in real lives.
              </p>
            </div>
            <div className="donate-tiers-grid">
              {AMOUNTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`donate-tier-card${amount === value ? ' is-selected' : ''}`}
                  onClick={() => setAmount(value)}
                >
                  <span className="donate-tier-amount">KES {value.toLocaleString()}</span>
                  <p className="donate-tier-impact">{IMPACT_BY_AMOUNT[value]}</p>
                  <span className="donate-tier-cta">Select this gift</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="donate-pillars-section">
          <div className="container">
            <div className="donate-section-header text-center">
              <span className="donate-section-eyebrow">Where your investment goes</span>
              <h2 className="section-title">Three pillars. One transformative mission.</h2>
            </div>
            <div className="programs-grid programs-grid-narrow">
              {IMPACT_PILLARS.map((pillar) => (
                <div key={pillar.title} className={`program-card program-card-${pillar.accent} donate-pillar-card`}>
                  <span className="involvement-tag">{pillar.tag}</span>
                  <h3 className="program-title">{pillar.title}</h3>
                  <p className="program-benefit">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="donate-story-section">
          <div className="container">
            <div className="donate-story-card">
              <span className="donate-section-eyebrow">Why donors give</span>
              <blockquote className="donate-story-quote">
                "I give because I have seen what happens when a young person finally has a space to be heard.
                Smart Blossoming Foundation does not just run programs — it builds people. That is an investment
                I am proud to stand behind."
              </blockquote>
              <p className="donate-story-author">— Community Partner & Recurring Donor</p>
            </div>
          </div>
        </section>

        <section className="donate-trust-section">
          <div className="container">
            <div className="donate-trust-grid">
              <div className="donate-trust-card">
                <h3>Accountability you can trust</h3>
                <p>We publish participation, learning and feedback measures with reporting periods, definitions and limitations — so donors see what was delivered and what we are improving.</p>
              </div>
              <div className="donate-trust-card">
                <h3>Governance-first approach</h3>
                <p>SBF is independent, non-partisan and non-sectarian. Safeguarding, privacy and clear boundaries guide every program and every partnership.</p>
              </div>
              <div className="donate-trust-card">
                <h3>Partnership-ready</h3>
                <p>Foundations, corporates and individual investors can discuss structured giving, sponsorship and co-funded outreach. <Link to="/contact">Talk to our team</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="donate-form" className="donate-form-section">
          <div className="container">
            <div className="donate-form-layout">
              <div className="donate-form-story">
                <span className="donate-section-eyebrow">Complete your gift</span>
                <h2 className="section-title">Give with confidence</h2>
                <p className="donate-form-lead">
                  Choose a one-time or monthly gift. We handle your information with care and send transparent
                  updates on how your support is making a difference.
                </p>

                <div className="donate-impact-preview">
                  <span className="donate-impact-preview-label">Your impact</span>
                  <p className="donate-impact-preview-text">{impactMessage}</p>
                </div>

                <ul className="involvement-expectations donate-form-benefits">
                  <li>Secure payment processing</li>
                  <li>One-time or recurring gifts welcome</li>
                  <li>Tax-deductible where applicable</li>
                  <li>Transparent impact reporting</li>
                </ul>
              </div>

              <div className="inquiry-card donate-form-card">
                <h3 className="donate-form-card-title">Your donation</h3>

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
                    <div className="amount-chip-group donate-amount-chips" role="group" aria-labelledby="amount-label">
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
                      <span>I consent to Smart Blossoming Foundation processing my donation details as outlined in the <Link to="/privacy-policy">Privacy Policy</Link>.</span>
                    </label>
                  </div>

                  <button type="submit" className="pill-button donate full-width donate-submit-btn">
                    {donateCtaLabel}
                  </button>

                  <div className="form-footer-note">
                    <strong>Payment:</strong> Online payment processing will be confirmed securely after you submit.<br />
                    <strong>Questions?</strong> Email hello@smartblossoming.org or call 0735231262.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="donate-alt-section">
          <div className="container text-center">
            <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Prefer another way to help?</h2>
            <p className="section-description" style={{ marginBottom: '2rem' }}>
              Share your time through volunteering, or explore programs and partnership opportunities.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/volunteer" className="pill-button primary" style={{ display: 'inline-flex', alignItems: 'center' }}>
                Volunteer With Us
              </Link>
              <Link to="/events-programs" className="pill-button outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
                View Programs
              </Link>
            </div>
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
