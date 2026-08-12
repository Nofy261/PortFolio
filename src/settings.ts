export const profile = {
  fullName: "Nofy Leclercq",
  title: "Développeuse Angular - Java",
  description:
    "Développeuse junior et étudiante à l’École 42, je m’intéresse particulièrement au développement web, à l’IA et à la Data.",
  author_name: "", // Author name to be highlighted in the papers section
  research_areas: [
  { title: 'Ft_transcendance',
    description: 'Application web full-stack avec un jeu multijoueur et des fonctionnalités sociales.',
    details: "Ft_transcendence est un projet de développement web complet réalisé en équipe dans le cadre du cursus 42.\nCe projet m’a permis de mieux comprendre le fonctionnement d’une application full-stack, ainsi que la communication entre ses différentes parties. J’ai approfondi mes connaissances en développement frontend et backend, en particulier autour des API REST, de la gestion des données et de l’authentification.\nLe fait que le projet ait été réalisé en équipe m’a également apporté une expérience concrète du développement collaboratif.\nJ’ai été confronté aux problématiques qui peuvent apparaître lorsqu’on travaille à plusieurs sur un même projet : répartition des tâches, organisation du travail, communication, intégration du code, gestion des conflits et coordination entre les différentes fonctionnalités.\nCette expérience m’a appris qu’un projet en équipe ne consiste pas seulement à diviser les tâches, mais aussi à communiquer efficacement, s’adapter au travail des autres et trouver des solutions collectivement lorsque des problèmes apparaissent..."
  },
  { title: 'Ft_linear_regression',
    description: 'Implémentation d’un modèle d’IA utilisant la régression linéaire pour prédire le prix d’une voiture à partir de son kilométrage.',
    details: "Projet d’introduction au machine learning réalisé dans le cadre du cursus 42.\nL’objectif était d’implémenter une régression linéaire capable d’apprendre à partir de données et de faire des prédictions.\nCe projet m’a permis de découvrir concrètement les bases du machine learning et de l’intelligence artificielle, tout en découvrant le langage Python à travers l’implémentation d’un modèle de régression linéaire. J’ai notamment approfondi des notions comme la fonction de coût et la descente de gradient, tout en comprenant mieux le lien entre les mathématiques et leur implémentation en programmation.\nEnfin, ce projet m’a donné une première expérience concrète dans le domaine de l’IA et du machine learning, et m’a permis de faire le lien entre des concepts mathématiques étudiés théoriquement et leur implémentation en programmation.",
    link: 'https://github.com/Nofy261/ft_linear_regression'},
  { title: 'Learn2Slither',
    description: 'Développement d’une IA utilisant l’apprentissage par renforcement pour apprendre à jouer au Snake grâce à un système de récompenses et de pénalités.',
    details: " Projet d’intelligence artificielle réalisé en Python, basé sur l’apprentissage par renforcement.\nL’objectif était de développer un agent capable d’apprendre à jouer au Snake en améliorant progressivement ses décisions grâce aux récompenses et pénalités associées à ses actions.\nCe projet m’a permis de découvrir l’apprentissage par renforcement, notamment la manière dont un agent apprend à choisir ses actions en fonction de son environnement et des récompenses obtenues.\nJ’ai également découvert des notions importantes comme la fonction de valeur, la récompense et l’équation de Bellman, qui permettent de comprendre comment l’agent évalue ses actions et améliore progressivement sa stratégie.\nEnfin, ce projet m’a permis d’approfondir mes connaissances en Python, tout en mettant en pratique les concepts d’apprentissage par renforcement et de prise de décision autonome.",
    link: 'https://github.com/Nofy261/Learn2Slither'}
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "",
  linkedin: "",
  x: "",
  bluesky: "",
  github: "",
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