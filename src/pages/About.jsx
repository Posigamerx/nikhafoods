import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>About Us</span>
        <h1>Who We Are</h1>
        <p>Nikha Foods — built on quality, driven by trust, committed to serving Nigeria.</p>
      </div>

      <section className={styles.story}>
        <div className={styles.storyVisual}>
          <div className={styles.storyCard}>
            <div className={styles.logoLarge}>N</div>
            <div className={styles.storyCardTitle}>Nikha Foods</div>
            <div className={styles.storyCardSub}>Est. in Lagos, Nigeria</div>
          </div>
          <div className={styles.statFloat}>
            <div className={styles.statNum}>10+</div>
            <div className={styles.statLbl}>Years in foodstuffs supply</div>
          </div>
        </div>
        <div className={styles.storyText}>
          <div className={styles.sectionLabel}>Our Story</div>
          <h2>From Lagos to Your Table</h2>
          <p>Nikha Foods started with a simple mission: make quality foodstuffs accessible to everyone — from large businesses to individual households. What began as a local supply operation has grown into a trusted name for distribution, wholesale, and retail across Lagos and beyond.</p>
          <p>We understand the food supply chain from source to shelf. Our strong supplier relationships mean we consistently deliver better quality at better prices. We don't just supply food — we build lasting partnerships with every client we serve.</p>
          <div className={styles.values}>
            {["Quality First", "Fair Pricing", "Reliable Supply", "Customer Care"].map(v => (
              <span key={v} className={styles.valueTag}>{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        {[
          { n: "500+", l: "Products Available" },
          { n: "1,000+", l: "Clients Served" },
          { n: "24h", l: "Order Turnaround" },
          { n: "3", l: "Core Services" },
        ].map(s => (
          <div key={s.l} className={styles.statBox}>
            <div className={styles.statNum}>{s.n}</div>
            <div className={styles.statLabel}>{s.l}</div>
          </div>
        ))}
      </section>

      <div className={styles.cta}>
        <h2>Ready to Work With Us?</h2>
        <p>Join hundreds of businesses and individuals who trust Nikha Foods for their daily supply needs.</p>
        <Link to="/contact" className={styles.ctaBtn}>Get In Touch</Link>
      </div>
    </div>
  );
}
