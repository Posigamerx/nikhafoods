import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Formspree (https://formspree.io) to handle the email sending.
      // Replace 'YOUR_FORM_ID' with the unique ID from your Formspree dashboard.
      const response = await fetch("https://formspree.io/f/xykvqgdk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        alert("Submission failed. Please try again or reach out via WhatsApp.");
      }
    } catch (err) {
      alert("Connection error. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>Get In Touch</span>
        <h1>Let's Work Together</h1>
        <p>Ready to place an order or discuss supply? We respond within hours.</p>
      </div>

      <div className={styles.main}>
        <div className={styles.info}>
          <h2>Contact Information</h2>
          <p>Reach out through any of the channels below. Our team is available Monday to Saturday, 8am – 6pm.</p>

          <div className={styles.contactList}>
            {[
              { icon: "📞", label: "Phone / WhatsApp", value: "+234 808 224 1504" },
              { icon: "✉️", label: "Email", value: "Sales@nikhafoods.com" },
              { icon: "📍", label: "Location", value: "7 Agunbiade Road, Oke koto , Agege, Lagos" },
              { icon: "🕐", label: "Business Hours", value: "Mon – Sat: 9am – 6pm" },
            ].map(c => (
              <div key={c.label} className={styles.contactItem}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <div className={styles.contactLabel}>{c.label}</div>
                  <div className={styles.contactValue}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.whatsappBtn}>
            <a href="https://wa.me/2348082241504" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you within a few hours.</p>
              <button onClick={() => setSent(false)} className={styles.resetBtn}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={submit} className={styles.form}>
              <h3>Send Us a Message</h3>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
                </div>
                <div className={styles.field}>
                  <label>Phone / WhatsApp *</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+234..." required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@example.com" />
              </div>
              <div className={styles.field}>
                <label>Service Interested In</label>
                <select name="service" value={form.service} onChange={handle}>
                  <option value="">Select a service</option>
                  <option>Wholesale Supply</option>
                  <option>Distribution</option>
                  <option>Retail Purchase</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Message / Order Details *</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us what you need — product type, quantity, delivery location..." required rows={4} />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
