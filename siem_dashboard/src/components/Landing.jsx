import React, { useState, useEffect } from 'react';
import { 
  Shield, Cloud, Zap, CheckCircle, ArrowRight, Menu, X, 
  Star, Users, TrendingUp, Lock, Eye, Bell, Server, 
  Activity, Award, Globe, Sparkles 
} from 'lucide-react';
import './Landing.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      
      {/* Animated Background Elements */}
      <div className="background-container">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <div className="logo-icon rotating">
                <Shield className="icon" />
              </div>
              <span className="logo-text">CloudSecure</span>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu desktop-menu">
              {['Features', 'Pricing', 'About', 'Contact'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary full-width">Get Started</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            
            {/* Left Column - Text Content */}
            <div className="hero-content fade-in-up">
              <div className="hero-badge">
                <span className="badge-emoji">🚀</span>
                <span>Trusted by 10,000+ companies</span>
              </div>

              <h1 className="hero-title">
                Protect Your
                <span className="gradient-text"> Digital Assets</span>
              </h1>

              <p className="hero-description">
                Enterprise-grade cloud security that detects threats in real-time, 
                protects your data, and ensures compliance across all platforms.
              </p>

              <div className="hero-buttons">
                <button className="btn-primary btn-large">
                  Start Free Trial
                  <ArrowRight className="btn-icon" />
                </button>
                <button className="btn-secondary btn-large">
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="trust-indicators">
                <div className="trust-item">
                  <Star className="trust-icon star-icon" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="trust-item">
                  <Users className="trust-icon" />
                  <span>10K+ Users</span>
                </div>
                <div className="trust-item">
                  <Award className="trust-icon" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="hero-visual fade-in-right">
              <div className="dashboard-card">
                {/* Dashboard Header */}
                <div className="dashboard-header">
                  <h3 className="dashboard-title">
                    <Activity className="dashboard-icon" />
                    Security Dashboard
                  </h3>
                  <span className="status-badge pulse">
                    <span className="status-dot"></span>
                    All Systems Secure
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  {[
                    { label: 'Threats Blocked', value: '2,847', icon: <Shield className="stat-icon" /> },
                    { label: 'Active Users', value: '12,493', icon: <Users className="stat-icon" /> },
                    { label: 'Uptime', value: '99.9%', icon: <TrendingUp className="stat-icon" /> },
                    { label: 'Response Time', value: '12ms', icon: <Zap className="stat-icon" /> }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="stat-card"
                      style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                    >
                      <div className="stat-header">
                        {stat.icon}
                        <span className="stat-label">{stat.label}</span>
                      </div>
                      <p className="stat-value">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Activity Log */}
                <div className="activity-log">
                  {[
                    { status: 'success', msg: 'Malware blocked', time: '2m ago' },
                    { status: 'warning', msg: 'Login from new device', time: '5m ago' },
                    { status: 'success', msg: 'Backup completed', time: '10m ago' }
                  ].map((log, idx) => (
                    <div 
                      key={idx} 
                      className="activity-item slide-in-left"
                      style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                    >
                      <span className={`activity-dot ${log.status}`}></span>
                      <div className="activity-content">
                        <p className="activity-msg">{log.msg}</p>
                        <p className="activity-time">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Element */}
              <div className="floating-badge">
                <Lock className="floating-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <p className="social-proof-text">Trusted by leading companies worldwide</p>
          <div className="companies-grid fade-in">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, idx) => (
              <div 
                key={idx} 
                className="company-logo"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Everything You Need to
              <span className="gradient-text"> Stay Protected</span>
            </h2>
            <p className="section-description">
              Comprehensive security features designed for modern businesses
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: <Shield className="feature-icon" />,
                title: 'Advanced Threat Detection',
                description: 'AI-powered system identifies and blocks threats in real-time before they can harm your infrastructure'
              },
              {
                icon: <Cloud className="feature-icon" />,
                title: 'Multi-Cloud Support',
                description: 'Seamlessly protect AWS, Azure, GCP, and hybrid environments from a single dashboard'
              },
              {
                icon: <Zap className="feature-icon" />,
                title: 'Lightning Fast Response',
                description: 'Automated responses neutralize threats in milliseconds with intelligent security policies'
              },
              {
                icon: <Eye className="feature-icon" />,
                title: '24/7 Monitoring',
                description: 'Continuous surveillance of your systems with instant alerts for suspicious activities'
              },
              {
                icon: <Lock className="feature-icon" />,
                title: 'Zero Trust Security',
                description: 'Verify every access attempt with continuous authentication and authorization protocols'
              },
              {
                icon: <CheckCircle className="feature-icon" />,
                title: 'Compliance Ready',
                description: 'Meet SOC 2, ISO 27001, GDPR, and other regulatory requirements effortlessly'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="feature-card scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '<10ms', label: 'Response Time' },
              { value: '500M+', label: 'Events Daily' },
              { value: '10K+', label: 'Happy Customers' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="stat-item fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="stat-number gradient-text">{stat.value}</p>
                <p className="stat-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">Join thousands of satisfied clients</p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CTO, TechCorp',
                content: 'CloudSecure has transformed our security posture. The real-time threat detection saved us from multiple attacks.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Security Lead, StartupXYZ',
                content: 'Best investment we made this year. The automated responses and compliance features are game-changing.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                role: 'DevOps Manager, Enterprise Inc',
                content: 'Incredibly easy to set up and manage. Our team loves the intuitive dashboard and instant alerts.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="testimonial-card scale-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-filled" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card fade-in-up">
            <div className="cta-content">
              <Sparkles className="cta-icon" />
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
                Start your 14-day free trial. No credit card required.
              </p>
              <div className="cta-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="cta-input"
                />
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Shield className="footer-icon" />
                <span className="footer-logo-text">CloudSecure</span>
              </div>
              <p className="footer-tagline">
                Enterprise cloud security for the modern era
              </p>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Contact'] }
            ].map((section, idx) => (
              <div key={idx} className="footer-column">
                <h4 className="footer-heading">{section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 CloudSecure. All rights reserved.
            </p>
            <div className="footer-legal">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="#" className="footer-legal-link">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
