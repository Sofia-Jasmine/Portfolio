import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, PenLine, ArrowRight } from 'lucide-react';
import { activities } from '../../data/portfolioData';
import styles from './Activities.module.css';

const iconMap = [TrendingUp, Users, PenLine];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

export default function Activities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="activities" className={styles.section} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Beyond Academics</p>
          <h2 className="section-title">
            Extra <span className="gradient-text">Activities</span>
          </h2>
          <p className={styles.subtitle}>
            Communities I contribute to and passions I pursue outside the classroom.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {activities.map((act, idx) => {
            const Icon = iconMap[idx] || Users;
            return (
              <motion.div
                key={act.org}
                variants={cardVariants}
                className={styles.card}
                style={{ '--act-color': act.color }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.orgName}>{act.org}</h3>
                </div>

                <p className={styles.description}>{act.description}</p>

                <div className={styles.timeline}>
                  {act.timeline.map((t, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.timelineItem}
                      whileHover={{ scale: 1.05, x: 2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    >
                      <div className={styles.timelineDot} />
                      <div className={styles.timelineContent}>
                        <span className={`${styles.role} ${t.current ? styles.currentRole : ''}`}>
                          {t.role}
                          {t.current && <span className={styles.currentBadge}>Current</span>}
                        </span>
                        <span className={styles.period}>{t.period}</span>
                      </div>
                      {i < act.timeline.length - 1 && (
                        <ArrowRight size={13} className={styles.arrow} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
