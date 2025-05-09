// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const isDark = localStorage.getItem('theme') === 'dark';
document.documentElement.classList.toggle('dark', isDark);
sunIcon.classList.toggle('hidden', !isDark);
moonIcon.classList.toggle('hidden', isDark);

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  sunIcon.classList.toggle('hidden', !isDark);
  moonIcon.classList.toggle('hidden', isDark);
});

// Experience Data
const experiences = [
  {
    title: 'Co-Founder & Tech Lead',
    company: 'trymodulus.com',
    period: 'Apr 2025 - Present',
    description: [
      'Leading all technical development and architecture decisions for the platform',
      'Managing and mentoring a team of development interns',
      'Implementing full-stack solutions using modern web technologies',
      'Overseeing deployment, scaling, and technical infrastructure'
    ]
  },

  {
    title: 'Full Stack Developer Intern',
    company: 'Showtime',
    period: 'Feb 2025 - Present',
    description: 'Working with the backend currently'
  },
  {
    title: 'SDE Intern',
    company: 'Code Inbound LLP',
    period: 'Sept 2024 - Feb 2025',
    description: [
      'Developed new features for the Network Management System using React.js, Redux, and TypeScript.',
      'Identified and resolved critical production bugs, enhancing system stability.'
    ]
  },
  {
    title: 'Web Developer Intern',
    company: 'InstoQR',
    period: 'June 2024 - Aug 2024',
    description: [
      'Engineered a full-stack MERN application for table reservations and food ordering.',
      'Implemented route protection and mobile-friendly UI.'
    ]
  }
];

