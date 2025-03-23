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
    title: 'Full Stack Developer',
    company: 'Showtime',
    period: 'Feb 2025 - Present',
    description: 'Working with API fixing and making it.'
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
    title: 'Safire',
    description: 'AI-powered harassment detection system for monitoring social media DMs. Built during HackWie 3.0 (1st place).',
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn', 'JWT', 'AI/ML', 'Plasmo'],
    github: 'https://github.com/divyansharma001/Harrashment-Saver-Project',
    live: 'https://safire-five.vercel.app',
    category: 'Hackathon'
  },
  // ... (all other projects from the previous version)
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
  '1st place at Code Kshetra 2.0 (Among 15,000+ participants)',
  '1st place at HackWIE Delhi (AI-powered harassment detection system)',
  'Finalist at Hack It Up IGDTUW (Among 200+ teams)',
  'Head of Development at Geek Room MSIT Chapter (25,000+ members)',
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
const categories = ['Functionality', 'Hackathon', 'Side', 'Mobile'];

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
