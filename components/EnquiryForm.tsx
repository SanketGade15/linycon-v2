"use client";

import { useState, type FormEvent } from "react";
import { defaultService, solutions } from "@/lib/site-data";
import { useSite } from "./SiteProvider";

export default function EnquiryForm() {
  const { service, setService } = useSite();
  const [draftHref, setDraftHref] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setError("Please enter your name and project requirements.");
      return;
    }
    setError("");
    const body = `Hello Linycon team,\n\nI would like to discuss a project.\n\nName: ${name}\nCompany: ${String(data.get("company") || "").trim() || "Not specified"}\nEmail: ${String(data.get("email") || "").trim()}\nPhone: ${String(data.get("phone") || "").trim() || "Not specified"}\nArea of interest: ${service}\n\nProject requirements:\n${message}\n`;
    const href = `mailto:linycon.info@gmail.com?subject=${encodeURIComponent(`Project enquiry – ${service}`)}&body=${encodeURIComponent(body)}`;
    setDraftHref(href);
    window.location.href = href;
  }

  return (
    <form id="enquiry-form" onSubmit={submit}>
      <h3>Discuss your requirements</h3>
      <p>Share a few details to prepare your enquiry.</p>
      <div className="form-row">
        <label htmlFor="enquiry-name">
          Your name <span aria-hidden="true">*</span>
          <input
            id="enquiry-name"
            name="name"
            autoComplete="name"
            required
            placeholder="Full name"
            maxLength={100}
          />
        </label>
        <label htmlFor="enquiry-company">
          Company
          <input
            id="enquiry-company"
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            maxLength={160}
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="enquiry-email">
          Email address <span aria-hidden="true">*</span>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            maxLength={200}
          />
        </label>
        <label htmlFor="enquiry-phone">
          Phone number
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            maxLength={30}
          />
        </label>
      </div>
      <label htmlFor="enquiry-service">
        Area of interest
        <select
          id="enquiry-service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option>{defaultService}</option>
          {solutions.map((solution) => (
            <option key={solution.id}>{solution.title}</option>
          ))}
        </select>
      </label>
      <label htmlFor="enquiry-message">
        Project requirements <span aria-hidden="true">*</span>
        <textarea
          id="enquiry-message"
          name="message"
          rows={3}
          required
          placeholder="Project location, scope and how we can help…"
          maxLength={4000}
        />
      </label>
      <button className="button dark" type="submit">
        Contact Our Team <span aria-hidden="true">↗</span>
      </button>
      <small className="form-note">
        Opens an email draft for you to review and send. Your details are not
        stored on this website.
      </small>
      <div id="form-result" aria-live="polite">
        {error && <p>{error}</p>}
        {draftHref && (
          <>
            <p>Your draft is ready. Review and send it in your email app.</p>
            <a href={draftHref}>Open email draft ↗</a>
          </>
        )}
      </div>
    </form>
  );
}
