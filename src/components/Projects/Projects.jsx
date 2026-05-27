import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const isCyan = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className={styles.cardWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease',
      }}
    >
      <div
        className={styles.card}
        style={{
          '--card-glow': isCyan
            ? 'rgba(0, 245, 255, 0.25)'
            : 'rgba(155, 109, 255, 0.25)',
          '--card-border': isCyan
            ? 'rgba(0, 245, 255, 0.2)'
            : 'rgba(155, 109, 255, 0.2)',
        }}
      >
        <div className={styles.cardTop}>
          <div className={styles.cardNumber}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className={styles.cardActions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                aria-label="View on GitHub"
              >
                <GitFork size={17} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                aria-label="Live demo"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techList}>
          {project.tech.map((t) => (
            <motion.span 
              key={t} 
              className={styles.techBadge}
              whileHover={{ y: -2, scale: 1.08, backgroundColor: 'rgba(0, 245, 255, 0.15)', color: '#fff' }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
