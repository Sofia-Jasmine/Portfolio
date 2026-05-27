import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import TypewriterText from './TypewriterText';
import { typewriterPhrases, personal } from '../../data/portfolioData';
import styles from './Hero.module.css';
import profileImg from '../../assets/profile.png';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      <ParticleCanvas />

      <div className={styles.overlay} />

      <div className={styles.heroGrid}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.greeting}>
            &gt; Hello, World! I'm
          </motion.p>

          <motion.h1 variants={itemVariants} className={styles.name}>
            Sofia Jasmine
          </motion.h1>

          <motion.div variants={itemVariants} className={styles.typewriterWrapper}>
            <TypewriterText phrases={typewriterPhrases} speed={75} pause={2000} />
          </motion.div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            CS Undergrad at SRM Institute of Science and Technology · CGPA 9.83
            <br />
            Passionate about Machine Learning, Data Science & building things that matter.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <motion.a
              href="#projects"
              className={styles.ctaPrimary}
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(0, 245, 255, 0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={16} />
              View My Work
            </motion.a>

            <motion.a
              href="/SofiaJasmine - Resume.pdf"
              download="SofiaJasmine - Resume.pdf"
              className={styles.ctaOutline}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(155, 109, 255, 0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className={styles.tags}
          >
            {['Python', 'ML / AI', 'React', 'Data Science', 'NLP'].map((tag) => (
              <motion.span 
                key={tag} 
                className={styles.tag}
                whileHover={{ 
                  y: -4, 
                  scale: 1.08, 
                  borderColor: 'rgba(102, 252, 241, 0.6)',
                  boxShadow: '0 4px 15px rgba(102, 252, 241, 0.2)' 
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className={styles.heroAvatarWrapper}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.heroAvatarRing} />
            <div className={styles.heroAvatar}>
              <img src={profileImg} alt="Sofia Jasmine" className={styles.heroAvatarImg} />
            </div>
            <div className={styles.heroAvatarGlow} />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.span>
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}
