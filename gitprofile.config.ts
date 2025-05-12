// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ShanmukhVedantam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Amazon.com Inc',
        //   description:
        //     'In-App Purchasing Integration',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        // },
        // {
        //   title: 'Sodexo',
        //   description:
        //     'Employee Benefits Portal Modernization',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: '',
        // },
        // {
        //   title: 'Cognizant Technology Solutions',
        //   description:
        //     'Outage Management System',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: '',
        // },
        // {
        //   title: 'Neiman Marcus',
        //   description:
        //     'E-Commerce Platform',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: '',
        // },
        // {
        //   title: 'Pronix IT Solutions',
        //   description:
        //     'HR Management System',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: '',
        // },
        // {
        //   title: 'University at Buffalo',
        //   description:
        //     'Distributed Pub/Sub Messaging System for News Feeds',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: '',
        // },

      ],
    },
  },
  seo: {
    title: 'Portfolio of Shanmukh Vedantam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'shanmukh-vedantam',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'shanmukh.ved',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+1 (360) 499 3724',
    email: 'shanmukh.codes@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'Angular',
    'React.js',
    'Node.js',
    'Vue.js',
    'jQuery',
    'Bootstrap',
    'WebSocket',
    'Spring Boot',
    'Mockito',
    'JUnit',
    'TestNG',
    'Swagger',
    'OpenAPI',
    'TypeScript',
    'SQL',
    'PL/SQL',
    'PostgreSQL',
    'MySQL',
    'Dynamo DB',
    'C#',
    'AWS',
    'API Gateway',
    'Lambda',
    'EC2',
    'ECS',
    'Fargate',
    'S3',
    'RDS',
    'ElastiCache',
    'Step Functions',
    'SQS',
    'SNS',
    'IAM',
    'AWS CDK',
    'Git',
    'Docker',
    'CodeBuild',
    'CodeDeploy',
    'CodePipeline',
    'CloudWatch',
    'OAuth2',
    'JWT',
  ],
  aboutMe: 'I am a seasoned Java Full Stack Developer with over 8 years of experience designing and building scalable web applications. I\'ve had the opportunity to work at a FAANG company, where I contributed to high-impact, customer-facing projects. My core strengths lie in backend development with Java and Spring Boot, as well as creating responsive frontends using Angular and React. I\'m also proficient in AWS cloud services, leveraging tools like Lambda, S3, and CloudFormation to build and deploy robust applications. Throughout my career, I\'ve led feature development across the entire stack, with a strong emphasis on clean code and performance optimization. I enjoy solving complex problems and delivering solutions that make a tangible difference. I stay updated with emerging tech and continuously strive to grow as an engineer.',
  experiences: [
    {
      company: 'Amazon',
      position: 'Software Development Engineer II',
      from: 'June 2022',
      to: 'Apr 2025',
      companyLink: '',
      projects: ['Developed React.js applications with Redux state management and React Router for dynamic client-side routing in enterprise admin portals',
      'Built Java/Spring Boot microservices following hexagonal architecture, implementing OAuth2 security and Swagger API documentation',
      'Designed event-driven systems using Amazon SQS/SNS, implementing idempotent processing and DLQ strategies for fault tolerance',
      'Automated AWS infrastructure using CDK (Python/TypeScript), deploying containerized services to ECS Fargate with X-Ray tracing'],
    },
    {
      company: 'Sodexo',
      position: 'Senior Software Engineer',
      from: 'Jan 2021',
      to: 'May 2022',
      companyLink: '',
      projects: ['Engineered Angular 8 applications with Material UI components and WebSocket integrations for real-time user notifications',
      'Modernized legacy systems to Spring Boot microservices, applying Resilience4j patterns for circuit breaking and rate limiting',
      'Implemented Kafka event streaming with dead-letter queues and PagerDuty alerting for reliable system communications',
      'Architected Azure Kubernetes (AKS) deployments with autoscaling and hybrid connectivity to on-premise HR systems'],
    },
    {
      company: 'Cognizant Technology Solutions',
      position: 'Full Stack Engineer',
      from: 'Sep 2019',
      to: 'Dec 2020',
      companyLink: '',
      projects: ['Developed Angular 10+ interfaces with Bootstrap for responsive design and JWT-based authentication flows',
      'Built RESTful APIs using Spring Boot and Entity Framework, optimizing SQL Server/Oracle queries for performance',
      'Implemented Azure DevOps pipelines with SonarQube quality gates and Kubernetes deployment strategies',
      'Established ELK Stack logging with Kibana dashboards for system monitoring and alerting'],
    },
    {
      company: 'Neiman Marcus',
      position: 'Junior Software Developer',
      from: 'July 2018',
      to: 'Aug 2019',
      companyLink: '',
      projects: ['Created jQuery/Bootstrap e-commerce interfaces with AJAX integrations to backend services',
      'Developed PHP/CodeIgniter controllers with MySQL optimization for high-traffic product catalogs',
      'Implemented AWS EC2/S3 infrastructure with CloudFront CDN for global content delivery',
      'Automated cron jobs and CloudWatch monitoring for operational reliability'],
    },
    {
      company: 'Pronix IT Solutions',
      position: 'Software Engineer Intern',
      from: 'June 2016',
      to: 'June 2018',
      companyLink: '',
      projects: ['Modernized legacy systems to Spring MVC with Thymeleaf templates and JavaScript validation',
      'Migrated SQL Server databases with SSIS packages for data synchronization',
      'Implemented role-based access control and audit trails for HR system security',
      'Designed database mirroring solution for high availability of HR critical systems'],
    },
  ],
  certifications: [
    {
      name: 'AWS Solutions Architect - Associate',
      body: '',
      year: 'April 2025',
      link: 'https://drive.google.com/file/d/1xt7sVE70R7liNiuj45pBoSUruTQ-EOCy/view?usp=drive_link',
    },
  ],
  educations: [
    {
      institution: 'University at Buffalo - SUNY',
      degree: 'Master\'s of Science, Computer Science',
      from: 'Jan 2021',
      to: 'May 2022',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'shanmukh.ved', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  // enablePWA: true,
};

export default CONFIG;
