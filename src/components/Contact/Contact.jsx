import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Link2, GitFork, Mail, MapPin, Phone } from 'lucide-react';
import { personal } from '../../data/portfolioData';
import styles from './Contact.module.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: Link2, label: 'LinkedIn', href: personal.linkedin },
    { icon: GitFork, label: 'GitHub', href: personal.github },
    { icon: Mail, label: 'Email', href: `mailto:${personal.email}` },
  ];

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className="section-wrapper">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className={styles.subtitle}>
            Open to internship opportunities, research collaborations, and interesting projects.
            I would love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Form */}
          <motion.div variants={sectionVariants} className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>
              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <span>Message Sent — Opening Email Client</span>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info column */}
          <motion.div variants={sectionVariants} className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoText}>
                I am currently pursuing my B.Tech in Computer Science at SRM Institute of
                Science and Technology, Chennai. Feel free to reach out for any professional
                enquiries or collaborations.
              </p>

              <div className={styles.contactDetails}>
                <motion.a 
                  href={`mailto:${personal.email}`} 
                  className={styles.contactRow}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <div className={styles.contactIcon}><Mail size={15} /></div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>{personal.email}</p>
                  </div>
                </motion.a>
                <motion.div 
                  className={styles.contactRow}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <div className={styles.contactIcon}><Phone size={15} /></div>
                  <div>
                    <p className={styles.contactLabel}>Phone</p>
                    <p className={styles.contactValue}>{personal.phone}</p>
                  </div>
                </motion.div>
                <motion.div 
                  className={styles.contactRow}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <div className={styles.contactIcon}><MapPin size={15} /></div>
                  <div>
                    <p className={styles.contactLabel}>Location</p>
                    <p className={styles.contactValue}>Chennai, Tamil Nadu, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className={styles.socialsSection}>
              <p className={styles.socialsTitle}>Connect with me</p>
              <div className={styles.socialsRow}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    whileHover={{ 
                      scale: 1.06, 
                      y: -3, 
                      borderColor: 'rgba(102, 252, 241, 0.4)', 
                      boxShadow: '0 4px 15px rgba(102, 252, 241, 0.15)' 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              className={styles.availabilityCard}
              whileHover={{ y: -4, scale: 1.02, borderColor: 'rgba(0, 245, 255, 0.3)', boxShadow: 'var(--glow-cyan)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className={styles.availabilityDot} />
              <div>
                <p className={styles.availabilityTitle}>Open to Opportunities</p>
                <p className={styles.availabilityText}>
                  Internships, research roles, and collaborative projects in AI/ML and full-stack development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
