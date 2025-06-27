import React from 'react';
import { FaHeart, FaChevronRight } from 'react-icons/fa';
import styles from './PopularDestinations.module.css';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Thailand beach',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: true,
    bentoClass: styles.bentoLarge,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Parga, Greece',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: false,
    bentoClass: styles.bentoTall,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: 'Castellammare del Golfo, Italy',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: true,
    bentoClass: styles.bentoWide,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    title: 'Reserve of Canada, Canada',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: false,
    bentoClass: styles.bentoSmall,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
    title: 'Dubai united states',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: true,
    bentoClass: styles.bentoSmall,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    title: 'Milos, Greece',
    subtitle: '5352+ tours & 856+ Activity',
    favorite: false,
    bentoClass: styles.bentoWide,
  },
];

const gridVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 18,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const PopularDestinations = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Explore Popular Destinations</h2>
        <div className={styles.subtitle}>
          One site <span className={styles.badge}>34,500+</span> most popular experience
        </div>
      </div>
      <motion.div
        className={styles.bentoGrid}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {destinations.map(dest => (
          <motion.div
            className={`${styles.card} ${dest.bentoClass}`}
            key={dest.id}
            variants={cardVariants}
          >
            <div className={styles.imageWrapper}>
              <img src={dest.image} alt={dest.title} className={styles.image} />
              <div className={styles.favorite} style={{color: dest.favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{dest.title}</div>
              <div className={styles.cardSubtitle}>{dest.subtitle}</div>
              <div className={styles.arrow}><FaChevronRight /></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PopularDestinations; 