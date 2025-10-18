import React, { useState } from 'react';
import './Landing.css';
import { ArrowRight, Shield, Zap, TrendingUp, BarChart3, Lock, AlertCircle, Cloud } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <AlertCircle className="feature-icon-svg" />,
      title: "Real-time Anomaly Detection",
      description: "Machine learning algorithms continuously monitor logs to detect suspicious activities and potential threats instantly."
    },
    {
      icon: <TrendingUp className="feature-icon-svg" />,
      title: "Predictive Analytics",
      description: "Forecast system failures and security breaches before they occur using advanced trend analysis and historical data."
    },
    {
      icon: <BarChart3 className="feature-icon-svg" />,
      title: "Multi-Source Correlation",
      description: "Intelligently correlate events from firewalls, IDS/IPS, authentication systems, and applications to identify complex attack patterns."
    },
    {
      icon: <Zap className="feature-icon-svg" />,
      title: "Adaptive Learning",
      description: "Unsupervised learning algorithms adapt to new threats without requiring predefined rules or manual configuration."
    },
    {
      icon: <Cloud className="feature-icon-svg" />,
      title: "Scalable Cloud Architecture",
      description: "Enterprise-grade cloud deployment with auto-scaling capabilities to handle massive log volumes effortlessly."
    },
    {
      icon: <Lock className="feature-icon-svg" />,
      title: "Reduced False Positives",
      description: "Intelligent pattern recognition significantly reduces alert fatigue while maintaining detection accuracy above 98%."
    }
  ];

  const stats = [
    { number: "98.7%", label: "Detection Accuracy" },
    { number: "Real-time", label: "Log Processing" },
    { number: "5 Phases", label: "Development" },
    { number: "12 Weeks", label: "SIEM Integration" }
  ];

  const problems = [
    "Static rule-based detection",
    "High false positive rates",
    "Limited scalability",
    "Reactive approach only",
    "Complex manual configuration"
  ];

  const solutions = [
    "Adaptive ML algorithms",
    "99% accuracy with minimal false alerts",
    "Enterprise-scale cloud deployment",
    "Predictive threat prevention",
    "Fully automated and intelligent"
  ];

  return (
    <div className="container">
      {/* Navigation */}
      {/* <nav>
        <div className="nav-content">
          <div className="logo">
            <Shield className="logo-icon" />
            <span>AI-SIEM</span>
          </div>
          <button className="nav-btn">Get Started</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          Intelligent Security Monitoring
        </div>
        
        <h1>Enterprise-Grade Log Analysis with AI</h1>
        
        <p>
          Transform massive log volumes into actionable security insights. Our AI-powered SIEM system detects threats in real-time, predicts system failures, and adapts to emerging attacks without manual configuration.
        </p>

        <div className="button-group">
          <button className="btn-primary">
            Request Demo
            <ArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-title">
          <h2>Powerful Features</h2>
          <p className="section-subtitle">Everything you need for comprehensive security monitoring</p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <h2>Why AI-SIEM?</h2>
        
        <div className="problem-grid">
          <div className="problem-column bad">
            <h3>Traditional Systems Struggle With:</h3>
            <ul className="problem-list bad">
              {problems.map((item, i) => (
                <li key={i}>
                  <span className="icon">✕</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="problem-column good">
            <h3>Our Solution Provides:</h3>
            <ul className="problem-list good">
              {solutions.map((item, i) => (
                <li key={i}>
                  <span className="icon">✓</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2>5-Phase Development Plan</h2>
        
        <div className="timeline-grid">
          {[
            { phase: "1", title: "Data Collection", weeks: "Weeks 1-3" },
            { phase: "2", title: "ML Models", weeks: "Weeks 4-8" },
            { phase: "3", title: "SIEM Core", weeks: "Weeks 9-12" },
            { phase: "4", title: "Predictive", weeks: "Weeks 13-15" },
            { phase: "5", title: "Testing", weeks: "Weeks 16-18" }
          ].map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-number">{item.phase}</div>
              <h3>{item.title}</h3>
              <p className="timeline-weeks">{item.weeks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Transform Your Security Monitoring?</h2>
          <p>Join leading enterprises using AI-powered threat detection</p>
          
          <div className="email-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 AI-SIEM. Intelligent Security Monitoring for Modern Enterprises.</p>
      </footer>
    </div>
  );
}