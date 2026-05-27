import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Globe, Calendar, Award, ExternalLink } from 'lucide-react';
import { experience } from '../../data/portfolioData';
import styles from './Experience.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

function TimelineItem({ entry, index, inView }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const itemInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
      variants={itemVariants}
      initial="hidden"
      animate={itemInView ? 'visible' : 'hidden'}
    >
      <motion.div 
        className={styles.card}
        whileHover={{ 
          y: -5, 
          scale: 1.02, 
          borderColor: 'rgba(0, 245, 255, 0.4)', 
          boxShadow: '0 10px 30px rgba(0, 245, 255, 0.15)' 
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <div className={styles.cardInner}>
          <div className={styles.meta}>
            <span className={styles.type}>
              {entry.type.includes('Programme') ? (
                <Globe size={12} />
              ) : (
                <Briefcase size={12} />
              )}
              {entry.type}
            </span>
            <span className={styles.period}>
              <Calendar size={12} />
              {entry.period}
            </span>
          </div>

          <h3 className={styles.title}>{entry.title}</h3>
          <p className={styles.company}>{entry.company}</p>

          <ul className={styles.description}>
            {entry.description.map((point, i) => (
              <li key={i} className={styles.point}>
                <span className={styles.bullet} />
                {point}
              </li>
            ))}
          </ul>

          <div className={styles.tags}>
            {entry.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          {entry.certificate && (
            <div className={styles.footer}>
              <a
                href={entry.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateLink}
                aria-label={`View Certificate for ${entry.title}`}
              >
                <Award size={14} />
                <span>View Certificate</span>
                <ExternalLink size={11} style={{ opacity: 0.8 }} />
              </a>

              <div className={styles.pathInfo} title={entry.localPath}>
                <span className={styles.pathLabel}>Verified Local Copy</span>
                <span className={styles.pathValue}>{entry.localPath}</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <div className={styles.dot}>
        <motion.div
          className={styles.dotInner}
          initial={{ scale: 0 }}
          animate={itemInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

function TimelineLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={styles.lineWrapper}>
      <motion.div className={styles.line} style={{ scaleY, originY: 0 }} />
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          <TimelineLine />
          {experience.map((entry, i) => (
            <TimelineItem key={entry.title} entry={entry} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
