import React from 'react';
import { FaStar, FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaWifi, FaUtensils, FaArrowRight } from 'react-icons/fa';
import styles from './TopHotels.module.css';

const hotels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    favorite: true,
    location: 'Ao Nang, Thailand',
    title: 'The brown bench near swimming pool Hotel',
    features: [
      { icon: <FaBed />, label: '2 Bed room' },
      { icon: <FaBath />, label: '2 Wash room' },
      { icon: <FaUtensils />, label: '1 kitchen' },
      { icon: <FaWifi />, label: 'Internet' },
    ],
    price: 85,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    favorite: true,
    location: 'Kigali, Rwanda',
    title: 'Green trees and body of water Marriot Hotel',
    features: [
      { icon: <FaBed />, label: '2 Bed room' },
      { icon: <FaBath />, label: '2 Wash room' },
      { icon: <FaUtensils />, label: '1 kitchen' },
      { icon: <FaWifi />, label: 'Internet' },
    ],
    price: 85,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    favorite: false,
    location: 'Ao Nang, Thailand',
    title: 'Painted house surrounded with trees Hotel',
    features: [
      { icon: <FaBed />, label: '2 Bed room' },
      { icon: <FaBath />, label: '2 Wash room' },
      { icon: <FaUtensils />, label: '1 kitchen' },
      { icon: <FaWifi />, label: 'Internet' },
    ],
    price: 85,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    favorite: true,
    location: 'Ao Nang, Thailand',
    title: 'house pool Jungle Pool Indonesia Hotel',
    features: [
      { icon: <FaBed />, label: '2 Bed room' },
      { icon: <FaBath />, label: '2 Wash room' },
      { icon: <FaUtensils />, label: '1 kitchen' },
      { icon: <FaWifi />, label: 'Internet' },
    ],
    price: 85,
  },
];

const TopHotels = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Discover The World&apos;s Class Top Hotel</h2>
        <div className={styles.subtitle}>
          One site <span className={styles.badge}>34,500+</span> most popular experience you&apos;ll remember
        </div>
      </div>
      <div className={styles.grid}>
        {/* First row */}
        <div className={styles.row}>
          <div className={styles.hotelCard}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img src={hotels[0].image} alt={hotels[0].title} className={styles.image} />
                <div className={styles.rating}><FaStar /> {hotels[0].rating}</div>
                <div className={styles.favorite} style={{color: hotels[0].favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
              </div>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.location}><FaMapMarkerAlt /> {hotels[0].location}</div>
              <div className={styles.hotelTitle}>{hotels[0].title}</div>
              <div className={styles.featuresRow}>
                {hotels[0].features.map((f, i) => (
                  <span className={styles.feature} key={i}>{f.icon} {f.label}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.price}>${hotels[0].price}.00<span className={styles.perNight}>/per night</span></div>
                <button className={styles.bookBtn}>Book Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
          <div className={styles.hotelCard}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img src={hotels[1].image} alt={hotels[1].title} className={styles.image} />
                <div className={styles.rating}><FaStar /> {hotels[1].rating}</div>
                <div className={styles.favorite} style={{color: hotels[1].favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
              </div>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.location}><FaMapMarkerAlt /> {hotels[1].location}</div>
              <div className={styles.hotelTitle}>{hotels[1].title}</div>
              <div className={styles.featuresRow}>
                {hotels[1].features.map((f, i) => (
                  <span className={styles.feature} key={i}>{f.icon} {f.label}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.price}>${hotels[1].price}.00<span className={styles.perNight}>/per night</span></div>
                <button className={styles.bookBtn}>Book Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className={styles.row}>
          <div className={styles.hotelCard}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img src={hotels[2].image} alt={hotels[2].title} className={styles.image} />
                <div className={styles.rating}><FaStar /> {hotels[2].rating}</div>
                <div className={styles.favorite} style={{color: hotels[2].favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
              </div>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.location}><FaMapMarkerAlt /> {hotels[2].location}</div>
              <div className={styles.hotelTitle}>{hotels[2].title}</div>
              <div className={styles.featuresRow}>
                {hotels[2].features.map((f, i) => (
                  <span className={styles.feature} key={i}>{f.icon} {f.label}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.price}>${hotels[2].price}.00<span className={styles.perNight}>/per night</span></div>
                <button className={styles.bookBtn}>Book Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
          <div className={styles.hotelCard}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <img src={hotels[3].image} alt={hotels[3].title} className={styles.image} />
                <div className={styles.rating}><FaStar /> {hotels[3].rating}</div>
                <div className={styles.favorite} style={{color: hotels[3].favorite ? '#ffb347' : '#fff'}}><FaHeart /></div>
              </div>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.location}><FaMapMarkerAlt /> {hotels[3].location}</div>
              <div className={styles.hotelTitle}>{hotels[3].title}</div>
              <div className={styles.featuresRow}>
                {hotels[3].features.map((f, i) => (
                  <span className={styles.feature} key={i}>{f.icon} {f.label}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.price}>${hotels[3].price}.00<span className={styles.perNight}>/per night</span></div>
                <button className={styles.bookBtn}>Book Now <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TopHotels; 