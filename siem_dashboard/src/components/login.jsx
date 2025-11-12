// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
// import './Login.css';

// export default function Login() {
//     const [isLogin, setIsLogin] = useState(true);
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [isAnimating, setIsAnimating] = useState(false);

//     const handleToggle = () => {
//         setIsAnimating(true);
//         setTimeout(() => {
//             setIsLogin(!isLogin);
//             setIsAnimating(false);
//         }, 300);
//     };

//     const handleSubmit = () => {
//         // Validate passwords match for signup
//         if (!isLogin && formData.password !== formData.confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         console.log('Form submitted:', formData);
//         // Add your authentication logic here
//     };

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div className="auth-container">
//             {/* Animated background elements */}
//             <div className="background-blobs">
//                 <div className="blob blob-1"></div>
//                 <div className="blob blob-2"></div>
//                 <div className="blob blob-3"></div>
//             </div>

//             {/* Main card */}
//             <div className="auth-card-wrapper">
//                 <div className="auth-card-glow"></div>

//                 <div className="auth-card">
//                     {/* Header with icon */}
//                     <div className="auth-header">
//                         <div className="auth-icon">
//                             <Sparkles className="icon-sparkles" />
//                         </div>
//                         <h2 className={`auth-title ${isAnimating ? 'animating' : ''}`}>
//                             {isLogin ? 'Welcome Back' : 'Create Account'}
//                         </h2>
//                         <p className="auth-subtitle">
//                             {isLogin ? 'Login to continue your journey' : 'Sign up to get started'}
//                         </p>
//                     </div>

//                     {/* Form */}
//                     <div className="auth-form">
//                         {/* Name field - only for signup */}
//                         {!isLogin && (
//                             <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
//                                 <div className="input-wrapper">
//                                     <User className="input-icon" />
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         placeholder="Full Name"
//                                         className="input-field"
//                                         required={!isLogin}
//                                     />
//                                 </div>
//                             </div>
//                         )}

//                         {/* Email field */}
//                         <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
//                             <div className="input-wrapper">
//                                 <Mail className="input-icon" />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="Email Address"
//                                     className="input-field"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Password field */}
//                         <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
//                             <div className="input-wrapper">
//                                 <Lock className="input-icon" />
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="Password"
//                                     className="input-field"
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="password-toggle"
//                                 >
//                                     {showPassword ? <EyeOff className="icon-eye" /> : <Eye className="icon-eye" />}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Confirm password - only for signup */}
//                         {!isLogin && (
//                             <div className={`input-group ${isAnimating ? 'animating' : ''}`}>
//                                 <div className="input-wrapper">
//                                     <Lock className="input-icon" />
//                                     <input
//                                         type={showPassword ? 'text' : 'password'}
//                                         name="confirmPassword"
//                                         value={formData.confirmPassword}
//                                         onChange={handleChange}
//                                         placeholder="Confirm Password"
//                                         className="input-field"
//                                         required={!isLogin}
//                                     />
//                                 </div>
//                             </div>
//                         )}

//                         {/* Forgot password - only for login */}
//                         {isLogin && (
//                             <div className="forgot-password">
//                                 <button type="button" className="forgot-link">
//                                     Forgot Password?
//                                 </button>
//                             </div>
//                         )}

//                         {/* Submit button */}
//                         <button
//                             onClick={handleSubmit}
//                             className="submit-button"
//                         >
//                             {isLogin ? 'Sign In' : 'Create Account'}
//                         </button>
//                     </div>

//                     {/* Toggle between login and signup */}
//                     <div className="auth-toggle">
//                         <p className="toggle-text">
//                             {isLogin ? "Don't have an account? " : "Already have an account? "}
//                             <button
//                                 type="button"
//                                 onClick={handleToggle}
//                                 className="toggle-button"
//                             >
//                                 {isLogin ? 'Sign Up' : 'Sign In'}
//                             </button>
//                         </p>
//                     </div>

//                     {/* Social login divider */}
//                     <div className="divider">
//                         <div className="divider-line"></div>
//                         <span className="divider-text">OR</span>
//                         <div className="divider-line"></div>
//                     </div>

//                     {/* Social login buttons */}
//                     {/* Social login buttons */}
//                     <div className="social-buttons">
//                         <button type="button" className="social-button">
//                             <svg className="social-icon" viewBox="0 0 24 24">
//                                 ...
//                             </svg>
//                             <span>Google</span>
//                         </button>
                        
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

