import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Globe, Wrench } from 'lucide-react';
import { skills, levelLabel } from '../../data/portfolioData';
import styles from './Skills.module.css';

const iconMap = { Code2, Brain, Globe, Wrench };

const TOTAL_BARS = 5;

const levelColor = (level) => {
  if (level <= 2) return 'basic';
  if (level === 3) return 'intermediate';
  return 'proficient';
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

function ProficiencyBar({ level, inView }) {
  const colorClass = levelColor(level);
  return (
    <div className={styles.barRow}>
      <div className={styles.bars}>
        {Array.from({ length: TOTAL_BARS }).map((_, i) => (
          <motion.span
            key={i}
            className={`${styles.bar} ${i < level ? `${styles.filled} ${styles[colorClass]}` : styles.empty}`}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          />
        ))}
      </div>
      <span className={`${styles.levelTag} ${styles[`tag_${colorClass}`]}`}>
        {levelLabel(level)}
      </span>
    </div>
  );
}

function SkillRow({ item, inView }) {
  return (
    <motion.div 
      className={styles.skillRow}
      whileHover={{ x: 4, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <span className={styles.skillName}>{item.name}</span>
      <ProficiencyBar level={item.level} inView={inView} />
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className={styles.legend}>
            <span className={`${styles.legendDot} ${styles.basic}`} /> Basic
            <span className={`${styles.legendDot} ${styles.intermediate}`} /> Intermediate
            <span className={`${styles.legendDot} ${styles.proficient}`} /> Professional
          </div>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div 
                key={category.category} 
                variants={cardVariants} 
                className={styles.card}
                whileHover={{ 
                  y: -5,
                  scale: 1.01,
                  borderColor: 'rgba(0, 245, 255, 0.3)',
                  boxShadow: 'var(--glow-cyan)' 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <Icon size={18} />
                  </div>
                  <h3 className={styles.categoryName}>{category.category}</h3>
                </div>
                <div className={styles.skillList}>
                  {category.items.map((item) => (
                    <SkillRow key={item.name} item={item} inView={inView} />
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
