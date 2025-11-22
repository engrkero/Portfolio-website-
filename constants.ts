import { Code, Palette, Database, Terminal, Twitter, Github, Linkedin, Globe } from 'lucide-react';
import { Project, ExperienceItem, SkillCategory, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter', url: 'https://twitter.com/bigg_manuel', icon: Twitter },
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Victus Global', url: '#', icon: Globe },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend & Tech',
    icon: Code,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML/CSS', 'Flask', 'Responsive UI', 'UI Animations']
  },
  {
    title: 'Web3 & Blockchain',
    icon: Terminal,
    skills: ['Solana Dev (Intern)', 'Sui Ecosystem', 'Token Launches', 'DAO Tooling', 'Smart Contract Interactions', 'Wallet Integration']
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    skills: ['Figma', 'Brand Identity', 'User Flow', '3D Concepts', 'Graphic Design', 'Content Creation']
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['SQL', 'Power BI', 'Excel', 'Data Visualization', 'Scenario Manager', 'Python Basics']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Web & Web3 Developer',
    company: 'Freelance / Personal Projects',
    duration: '2022 — Present',
    description: [
      'Completed a Solana internship focusing on hands-on development, wallet integration, and on-chain queries.',
      'Attended a Sui developer event gaining exposure to Sui ecosystem tooling and dev practices.',
      'Launched multiple tokens on testnets including "Suiedo" and "Sololeving".',
      'Building a Solana DAO Dashboard with emphasis on decentralization and tooling.',
      'Participated in Solana Superteam bounties and contributed to community guides.'
    ],
    highlight: true
  },
  {
    id: '2',
    role: 'Crypto Community Builder',
    company: 'Victus Global',
    duration: '2022 — Present',
    description: [
      'Creating daily educational Web3 content and guiding beginners via "$0 → $100 Crypto Pathway".',
      'Managing communication strategies and market-making outreach.',
      'Structuring professional TGE and advisory communication templates.'
    ]
  },
  {
    id: '3',
    role: 'ICT Studio Manager',
    company: 'Church Media & Technology Unit',
    duration: '2021 — Present',
    description: [
      'Leading audiovisual operations and technical teams for live production.',
      'Training volunteers in new media technologies.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'suiedo',
    title: 'Suiedo DEV Token',
    description: 'Designed, deployed, and promoted the Suiedo token on testnet — end-to-end experience from token creation to community engagement.',
    tech: ['Sui', 'Move', 'Tokenomics', 'Community'],
    category: 'Web3',
    featured: true,
    longDescription: 'Suiedo DEV Token was a complete lifecycle project on the Sui testnet. I handled everything from the initial Move smart contract deployment to creating the visual identity and driving community engagement. This project served as a practical exploration of the Sui ecosystem.',
    challenges: [
      'Understanding the Move programming language object-centric model.',
      'Managing community expectations during a testnet launch.',
      'Ensuring smooth token distribution mechanics.'
    ],
    solutions: [
      'Deep dived into Sui documentation and developer examples to write secure contracts.',
      'Created clear, educational content to explain the testnet nature of the token.',
      'Utilized automated scripts for fair and efficient airdrops.'
    ]
  },
  {
    id: 'dao-dash',
    title: 'Solana DAO Dashboard',
    description: 'Decentralized governance dashboard project for DAOs, focusing on transparency and on-chain tooling.',
    tech: ['Solana', 'React', 'Web3.js', 'Tailwind'],
    category: 'Web3',
    featured: true,
    longDescription: 'A comprehensive dashboard designed to visualize governance proposals, treasury movements, and voting statistics for Solana DAOs. The goal was to increase transparency and user participation in decentralized governance.',
    challenges: [
      'Fetching and indexing large amounts of on-chain data efficiently.',
      'Designing a UI that makes complex governance data digestible.',
      'Handling wallet connection states and transaction signing reliably.'
    ],
    solutions: [
      'Implemented optimized RPC calls and caching strategies to reduce load times.',
      'Used clean, modular UI components with Tailwind CSS to present data hierarchically.',
      'Integrated Solana Wallet Adapter for seamless multi-wallet support.'
    ]
  },
  {
    id: 'sololeving',
    title: 'Sololeving Meme Coin',
    description: 'Personal meme-token experiment launched on testnet to explore tokenomics and launch mechanics.',
    tech: ['Solana', 'SPL Token', 'Marketing'],
    category: 'Web3',
    featured: false,
    longDescription: 'Sololeving was a fun, experimental project to understand the technicalities of launching an SPL token on Solana. Beyond the code, it explored the social dynamics of meme coin marketing and community building.',
    challenges: [
      'Navigating the crowded meme coin landscape to gain visibility.',
      'Balancing liquidity pool ratios for stable trading simulation.'
    ],
    solutions: [
      'Leveraged viral trends and humor in marketing materials.',
      'Simulated various liquidity scenarios on testnet to understand market impact.'
    ]
  },
  {
    id: 'news-site',
    title: 'Full Stack Info Hub',
    description: 'React + Tailwind + Flask project with dark mode, category filters, animations, and interactive layouts.',
    tech: ['React', 'Flask', 'Python', 'LocalStorage'],
    category: 'Frontend',
    featured: false,
    longDescription: 'A robust information aggregator built as a capstone project. It features a responsive frontend with advanced filtering and a lightweight Flask backend for serving content. The site emphasizes user experience with smooth transitions and persistent preferences.',
    challenges: [
      'Synchronizing state between the React frontend and Flask backend.',
      'Implementing a flicker-free dark mode toggle with local storage.',
      'Ensuring the layout remained responsive across all device sizes.'
    ],
    solutions: [
      'Designed a RESTful API structure for efficient data exchange.',
      ' utilized React Context and Tailwind dark mode class strategy for seamless theming.',
      'Adopted a mobile-first design approach with complex grid layouts.'
    ]
  },
  {
    id: 'meme-contest',
    title: 'Superteam Poland Entry',
    description: 'Video meme design and production with an emphasis on viral trends, humor, and crypto cultural references.',
    tech: ['Content', 'Video Editing', 'Viral Marketing'],
    category: 'Design',
    featured: false,
    longDescription: 'A creative entry for the Superteam Poland Meme Contest. This project required a blend of video editing skills, understanding of current crypto narratives, and comedic timing to create engaging short-form content.',
    challenges: [
      'Capturing the specific humor and tone of the Solana community.',
      'Producing high-quality video assets within a tight deadline.'
    ],
    solutions: [
      'Researched trending formats and community inside jokes extensively.',
      'Streamlined the production workflow using templates and rapid editing techniques.'
    ]
  },
  {
    id: 'botanix',
    title: 'Botanix Spiderchain',
    description: 'Engaged with testnet operations and smart contract interactions on the Botanix Layer 2.',
    tech: ['EVM', 'Testnet', 'Bridge'],
    category: 'Web3',
    featured: false,
    longDescription: 'An exploratory project into the Botanix Spiderchain, an EVM-equivalent Layer 2 on Bitcoin. I participated in testnet operations, bridged assets, and interacted with deployed dApps to provide feedback and gain early ecosystem insights.',
    challenges: [
      'Understanding the unique architecture of Bitcoin Layer 2s.',
      'Navigating early-stage testnet instability and documentation gaps.'
    ],
    solutions: [
      'Actively participated in developer discord channels to resolve issues.',
      'Documented findings and transaction flows to aid future development.'
    ]
  }
];