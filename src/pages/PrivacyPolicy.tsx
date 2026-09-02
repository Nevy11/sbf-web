
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../App.css';

export function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-page-card">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 style={{ color: 'var(--color-forest)', fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--color-sage)', fontSize: '0.9rem', marginBottom: '2rem' }}>Effective Date: January 2026</p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            Welcome to the Smart Blossoming Foundation (SBF). Your privacy is of the utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website, programs, and services. Our foundation is built on principles of psychological safety, respect, and emotional healing, and our approach to data reflects these core values.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            We may collect personal information that you provide to us directly when you:
          </p>
          <ul style={{ lineHeight: 1.6, color: 'var(--color-text)', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Create an account or register for our programs (Heal, Grow, Blossom).</li>
            <li>Submit an inquiry through our contact form.</li>
            <li>Apply to volunteer or become a partner.</li>
            <li>Make a donation to support our cause.</li>
          </ul>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)', marginTop: '0.5rem' }}>
            This information may include your name, email address, phone number, and any other details you choose to share with us.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            We use your personal data to:
          </p>
          <ul style={{ lineHeight: 1.6, color: 'var(--color-text)', marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Provide and personalize your experience within our platform.</li>
            <li>Respond to your questions and communicate about foundation activities.</li>
            <li>Ensure the safety and integrity of our community.</li>
            <li>Process donations and maintain necessary financial records in accordance with our financial standards.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Data Protection & Confidentiality</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            We implement robust security measures to safeguard your personal information. According to our Code of Conduct and foundational principles, all individuals associated with SBF are expected to uphold strict safety, boundaries, and confidentiality. Your data will never be sold or shared with third parties for marketing purposes.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>5. Non-Discrimination & Inclusion</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            The Smart Blossoming Foundation strictly prohibits discrimination based on race, color, religion, tribe, national origin, age, sex, gender identity, sexual orientation, disability, or marital status. We treat all personal data equitably and use it only to further our mission of emotional healing, mental growth, and purpose discovery.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>6. Your Rights</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            You have the right to access, correct, or request the deletion of your personal data at any time. If you have any concerns about how your information is handled, or if you wish to exercise your rights, please reach out to us using the contact details provided below.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--color-forest)', fontSize: '1.5rem', marginBottom: '1rem' }}>7. Contact Us</h2>
          <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:<br /><br />
            <strong>Email:</strong> smartblossomingfoundation@gmail.com<br />
            <strong>Phone:</strong> 0735231262
          </p>
        </section>
      </div>
    </div>
  );
}
