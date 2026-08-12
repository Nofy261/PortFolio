export const profile = {
  fullName: "Nofy Leclercq",
  title: "Développeuse Angular - Java",
  description:
    "Développeuse junior et étudiante à l’École 42, je m’intéresse particulièrement au développement web, à l’IA et à la Data.",
  author_name: "", // Author name to be highlighted in the papers section
  research_areas: [
  { title: 'Ft_transcendance', description: 'Application web full-stack avec un jeu multijoueur et des fonctionnalités sociales.'},
  { title: 'Ft_linear_regression', description: 'Implémentation d’un modèle d’IA utilisant la régression linéaire pour prédire le prix d’une voiture à partir de son kilométrage.', link: 'https://github.com/Nofy261/ft_linear_regression'},
  { title: 'Learn2Slither', description: 'Développement d’une IA utilisant l’apprentissage par renforcement pour apprendre à jouer au Snake grâce à un système de récompenses et de pénalités.', link: 'https://github.com/Nofy261/Learn2Slither'}
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
  base: "/PortFolio/", // Repository name starting with /
};

export const seo = {
  default_title: "Astro Academia",
  default_description: "Astro Academia is a template for academic websites.",
  default_image: "/images/astro-academia.png",
};