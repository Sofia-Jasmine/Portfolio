import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Calendar, ExternalLink, Award } from 'lucide-react';
import { hackathons } from '../../data/portfolioData';
import styles from './Hackathons.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

function HackathonCard({ hackathon, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    // 3D dynamic tilt values
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({ x, y });

    // Interactive mouse-following glow coordinates
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${mouseX}%`);
    cardRef.current.style.setProperty('--mouse-y', `${mouseY}%`);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const glowColor = hackathon.color === '#00F5FF'
    ? 'rgba(0, 245, 255, 0.25)'
    : hackathon.color === '#9B6DFF'
    ? 'rgba(155, 109, 255, 0.25)'
    : hackathon.color === '#FF6B9D'
    ? 'rgba(255, 107, 157, 0.25)'
    : 'rgba(255, 179, 71, 0.25)';

  const borderColor = hackathon.color === '#00F5FF'
    ? 'rgba(0, 245, 255, 0.2)'
    : hackathon.color === '#9B6DFF'
    ? 'rgba(155, 109, 255, 0.2)'
    : hackathon.color === '#FF6B9D'
    ? 'rgba(255, 107, 157, 0.2)'
    : 'rgba(255, 179, 71, 0.2)';

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
          '--card-glow': glowColor,
          '--card-border': borderColor,
        }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.titleArea}>
            <span className={styles.organizer}>
              <Trophy size={14} />
              {hackathon.organizer}
            </span>
            <h3 className={styles.title}>{hackathon.title}</h3>
          </div>
          <div className={styles.meta}>
            <Calendar size={13} />
            <span>{hackathon.date}</span>
          </div>
        </div>

        <p className={styles.desc}>{hackathon.description}</p>

        <div className={styles.footer}>
          <a
            href={hackathon.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certificateLink}
            aria-label={`View Certificate for ${hackathon.title}`}
          >
            <Award size={15} />
            <span>View Certificate</span>
            <ExternalLink size={12} style={{ opacity: 0.8 }} />
          </a>

          <div className={styles.pathInfo} title={hackathon.localPath}>
            <span className={styles.pathLabel}>Verified Local Copy</span>
            <span className={styles.pathValue}>{hackathon.localPath}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hackathons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hackathons" className={styles.hackathons} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Competition & Innovation</p>
          <h2 className="section-title">
            Hackathons <span className="gradient-text">Attended</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {hackathons.map((h, i) => (
            <HackathonCard key={h.title} hackathon={h} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
