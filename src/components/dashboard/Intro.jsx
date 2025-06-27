import React from "react";
import EmbossedTile from "./EmbossedTile";
import ResumeData from "../../assets/himanshuData";
import "../../assets/fabric.css";

export default function Intro() {
  const resume = ResumeData();

  // Helper to render a section of tiles
  const renderTiles = (data, section) => {
    if (!data) return null;
    if (Array.isArray(data)) {
      return data.map((item, idx) => (
        <EmbossedTile
          key={idx}
          title={item.company || item.institution || item.title || item.skill || item.name || `Item ${idx+1}`}
          value={item.position || item.degree || item.description || item}
          jsonKey={section}
          image={item.image || undefined}
          file={item.file || undefined}
          jsonData={item}
        />
      ));
    } else if (typeof data === "object") {
      return Object.entries(data).map(([key, value], idx) => {
        if (typeof value === "object" && value !== null) {
          // Render nested object as a string
          return (
            <EmbossedTile
              key={key}
              title={key}
              value={Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(", ")}
              jsonKey={key}
              jsonData={{ [key]: value }}
            />
          );
        }
        return (
          <EmbossedTile
            key={key}
            title={key}
            value={value}
            jsonKey={key}
            jsonData={{ [key]: value }}
          />
        );
      });
    }
    return null;
  };

  return (
    <div className="dashboard w-full min-h-screen px-2 py-8 fabric-bg" style={{
      boxShadow: '0 0 0 100vmax #0a1147 inset',
    }}>
      <h1 className="text-3xl font-bold mb-8 text-center" style={{color: '#ffe066', textShadow: '0 2px 8px #b59b0c, 0 0 32px #fff9c4'}}>Dashboard</h1>

      {/* Personal Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#b08d57'}}>Personal Information</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {renderTiles(resume.personalInfo, "personalInfo")}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#b08d57'}}>Work Experience</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {renderTiles(resume.workExperience, "workExperience")}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#b08d57'}}>Education</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {renderTiles(resume.education, "education")}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#b08d57'}}>Skills</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {Array.isArray(resume.skills) && resume.skills.map((skill, idx) => (
            <EmbossedTile
              key={idx}
              title={skill}
              value={skill}
              jsonKey={`skill-${idx}`}
              jsonData={{ skill }}
            />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4" style={{color: '#b08d57'}}>Projects</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4">
          {renderTiles(resume.projects, "projects")}
        </div>
      </section>
    </div>
  );
}