import React from 'react';
import './CloudSec.css';

const CloudSecurityPage = () => {
  return (
    <div className="cloud-security-container">
      
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Cloud Security in 2025</h1>
          <p className="hero-subtitle">
            Protecting Your Digital Assets in the Cloud Era
          </p>
          <p className="hero-description">
            As organizations transition to cloud environments, securing distributed infrastructures 
            against sophisticated threats is more critical than ever.
          </p>
        </div>
      </header>

      <main className="main-content">
       
        <section className="intro-section">
          <h2 className="section-title">What is Cloud Security?</h2>
          <p className="section-text">
            Cloud security encompasses a comprehensive set of policies, technologies, and controls 
            deployed to protect data, applications, and infrastructure in cloud computing environments. 
            It ensures confidentiality, integrity, and availability of resources while defending 
            against evolving cyber threats.
          </p>
        </section>

        <section className="principles-section">
          <h2 className="section-title">Core Security Principles</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="card-icon">🔐</div>
              <h3 className="card-title">Data Encryption</h3>
              <p className="card-text">
                Encrypt data both at rest and in transit using SSL/TLS protocols and centralized 
                key management to prevent unauthorized access.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="card-icon">👤</div>
              <h3 className="card-title">Identity & Access Management</h3>
              <p className="card-text">
                Implement IAM frameworks with multi-factor authentication, role-based access control, 
                and least privilege principles to control resource access.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="card-icon">🛡️</div>
              <h3 className="card-title">Zero Trust Architecture</h3>
              <p className="card-text">
                Adopt "never trust, always verify" principles to continuously validate access 
                based on user identity and device health, not network location.
              </p>
            </div>
            
            <div className="principle-card">
              <div className="card-icon">🤖</div>
              <h3 className="card-title">AI-Driven Detection</h3>
              <p className="card-text">
                Leverage AI for real-time threat analysis, behavioral monitoring, and automated 
                response to identify abnormal patterns and mitigate attacks faster.
              </p>
            </div>
          </div>
        </section>

    
        <section className="threats-section">
          <h2 className="section-title">Emerging Threats in 2025</h2>
          <div className="threats-list">
            <div className="threat-item">
              <h3 className="threat-title">Supply Chain Attacks</h3>
              <p className="threat-text">
                Attackers target vulnerabilities in third-party integrations and APIs, requiring 
                robust detection capabilities to neutralize threats before escalation.
              </p>
            </div>
            
            <div className="threat-item">
              <h3 className="threat-title">Misconfiguration Exploits</h3>
              <p className="threat-text">
                Cloud misconfigurations remain a leading breach cause, emphasizing the need for 
                continuous compliance validation and automated security assessments.
              </p>
            </div>
            
            <div className="threat-item">
              <h3 className="threat-title">Credential Theft</h3>
              <p className="threat-text">
                Evolving tactics including phishing, malware, and social engineering demand 
                proactive defense strategies and enhanced monitoring.
              </p>
            </div>
            
            <div className="threat-item">
              <h3 className="threat-title">Insider Threats</h3>
              <p className="threat-text">
                Inadequate IAM monitoring increases insider threat risks, making zero-trust 
                architectures essential for mitigation.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-section">
          <h2 className="section-title">Essential Security Solutions</h2>
          <div className="solutions-grid">
            <div className="solution-box">
              <h3 className="solution-title">CSPM</h3>
              <p className="solution-description">
                Cloud Security Posture Management tools monitor configurations, identify risks, 
                and provide automated compliance checks to maintain secure environments.
              </p>
            </div>
            
            <div className="solution-box">
              <h3 className="solution-title">SIEM</h3>
              <p className="solution-description">
                Security Information and Event Management solutions collect and analyze security 
                data to detect unusual behavior and provide real-time threat alerts.
              </p>
            </div>
            
            <div className="solution-box">
              <h3 className="solution-title">SASE</h3>
              <p className="solution-description">
                Secure Access Service Edge combines data protection, security, and identity 
                management in cloud-based platforms for comprehensive protection.
              </p>
            </div>
          </div>
        </section>

       
        <section className="practices-section">
          <h2 className="section-title">Security Best Practices</h2>
          <div className="practices-container">
            <ul className="practices-list">
              <li className="practice-item">
                <span className="practice-number">1</span>
                <span className="practice-text">
                  Implement end-to-end encryption for all sensitive data
                </span>
              </li>
              <li className="practice-item">
                <span className="practice-number">2</span>
                <span className="practice-text">
                  Enable multi-factor authentication across all accounts
                </span>
              </li>
              <li className="practice-item">
                <span className="practice-number">3</span>
                <span className="practice-text">
                  Conduct regular security audits and vulnerability assessments
                </span>
              </li>
              <li className="practice-item">
                <span className="practice-number">4</span>
                <span className="practice-text">
                  Maintain continuous monitoring and automated threat detection
                </span>
              </li>
              <li className="practice-item">
                <span className="practice-number">5</span>
                <span className="practice-text">
                  Apply least privilege access principles organization-wide
                </span>
              </li>
              <li className="practice-item">
                <span className="practice-number">6</span>
                <span className="practice-text">
                  Implement automated security validation and compliance checks
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="stats-section">
          <h2 className="section-title">Cloud Security Landscape</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">70%</div>
              <div className="stat-label">of enterprises will use industry cloud platforms by 2027</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">63%</div>
              <div className="stat-label">of security professionals believe AI enhances security</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">55%</div>
              <div className="stat-label">of organizations implemented generative AI for cloud security</div>
            </div>
          </div>
        </section>

        
      </main>

      
    </div>
  );
};

export default CloudSecurityPage;
