import React from 'react';
import { ShieldCheck, Monitor, Lock, Chrome } from 'lucide-react';
import { Button } from '../../components/common/Button';
import '../../css/LoginForm.css';

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  return (
    <div className="login-page-container">
      {/* Left Side: Editorial Content */}
      <div className="login-editorial">
        <div className="editorial-header">
          <h1 className="editorial-title">
            Precision in <br />
            <span className="editorial-highlight">Wealth Management</span>
          </h1>
          <p className="editorial-subtitle">
            Access your institutional-grade portfolio dashboard. Meticulously organized data for the discerning investor.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Monitor size={24} />
            </div>
            <div className="feature-label">Real-time Data</div>
            <div className="feature-desc">Live market execution</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Lock size={24} />
            </div>
            <div className="feature-label">Tier-1 Security</div>
            <div className="feature-desc">Encrypted vault access</div>
          </div>
        </div>

        <div className="status-banner">
          <div className="banner-overlay"></div>
          <img
            alt="Abstract digital network"
            className="banner-image"
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            referrerPolicy="no-referrer"
          />
          <div className="banner-status">
            <span className="status-tag">Network Status</span>
            <div className="status-indicator">
              <div className="indicator-dot"></div>
              <span className="indicator-text">Encrypted Node Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form Card */}
      <div className="login-form-wrapper">
        <div className="login-card">
          <div className="form-header">
            <h2 className="form-title">Welcome Back</h2>
            <p className="form-subtitle">Please enter your credentials to access your terminal.</p>
          </div>

          <form className="login-form" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="input-group">
              <label className="input-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="login-input"
                id="email"
                placeholder="investor@wealthsense.com"
                type="email"
                required
              />
            </div>

            <div className="input-group">
              <div className="input-label-row">
                <label className="input-label" htmlFor="password">
                  Password
                </label>
                <a className="forgot-password" href="#">
                  Forgot Password?
                </a>
              </div>
              <input
                className="login-input"
                id="password"
                placeholder="••••••••••••"
                type="password"
                required
              />
            </div>

            <Button className="w-full py-4 tracking-tight" type="submit">
              Access Terminal
            </Button>
          </form>

          <div className="form-divider">
            <div className="divider-line"></div>
            <span className="divider-text">Or Continue With</span>
            <div className="divider-line"></div>
          </div>

          <div className="social-auth-grid">
            <button className="social-button">
              <Chrome size={16} />
              Google
            </button>
            <button className="social-button">
              <Lock size={16} />
              Apple
            </button>
          </div>

          <div className="signup-prompt">
            <span className="signup-text">New to WealthSense?</span>
            <a className="signup-link" href="#">
              Create Account
            </a>
          </div>
        </div>

        <div className="footer-links">
          <span className="footer-link">Privacy</span>
          <span className="footer-link">Terms</span>
          <span className="footer-link">Support</span>
        </div>
      </div>
    </div>
  );
};