// Projects Data
const projects = [
  {
    title: 'Modulus',
    description: 'Platform helping students excel in their careers with mentorship, interview practice, and collaborative opportunities.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'NeonDB', 'Prisma', 'Razorpay'],
    live: 'https://trymodulus.com',
    github: 'https://github.com/divyansharma001',
    category: 'Real Users',
    features: [
      'Expert Mentorship & Career Guidance',
      'Peer-to-Peer Interview Practice',
      'Case Competition Partner Finder',
      'Real Interview Questions & Insights'
    ]
  },
  {
    title: 'CrackIt',
    description: 'Level up your placement game. Providing tools and insights to land offers, helping 200+ users kickstart their careers.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Clerk', 'Vercel'],
    github: 'https://github.com/divyansharma001/CrackIt',
    features: [
      'AI-Powered Hints for Coding Questions',
      'Collection of Real Interview Questions',
      'Clean and Modern UI',
      'User-Friendly Navigation',
    ],
    live: 'https://dub.sh/jobrush',
    category: 'Real Users'
  },
  {
    title: 'Buzzy-Bees',
    description: 'Website for pre-school kids to learn and play.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
    live: 'https://buzzy-bees.com',
    github: 'https://github.com/divyansharma001',
    features: [
      'Engaging animations',
      'WhatsApp API integration for parent communication',
      'Responsive design for mobile and desktop'
    ],
    category: 'Real Users'
  },
  {
    title: 'ChicAvenue',
    description: 'Fashion e-commerce platform with modern design and seamless shopping experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'MongoDB', 'Razorpay'],
    features: [
      'User-friendly interface for easy navigation',
      'Secure payment gateway integration',
      'Responsive design for mobile and desktop users',
      'Admin panel for managing products and orders'
    ],
    github: 'https://github.com/divyansharma001',
    live: 'https://www.chicavenue.in',
    category: 'Real Users'
  },
  {
    title: 'Safire',
    description: 'AI-powered harassment detection system for monitoring social media DMs.',
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn', 'JWT', 'AI/ML', 'Plasmo'],
    github: 'https://github.com/divyansharma001/Harrashment-Saver-Project',
    live: 'https://safire-five.vercel.app',
    category: 'Hackathon'
  },
  {
    title: 'Echo',
    description: 'AI-driven tool verifies project authenticity, detects deep code plagiarism, and assesses code quality for fair evaluations.',
    tech: ["React.js", "Node.js", "Express", "MongoDB", "TensorFlow", "PineconeDB", "BERT", "OpenAI"],
    github: 'https://github.com/divyansharma001/echo-manipal',
    live: 'https://project-verify-nine.vercel.app/',
    category: 'Hackathon'
  },
  {
    title: 'WhisperLink',
    description: 'Anonymous messaging platform supporting 1000+ users with Gemini AI integration.',
    tech: ['Next.js', 'NextAuth', 'Zod', 'TypeScript', 'Gemini AI', 'MongoDB'],
    github: 'https://github.com/divyansharma001/WhisperLink',
    live: 'https://invisi-talk.vercel.app',
    category: 'Functionality'
  },
  {
    title: 'Hive',
    description: 'Full-stack social media platform with REST APIs and efficient state management.',
    tech: ['React', 'Redux', 'Node.js', 'Express.js', 'OAuth', 'JWT', 'Supabase'],
    github: 'https://github.com/divyansharma001/hive',
    category: 'Functionality'
  },
  {
    title: 'FoodFly',
    description: 'E-commerce platform for food delivery with secure payments.',
    tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/divyansharma001/FoodFly',
    category: 'Functionality'
  },
  {
    title: 'PathVest',
    description: 'Personal Financial Guide with modern UI.',
    tech: ['Next.js', 'TypeScript', 'Express.js', 'Node.js', 'Aceternity UI', 'Flask'],
    github: 'https://github.com/divyansharma001/hackathonCBS',
    category: 'Hackathon'
  },
  {
    title: 'PMMMS',
    description: 'Platform for J&K students to submit scholarship forms.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/divyansharma001/pmss',
    category: 'Hackathon'
  },
  {
    title: 'Pranapulse',
    description: 'Personal Yoga Guide with AI integration.',
    tech: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Flask', 'TensorFlow'],
    github: 'https://github.com/divyansharma001/pranaPulse',
    category: 'Hackathon'
  },
  {
    title: 'BloodLink',
    description: 'Solution for blood shortage problems.',
    tech: ['Node.js', 'Express.js', 'Bootstrap', 'EJS', 'NodeMailer'],
    github: 'https://github.com/divyansharma001/BloodLink',
    category: 'Hackathon'
  },
  {
    title: 'Auth',
    description: 'One-step Next-Auth with Prisma setup.',
    tech: ['Next.js', 'TypeScript', 'Next-Auth', 'Prisma', 'NeonDB'],
    github: 'https://github.com/divyansharma001/Auth',
    category: 'Side'
  },
  {
    title: 'LeetAid',
    description: 'Provides hints for LeetCode questions.',
    tech: ['React', 'Node.js', 'Express.js', 'Groq API'],
    github: 'https://github.com/divyansharma001/LeetAid-FE',
    category: 'Side'
  },
  {
    title: 'CypherCraft',
    description: 'Modern Edtech Platform.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/divyansharma001/CypherCraft',
    category: 'Side'
  },
  {
    title: 'Blog-App',
    description: 'Platform for writing and sharing blogs.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/divyansharma001/blogProject',
    category: 'Side'
  },
  {
    title: 'UV Protect',
    description: 'Provides UV data based on location.',
    tech: ['Node.js', 'Express.js', 'EJS', 'Geolocation API', 'UV API'],
    github: 'https://github.com/divyansharma001/uvProtect',
    category: 'Side'
  },
  {
    title: 'Music Player',
    description: 'Mobile app to play music.',
    tech: ['React Native'],
    github: 'https://github.com/divyansharma001/musicPlayer',
    category: 'Mobile'
  },
  {
    title: 'TicTacToe',
    description: 'Classic game implementation.',
    tech: ['React Native'],
    github: 'https://github.com/divyansharma001/tictactoeApp',
    category: 'Mobile'
  },
  {
    title: 'Currency Converter',
    description: 'App to convert between currencies.',
    tech: ['React Native'],
    github: 'https://github.com/divyansharma001/currencyConverterApp',
    category: 'Mobile'
  }
];

