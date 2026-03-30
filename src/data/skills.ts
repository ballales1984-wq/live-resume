/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains skills displayed in the Skills section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example skills with your actual skills
 * 2. Set proficiency levels honestly (0-100)
 * 3. Organize skills by category
 * 4. Update spoken languages if applicable
 *
 * PROFICIENCY LEVEL GUIDE:
 * - 90-100: Expert (can teach others, deep knowledge)
 * - 70-89:  Advanced (proficient, used extensively)
 * - 50-69:  Intermediate (comfortable, moderate experience)
 * - 30-49:  Basic (familiar, some experience)
 * - 10-29:  Beginner (learning, minimal experience)
 *
 * TO ADD A NEW SKILL:
 * { name: 'Skill Name', level: 85, category: 'Category', yearsOfExperience: 3 }
 *
 * TO ADD A NEW CATEGORY:
 * 1. Add the category name to the skillCategories array
 * 2. Add skills with that category to the skills array
 * =============================================================================
 */

/**
 * Skill entry type definition
 */
export interface Skill {
  /** Skill name (e.g., "React", "Python", "Project Management") */
  name: string;

  /**
   * Proficiency level from 0-100
   * See guide above for recommended ranges
   */
  level: number;

  /**
   * Category for grouping skills
   * Must match one of the categories in skillCategories array
   */
  category: string;

  /**
   * Icon identifier (optional)
   * Can be used to display skill icons
   */
  icon?: string;

  /**
   * Years of experience with this skill (optional)
   */
  yearsOfExperience?: number;
}

/**
 * Spoken language type definition
 */
export interface Language {
  /** Language name (e.g., "English", "Spanish") */
  name: string;

