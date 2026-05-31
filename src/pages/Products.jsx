import { useState, useEffect } from "react";
import { products } from "../data/products";
import styles from "./Products.module.css";
import logo from "../assets/logo.png";

const categories = ["All", ...new Set(products.map(p => p.category))];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.title = `${selected.name} | Nikha Foods Products`;
    } else {
      document.title = "Product Catalogue | Premium Rice, Oil & Grains | Nikha Foods";
    }

    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Browse our extensive range of quality foodstuffs. Available in retail and wholesale quantities with competitive bulk pricing.");

    const link = document.querySelector("link[rel*='icon']");
    if (link) link.href = logo;
  }, [selected]);

  const filtered = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.label}>Product Catalogue</div>
          <h1>Our Food Products</h1>
          <p>Quality foodstuffs available in retail and wholesale quantities. Contact us for bulk pricing.</p>
        </div>
      </div>

      <div className={styles.main}>
        {/* FILTERS */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {filtered.map(p => (
            <div
              key={p.id}
              className={styles.card}
              style={{ "--bg": p.color, "--border": p.border }}
              onClick={() => setSelected(p)}
            >
              <div className={styles.cardTop} style={{ background: p.color }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className={styles.productImg}
                  onError={(e) => { e.target.style.opacity = '0.2'; }}
                />
                <div className={styles.cardTags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardCat}>{p.category}</div>
                <h3 className={styles.cardName}>{p.name}</h3>
                <p className={styles.cardTagline}>{p.tagline}</p>
                <div className={styles.cardSizes}>
                  {p.sizes.slice(0, 3).map(s => (
                    <span key={s} className={styles.size}>{s}</span>
                  ))}
                  {p.sizes.length > 3 && <span className={styles.size}>+{p.sizes.length - 3} more</span>}
                </div>
                <button className={styles.viewBtn}>View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.modalTop} style={{ background: selected.color }}>
              <img
                src={selected.image}
                alt={selected.name}
                className={styles.modalImg}
                onError={(e) => { e.target.style.opacity = '0.2'; }}
              />
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalCat}>{selected.category}</div>
              <h2 className={styles.modalName}>{selected.name}</h2>
              <p className={styles.modalDesc}>{selected.description}</p>

              <div className={styles.modalSection}>
                <h4>Available Variants</h4>
                <div className={styles.variantList}>
                  {selected.variants.map(v => (
                    <span key={v} className={styles.variant}>{v}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalSection}>
                <h4>Available Sizes / Quantities</h4>
                <div className={styles.sizeList}>
                  {selected.sizes.map(s => (
                    <span key={s} className={styles.sizeChip} style={{ borderColor: selected.border, color: selected.border }}>{s}</span>
                  ))}
                </div>
              </div>

              <a href="/contact" className={styles.modalCta}>
                Enquire About This Product →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <div className={styles.bottomCta}>
        <h2>Need Bulk Pricing?</h2>
        <p>Contact our sales team for wholesale rates, custom packaging, and delivery options.</p>
        <a href="/contact" className={styles.ctaBtn}>Request a Quote</a>
      </div>
    </div>
  );
}
