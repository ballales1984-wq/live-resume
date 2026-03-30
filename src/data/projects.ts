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
  // FEATURED PROJECT 2 - Quantum AI Trading System
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'quantum-ai-trading',
    title: 'Quantum AI Trading System',
    description:
      'Sistema di trading quantistico con AI per analisi predittiva dei mercati finanziari.',
    longDescription: `Sistema avanzato di trading che integra algoritmi quantistici con intelligenza artificiale 
    per l'analisi predittiva dei mercati. Utilizza pattern recognition e machine learning per identificare opportunità di trading.`,
    thumbnail: '/projects/quantum-trading-thumb.jpg',
    images: [],
    technologies: ['Python', 'Machine Learning', 'NLP', 'Pattern Recognition', 'PostgreSQL', 'Docker'],
    category: 'AI/ML',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq',
    featured: true,
    highlights: [
      'Analisi predittiva con AI',
      'Pattern recognition per mercati',
      'Dashboard real-time',
      'Architettura modulare',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3 - Pythonita-IA
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'pythonita-ia',
    title: 'Pythonita-IA',
    description:
      'Piattaforma per automazione intelligente con integrazione AI.',
    longDescription: `Progetto orientato all'automazione intelligente utilizzando Python e AI. 
    Sviluppato per semplificare processi complessi attraverso l'apprendimento automatico e l'analisi dati.`,
    thumbnail: '/projects/pythonita-thumb.jpg',
    images: [],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'Machine Learning', 'Docker'],
    category: 'AI/ML',
    role: 'Solo Developer',
    duration: 'Ongoing',
    githubUrl: 'https://github.com/ballales1984-wq',
    featured: true,
    highlights: [
      'Automazione intelligente',
      'Integrazione AI',
      'Architettura modulare e scalabile',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 4 - ManagerSchool
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
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
    githubUrl: 'https://github.com/ballales1984-wq',
    featured: false,
    highlights: [
      'Gestione completa studenti e corsi',
      'Dashboard amministrativa',
      'API REST',
      'Database PostgreSQL',
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