  /**
   * Proficiency level
   * Options: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
   */
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

/**
 * =============================================================================
 * SKILL CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * These categories are used to group skills in the UI.
 * Add, remove, or rename categories as needed.
 */
export const skillCategories: string[] = [
  'Languages',    // Programming languages
  'Frontend',     // Frontend frameworks & libraries
  'Backend',      // Backend frameworks & technologies
  'Databases',    // Database technologies
  'DevOps',       // DevOps tools & practices
  'AI/ML',        // AI and Machine Learning
  'Audio/Music',  // Audio programming and music tech
  'Tools',        // Development tools
];

/**
 * =============================================================================
 * YOUR SKILLS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example skills with your actual skills.
 * Group skills by category for better organization.
 */
export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // PROGRAMMING LANGUAGES
  // ---------------------------------------------------------------------------
  {
    name: 'Python',
    level: 90,
    category: 'Languages',
    yearsOfExperience: 5,
  },
  {
    name: 'JavaScript',
    level: 80,
    category: 'Languages',
    yearsOfExperience: 4,
  },
  {
    name: 'TypeScript',
    level: 78,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'SQL',
    level: 85,
    category: 'Languages',
    yearsOfExperience: 5,
  },
  {
    name: 'C++',
    level: 65,
    category: 'Languages',
    yearsOfExperience: 1,
  },
  {
    name: 'Lua',
    level: 60,
    category: 'Languages',
    yearsOfExperience: 1,
  },
  {
    name: 'HTML5/CSS3',
    level: 85,
    category: 'Languages',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------------
  {
    name: 'React',
    level: 78,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'Next.js',
    level: 75,
    category: 'Frontend',
    yearsOfExperience: 1,
  },
  {
    name: 'Angular',
    level: 72,
    category: 'Frontend',
    yearsOfExperience: 1,
  },
  {
    name: 'Tailwind CSS',
    level: 78,
    category: 'Frontend',
    yearsOfExperience: 2,
  },
  {
    name: 'JavaScript (Vanilla)',
    level: 85,
    category: 'Frontend',
    yearsOfExperience: 4,
  },
  {
    name: 'HTML5',
    level: 90,
    category: 'Frontend',
    yearsOfExperience: 5,
  },
  {
    name: 'CSS3',
    level: 85,
    category: 'Frontend',
    yearsOfExperience: 5,
  },

  // ---------------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------------
  {
    name: 'Flask',
    level: 90,
    category: 'Backend',
    yearsOfExperience: 4,
  },
  {
    name: 'FastAPI',
    level: 80,
    category: 'Backend',
    yearsOfExperience: 2,
  },
  {
    name: 'SQLAlchemy',
    level: 88,
    category: 'Backend',
    yearsOfExperience: 4,
  },
  {
    name: 'REST API',
    level: 90,
    category: 'Backend',
    yearsOfExperience: 4,
  },
  {
    name: 'JWT Authentication',
    level: 85,
    category: 'Backend',
    yearsOfExperience: 3,
  },
  {
    name: 'WebSocket',
    level: 75,
    category: 'Backend',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // DATABASES
  // ---------------------------------------------------------------------------
  {
    name: 'PostgreSQL',
    level: 88,
    category: 'Databases',
    yearsOfExperience: 4,
  },
  {
    name: 'SQLAlchemy ORM',
    level: 85,
    category: 'Databases',
    yearsOfExperience: 4,
  },
  {
    name: 'Redis',
    level: 75,
    category: 'Databases',
    yearsOfExperience: 2,
  },
  {
    name: 'SQLite',
    level: 80,
    category: 'Databases',
    yearsOfExperience: 3,
  },

  // ---------------------------------------------------------------------------
  // AI/ML
  // ---------------------------------------------------------------------------
  {
    name: 'NLP',
    level: 80,
    category: 'AI/ML',
    yearsOfExperience: 3,
  },
  {
    name: 'Sentiment Analysis',
    level: 78,
    category: 'AI/ML',
    yearsOfExperience: 2,
  },
  {
    name: 'Pattern Recognition',
    level: 75,
    category: 'AI/ML',
    yearsOfExperience: 2,
  },
  {
    name: 'Machine Learning',
    level: 75,
    category: 'AI/ML',
    yearsOfExperience: 3,
  },
  {
    name: 'scikit-learn',
    level: 75,
    category: 'AI/ML',
    yearsOfExperience: 2,
  },
  {
    name: 'Hugging Face Transformers',
    level: 70,
    category: 'AI/ML',
    yearsOfExperience: 1,
  },
  {
    name: 'spaCy',
    level: 72,
    category: 'AI/ML',
    yearsOfExperience: 1,
  },
  {
    name: 'Computer Vision',
    level: 70,
    category: 'AI/ML',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // AUDIO/MUSIC
  // ---------------------------------------------------------------------------
  {
    name: 'JUCE / VST3',
    level: 65,
    category: 'Audio/Music',
    yearsOfExperience: 1,
  },
  {
    name: 'Web Audio API',
    level: 70,
    category: 'Audio/Music',
    yearsOfExperience: 1,
  },
  {
    name: 'MIDI',
    level: 70,
    category: 'Audio/Music',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // DEVOPS
  // ---------------------------------------------------------------------------
  {
    name: 'Docker',
    level: 82,
    category: 'DevOps',
    yearsOfExperience: 3,
  },
  {
    name: 'CI/CD',
    level: 80,
    category: 'DevOps',
    yearsOfExperience: 2,
  },
  {
    name: 'Render',
    level: 85,
    category: 'DevOps',
    yearsOfExperience: 2,
  },
  {
    name: 'GitHub Actions',
    level: 75,
    category: 'DevOps',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // TOOLS
  // ---------------------------------------------------------------------------
  {
    name: 'Git',
    level: 88,
    category: 'Tools',
    yearsOfExperience: 4,
  },
  {
    name: 'GitHub',
    level: 88,
    category: 'Tools',
    yearsOfExperience: 4,
  },
  {
    name: 'pytest',
    level: 82,
    category: 'Tools',
    yearsOfExperience: 3,
  },
  {
    name: 'Pygame',
    level: 72,
    category: 'Tools',
    yearsOfExperience: 1,
  },
];

/**
 * =============================================================================
 * SPOKEN LANGUAGES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * List the languages you speak and your proficiency level.
 */
export const languages: Language[] = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'Professional' },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get top N skills sorted by proficiency level
 */
export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

/**
 * Get all unique skill categories actually used in skills array
 */
export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  // Return in the order defined in skillCategories
  return skillCategories.filter((cat) => categories.has(cat));
}

/**
 * Get skills grouped by category
 */
export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

/**
 * Calculate average skill level
 */
export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/**
 * Get proficiency label for a skill level
 */
export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  if (level >= 30) return 'Basic';
  return 'Beginner';
}