export default function Login() {
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

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

    const handleSubmit = async (e) => {
        e && e.preventDefault && e.preventDefault();

        // If you're using Auth0's Universal Login, you shouldn't handle passwords locally.
        // Instead use loginWithRedirect and pass screen_hint for signup flow.
        try {
            if (isLogin) {
                // Redirect to Auth0's Universal Login for sign in
                await loginWithRedirect({
                    authorizationParams: {
                        login_hint: formData.email || undefined
                    }
                });
            } else {
                // Redirect to the hosted signup page
                await loginWithRedirect({
                    authorizationParams: {
                        screen_hint: 'signup',
                        login_hint: formData.email || undefined
                    }
                });
            }
        } catch (err) {
            console.error('Auth0 redirect error', err);
            alert('Authentication failed — check console for details.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleForgotPassword = () => {
        // Best practice: use Auth0's hosted password reset flow (via email).
        // Here we redirect users to the signup/login page where they can request a reset
        // or you can implement a server-side call to Auth0 Management API to create a reset ticket.
        alert('We will redirect you to the hosted login page where you can reset your password.');
        loginWithRedirect({ authorizationParams: { screen_hint: 'login' } });
    };

    if (isLoading) return <div className="auth-loading">Loading...</div>;

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

                <form className="auth-card" onSubmit={handleSubmit}>
                    {/* Header with icon */}
                    <div className="auth-header">
                        <div className="auth-icon">
                            {isAuthenticated && user ? (
                                <img src={user.picture} alt={user.name} className="auth-avatar" />
                            ) : (
                                <Sparkles className="icon-sparkles" />
                            )}
                        </div>
                        <h2 className={`auth-title ${isAnimating ? 'animating' : ''}`}>
                            {isAuthenticated ? `Hello, ${user.name}` : (isLogin ? 'Welcome Back' : 'Create Account')}
                        </h2>
                        <p className="auth-subtitle">
                            {isAuthenticated ? 'You are signed in via Auth0' : (isLogin ? 'Login to continue your journey' : 'Sign up to get started')}
                        </p>
                    </div>

                    {/* Form */}
                    <div className="auth-form">
                        {/* Name field - only for signup (UX only, Auth0 handles actual signup) */}
                        {!isLogin && !isAuthenticated && (
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
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email field */}
                        {!isAuthenticated && (
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
                        )}

                        {/* Password field (UX only) */}
                        {!isAuthenticated && (
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
                                        required={isLogin}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="password-toggle"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <EyeOff className="icon-eye" /> : <Eye className="icon-eye" />}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Confirm password - only for signup (UX only) */}
                        {!isLogin && !isAuthenticated && (
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
                                    />
                                </div>
                            </div>
                        )}

                        {/* Forgot password - only for login */}
                        {isLogin && !isAuthenticated && (
                            <div className="forgot-password">
                                <button type="button" onClick={handleForgotPassword} className="forgot-link">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {/* If authenticated show sign out action */}
                        {isAuthenticated ? (
                            <div className="auth-actions">
                                <button
                                    type="button"
                                    className="submit-button"
                                    onClick={() => logout({ returnTo: window.location.origin })}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <button className="submit-button" type="submit">
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        )}
                    </div>

                    {/* Toggle between login and signup */}
                    {!isAuthenticated && (
                        <div className="auth-toggle">
                            <p className="toggle-text">
                                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                                <button
                                    type="button"
                                    onClick={handleToggle}
                                    className="toggle-button"
                                >
                                    {isLogin ? 'Sign Up' : 'Sign In'}
                                </button>
                            </p>
                        </div>
                    )}

                    {/* Social login divider */}
                    {!isAuthenticated && (
                        <>
                            <div className="divider">
                                <div className="divider-line"></div>
                                <span className="divider-text">OR</span>
                                <div className="divider-line"></div>
                            </div>

                            {/* Social login buttons */}
                            <div className="social-buttons">
                                <button
                                    type="button"
                                    className="social-button"
                                    onClick={() => loginWithRedirect({ authorizationParams: { prompt: 'select_account' } })}
                                >
                                    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden>
                                        {/* put Google icon svg path here if you want */}
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                    <span>Continue with Auth0 / Social</span>
                                </button>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </div>
    );
}
