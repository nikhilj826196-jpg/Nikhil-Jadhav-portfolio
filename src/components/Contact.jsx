import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { social } from "../config/portfolio";

const LINKS = [
  {
    key: "email",
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: social.email,
    href: `mailto:${social.email}`,
    cls: "",
  },
  {
    key: "phone",
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: social.phone,
    href: `tel:${social.phone.replace(/\s+/g, "")}`,
    cls: "clink-ph",
  },
  {
    key: "whatsapp",
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: social.whatsapp,
    cls: "clink-wa",
  },
  {
    key: "linkedin",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "linkedin.com/in/nikhil-jadhav",
    href: social.linkedin,
    cls: "clink-li",
  },
  {
    key: "github",
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/nikhil-jadhav",
    href: social.github,
    cls: "clink-gh",
  },
  {
    key: "instagram",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
    value: "@96_nikhil_jadhav_patil",
    href: social.instagram,
    cls: "clink-ig",
  },
];

const INIT = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "", details: "" });
  const [isFading, setIsFading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status.msg) return;

    const startTimer = setTimeout(() => {
      setIsFading(false);
    }, 0);

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 4600);

    const clearTimer = setTimeout(() => {
      setStatus({ type: "", msg: "", details: "" });
      setIsFading(false);
    }, 5000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(clearTimer);
    };
  }, [status.msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSimulateSuccess = () => {
    setLoading(true);
    setStatus({ type: "", msg: "" });
    setTimeout(() => {
      setLoading(false);
      setForm(INIT);
      setStatus({ type: "ok", msg: "Message Sent Successfully!" });
    }, 1200);
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      tempErrors.email = "Please enter a valid email.";
    if (!form.subject.trim()) tempErrors.subject = "Please enter a subject.";
    if (form.message.trim().length < 10)
      tempErrors.message = "Message must be at least 10 characters.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[DEBUG] Contact form submit handler triggered.");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      console.log("[DEBUG] Form validation failed:", validationErrors);
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    setLoading(true);
    setStatus({ type: "", msg: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("[DEBUG] Env variables check:", {
      serviceId: serviceId ? "Configured" : "MISSING",
      templateId: templateId ? "Configured" : "MISSING",
      publicKey: publicKey ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}` : "MISSING",
    });


    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      const errMsg = "Configuration error: EmailJS variables are missing in your environment.";
      console.warn("[DEBUG]", errMsg);
      setStatus({
        type: "err",
        msg: "Failed to send message. Please try again.",
        details: errMsg
      });
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    console.log("[DEBUG] Calling emailjs.send with params:", templateParams);

    emailjs
      .send(serviceId, templateId, templateParams, { publicKey })
      .then(
        (response) => {
          console.log("[DEBUG] EmailJS Success Response:", {
            status: response.status,
            text: response.text,
          });
          setLoading(false);
          setForm(INIT);
          setStatus({ type: "ok", msg: "Message Sent Successfully!" });
        },
        (error) => {
          console.error("[DEBUG] EmailJS Error Response:", error);
          console.error("[DEBUG] EmailJS Error Status:", error?.status);
          console.error("[DEBUG] EmailJS Error Text:", error?.text);
          setLoading(false);
          const detailedError = error?.text || error?.message || JSON.stringify(error) || "Unknown error";
          setStatus({
            type: "err",
            msg: "Failed to send message. Please try again.",
            details: detailedError,
          });
        }

      );
  };

  return (
    <section id="contact" className="contact-sec">
      <div className="container">
        <div className="sec-head text-c anim fade-up">
          <span className="sec-tag">Let&apos;s Connect</span>
          <h2 className="sec-title">Get In Touch</h2>
          <div className="accent-bar" />
        </div>

        <div className="contact-grid">
          {/* ─── LEFT: Info ─── */}
          <div className="contact-info">
            <h3 className="cinfo-title anim fade-up">I&apos;d Love to Hear From You</h3>
            <p className="cinfo-p anim fade-up d1">
              Whether it&apos;s a project idea, a job opportunity, or just a quick hello —
              feel free to reach out through any of the channels below.
            </p>

            <div className="clinks">
              {LINKS.map(({ key, icon, label, value, href, cls }, idx) => (
                <a
                  key={key}
                  href={href}
                  target={key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`clink ${cls} anim fade-up d${idx + 2}`}
                >
                  <div className="clink-icon">
                    <i className={icon} aria-hidden="true" />
                  </div>
                  <div className="clink-text">
                    <span className="clink-lbl">{label}</span>
                    <span className="clink-val">{value}</span>
                  </div>
                  <i className="fa-solid fa-arrow-right clink-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="status-card anim fade-up d8">
              <span className="status-dot" />
              <span className="status-text">Available for Freelance &amp; Collaboration</span>
            </div>
          </div>

          {/* ─── RIGHT: Form ─── */}
          <div className="contact-form-wrap anim fade-up d2">
            <div className="form-card">
              <div className="form-card-head">
                <h3>Let&apos;s Build Something Amazing 🚀</h3>
                <p>Fill out the form and I&apos;ll reply within 24 hours.</p>
              </div>

              <form className="cform" onSubmit={handleSubmit} noValidate>
                <div className="cform-row">
                  <div className="cform-group">
                    <label htmlFor="cf-name" className="cform-lbl">Your Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      className={`cform-inp ${errors.name ? "has-error" : ""}`}
                      placeholder="Enter Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <span className="field-error">
                        <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="cform-group">
                    <label htmlFor="cf-email" className="cform-lbl">Email Address</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className={`cform-inp ${errors.email ? "has-error" : ""}`}
                      placeholder="Enter Your Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <span className="field-error">
                        <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="cform-group">
                  <label htmlFor="cf-subject" className="cform-lbl">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    className={`cform-inp ${errors.subject ? "has-error" : ""}`}
                    placeholder="Project Inquiry / Job Offer / Hello"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  {errors.subject && (
                    <span className="field-error">
                      <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="cform-group">
                  <label htmlFor="cf-message" className="cform-lbl">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    className={`cform-txt ${errors.message ? "has-error" : ""}`}
                    rows={5}
                    placeholder="Hi Nikhil, I would like to discuss..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && (
                    <span className="field-error">
                      <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="cform-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>


              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Toast Notification Container */}
      {status.msg && (
        <div className="toast-container">
          <div className={`toast ${status.type === "ok" ? "success" : "error"} ${isFading ? "fade-out" : ""}`}>
            <span className="toast-icon">
              {status.type === "ok" ? "✅" : "❌"}
            </span>
            <div className="toast-content">
              <span className="toast-msg">
                {status.type === "ok" ? "Message Sent Successfully!" : "Failed to send message. Please try again."}
              </span>
              {status.type === "err" && status.details && (
                <span className="toast-details">{status.details}</span>
              )}
              {status.type === "err" && (
                <button
                  type="button"
                  onClick={handleSimulateSuccess}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    textDecoration: "underline",
                    padding: "0.2rem 0",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "block",
                    marginTop: "0.4rem"
                  }}
                >
                  Click here to simulate success (Demo Mode)
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
