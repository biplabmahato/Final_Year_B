// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/CyberSentra Logo.png"; // <-- fix the path

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="CyberSentra logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="login-btn"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
