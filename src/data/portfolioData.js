export const personal = {
  name: 'Sofia Jasmine',
  email: 'sofiajasmine159@gmail.com',
  phone: '+91 8667693994',
  linkedin: 'https://www.linkedin.com/in/sofia-jasmine-08598631b',
  github: 'https://github.com/sofia-jasmine',
  role: 'CS Undergrad | AIML & Data Science Enthusiast',
};

export const typewriterPhrases = [
  'AI Engineer in the Making',
  'Curious Learner & Builder',
  'Passionate about Data Science',
  'Machine Learning Enthusiast',
  'Problem Solver at Heart',
];

export const stats = [
  { label: 'CGPA', value: 9.83, suffix: '', decimals: 2 },
  { label: 'Internships', value: 3, suffix: '+', decimals: 0 },
  { label: 'Projects', value: 3, suffix: '+', decimals: 0 },
  { label: 'Hackathons', value: 4, suffix: '+', decimals: 0 },
  { label: 'Certifications', value: 15, suffix: '+', decimals: 0 },
];

export const education = [
  {
    degree: 'B.Tech CSE',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai',
    period: '2024 – 2028',
    grade: 'CGPA: 9.83',
  },
  {
    degree: '12th Grade',
    institution: 'M.C.C Matriculation Higher Secondary School',
    location: 'Chennai',
    period: '2024',
    grade: '77.8%',
  },
  {
    degree: '10th Grade',
    institution: 'M.C.C Matriculation Higher Secondary School',
    location: 'Chennai',
    period: '2022',
    grade: '93.8%',
  },
];

// level: 2=Basic, 3=Intermediate, 5=Proficient
export const skills = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: [
      { name: 'Python', level: 5 },
      { name: 'C', level: 5 },
      { name: 'C++', level: 5 },
      { name: 'SQL', level: 3 },
      { name: 'Java', level: 2 },
      { name: 'JavaScript', level: 2 },
    ],
  },
  {
    category: 'ML / Data Science',
    icon: 'Brain',
    items: [
      { name: 'NumPy', level: 5 },
      { name: 'Pandas', level: 5 },
      { name: 'Scikit-learn', level: 5 },
      { name: 'Matplotlib', level: 5 },
      { name: 'EDA', level: 5 },
      { name: 'NLP', level: 3 },
      { name: 'TensorFlow', level: 2 },
    ],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    items: [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
      { name: 'React.js', level: 2 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    items: [
      { name: 'Git', level: 5 },
      { name: 'GitHub', level: 5 },
      { name: 'VS Code', level: 5 },
      { name: 'Jupyter Notebook', level: 5 },
      { name: 'Anaconda', level: 5 },
      { name: 'Google Colab', level: 5 },
      { name: 'Antigravity', level: 5 },
      { name: 'Claude Code', level: 3 },
      { name: 'Tableau', level: 3 },
      { name: 'Power BI', level: 3 },
      { name: 'Cursor', level: 2 },
      { name: 'Codex', level: 2 },
      { name: 'Linux', level: 2 },
    ],
  },
];

export const levelLabel = (level) => {
  if (level <= 2) return 'Basic';
  if (level === 3) return 'Intermediate';
  return 'Professional';
};

export const experience = [
  {
    title: 'AI & ML Internship Trainee',
    company: 'PlaceMantra Pvt Ltd',
    period: 'Oct 2024 – Dec 2024',
    type: 'Internship · Remote',
    description: [
      'Built a spam detection system using NLP and binary classification techniques.',
      'Implemented clustering algorithms for pattern recognition in large datasets.',
    ],
    tags: ['NLP', 'Machine Learning', 'Python', 'Classification'],
    certificate: '/certifications/INTERNSHIP CERTIFICATE @Sofia Jasmine.pdf',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Internships & Projects\\SEM 1\\Certificate\\INTERNSHIP CERTIFICATE @Sofia Jasmine.pdf',
  },
  {
    title: 'Global Immersion Programme – Singapore',
    company: 'SRM Institute of Science and Technology',
    period: 'Feb 2025',
    type: 'Programme',
    description: [
      '5-day international programme focused on urban innovation, AI, and sustainability.',
      'Collaborated with URA, NUS, Hyundai HMGICS, and Lifelong Learning Institute.',
      'Site visits: Marina Barrage, Parliament of Singapore, Land Transport Authority.',
      'Received certifications from ACE International, Commonwealth Students Association, and G17 University Ambassadors.',
    ],
    tags: ['AI', 'Urban Innovation', 'Sustainability', 'International'],
  },
  {
    title: 'Data Science & ML Intern',
    company: 'Labmentix',
    period: 'Jun 2025 – Jul 2025',
    type: 'Internship · Remote',
    description: [
      'FBI crime trends forecasting using ARIMA and Prophet time-series models.',
      'CNN-based brain tumor detection from MRI scan data.',
      'Financial risk modeling, PhonePe transaction dashboards, and job market analysis.',
    ],
    tags: ['ARIMA', 'Prophet', 'CNN', 'TensorFlow', 'Power BI'],
    certificate: '/certifications/Labmentix - internship.pdf',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Certifications\\Labmentix - internship.pdf',
  },
  {
    title: 'Data Analytics Intern',
    company: 'Oasis Infobyte',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship · Remote',
    description: [
      'Developed classification and prediction models such as Iris flower classification and car price prediction.',
      'Conducted detailed unemployment rate analysis and generated data-driven reports.',
    ],
    tags: ['Python', 'Machine Learning', 'Data Analytics', 'Data Visualization', 'Classification'],
    certificate: '/certifications/Oasis_Infobyte_Internship_Certificate.png',
    localPath: 'C:\\Users\\sofia\\OneDrive\\Pictures\\Screenshots\\Screenshot 2026-05-27 194421.png',
  },
];

export const projects = [
  {
    title: 'UNO vs Agentic AI',
    description:
      'A browser-based UNO card game where the opponent is powered by an agentic AI. The AI evaluates hand state, tracks played cards, and makes strategic decisions — mimicking human-level UNO play with dynamic rule enforcement and animated card interactions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Agentic AI'],
    color: '#66FCF1',
    github: 'https://github.com/Sofia-Jasmine/UNO-game-using-Agentic-AI',
  },
  {
    title: 'Disaster Resource Management System',
    description:
      'Full-stack web application with secure Google OAuth authentication and an ACID-compliant MySQL database. Features structured request verification, priority-based resource allocation, and transaction management for real-time disaster relief coordination.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Google API', 'JavaScript'],
    color: '#45A29E',
    github: 'https://github.com/Sofia-Jasmine/Disaster_Management_System',
  },
  {
    title: 'Diabetics Early Diagnosis',
    description:
      'Hybrid ML system combining fuzzy logic with classical classifiers for early-stage diabetes detection. A React-powered interface lets users input clinical data and receive interpretable risk assessments with confidence scores.',
    tech: ['React', 'Python', 'Scikit-learn', 'Fuzzy Logic', 'ML'],
    color: '#66FCF1',
    github: 'https://github.com/Sofia-Jasmine/Diabetics-Diagnosis',
  },
];

