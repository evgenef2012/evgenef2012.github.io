import React, { useState, useEffect } from "react";
import "./Contact.css";
import Button from "./Button.jsx";
import SectionNav from "./SectionNav.jsx";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    hp: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const FORM_ENDPOINT = "https://formspree.io/f/mdkvkrjq";

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Please enter a valid email.";
    if (!values.message.trim()) e.message = "Please write a message.";
    if (values.hp) e.hp = "Bot detected";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    if (values.hp) return; // honeypot: ignore bots

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setValues({ name: "", email: "", message: "", hp: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="section contact-section">
      <div className="container contact">
        <h2 id="contact" className="contact-title">
          Contact Me
        </h2>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="hp"
            value={values.hp}
            onChange={onChange}
            tabIndex="-1"
            autoComplete="off"
            className="hp-field"
            aria-hidden="true"
          />

          <label htmlFor="name" className="contact-label">
            <span className="contact-label-text sr-only">Name</span>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={onChange}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <em className="field-error">{errors.name}</em>}
          </label>

          <label htmlFor="email" className="contact-label">
            <span className="contact-label-text sr-only">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={onChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <em className="field-error">{errors.email}</em>}
          </label>

          <label htmlFor="message" className="contact-label">
            <span className="contact-label-text sr-only">Message</span>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
              value={values.message}
              onChange={onChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && (
              <em className="field-error">{errors.message}</em>
            )}
          </label>

          <div className="contact-status-region" aria-live="polite">
            {status === "success" && (
              <p className="contact-status contact-status--success">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="contact-status contact-status--error">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>

          <div className="contact-actions">
            <Button type="submit" label="Submit" variant="primary" size="md" />
          </div>
        </form>
        <SectionNav to="#home" label="Home" className="up" />
      </div>
    </section>
  );
}
