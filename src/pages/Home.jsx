import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { products } from "../data/products";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add(styles.visible); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${styles.reveal} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const services = [
  { icon: "🚚", title: "Distribution", desc: "Reliable, scheduled delivery to supermarkets, hotels, restaurants, and institutions." },
  { icon: "📦", title: "Wholesale Supply", desc: "Bulk pricing for retailers and high-volume buyers with consistent supply guarantees." },
  { icon: "🛒", title: "Retail Sales", desc: "Walk-in and order-based purchases for individuals and small businesses at fair prices." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          {[...Array(6)].map((_, i) => <div key={i} className={styles.orb} style={{ "--i": i }} />)}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.dot}></span>
            Now Serving Lagos & Beyond
          </div>
          <h1 className={styles.heroTitle}>
            Quality Foodstuffs,<br />
            <span className={styles.heroGold}>Delivered Fresh</span>
          </h1>
          <p className={styles.heroSub}>
            Nikha Foods is your trusted partner for wholesale distribution, retail supply, and sourcing of premium foodstuffs across Nigeria.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/products" className={styles.btnPrimary}>Browse Products</Link>
            <Link to="/contact" className={styles.btnOutline}>Get a Quote</Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}><strong>500+</strong><span>Products</span></div>
            <div className={styles.statDiv}></div>
            <div className={styles.stat}><strong>1,000+</strong><span>Clients</span></div>
            <div className={styles.statDiv}></div>
            <div className={styles.stat}><strong>24h</strong><span>Fulfilment</span></div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <img src={logo} alt="Nikha Foods" className={styles.heroLogoImg} />
            </div>
            <div className={styles.heroProductGrid}>
              {products.slice(0, 4).map(p => (
                <div key={p.id} className={styles.heroProduct} style={{ background: p.color, border: `1px solid ${p.border}33` }}>
                  <img src={p.image} alt={p.name} className={styles.heroProductImg} />
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className={styles.heroCardLink}>View all products →</Link>
          </div>
          <div className={styles.floatTag} style={{ top: "10%", right: "-10px" }}>
            ✅ Quality Assured
          </div>
          <div className={styles.floatTag} style={{ bottom: "15%", left: "-10px", background: "var(--gold)", color: "var(--blue-deep)" }}>
            🚚 Fast Delivery
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {["Rice", "Vegetable Oil", "Pasta", "Macaroni", "Flour", "Sugar", "Noodles", "Tomato Paste",
            "Rice", "Vegetable Oil", "Pasta", "Macaroni", "Flour", "Sugar", "Noodles", "Tomato Paste"].map((t, i) => (
            <span key={i}><span className={styles.tickerDot}>✦</span>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className={styles.section}>
        <Reveal>
          <div className={styles.sectionLabel}>What We Do</div>
          <h2 className={styles.sectionTitle}>End-to-End Food<br />Supply Solutions</h2>
          <p className={styles.sectionSub}>From bulk wholesale orders to individual retail purchases — we serve businesses and individuals with the same dedication to quality.</p>
        </Reveal>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className={styles.serviceLink}>Learn more →</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className={styles.sectionBlue}>
        <Reveal>
          <div className={styles.sectionLabel} style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>Our Products</div>
          <h2 className={styles.sectionTitle} style={{ color: "#fff" }}>Stocked &amp; Ready to Ship</h2>
          <p className={styles.sectionSub} style={{ color: "rgba(255,255,255,0.65)" }}>Browse our core product range — all available in retail and wholesale quantities.</p>
        </Reveal>
        <div className={styles.productsPreview}>
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <Link to="/products" className={styles.productPreviewCard} style={{ "--card-bg": p.color, "--card-border": p.border }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className={styles.productPreviewImg}
                  onError={(e) => { e.target.style.opacity = '0.15'; }}
                />
                <div className={styles.productPreviewName}>{p.name}</div>
                <div className={styles.productPreviewCat}>{p.category}</div>
                <div className={styles.productPreviewTags}>
                  {p.tags.map(t => <span key={t} className={styles.productTag}>{t}</span>)}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/products" className={styles.btnWhite}>View All Products</Link>
          </div>
        </Reveal>
      </section>

      {/* WHY US */}
      <section className={styles.section}>
        <Reveal>
          <div className={styles.sectionLabel}>Why Choose Us</div>
          <h2 className={styles.sectionTitle}>Built on Quality<br />and Trust</h2>
        </Reveal>
        <div className={styles.whyGrid}>
          {[
            { n: "01", title: "Verified Suppliers", desc: "All our products come from trusted, quality-checked sources." },
            { n: "02", title: "Competitive Pricing", desc: "We leverage supplier relationships to pass savings on to you." },
            { n: "03", title: "Flexible Orders", desc: "From small retail to bulk wholesale — we accommodate all sizes." },
            { n: "04", title: "Fast Delivery", desc: "Orders processed and dispatched within 24 hours, every time." },
            { n: "05", title: "Dedicated Support", desc: "A real person handles your account. Fast responses guaranteed." },
            { n: "06", title: "Food Safety", desc: "Proper handling, storage, and transport for every product we carry." },
          ].map((w, i) => (
            <Reveal key={w.n} delay={i * 60}>
              <div className={styles.whyCard}>
                <div className={styles.whyNum}>{w.n}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <Reveal>
          <h2>Ready to Place an Order?</h2>
          <p>Contact us today for pricing, bulk quotes, or delivery enquiries.</p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className={styles.btnPrimary}>Get a Quote</Link>
            <Link to="/products" className={styles.btnOutlineWhite}>Browse Products</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
