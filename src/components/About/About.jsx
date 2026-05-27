import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { stats, education, personal } from '../../data/portfolioData';
import styles from './About.module.css';
import profileImg from '../../assets/profile.png';

function StatCounter({ value, suffix, decimals, label, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div 
      className={styles.stat}
      whileHover={{ y: -6, scale: 1.05, borderColor: 'rgba(0, 245, 255, 0.4)', boxShadow: 'var(--glow-cyan)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <span className={styles.statValue}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={sectionVariants} className={styles.avatarCol}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>
                <img src={profileImg} alt="Sofia Jasmine" className={styles.avatarImage} />
              </div>
              <div className={styles.avatarGlow} />
            </div>

            <div className={styles.quickInfo}>
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Degree</span>
                <span className={styles.quickValue}>B.Tech CSE</span>
              </div>
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>University</span>
                <span className={styles.quickValue}>SRMIST, Chennai</span>
              </div>
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Batch</span>
                <span className={styles.quickValue}>2024 – 2028</span>
              </div>
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Focus</span>
                <span className={styles.quickValue}>AI / ML / Data Science</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className={styles.bioCol}>
            <div className={styles.bioCard}>
              <p className={styles.bio}>
                I'm a Computer Science undergraduate at{' '}
                <span className={styles.highlight}>SRM Institute of Science and Technology</span>,
                Chennai, pursuing my B.Tech (2024–2028) with a{' '}
                <span className={styles.highlight}>CGPA of 9.83</span>.
              </p>
              <p className={styles.bio}>
                My passion sits at the intersection of{' '}
                <span className={styles.highlight}>Artificial Intelligence</span>,{' '}
                <span className={styles.highlight}>Machine Learning</span>, and{' '}
                <span className={styles.highlight}>Data Science</span>. I love turning raw data into
                actionable insights and building intelligent systems that solve real-world problems.
              </p>
              <p className={styles.bio}>
                From forecasting FBI crime trends with time-series models to diagnosing diabetes
                with fuzzy logic — I thrive on projects that challenge me to think differently.
                When I'm not coding, you'll find me writing creatively or exploring new technology.
              </p>
            </div>

            <div className={styles.statsRow}>
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} inView={inView} />
              ))}
            </div>

            <div className={styles.educationSection}>
              <p className={styles.educationTitle}>Education</p>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className={styles.eduCard}
                  variants={sectionVariants}
                  whileHover={{ 
                    x: 6,
                    scale: 1.01,
                    borderColor: 'rgba(155, 109, 255, 0.5)',
                    boxShadow: '0 4px 20px rgba(155, 109, 255, 0.15)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className={styles.eduIcon}>
                    <GraduationCap size={16} />
                  </div>
                  <div className={styles.eduContent}>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    <p className={styles.eduInstitution}>
                      <MapPin size={11} style={{ display: 'inline', marginRight: 4 }} />
                      {edu.institution}, {edu.location}
                    </p>
                    <div className={styles.eduMeta}>
                      <span>
                        <Calendar size={11} style={{ display: 'inline', marginRight: 4 }} />
                        {edu.period}
                      </span>
                      <span className={styles.grade}>{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
