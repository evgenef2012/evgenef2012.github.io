import React from "react";
import "./Experience.css";
import { experienceContent } from "../content/experience.js";
import { skillsContent } from "../content/skills.js";
import SectionNav from "./SectionNav.jsx";

export default function Experience() {
  const { title, positions } = experienceContent;

  const techItems = skillsContent?.groups?.[0]?.items || [];
  const softItems = skillsContent?.groups?.[1]?.items || [];
  const techText = techItems.join(" · ");
  const softText = softItems.join(" · ");

  return (
    <section className="section experience-section">
      <div className="container experience">
        <h2 id="experience" className="experience-title">
          {title}
        </h2>

        <div className="experience-list">
          {positions.map((pos, idx) => {
            const [left, right] = String(pos.roleLine || "").split("|");
            const roleTitle = left?.trim();
            const roleDate = right?.trim();

            return (
              <div className="experience-item" key={idx}>
                <div className="experience-role">
                  <span className="exp-line">
                    <span className="exp-sep" aria-hidden="true" />
                    <span className="exp-date">{roleDate}</span>
                  </span>
                  <br />
                  <span>{roleTitle}</span>
                </div>

                <ul className="experience-bullets">
                  {pos.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="experience-item skills-block">
          <div className="experience-role">
            <span className="exp-line">
              <span className="exp-sep" aria-hidden="true" />
              <span className="exp-heading">Technical Skills:</span>
            </span>
          </div>
          <p className="experience-inline-text">{techText}</p>
        </div>

        <div className="experience-item skills-block">
          <div className="experience-role">
            <span className="exp-line">
              <span className="exp-sep" aria-hidden="true" />
              <span className="exp-heading">Soft Skills:</span>
            </span>
          </div>
          <p className="experience-inline-text">{softText}</p>
        </div>
        <SectionNav to="#contact" label="Contact me" />
      </div>
    </section>
  );
}
