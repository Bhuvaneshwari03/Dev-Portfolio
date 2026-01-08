import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Resume = () => {
  return (
    <PageWrapper>
      <div style={{ height: "calc(100vh - 120px)", width: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        
        {/* Controls Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>My Resume</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
                <a 
                    href="/Resume.pdf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-outline"
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                    <FaExternalLinkAlt /> Open Full Page
                </a>
                <a 
                    href="/Resume.pdf" 
                    download="Bhuvaneshwari_Resume.pdf" 
                    className="btn btn-primary"
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                    <FaDownload /> Download PDF
                </a>
            </div>
        </div>

        {/* PDF Viewer */}
        <div className="glass-card" style={{ flex: 1, padding: "0.5rem", overflow: "hidden" }}>
            <iframe
            src="/Resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "8px", background: "#fff" }}
            />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
