import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationCategories } from '../../data/portfolioData';
import styles from './Certifications.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const itemContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const total = certificationCategories.reduce((a, c) => a + c.items.length, 0);

  return (
    <section id="certifications" className={styles.section} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className={styles.subtitle}>
            {total} certifications across AI/ML, Web Dev, Cloud, and more
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certificationCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className={styles.card}
              style={{ '--cat-color': cat.color }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <Award size={17} />
                </div>
                <div>
                  <h3 className={styles.catName}>{cat.category}</h3>
                  <p className={styles.catCount}>{cat.items.length} certifications</p>
                </div>
              </div>

              <motion.ul
                className={styles.itemList}
                variants={itemContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {cat.items.map((item) => (
                  <motion.li 
                    key={item.name} 
                    variants={itemVariants} 
                    className={styles.item}
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <CheckCircle2 size={14} className={styles.check} />
                    <div>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemIssuer}>{item.issuer}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
