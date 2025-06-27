import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        placeholder="Destination"
        className={styles.input}
      />
      <input
        type="date"
        className={styles.input}
      />
      <input
        type="date"
        className={styles.input}
      />
      <input
        type="number"
        min="1"
        placeholder="Guests"
        className={`${styles.input} ${styles.inputNumber}`}
      />
      <button
        type="submit"
        className={styles.button}
      >
        Search123
      </button>
    </form>
  );
}

export default SearchBar; 