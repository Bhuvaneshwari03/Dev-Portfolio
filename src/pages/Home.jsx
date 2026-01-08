import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJira,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiExpress,
  SiPostman,
} from "react-icons/si";

import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper className="home-container">
      <section
        className="hero-section"
        style={{ 
          minHeight: "80vh", 
          display: "flex", 
          alignItems: "center",
          marginBottom: "6rem" 
        }}
      >
        <div
          className="glass-card"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Hello, <br /> I'm Bhuvaneshwari <span className="cursor-blink"></span>
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#b0b0b0",
              marginBottom: "2rem",
            }}
          >
            Full Stack Developer
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#d0d0d0",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            I build apps and websites that solve everyday problems and make
            things easier for people. That’s what pulled me into tech, and
            that’s what I enjoy doing.
          </p>
        </div>
      </section>

      <section className="about-section" style={{ marginBottom: "8rem" }}>
        <div className="glass-card">
          <h2 className="section-title" style={{ marginTop: 0 }}>
            About Me
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#d0d0d0",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
            }}
          >
            I’m an MCA student who enjoys creating things that work in the real
            world whether that’s building apps or spending weekends contributing
            to open-source projects. Most days, you’ll find me knee-deep in
            projects or exploring new tools and technologies that push my
            learning forward.
          </p>
          
          <p
            style={{ fontSize: "1.1rem", color: "#d0d0d0", lineHeight: "1.8" }}
          >
            Alongside development, I enjoy anchoring events and public speaking,
            which has helped me connect with people and think more creatively.
            At the core, I’m curious by default and have a constant urge to
            learn.
          </p>
        </div>
      </section>

      <section className="skills-section">
        <div className="glass-card">
          <h2 className="section-title" style={{ marginTop: 0 }}>
            My Skills
          </h2>
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="glass-card">
              <h3
                style={{
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "0.5rem",
                }}
              >
                Core Development
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span className="skill-tag">
                  <SiFlutter /> Flutter
                </span>
                <span className="skill-tag">
                  <FaReact /> React.js
                </span>
                <span className="skill-tag">
                  <FaJs /> JavaScript
                </span>
                <span className="skill-tag">
                  <FaHtml5 /> <FaCss3Alt /> HTML5, CSS3
                </span>
              </div>
            </div>

            <div className="glass-card">
              <h3
                style={{
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "0.5rem",
                }}
              >
                Backend & Databases
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span className="skill-tag">
                  <SiFirebase /> Firebase Authentication
                </span>
                <span className="skill-tag">
                  <SiSupabase /> <SiMongodb /> Supabase & MongoDB
                </span>
                <span className="skill-tag">
                  <FaNodeJs /> Node.js
                </span>
                <span className="skill-tag">
                  <SiExpress /> Express.js
                </span>
              </div>
            </div>

            <div className="glass-card">
              <h3
                style={{
                  marginBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "0.5rem",
                }}
              >
                Tools
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span className="skill-tag">
                  <FaGitAlt /> <FaGithub /> Git & GitHub
                </span>
                <span className="skill-tag">
                  <FaFigma /> Figma
                </span>
                <span className="skill-tag">
                  <SiPostman /> Postman
                </span>
                <span className="skill-tag">
                  <FaJira /> Jira
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
                .cursor-blink {
                    display: inline-block;
                    width: 5px;
                    height: 1em;
                    background-color: #fff;
                    margin-left: 8px;
                    animation: blink 1s step-end infinite;
                    vertical-align: -0.15em;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .skill-tag {
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1rem;
                    color: #fff;
                    transition: all 0.3s ease;
                }
                .skill-tag:hover {
                    transform: translateX(5px);
                    color: #b0b0b0;
                }
            `}</style>
    </PageWrapper>
  );
};

export default Home;
