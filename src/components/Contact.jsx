import React, { useState } from "react";
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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const to = "evge1983@gmail.com";
    const subject = `Portfolio Contact: ${values.name}`;
    const body =
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n\n` +
      `Message:\n${values.message}`;

    const mailto = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

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

          <div className="contact-actions">
            <Button type="submit" label="Submit" variant="primary" size="md" />
          </div>
        </form>
        <SectionNav to="#home" label="Home" className="up" />
      </div>
    </section>
  );
}
