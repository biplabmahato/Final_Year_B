import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import './Login.css';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsLogin(!isLogin);
            setIsAnimating(false);
        }, 300);
    };

    const handleSubmit = () => {
        // Validate passwords match for signup
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Form submitted:', formData);
        // Add your authentication logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="auth-container">
            {/* Animated background elements */}
            <div className="background-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            {/* Main card */}
            <div className="auth-card-wrapper">
                <div className="auth-card-glow"></div>

                <div className="auth-card">
                    {/* Header with icon */}
                    <div className="auth-header">
                        <div className="auth-icon">
                            <Sparkles className="icon-sparkles" />
                        </div>
                        <h2 className={`auth-title ${isAnimating ? 'animating' : ''}`}>
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="auth-subtitle">
                            {isLogin ? 'Login to continue your journey' : 'Sign up to get started'}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="auth-form">
                        {/* Name field - only for signup */}
                        {!isLogin && (
                            <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
                                <div className="input-wrapper">
                                    <User className="input-icon" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="input-field"
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email field */}
                        <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
                            <div className="input-wrapper">
                                <Mail className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="input-field"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password field */}
                        <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
                            <div className="input-wrapper">
                                <Lock className="input-icon" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="input-field"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff className="icon-eye" /> : <Eye className="icon-eye" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm password - only for signup */}
                        {!isLogin && (
                            <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
                                <div className="input-wrapper">
                                    <Lock className="input-icon" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        className="input-field"
                                        required={!isLogin}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Forgot password - only for login */}
                        {isLogin && (
                            <div className="forgot-password">
                                <button type="button" className="forgot-link">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {/* Submit button */}
                        <button
                            onClick={handleSubmit}
                            className="submit-button"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </div>

                    {/* Toggle between login and signup */}
                    <div className="auth-toggle">
                        <p className="toggle-text">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                type="button"
                                onClick={handleToggle}
                                className="toggle-button"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>

                    {/* Social login divider */}
                    <div className="divider">
                        <div className="divider-line"></div>
                        <span className="divider-text">OR</span>
                        <div className="divider-line"></div>
                    </div>

                    {/* Social login buttons */}
                    {/* Social login buttons */}
                    <div className="social-buttons">
                        <button type="button" className="social-button">
                            <svg className="social-icon" viewBox="0 0 24 24">
                                ...
                            </svg>
                            <span>Google</span>
                        </button>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}