export const certificationCategories = [
  {
    category: 'AI & Machine Learning',
    color: '#66FCF1',
    items: [
      { name: 'AI & ML', issuer: 'ICTRD' },
      { name: 'Data Analytics using Python & SQL', issuer: 'NIIT' },
      { name: 'Design Thinking', issuer: 'NPTEL' },
    ],
  },
  {
    category: 'Web Development',
    color: '#45A29E',
    items: [
      { name: 'UI Development with React', issuer: 'FITA Academy' },
      { name: 'JavaScript', issuer: 'TCS iON Digital Learning Hub' },
      { name: 'HTML', issuer: 'TCS iON Digital Learning Hub' },
    ],
  },
  {
    category: 'Programming Languages',
    color: '#33B5AD',
    items: [
      { name: 'Java Programming', issuer: 'Great Learning' },
      { name: 'Programming in C', issuer: 'SSI Limited' },
      { name: 'C++ Programming', issuer: 'Simplilearn' },
    ],
  },
  {
    category: 'Cloud Platforms',
    color: '#8CAAA8',
    items: [
      { name: 'AWS Basics', issuer: 'Udemy' },
      { name: 'Google Cloud Basics', issuer: 'Udemy' },
      { name: 'Microsoft Azure Basics', issuer: 'Udemy' },
    ],
  },
  {
    category: 'Tools & Systems',
    color: '#A5D8D5',
    items: [
      { name: 'Git & GitHub', issuer: 'Simplilearn' },
      { name: 'Kali Linux', issuer: 'Simplilearn' },
      { name: 'WordPress', issuer: 'Simplilearn' },
    ],
  },
];

export const hackathons = [
  {
    title: 'Synthetix 3.0 Hackathon',
    organizer: 'VIT Chennai',
    date: 'Jan 2025',
    description: 'Participated and designed innovative technological solutions under highly competitive constraints, fostering teamwork and intense problem-solving skills.',
    certificate: '/certifications/Synthetix Participation Certificate - Hackathon.pdf',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Certifications\\Synthetix Participation Certificate - Hackathon.pdf',
    color: '#66FCF1',
  },
  {
    title: "Invente'25",
    organizer: 'SSN College of Engineering',
    date: 'Sept 2025',
    description: 'Designed and presented high-impact technical prototypes, demonstrating rigorous engineering workflows and AI applications.',
    certificate: '/certifications/SSN Hackathon - Certificate.pdf',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Certifications\\SSN Hackathon - Certificate.pdf',
    color: '#45A29E',
  },
  {
    title: 'Smart India Hackathon',
    organizer: 'Government of India (SIH)',
    date: 'Sept 2025',
    description: 'Engaged in a national-level platform tackling complex national problems, delivering robust engineering architectures to address societal needs.',
    certificate: '/certifications/Sofia Jasmine SIH Certificate.pdf',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Certifications\\Sofia Jasmine SIH Certificate.pdf',
    color: '#3A8783',
  },
  {
    title: "Intellithon '25",
    organizer: 'Hindustan Institute of Technology and Science (HITS)',
    date: 'Oct 2025',
    description: 'Developed and tested predictive ML pipelines during a structured team hackathon, earning recognition for implementation quality and potential.',
    certificate: '/certifications/HITS Hackathon.jpeg',
    localPath: 'C:\\Sofia Jasmine\\Learning\\Certifications\\HITS Hackathon.jpeg',
    color: '#8FEAE5',
  },
];

export const activities = [
  {
    org: 'TechVayuna',
    timeline: [
      { role: 'AI Domain Member', period: 'Jan 2025', current: false },
      { role: 'AI Lead', period: 'Apr 2026', current: true },
    ],
    description: 'Leading AI initiatives and mentoring peers in machine learning and generative AI concepts within the technical community.',
    color: '#66FCF1',
  },
  {
    org: 'Computer Society of India (CSI)',
    timeline: [
      { role: 'Active Member', period: 'Sep 2024', current: true },
    ],
    description: 'Participating in technical workshops, seminars, and knowledge-sharing sessions focused on emerging CS trends.',
    color: '#45A29E',
  },
  {
    org: 'Creative Writing',
    timeline: [
      { role: 'Enthusiast', period: 'Ongoing', current: true },
    ],
    description: 'Passionate about storytelling, technical writing, and crafting narratives that blend technology with human experience.',
    color: '#33B5AD',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];
