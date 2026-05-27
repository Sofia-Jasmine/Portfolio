import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={styles.inner}>
        <p className={styles.copy}>
          Designed &amp; Built by{' '}
          <span className={styles.name}>Sofia Jasmine</span>
          {' '}with{' '}
          <Heart size={12} className={styles.heart} />
          {' '}© 2025
        </p>

        <p className={styles.stack}>
          React · Framer Motion · Vite
        </p>

        <motion.button
          onClick={scrollToTop}
          className={styles.topBtn}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
