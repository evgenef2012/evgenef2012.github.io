import React, { useState } from "react";
import "./Skills.css";
import { skillsContent } from "../content/skills.js";
import Button from "./Button";
import Modal from "./Modal.jsx";

export default function Skills() {
  const { title, projectsTitle, projects } = skillsContent;

  const [showSTP, setShowSTP] = useState(false);
  const [showSTD, setShowSTD] = useState(false);
  const [showSTR, setShowSTR] = useState(false);
  const [showAUTO, setShowAUTO] = useState(false);
  const [showXO, setShowXO] = useState(false);

  const stpUrl = "/STP-Superpharm-Accessibility.pdf";
  const stdUrl = "/STD-Superpharm-Accessibility.pdf";
  const strUrl = "/STR-Superpharm-Accessibility.pdf";
  const autoUrl =
    "https://github.com/evgenef2012/JUnit-Automation-Practice/tree/master";

  return (
    <section className="section skills-section">
      <div className="container skills">
        <h2 id="skills" className="skills-title">
          {title}
        </h2>

        <div className="projects">
          <div className="projects-title">{projectsTitle}</div>
          <div className="projects-row">
            {projects.map((p, i) => {
              const label = p.label ?? "";
              const isSTP = /test-?planning|stp/i.test(label);
              const isSTD = /test-?design|std/i.test(label);
              const isSTR = /test-?res[au]lts?|str/i.test(label);
              const isAUTO = /auto(matic)?\s*testing/i.test(label);
              const isXO = /xo\s*game/i.test(label);

              if (isSTP) {
                return (
                  <Button
                    key={i}
                    label={label}
                    to="#projects-stp"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSTP(true);
                    }}
                    variant="primary"
                    size="md"
                  />
                );
              }
              if (isSTD) {
                return (
                  <Button
                    key={i}
                    label={label}
                    to="#projects-std"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSTD(true);
                    }}
                    variant="primary"
                    size="md"
                  />
                );
              }
              if (isSTR) {
                return (
                  <Button
                    key={i}
                    label={label}
                    to="#projects-str"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowSTR(true);
                    }}
                    variant="primary"
                    size="md"
                  />
                );
              }
              if (isAUTO) {
                return (
                  <Button
                    key={i}
                    label={label}
                    to="#projects-auto"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAUTO(true);
                    }}
                    variant="primary"
                    size="md"
                  />
                );
              }
              if (isXO) {
                return (
                  <Button
                    key={i}
                    label={label}
                    to="#projects-xo"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowXO(true);
                    }}
                    variant="primary"
                    size="md"
                  />
                );
              }
              return (
                <Button
                  key={i}
                  label={p.label}
                  to={p.to}
                  variant="primary"
                  size="md"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* STP Modal */}
      <Modal
        open={showSTP}
        onClose={() => setShowSTP(false)}
        title="System Test Planning (STP) – Super-Pharm Accessibility"
      >
        <a href={stpUrl} target="_blank" rel="noopener">
          View STP in Browser (PDF)
        </a>
        <a href={stpUrl} download>
          Download STP (PDF)
        </a>
        <button
          className="btn btn--outline modal-close-action"
          onClick={() => setShowSTP(false)}
        >
          Close
        </button>
      </Modal>

      {/* STD Modal */}
      <Modal
        open={showSTD}
        onClose={() => setShowSTD(false)}
        title="Test Design (STD) – Super-Pharm Accessibility"
      >
        <a href={stdUrl} target="_blank" rel="noopener noreferrer">
          View STD in Browser (PDF)
        </a>
        <a href={stdUrl} download>
          Download STD (PDF)
        </a>
        <button
          className="btn btn--outline modal-close-action"
          onClick={() => setShowSTD(false)}
        >
          Close
        </button>
      </Modal>

      {/* STR Modal */}
      <Modal
        open={showSTR}
        onClose={() => setShowSTR(false)}
        title="Test Results (STR) – Super-Pharm Accessibility"
      >
        <a href={strUrl} target="_blank" rel="noopener noreferrer">
          View STR in Browser (PDF)
        </a>
        <a href={strUrl} download>
          Download STR (PDF)
        </a>
        <button
          className="btn btn--outline modal-close-action"
          onClick={() => setShowSTR(false)}
        >
          Close
        </button>
      </Modal>

      {/* AUTOMATIC TESTING Modal (GitHub only) */}
      <Modal
        open={showAUTO}
        onClose={() => setShowAUTO(false)}
        title="Automatic Testing - JUnit (Java)"
      >
        <a href={autoUrl} target="_blank" rel="noopener noreferrer">
          View repository on GitHub
        </a>
        <button
          className="btn btn--outline modal-close-action"
          onClick={() => setShowAUTO(false)}
        >
          Close
        </button>
      </Modal>

      <Modal
        open={showXO}
        onClose={() => setShowXO(false)}
        title="XO Game" // keep for a11y; we’ll hide with CSS below
      >
        <div className="game-embed game-embed--xo">
          <iframe
            className="game-frame"
            src={`${import.meta.env.BASE_URL}xo/index.html`}
            title="XO Game"
            referrerPolicy="no-referrer"
          />
        </div>

        <button
          className="btn btn--outline modal-close-action"
          onClick={() => setShowXO(false)}
        >
          Close
        </button>
      </Modal>
    </section>
  );
}
