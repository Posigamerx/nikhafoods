import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logo} alt="Nikha Foods" className={styles.logoImg} />
          </div>
          <p>Your trusted foodstuffs partner for wholesale, retail, and distribution across Nigeria.</p>
          <div className={styles.socials}>
            <a href="https://wa.me/2348082241504" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ color: 'green' }}><IoLogoWhatsapp /></a>
            <a href="https://www.instagram.com/nikhafoods" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: '#E1306C' }}><IoLogoInstagram /></a>
            <a href="https://www.tiktok.com/@nikhafoods" target="_blank" rel="noreferrer" aria-label="TikTok" style={{ color: 'black' }}><AiFillTikTok /></a>
            <a href="https://www.linkedin.com/in/omotolanibadmus" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: '#1877F2' }}><IoLogoLinkedin /></a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">Rice</Link></li>
            <li><Link to="/products">Vegetable Oil</Link></li>
            <li><Link to="/products">Pasta & Spaghetti</Link></li>
            <li><Link to="/products">Macaroni</Link></li>
            <li><Link to="/products">View All →</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li>📞 +234 808 224 1504</li>
            <li>📞 +234 706 307 4379</li>
            <li>✉️ sales@nikhafoods.com</li>
            <li>📍 7 Agunbiade Road, Oke koto , Agege, Lagos</li>
            <li>🕐 Mon–Sat: 9am – 6pm</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Nikha Foods. All rights reserved.</span>
        <span className={styles.tagline}>Quality · Reliability · Trust</span>
      </div>
    </footer>
  );
}