// Blog Posts Data
const blogPosts = [
  {
    title: 'Free Resources for Development',
    description: 'A comprehensive guide to free development resources and tools.',
    link: 'https://medium.com/@divyansharma001/free-resources-for-development-7c31295777e8'
  },
  {
    title: 'Understanding the OSI Model',
    description: 'Deep dive into the layers that power the internet.',
    link: 'https://medium.com/@divyansharma001/understanding-the-osi-model-layers-that-power-the-internet-1ff7a5ecd396'
  },
  {
    title: "Beginner's Guide to Python Virtual Environments",
    description: 'Different ways to create and manage Python virtual environments.',
    link: 'https://medium.com/@divyansharma001/a-beginners-guide-to-python-virtual-environments-different-ways-to-create-and-manage-them-3c200f99bf5d'
  },
  {
    title: 'Working with TypeScript, Node, and Express',
    description: "A beginner's guide to TypeScript with Node.js and Express.",
    link: 'https://medium.com/@divyansharma001/how-to-work-with-typescript-node-and-express-a-beginners-guide-35a094776655'
  }
];

// Achievements Data
const achievements = [
  'Winner at 4 National level Hackathons including Code Kshetra 2.0 (Had 15,000+ registrations)',
  'Finalist at 4 National Level Hackathons, participated in 15+ hackathons',
  'Head of Development at Geek Room MSIT Chapter (25,000+ members all over India)',
  '150+ coding problems solved (LeetCode, GeeksForGeeks)'
];

// Render Experience Timeline
const timelineContainer = document.querySelector('.timeline');
experiences.forEach(exp => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-date">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
      </svg>
      ${exp.period}
    </div>
    <h3 class="timeline-title">${exp.title}</h3>
    <p class="timeline-company">${exp.company}</p>
    ${Array.isArray(exp.description) 
      ? `<ul class="timeline-description">${exp.description.map(item => `<li>${item}</li>`).join('')}</ul>`
      : `<p class="timeline-description">${exp.description}</p>`}
  `;
  timelineContainer.appendChild(item);
});

// Render Projects
const projectsContainer = document.querySelector('.projects-container');
const categories = ['Real Users', 'Functionality', 'Side', 'Hackathon', 'Mobile' ];

categories.forEach(category => {
  const categoryProjects = projects.filter(project => project.category === category);
  if (categoryProjects.length > 0) {
    const section = document.createElement('div');
    section.className = 'project-category';
    section.innerHTML = `
      <h3 class="project-category-title">${category} Projects</h3>
      <div class="project-grid">
        ${categoryProjects.map(project => `
          <div class="project-card">
            <div class="project-header">
              <h4 class="project-title">${project.title}</h4>
              <div class="project-links">
                <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                ${project.live ? `
                  <a href="${project.live}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                  </a>
                ` : ''}
              </div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            ${project.features ? `
              <div class="project-features">
                <h5 class="features-title">Key Features:</h5>
                <ul class="features-list">
                  ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
    projectsContainer.appendChild(section);
  }
});

// Render Blog Posts
const blogContainer = document.querySelector('.blog-posts');
blogPosts.forEach(post => {
  const article = document.createElement('a');
  article.href = post.link;
  article.target = '_blank';
  article.rel = 'noopener noreferrer';
  article.className = 'blog-post';
  article.innerHTML = `
    <div class="blog-content">
      <div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-description">${post.description}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" x2="21" y1="14" y2="3"></line>
      </svg>
    </div>
  `;
  blogContainer.appendChild(article);
});

// Render Achievements
const achievementsContainer = document.querySelector('.achievements-list');
achievements.forEach(achievement => {
  const item = document.createElement('div');
  item.className = 'achievement-item';
  item.innerHTML = `
    <div class="achievement-dot"></div>
    <p class="achievement-text">${achievement}</p>
  `;
  achievementsContainer.appendChild(item);
});


document.addEventListener('DOMContentLoaded', function() {
  const scrollElements = document.querySelectorAll('.section');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('visible');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  // Add .scroll-fade class to each section
  scrollElements.forEach(el => {
    el.classList.add('scroll-fade');
  });
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Initialize
  handleScrollAnimation();
});