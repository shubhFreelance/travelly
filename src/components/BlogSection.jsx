import React from 'react';
import { FaCalendarAlt, FaRegCommentDots, FaArrowRight } from 'react-icons/fa';
import styles from './BlogSection.module.css';

const blogs = [
  {
    id: 1,
    category: 'Travel',
    title: 'Ultimate Guide to Planning Your Dream Vacation with Travelly Travel Agency',
    date: '21 June 2025',
    comments: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    category: 'Travel',
    title: 'Unforgettable Adventures Travel Agency Bucket List Experiences',
    date: '26 June 2025',
    comments: 5,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    category: 'Travel',
    title: 'Exploring Culture and way Cuisine Travel Agency\'s they Best Foodie Destinations',
    date: '26 June 2025',
    comments: 5,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
  },
];

const BlogSection = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>Read Latest News &amp; Blog</h2>
      <div className={styles.subtitle}>
        One site <span className={styles.badge}>34,500+</span> most popular experience you&apos;ll remember
      </div>
    </div>
    <div className={styles.grid}>
      {blogs.map(blog => (
        <div className={styles.card} key={blog.id}>
          <div className={styles.category}>{blog.category}</div>
          <div className={styles.cardTitle}>{blog.title}</div>
          <div className={styles.metaRow}>
            <span className={styles.meta}><FaCalendarAlt /> {blog.date}</span>
            <span className={styles.meta}><FaRegCommentDots /> Comments ({blog.comments})</span>
          </div>
          <div className={styles.imageWrapper}>
            <img src={blog.image} alt={blog.title} className={styles.image} />
          </div>
          <button className={styles.readMoreBtn}>
            Read More <FaArrowRight />
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection; 