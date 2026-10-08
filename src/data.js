// Central content file. Fill in the empty URLs when you have real ones;
// empty values render as disabled buttons instead of broken links.
export const profile = {
  name: 'Hukam Singh',
  role: 'Java | Spring Boot | React Developer',
  headline: 'Java & Spring Boot developer building REST APIs, backend applications and modern React interfaces.',
  intro: 'I build reliable backend applications, REST APIs and modern web interfaces using Java, Spring Boot, React and MySQL.',
  about: 'I am a Java developer focused on building backend applications and modern web interfaces. I work with Java, Spring Boot, REST APIs, MySQL, Hibernate, React and JavaScript. I enjoy learning new technologies by building real-world projects and solving practical problems.',
  photo: '/profile.png',
  // TODO: add real values
  email: 'hukamsinghnbh@gmail.com',
  github: 'https://github.com/HUKAMSINGH79',
  linkedin: 'https://www.linkedin.com/in/hukam-singh-983154222/',
  resume: '/Update_HS_Resume.pdf', // e.g. '/Hukam_Singh_Resume.pdf' after placing the file in /public
}

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export const aboutPoints = [
  'Java development', 'Spring Boot', 'REST API development',
  'Database development', 'React frontend development', 'Learning through real-world projects',
]

export const focusCards = [
  { icon: 'Coffee', title: 'Java & Spring Boot', text: 'Backend applications and services' },
  { icon: 'Webhook', title: 'REST APIs', text: 'Clean, well-structured endpoints' },
  { icon: 'Component', title: 'React', text: 'Modern, responsive interfaces' },
  { icon: 'Database', title: 'MySQL', text: 'Relational data with Hibernate & JPA' },
]

export const skillGroups = [
  { title: 'Programming', icon: 'Code2', skills: [['Java', 'Coffee'], ['JavaScript', 'Braces'], ['SQL', 'Database']] },
  { title: 'Backend', icon: 'Server', skills: [['Spring Boot', 'Leaf'], ['Spring', 'Sprout'], ['REST API', 'Webhook'], ['Hibernate', 'Layers'], ['JPA', 'Boxes']] },
  { title: 'Frontend', icon: 'LayoutDashboard', skills: [['React', 'Component'], ['HTML', 'FileCode'], ['CSS', 'Palette'], ['JavaScript', 'Braces'], ['Material UI', 'LayoutGrid']] },
  { title: 'Database', icon: 'Database', skills: [['MySQL', 'Database']] },
  { title: 'Tools', icon: 'Wrench', skills: [['Git', 'GitBranch'], ['GitHub', 'Github'], ['Maven', 'Package'], ['Postman', 'Send'], ['IntelliJ IDEA', 'Terminal']] },
]

export const aboutParagraphs = [
  'I’m a Java developer focused on building backend applications, REST APIs and modern web interfaces. I work with Java, Spring Boot, Hibernate/JPA, MySQL and React, and I strengthen my skills by building practical, real-world projects.',
  'My current focus is developing production-style applications, improving backend architecture, working with APIs and databases, and building clean user interfaces with React.',
]

export const aboutCards = [
  { n: '01', title: 'Backend Development', text: 'Java, Spring Boot and REST APIs' },
  { n: '02', title: 'Frontend Development', text: 'React and modern responsive interfaces' },
  { n: '03', title: 'Database & APIs', text: 'MySQL, Hibernate/JPA and API integration' },
]

export const journey = ['Java Development', 'Spring Boot & REST APIs', 'Database & Hibernate/JPA', 'React Frontend', 'Real-world Projects']

// Add screenshots to /public/projects/ using the file names below. Until a file exists, the card shows a "coming soon" panel.
// Leave github/demo empty until real URLs exist; the buttons stay disabled.
export const projects = [
  {
    title: 'Payment Integration System', category: 'Backend / Payment Integration', image: '/projects/payment.png',
    description: 'A Spring Boot payment integration application demonstrating secure order creation, Razorpay integration and payment verification through REST APIs.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Razorpay', 'Postman'],
    features: ['Payment order creation', 'Razorpay integration', 'Payment verification', 'REST API endpoints', 'JSON request/response handling'],
    architecture: ['Client', 'Spring Boot REST API', 'Payment Service', 'Razorpay'],
    github: '', demo: '',
  },
  {
    title: 'Keystone Service Management Dashboard', category: 'Frontend / Dashboard', image: '/projects/keystone.png',
    description: 'A responsive service management dashboard designed to visualize work orders, SLA status, technician availability, customers and service requests.',
    tech: ['React', 'JavaScript', 'Material UI'],
    features: ['KPI dashboard', 'Work order status', 'SLA monitoring', 'Technician availability', 'Customer overview', 'Service request queue', 'Responsive UI'],
    github: '', demo: '',
  },
  {
    title: 'NaukriSphere UI', category: 'Frontend / Job Platform', image: '/projects/naukrisphere.png',
    description: 'A modern job-search interface designed to provide a clean and intuitive experience for job seekers and recruiters.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    features: ['Job listings', 'Search and filtering', 'Job details', 'Responsive design', 'Modern dashboard UI'],
    github: '', demo: '',
  },
]
