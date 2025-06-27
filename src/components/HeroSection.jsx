import React from 'react';
import { FaMapMarkerAlt, FaFlag, FaCalendarAlt, FaUserFriends, FaSearch, FaChevronDown } from 'react-icons/fa';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion';

const heroBg = 'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80';

const HeroSection = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay} />
      <motion.h1
        className={styles.heroTitle}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 60 }}
      >
        TOUR & TRAVEL
      </motion.h1>
      <div className={styles.searchBar}>
        <div className={styles.searchCol}>
          <span className={styles.searchLabel}><FaMapMarkerAlt /> Destinations</span>
          <span className={styles.searchValue}>City or Region <FaChevronDown style={{ fontSize: 12, marginLeft: 4 }} /></span>
        </div>
        <div className={styles.searchCol}>
          <span className={styles.searchLabel}><FaFlag /> All Activity</span>
          <span className={styles.searchValue}>Choose Activity <FaChevronDown style={{ fontSize: 12, marginLeft: 4 }} /></span>
        </div>
        <div className={styles.searchCol}>
          <span className={styles.searchLabel}><FaCalendarAlt /> Departure Date</span>
          <span className={styles.searchValue}>Date from</span>
        </div>
        <div className={styles.searchCol} style={{ minWidth: 100 }}>
          <span className={styles.searchLabel}><FaUserFriends /> Guests</span>
          <span className={styles.searchValue}>0</span>
        </div>
        <button className={styles.searchBtn}>
          Search <FaSearch />
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 