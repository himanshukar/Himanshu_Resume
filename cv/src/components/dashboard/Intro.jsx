import React, { useState } from "react";
import ResumeData from "../../assets/himanshuData";

export default function Intro() {

    const resume = ResumeData();

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <div className="personal-info">
                <h2>Personal Information</h2>
                <p>Name: {resume.personalInfo.name}</p>
                <p>Age: {resume.personalInfo.age}</p>
                <p>Address: {resume.personalInfo.address.street}, {resume.personalInfo.address.city}, {resume.personalInfo.address.state}</p>
            </div>

            <div className="work-experience">
                <h2>Work Experience</h2>
                {resume.workExperience.map((experience, index) => (
                    <div key={index} className="experience">
                        <h3>{experience.company}</h3>
                        <p>Position: {experience.position}</p>
                        <p>Duration: {experience.startDate} - {experience.endDate}</p>
                        <p>Description: {experience.description}</p>
                    </div>
                ))}
            </div>

            <div className="education">
                <h2>Education</h2>
                {resume.education.map((education, index) => (
                    <div key={index} className="education-item">
                        <h3>{education.institution}</h3>
                        <p>Degree: {education.degree}</p>
                        <p>Field of Study: {education.fieldOfStudy}</p>
                        <p>Duration: {education.startDate} - {education.endDate}</p>
                        <p>Description: {education.description}</p>
                    </div>
                ))}
            </div>

            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    {resume.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="projects">
                <h2>Projects</h2>
                {resume.projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <p>Description: {project.description}</p>
                        <p>Duration: {project.startDate} - {project.endDate}</p>
                        <ul>
                            {project.technologiesUsed.map((technology, index) => (
                                <li key={index}>{technology}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}