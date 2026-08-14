export const profile = {
  fullName: "Nofy Leclercq",
  title: "Développeuse Web Junior - Angular / Java",
  description:
    "Étudiante à 42, je me forme au développement web et je me spécialise progressivement dans les technologies Angular et Java. Je recherche actuellement un stage et/ou une alternance afin de développer mes compétences à travers des projets concrets et de poursuivre mon parcours vers l’obtention d’un titre RNCP de niveau 7 dans les domaines du Web, de l’IA et de la Data.",
  author_name: "", // Author name to be highlighted in the papers section
  research_areas: [
  { title: 'Ft_transcendance',
    description: 'Application web full-stack avec un jeu multijoueur et des fonctionnalités sociales.',
    details: "Ft_transcendance est un projet de développement web complet réalisé en équipe dans le cadre du cursus 42. L’objectif était de concevoir une application permettant notamment de jouer à un jeu multijoueur en ligne et d’interagir avec d’autres utilisateurs à travers différentes fonctionnalités sociales.\n\nCe projet m’a permis de mieux comprendre le fonctionnement d’une application full-stack et la manière dont ses différentes parties communiquent entre elles. J’ai approfondi mes connaissances en développement front-end et back-end, notamment autour des API REST, de la gestion des données et de l’authentification. J’ai également découvert et mis en pratique plusieurs technologies, telles que React, TypeScript, Node.js, PostgreSQL, Docker et bcrypt. Au-delà de leur utilisation, ce projet m’a surtout permis de mieux comprendre l’architecture globale d’une application web et les échanges entre le front-end et le back-end.\n\nLa réalisation de ce projet en équipe m’a également permis de découvrir les réalités du développement collaboratif. Nous avons dû nous organiser pour répartir les tâches, coordonner nos différentes fonctionnalités, intégrer notre code et gérer les conflits pouvant apparaître lors du développement. Cette expérience m’a appris qu’un projet en équipe ne consiste pas simplement à diviser le travail entre plusieurs personnes. Il est également nécessaire de communiquer efficacement, de comprendre le travail des autres, de s’adapter aux choix de chacun et de chercher collectivement des solutions lorsque des difficultés surviennent."
  },
  { title: 'Ft_linear_regression',
    description: 'Implémentation d’un modèle d’IA utilisant la régression linéaire pour prédire le prix d’une voiture à partir de son kilométrage.',
    details: "Ft_linear_regression est un projet d’introduction au machine learning réalisé dans le cadre du cursus 42. L’objectif était d’implémenter une régression linéaire capable d’apprendre à partir d’un ensemble de données afin de produire des prédictions.\n\nCe projet m’a permis de découvrir les bases du machine learning et d’aborder concrètement le langage Python à travers l’implémentation d’un modèle de régression linéaire. J’ai notamment travaillé sur des notions telles que la fonction de coût et la descente de gradient, et appris à les traduire en code pour entraîner le modèle et effectuer des prédictions.\n\nCe projet m’a surtout permis de mieux comprendre le lien entre les mathématiques et la programmation. Des concepts étudiés de manière théorique ont ici été utilisés directement pour construire un modèle fonctionnel. Cette première expérience m’a ainsi permis de mieux comprendre les principes fondamentaux du machine learning et de découvrir une nouvelle manière d’utiliser la programmation pour résoudre un problème à partir de données. ",
    link: 'https://github.com/Nofy261/ft_linear_regression'},
  { title: 'Learn2Slither',
    description: 'Développement d’une IA utilisant l’apprentissage par renforcement pour apprendre à jouer au Snake grâce à un système de récompenses et de pénalités.',
    details: "Learn2Slither est un projet d’intelligence artificielle réalisé en Python et basé sur l’apprentissage par renforcement. L’objectif était de développer un agent capable d’apprendre à jouer au Snake en améliorant progressivement ses décisions en fonction des conséquences de ses actions.\n\nCe projet m’a permis de découvrir les principes de l’apprentissage par renforcement et de comprendre comment un agent peut apprendre à prendre des décisions en fonction de son environnement et des résultats obtenus. J’ai notamment travaillé sur des notions telles que la récompense, la fonction de valeur et l’équation de Bellman, qui permettent à l’agent d’estimer la valeur de ses choix et d’ajuster progressivement sa stratégie.\n\nJ’ai également approfondi mes connaissances en Python en mettant en pratique ces concepts pour construire un agent capable de prendre des décisions de manière autonome. Ce projet m’a ainsi permis de mieux comprendre les mécanismes de l’apprentissage par renforcement et les différentes étapes nécessaires pour passer d’un concept mathématique à un comportement autonome.",
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
  default_title: "Astro Academia",
  default_description: "Astro Academia is a template for academic websites.",
  default_image: "/images/astro-academia.png",
};