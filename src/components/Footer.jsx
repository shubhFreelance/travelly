import React from 'react';
import { FaFacebookF, FaYoutube, FaPinterestP, FaTwitter, FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import styles from './Footer.module.css';

const services = [
  'Best Tour Guide',
  'Tour Booking',
  'Hotel Booking',
  'Ticket Booking',
  'Rental Services',
];
const company = [
  'About Company',
  'Community Blog',
  'Jobs and Careers',
  'latest News Blog',
  'Contact Us',
];
const destinations = [
  'African Safaris',
  'Alaska & Canada',
  'South America',
  'Middle East',
  'South America',
];
const categories = [
  'Adventure',
  'Hiking & Trekking',
  'Cycling Tours',
  'Family Tours',
  'Wildlife Tours',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.leftCol}>
          <div className={styles.logoRow}>
            <span className={styles.logoCircle}></span>
            <span className={styles.logoText}>Travelly</span>
          </div>
          <div className={styles.desc}>
            We curate bespoke itineraries tailored to your preferences, ensuring<br />
            every trip is seamless and enriching hidden gems beaten
          </div>
          <div className={styles.socialRow}>
            <a href="#" className={styles.social}><FaFacebookF /></a>
            <a href="#" className={styles.social}><FaYoutube /></a>
            <a href="#" className={styles.social}><FaPinterestP /></a>
            <a href="#" className={styles.social}><FaTwitter /></a>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.subscribeTitle}>Subscribe Newsletter</div>
          <div className={styles.subscribeSubtitle}>
            One site <span className={styles.badge}>34,500+</span> most popular experience you'll remember
          </div>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email Address" className={styles.emailInput} />
            <button className={styles.subscribeBtn} type="submit">
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomRow}>
        <div className={styles.col}><div className={styles.colTitle}>Services</div>{services.map(s => <div className={styles.colItem} key={s}>&#8250; {s}</div>)}</div>
        <div className={styles.col}><div className={styles.colTitle}>Company</div>{company.map(s => <div className={styles.colItem} key={s}>&#8250; {s}</div>)}</div>
        <div className={styles.col}><div className={styles.colTitle}>Destinations</div>{destinations.map(s => <div className={styles.colItem} key={s}>&#8250; {s}</div>)}</div>
        <div className={styles.col}><div className={styles.colTitle}>Categories</div>{categories.map(s => <div className={styles.colItem} key={s}>&#8250; {s}</div>)}</div>
        <div className={styles.col}>
          <div className={styles.colTitle}>Get In Touch</div>
          <div className={styles.contactItem}><FaMapMarkerAlt /> 578 Level, D-block 45 , Western Marg<br />Saket, Delhi</div>
          <div className={styles.contactItem}><FaEnvelope /> supportrevelly@gmail.com</div>
          <div className={styles.contactItem}><FaClock /> Mon - Fri, 08am - 05pm</div>
          <div className={styles.contactItem}><FaPhoneAlt />+91 8745124587</div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          @Shubham 2025 <span className={styles.brand}>Travelly</span>, All rights reserved
        </div>
        <div className={styles.links}>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Legal notice</a>
          <a href="#">Accessibility</a>
        </div>
        <div className={styles.upBtn}><span>↑</span></div>
      </div>
    </footer>
  );
} 