import React from 'react';
import { FaStar, FaHeart, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import styles from './FeaturedExperiences.module.css';

const experiences = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    location: 'Tours, France',
    title: 'Brown Concrete Building Basilica St Martin',
    subtitle: '3 days 2 nights – Couple',
    price: 58,
    favorite: false,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    location: 'Widest, Italy',
    title: 'Blue lake water view taken travel with daytime',
    subtitle: '3 days 2 nights – Couple',
    price: 63,
    favorite: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    location: 'Rome, Italy',
    title: 'Woman standing near Colosseum, Rome',
    subtitle: '3 days 2 nights – Couple',
    price: 42,
    favorite: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    location: 'Rome, Italy',
    title: 'Woman standing near Colosseum, Rome',
    subtitle: '3 days 2 nights – Couple',
    price: 52,
    favorite: true,
  },
];

const FeaturedExperiences = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>Discover The World&apos;s Treasures With Travelly</h2>
      <div className={styles.subtitle}>
        One site <span className={styles.badge}>34,500+</span> most popular experience you&apos;ll remember
      </div>
    </div>
    <div className={styles.grid}>
      {experiences.map(exp => (
        <div className={styles.card} key={exp.id}>
          <div className={styles.imageWrapper}>
            <img src={exp.image} alt={exp.title} className={styles.image} />
            <div className={styles.rating}><FaStar /> {exp.rating}</div>
            <div className={styles.favorite} style={{color: exp.favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.location}><FaMapMarkerAlt /> {exp.location}</div>
            <div className={styles.cardTitle}>{exp.title}</div>
            <div className={styles.cardSubtitle}>{exp.subtitle}</div>
            <div className={styles.cardFooter}>
              <div className={styles.price}>${exp.price}.00<span className={styles.perPerson}>/per person</span></div>
              <button className={styles.bookBtn}>Book Now <FaArrowRight /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedExperiences; 