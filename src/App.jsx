import React from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Button from "./components/Button.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import SectionNav from "./components/SectionNav.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main id="home" className="section hero">
        <div className="container">
          <p className="eyebrow">Hello, I am</p>
          <h1>Nefedov Evgeni</h1>
          <div className="hero-block">
            <p className="subtitle">Junior QA specialist</p>
            <div className="cta-row">
              <Button
                label="Download CV"
                to="/Nefedov_Evgeni_CV.pdf"
                download
                variant="primary"
                size="md"
              />
              <Button
                label="Contact me"
                to="#contact"
                variant="primary"
                size="md"
              />
            </div>
            <SectionNav to="#about" label="About me" />
          </div>
        </div>
      </main>

      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
