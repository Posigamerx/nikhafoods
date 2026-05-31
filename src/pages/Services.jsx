import { useEffect } from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillBox2Fill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../assets/logo.png";



const services = [
  {
    icon: <TbTruckDelivery />,
    title: "Distribution",
    tagline: "Reliable logistics from our warehouse to your door",
    description: "We manage the full logistics chain — from our warehouse straight to supermarkets, hotels, schools, restaurants, and businesses. Our fleet ensures timely, tracked deliveries on your schedule.",
    features: ["Same-city delivery available", "Bulk order dispatch", "Scheduled weekly runs", "Delivery tracking & confirmation", "Institutional supply contracts"],
    color: "#EFF6FF",
  },
  {
    icon: <BsFillBox2Fill />,
    title: "Wholesale Supply",
    tagline: "Bulk pricing for retailers and volume buyers",
    description: "Buy in quantity and benefit from our competitive wholesale rates. We supply market traders, supermarkets, corner shops, and food businesses with consistent, reliable stock.",
    features: ["Minimum order quantities available", "Volume discount tiers", "Regular restocking contracts", "Credit terms for trusted buyers", "Wide product catalogue"],
    color: "#F0FDF4",
  },
  {
    icon: <TiShoppingCart />,
    title: "Retail Sales",
    tagline: "Walk-in and order-based for individuals",
    description: "Need a smaller quantity? Our retail service is open to everyone. Order online or walk in for everyday foodstuffs at fair, transparent prices. Great for homes, small vendors, and caterers.",
    features: ["No minimum order", "Daily fresh stock", "Wide variety of brands", "Cash & transfer accepted", "Same-day order fulfilment"],
    color: "#FFF7ED",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Food Distribution & Wholesale | Nikha Foods";
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Discover our core services: Logistics Distribution, Wholesale Supply, and Retail Sales designed for businesses and homes across Nigeria.");

    const link = document.querySelector("link[rel*='icon']");
    if (link) link.href = logo;
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.label}>Our Services</span>
        <h1>How We Serve You</h1>
        <p>Three core services designed to meet the needs of businesses and individuals across every level of the food supply chain.</p>
      </div>

      <div className={styles.servicesWrap}>
        {services.map((s, i) => (
          <div key={s.title} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reverse : ""}`}>
            <div className={styles.serviceVisual} style={{ background: s.color }}>
              <span className={styles.bigIcon}>{s.icon}</span>
            </div>
            <div className={styles.serviceInfo}>
              <span className={styles.serviceLabel}>{s.title}</span>
              <h2>{s.tagline}</h2>
              <p>{s.description}</p>
              <ul className={styles.features}>
                {s.features.map(f => (
                  <li key={f}><span className={styles.check}>✓</span> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={styles.enquireBtn}>Enquire Now →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Not Sure Which Service Fits?</h2>
        <p>Reach out and our team will guide you to the right solution for your needs.</p>
        <Link to="/contact" className={styles.ctaBtn}>Talk to Us</Link>
      </div>
    </div>
  );
}
