import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${open ? styles.navOpen : ""}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Nikha Foods" className={styles.logoImg} />
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`${styles.link} ${pathname === l.to ? styles.active : ""}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact" className={styles.cta}>Get a Quote</Link>
        </li>
      </ul>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span className={open ? styles.x1 : ""}></span>
        <span className={open ? styles.x2 : ""}></span>
        <span className={open ? styles.x3 : ""}></span>
      </button>
    </nav>
  );
}
