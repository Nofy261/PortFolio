export const profile = {
  fullName: "Nofy Leclercq",
  title: "Développeuse Web Junior - Angular / Java",
  description:
    "Après avoir terminé la première partie de mon parcours à l’École 42, je m’oriente aujourd’hui vers le <strong>développement web</strong>, avec une spécialisation en <strong>Angular et Java</strong>.\n\nAu cours de ma formation, j’ai également découvert l’<strong>IA et la Data</strong> à travers certains projets. Je recherche actuellement une <strong>alternance</strong> dans le domaine du Web, de l’IA ou de la Data afin de poursuivre mon parcours et de <strong>valider un titre RNCP de niveau 7 dans ce domaine</strong>.",
  author_name: "", // Author name to be highlighted in the papers section
  research_areas: [
  { title: 'Ft_transcendance',
    description: 'Application web full-stack avec un jeu multijoueur et des fonctionnalités sociales.',
    details: "<h4 class=\"text-primary font-semibold text-lg mt-3 mb-0\">Présentation du projet</h4>Ft_transcendance est un projet de développement web réalisé en équipe dans le cadre du cursus 42. L’objectif était de concevoir une application permettant de jouer à un jeu multijoueur en ligne et d’interagir avec d’autres utilisateurs à travers différentes fonctionnalités sociales.\n<h4 class=\"text-primary font-semibold text-lg mt-4 mb-0\">Ce que j’ai appris techniquement</h4><ul class=\"list-disc list-inside space-y-1\"><li>Compréhension de l’architecture <strong>full-stack</strong></li><li>Développement <strong>front-end et back-end</strong></li><li>Conception et utilisation d’<strong>API REST</strong></li><li>Gestion des <strong>données</strong> et de l’<strong>authentification</strong></li></ul><p class=\"mt-2\"><strong>Technologies :</strong> React · TypeScript · Node.js · PostgreSQL · Docker · bcrypt</p><h4 class=\"text-primary font-semibold text-lg mt-2 mb-0\">Ce que j’ai appris en équipe</h4><ul class=\"list-disc list-inside space-y-1\"><li>Répartition et organisation des tâches</li><li>Coordination entre les différentes fonctionnalités</li><li>Intégration du code et gestion des conflits</li><li>Communication et adaptation au travail des autres</li><li>Recherche de solutions collectives face aux difficultés</li></ul>"
  },
  { title: 'Ft_linear_regression',
    description: 'Implémentation d’un modèle de régression linéaire pour prédire le prix d’une voiture à partir de son kilométrage.',
    details: "<h4 class=\"text-primary font-semibold text-lg mt-3 mb-0\">Présentation du projet</h4>Ft_linear_regression est un projet d’introduction au <strong>machine learning</strong>, réalisé en Python dans le cadre du cursus de l’École 42. L’objectif était d’implémenter une régression linéaire capable d’apprendre à partir d’un ensemble de données afin de produire des prédictions.\n<h4 class=\"text-primary font-semibold text-lg mt-4 mb-0\">Ce que j’ai appris</h4><ul class=\"list-disc list-inside space-y-1\"><li>Compréhension des bases du <strong>machine learning</strong></li><li>Implémentation d’une <strong>régression linéaire</strong></li><li>Utilisation de la <strong>fonction de coût</strong> et de la <strong>descente de gradient</strong></li><li>Manipulation d’un <strong>jeu de données</strong> pour entraîner le modèle</li><li>Utilisation de <strong>Python</strong> pour traduire des concepts <strong>mathématiques</strong> en code</li><li>Compréhension du lien entre <strong>mathématiques</strong>, <strong>programmation</strong> et <strong>données</strong></li></ul>",
    link: 'https://github.com/Nofy261/ft_linear_regression'},
  { title: 'Learn2Slither',
    description: 'Développement d’une IA utilisant l’apprentissage par renforcement pour apprendre à jouer au Snake grâce à un système de récompenses et de pénalités.',
    details: "<h4 class=\"text-primary font-semibold text-lg mt-3 mb-0\">Présentation du projet</h4>Learn2Slither est un projet d’<strong>intelligence artificielle</strong> réalisé en Python, basé sur l’<strong>apprentissage par renforcement</strong>. L’objectif était de développer un agent capable de contrôler un Snake et d’améliorer progressivement ses décisions en fonction des récompenses et des pénalités reçues de son environnement.\n<h4 class=\"text-primary font-semibold text-lg mt-4 mb-0\">Ce que j’ai appris</h4><ul class=\"list-disc list-inside space-y-1\"><li>Compréhension des principes de l’<strong>apprentissage par renforcement</strong></li><li>Mise en place d’un système de <strong>récompenses et de pénalités</strong></li><li>Utilisation de la <strong>fonction de valeur</strong> pour évaluer les actions de l’agent</li><li>Découverte de l’<strong>équation de Bellman</strong></li><li>Mise en pratique de <strong>Python</strong> pour développer un agent capable de prendre des décisions de manière autonome</li><li>Compréhension du lien entre <strong>environnement</strong>, <strong>actions</strong>, <strong>récompenses</strong> et <strong>apprentissage</strong></li></ul>",
    link: 'https://github.com/Nofy261/Learn2Slither'}
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "noufy33@yahoo.com",
  linkedin: "https://www.linkedin.com/in/nofy-leclercq-a27984409/",
  x: "",
  bluesky: "",
  github: "https://github.com/Nofy261",
  gitlab: "",
  scholar: "",
  inspire: "",
  arxiv: "",
  orcid: "",
};

export const template = {
  website_url: "https://localhost:4321", // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: "light", // Select one of the Daisy UI Themes or create your own
  darkTheme: "dark", // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: "/PortFolio", // Repository name starting with /
};

export const seo = {
  default_title: "Nofy Leclercq | Portfolio",
  default_description: "Astro Academia is a template for academic websites.",
  default_image: "/images/astro-academia.png",
};