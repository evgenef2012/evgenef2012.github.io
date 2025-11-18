import React from "react";
import { aboutContent } from "../content/about.js";
import "./About.css";
import SectionNav from "./SectionNav.jsx";
import "./SectionNav.css";

export default function About() {
  const { title, subtitle, paragraphs } = aboutContent;

  return (
    <section className="section">
      <div className="container about">
        <h2 id="about" className="about-title">{title}</h2>
        <p className="about-subtitle">{subtitle}</p>

        <div className="about-body">
          {paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <SectionNav to="#skills" label="My skills" />
      </div>
    </section>
  );
}
