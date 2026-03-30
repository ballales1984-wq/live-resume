/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'AI/ML',
  'SaaS',
  'Web Application',
  'Open Source',
  'Data Visualization',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1 - Assistente Intelligente
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'assistente-intelligente',
    title: 'Assistente Intelligente',
    description:
      'Community platform etica con AI per il miglioramento della salute mentale. 7 lingue, content moderation AI, sistema auth fingerprint-based.',
    longDescription: `Piattaforma community open source che utilizza AI per migliorare la salute mentale globale. 
    Caratteristiche: sistema di autenticazione rivoluzionario basato su fingerprint, content moderation tramite NLP e Sentiment Analysis, 
    supporto nativo per 7 lingue con sistema i18n, architettura scalabile con potenziale reach di 4.6 miliardi di utenti.`,
    thumbnail: '/projects/assistente-thumb.jpg',
    images: [],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'NLP', 'Docker', 'JWT'],
    category: 'AI/ML',
    role: 'Founder & Lead Developer',
    duration: 'Ongoing',
    liveUrl: 'https://assistente-intelligente.onrender.com',
    githubUrl: 'https://github.com/ballales1984-wq/Assistente-Intelligente',
    featured: true,
    highlights: [
      '10K+ righe di codice',
      '7 lingue supportate (i18n)',
      '4.6B reach potenziale',
      'AI content moderation con NLP',
      'Sistema auth fingerprint-based',
      '100+ pagine documentazione tecnica',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2 - AI Trading System
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'ai-trading-system',
    title: 'AI Trading System',
    description:
      'Piattaforma di trading algoritmico con AI multi-asset (crypto, stocks, forex). 88+ API REST, WebSocket real-time, backtesting e risk management.',
    longDescription: `Sistema avanzato di trading algoritmico con analisi AI multi-asset. Include backtesting, 
    gestione del rischio (VaR/CVaR/Sharpe), simulazione Monte Carlo, HMM regime detection, 
    auto-trading con stop-loss/take-profit e dashboard React real-time.`,
    thumbnail: '/projects/quantum-trading-thumb.jpg',
    images: [],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'scikit-learn', 'XGBoost', 'Redis', 'PostgreSQL', 'Docker', 'WebSocket'],
    category: 'AI/ML',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq/ai-trading-system',
    featured: true,
    highlights: [
      '88+ API REST endpoints',
      'WebSocket real-time price streaming',
      'Risk management (VaR, CVaR, Sharpe ratio)',
      'Monte Carlo simulation',
      'Multi-asset: crypto, stocks, forex, options',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3 - PostSync
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'postsync',
    title: 'PostSync',
    description:
      'AI social media content generator - da link a contenuto social in 1 click. Web app + desktop app con Tauri.',
    longDescription: `Generatore di contenuti per social media alimentato da AI. Supporta X/Twitter, Instagram, LinkedIn, Facebook, Threads. 
    Include estrazione contenuti da URL (YouTube, GitHub, web), generazione multi-variante, hashtag automatici, 
    calendario scheduling, export CSV, PWA e dark mode.`,
    thumbnail: '/projects/postsync-thumb.jpg',
    images: [],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tauri', 'Groq API', 'Ollama', 'Drizzle ORM', 'Tailwind CSS', 'Bun'],
    category: 'SaaS',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq/postsync',
    featured: true,
    highlights: [
      '5 social platform target',
      'AI content generation (Groq + Ollama)',
      'Desktop app con Tauri (Rust)',
      'URL content extraction',
      'PWA + dark mode',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 4 - NewsFlow
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'newsflow',
    title: 'NewsFlow',
    description:
      'Piattaforma di news curation intelligente con NLP semantico. Aggrega, filtra e analizza notizie da fonti autorevoli.',
    longDescription: `Piattaforma di curazione intelligente delle notizie con NLP semantico. 
    Aggregazione automatica da 10+ fonti, filtering semantico, estrazione keyword e classificazione, 
    modalità lettura ritual (mattina/sera/weeekend), archivio personale con annotazioni.`,
    thumbnail: '/projects/newsflow-thumb.jpg',
    images: [],
    technologies: ['Python', 'FastAPI', 'Angular', 'spaCy', 'Hugging Face', 'Redis', 'PostgreSQL', 'Celery', 'Docker'],
    category: 'Web Application',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq/newsflow',
    featured: false,
    highlights: [
      'Aggregazione da 10+ fonti (RSS, NewsAPI, ArXiv)',
      'NLP semantico con spaCy e Transformers',
      'Modalita lettura ritual (mattina/sera/weeekend)',
      'Archivio personale con annotazioni',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 5 - Pythonita-IA
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'pythonita-ia',
    title: 'Pythonita-IA',
    description:
      'Assistente didattico in italiano con AI locale. Genera codice Python da frasi naturali.',
    longDescription: `Assistente didattico che genera codice Python da input in linguaggio naturale. 
    Utilizza AI locale per l'interpretazione e la generazione di codice, progettato come strumento educativo.`,
    thumbnail: '/projects/pythonita-thumb.jpg',
    images: [],
    technologies: ['Python', 'Machine Learning', 'NLP', 'Flask'],
    category: 'AI/ML',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq/pythonita-ia',
    featured: false,
    highlights: [
      'Generazione codice da linguaggio naturale',
      'AI locale (no cloud dependency)',
      'Interfaccia didattica in italiano',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 6 - ManagerSchool
  // ---------------------------------------------------------------------------
  {
    id: 'proj-6',
    slug: 'managerschool',
    title: 'ManagerSchool',
    description:
      'Sistema di gestione scolastica con dashboard e API REST.',
    longDescription: `Applicazione web per la gestione scolastica con funzionalità complete di amministrazione, 
    gestione studenti, corsi e valutazioni. Sviluppato con stack Python/Flask e database PostgreSQL.`,
    thumbnail: '/projects/managerschool-thumb.jpg',
    images: [],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
    category: 'Web Application',
    role: 'Solo Developer',
    duration: '3 months',
    githubUrl: 'https://github.com/ballales1984-wq/ManagerSchool',
    featured: false,
    highlights: [
      'Gestione completa studenti e corsi',
      'Dashboard amministrativa',
      'API REST',
      'Database PostgreSQL',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 7 - Agenda Angular (Assistente Intelligente v2)
  // ---------------------------------------------------------------------------
  {
    id: 'proj-7',
    slug: 'agenda-angular',
    title: 'Assistente Intelligente Agenda',
    description:
      'Assistente personale con calendario, diario, community feed e sintesi vocale - riscritto in Angular 19.',
    longDescription: `Assistente personale intelligente con chat NLP e voice synthesis, calendario settimanale, 
    diario 3D con lettura vocale, community social feed, statistiche, dark mode e PWA installable.`,
    thumbnail: '/projects/agenda-thumb.jpg',
    images: [],
    technologies: ['Angular', 'TypeScript', 'Web Speech API', 'PWA', 'Vite', 'esbuild'],
    category: 'Web Application',
    role: 'Solo Developer',
    duration: '2 months',
    githubUrl: 'https://github.com/ballales1984-wq/agenda-angular',
    featured: false,
    highlights: [
      'Chat con NLP e voice synthesis',
      'Calendario settimanale',
      'Diario 3D con lettura vocale',
      'PWA installable',
      'Dark mode con system preference',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 8 - GreatWar3 (Strategy Game)
  // ---------------------------------------------------------------------------
  {
    id: 'proj-8',
    slug: 'greatwar3',
    title: 'GreatWar3',
    description:
      'Gioco di strategia bellica a turni ispirato a Axis & Allies 1942. 5 fazioni, 82 territori, multiplayer.',
    longDescription: `Gioco di strategia a turni con 5 fazioni e 82 territori su mappa mondiale. 
    Include sistema di combattimento a dadi, economia, multiplayer online e hot-seat, 
    commento vocale, drag-and-drop e packaging EXE con PyInstaller.`,
    thumbnail: '/projects/greatwar3-thumb.jpg',
    images: [],
    technologies: ['Python', 'Pygame', 'Pillow', 'Socket', 'pyttsx3', 'PyInstaller'],
    category: 'Open Source',
    role: 'Solo Developer',
    duration: '2 months',
    githubUrl: 'https://github.com/ballales1984-wq/greatwar3',
    featured: false,
    highlights: [
      '5 fazioni, 82 territori',
      'Multiplayer online + hot-seat',
      'Sistema combattimento a dadi',
      'Commento vocale',
      'EXE packaging con PyInstaller',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
