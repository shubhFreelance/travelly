import React, { useState } from 'react';
import { FaChevronDown, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', hasDropdown: true },
  { label: 'About', hasDropdown: false },
  { label: 'Tours', hasDropdown: true },
  { label: 'Destinations', hasDropdown: true },
  { label: 'Pages', hasDropdown: true },
  { label: 'Blog', hasDropdown: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(open => !open);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoCircle}></span>
        <span className={styles.logoText}>Travelly</span>
      </div>
      <div className={styles.navLinksDesktop}>
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            {navLinks.map(link => (
              <li key={link.label} className={styles.navLink}>
                {link.label} {link.hasDropdown && <FaChevronDown style={{ fontSize: 12, marginLeft: 4 }} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.rightSideDesktop}>
        <button className={styles.bookNowBtn}>
          Book Now <span style={{ fontSize: 18, marginLeft: 6 }}>↗</span>
        </button>
      </div>
      <button className={styles.menuBtn} onClick={handleMenuToggle} aria-label="Open Menu">
        <FaBars style={{ color: '#fff', fontSize: 24, cursor: 'pointer' }} />
      </button>
      <div className={`${styles.navLinksContainerMobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.navLinksMobile}>
          {navLinks.map(link => (
            <li key={link.label} className={styles.navLink} onClick={handleNavClick}>
              {link.label} {link.hasDropdown && <FaChevronDown style={{ fontSize: 12, marginLeft: 4 }} />}
            </li>
          ))}
        </ul>
        <button className={styles.closeBtn} onClick={handleMenuToggle} aria-label="Close Menu">
          <FaTimes />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 