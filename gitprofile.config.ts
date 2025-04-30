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
        {
          title: 'In-App Purchasing Integration',
          description:
            'Led the development of scalable backend systems for in-app purchasing integrations with major platforms like Meta and TikTok, ensuring secure and reliable transaction processing. Built APIs and internal tools that improved developer productivity, automated testing, and system monitoring. Managed cloud infrastructure, automated deployments, and worked closely with cross-functional teams to deliver high-performance, customer-facing solutions. Consistently followed best practices in system design, security, and operational excellence throughout project lifecycles at Amazon.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Modernization of Financial Systems & Cloud Migration',
          description:
            'Worked on a cloud-based system processing 10M+ daily trades across 30+ global markets. The platform handled trade reconciliation, regulatory reporting, and risk checks with 99.95% uptime. Modernized legacy .NET components to Spring Boot microservices on Azure Kubernetes, reducing settlement latency. Implemented event-driven architecture with Kafka to ensure real-time processing while meeting strict SEC/FINRA compliance requirements.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Outage Management System',
          description:
            'Enhanced Duke Energy\'s Outage Management System (OMS) to improve outage detection and restoration for 7M+ customers. Upgraded legacy systems to integrate real-time IoT data from smart meters and grid sensors, reducing outage identification time. Implemented predictive analytics to prioritize crew dispatches, cutting average restoration time by 25%. Developed outage visualization tools for field crews using geospatial mapping, improving first-response accuracy.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'E-Commerce Platform',
          description:
            'Developed and maintained an e-commerce platform serving 200+ local merchants, processing 500+ daily transactions. Migrated from shared hosting to AWS infrastructure, improving system reliability from 92% to 99.5% uptime while implementing core marketplace features.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Shanmukh Vedantam',
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
    email: 'shanmukh.ved@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
    '.NET Core',
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
  experiences: [
    {
      company: 'Amazon',
      position: 'Software Development Engineer II',
      from: 'June 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'BNY Melon',
      position: 'Senior Software Engineer',
      from: 'Jan 2021',
      to: 'May 2022',
      companyLink: '',
    },
    {
      company: 'Cognizant Technology Solutions',
      position: 'Software Developer',
      from: 'June 2019',
      to: 'Dec 2020',
      companyLink: '',
    },
    {
      company: 'XXX',
      position: 'Junior Software Developer',
      from: 'June 2018',
      to: 'June 2019',
      companyLink: '',
    },
    {
      company: 'XXX',
      position: 'Software Engineer Intern',
      from: 'June 2017',
      to: 'June 2018',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AWS Solutions Architect - Associate',
      body: '',
      year: 'April 2025',
      link: 'https://shanmukhvedantam.github.io/documents/AWS-Certified-Solutions-Architect-Associate.pdf',
    },
  ],
  educations: [
    {
      institution: 'University at Buffalo - SUNY',
      degree: 'Master\'s of Science, Computer Science',
      from: 'Jan 2021',
      to: 'May 2022',
    },
    {
      institution: 'JNTU Hyderabad, India',
      degree: 'Bachelor of Technology, Computer Science',
      from: 'July 2015',
      to: 'May 2019',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
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
    defaultTheme: 'lofi',

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
