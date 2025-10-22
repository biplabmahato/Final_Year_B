import React from "react";
// contact
const ContactLink = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contact Us</h2>
      <p>Click the button below to open our Streamlit contact form:</p>
      <a
        href="https://emailsend-uexfsyz3p2iduyjct8dmrz.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#0ea5e9",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Open Contact Form
      </a>
    </div>
  );
};

export default ContactLink;
