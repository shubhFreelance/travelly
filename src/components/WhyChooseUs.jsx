import React from 'react';
import { FaRocket, FaMapMarkedAlt, FaHotjar, FaBullseye, FaCar, FaUmbrellaBeach, FaMountain, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';
import styles from './WhyChooseUs.module.css';

const floatingIcons = [
  { icon: <FaRocket />, style: { top: '5%', left: '80%' } },
  { icon: <FaMapMarkedAlt />, style: { top: '15%', left: '10%' } },
  { icon: <FaCar />, style: { top: '50%', left: '2%' } },
  { icon: <FaHotjar />, style: { top: '80%', left: '20%' } },
  { icon: <FaBullseye />, style: { top: '10%', left: '95%' } },
  { icon: <FaUmbrellaBeach />, style: { top: '90%', left: '60%' } },
  { icon: <FaMountain />, style: { top: '80%', left: '90%' } },
  { icon: <FaGlobeAmericas />, style: { top: '50%', left: '98%' } },
];

const WhyChooseUs = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          Travel With Confidence<br />
          Top Reasons To Choose<br />
          Our Agency
        </h2>
        <p className={styles.subtitle}>
          We go above and beyond to make your travel dreams reality<br />
          hidden gems and must-see attractions
        </p>
        <div className={styles.experienceRow}>
          <span className={styles.expText}>We have</span>
          <span className={styles.expBadge}>25+ Years</span>
          <span className={styles.expText}>of experience</span>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>3k+</div>
            <div className={styles.statLabel}>Popular Destination</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>9m+</div>
            <div className={styles.statLabel}>Satisfied Clients</div>
          </div>
        </div>
        <button className={styles.ctaBtn}>
          Explore Destinations <FaArrowRight />
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.imageCircle}>
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80"
            alt="Happy Traveler"
            className={styles.travelerImg}
          />
          {floatingIcons.map((item, idx) => (
            <span key={idx} className={styles.floatingIcon} style={item.style}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 