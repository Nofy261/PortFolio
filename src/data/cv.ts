export const experiences = [
  {
    company: "Appel Médical",
    time: "2017 - 2023",
    title: "Aide-soignante intérimaire",
    location: "Bordeaux",
    description: "Interventions dans différents services (médecine, chirurgie, EHPAD, à domicile, foyer...). Travail en équipe et communication, adaptation rapide à des environnements variés, gestion des priorités et situations d'urgence, rigueur et sens des responsabilités.",
  },
  {
  	company: "AAPAM - Agence de services d'aide à domicile",
  	time: "2015",
  	title: "Aide à domicile",
  	location: "Médoc",
  	description: "Accompagnement des personnes âgées et/ou en situation de handicap dans les tâches quotidiennes, entretien du domicile et aide aux actes essentiels de la vie courante.",
  },
];

export const education = [
  {
    school: "Ecole 42",
    time: "2024 - 2029",
    degree: "Architecte en Technologie du Numérique",
    location: "Angoulême",
    description: "À la recherche d'une alternance pour préparer et valider le titre RNCP niveau 7 en développement Web, IA & Data.",
  },
  {
    school: "Apdhes Centre Pierre Veaux",
    time: "2016",
  	degree: "Diplôme d'État d'Aide-Soignant",
  	location: "Lesparre - Médoc",
  	description: "",
   },
];

export const skills = [
  {
    title: "Langages",
    description: "C, C++, Java, TypeScript",
  },
  {
  	title: "Frontend",
  	description: "Angular",
  },
  {
    title: "Backend",
    description: "Spring Boot, API REST",
  },
  {
  	title: "Bases de données",
  	description: "PostgreSQL",
  },
  {
  	title: "Outils",
  	description: "GitHub, VSCode",
  },

];

export const strengths = [
  { title: "Capacité d'adaptation", description: "" },
  { title: "Esprit d'équipe", description: "" },
  { title: "Rigueur", description: "" },
];

export const languages = [
  { name: "Français", level: "Courant", percent: 95 },
  { name: "Anglais", level: "Intermédiaire", percent: 50 },
  { name: "Malgache", level: "Langue maternelle", percent: 100 },
];

export const interests = ["Lecture", "Randonnée", "Cuisine & Pâtisserie"];


export const publications = [
  {
    title: "SinistreTrack",
    subtitle: "Application Web Full-Stack",
    authors: "",
    journal: "Projet personnel",
    time: "2026",
    link: "https://github.com/Nofy261/SinistreTrack",
    abstract: "Application web de gestion de sinistres développée avec <strong>Angular et Java</strong>. Elle permet de gérer les clients, leurs contrats d’assurance et les sinistres associés, avec notamment une <strong>authentification</strong>, une <strong>gestion des données</strong> et des <strong>opérations CRUD</strong>.",
    about: "Application web de gestion de sinistres permettant à un agent de gérer les clients, leurs contrats d’assurance et les sinistres associés. Le projet reproduit le fonctionnement d’une application de gestion dans le domaine de l’assurance.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    techStack: [
      { category: "Frontend", items: ["Angular", "TypeScript"] },
      { category: "Backend", items: ["Java", "Spring Boot"] },
      { category: "Base de données", items: ["PostgreSQL"] },
      { category: "Communication", items: ["API REST"] },
    ],
    architecture: "Angular → REST API → Spring Boot → PostgreSQL",
    features: [
      "Authentification et gestion des comptes — inscription, connexion et mots de passe hachés.",
      "Gestion CRUD (création, consultation, modification, suppression) des clients, contrats d’assurance et sinistres associés.",
      "Dashboard — recherche de clients et accès aux informations associées.",
    ],
    experience: "Premier projet personnel réalisé avec Angular et Java, il m’a permis de mettre en pratique le développement d’une application full-stack et de mieux comprendre la communication entre le front-end et le back-end. J’ai notamment approfondi la conception d’API REST, la gestion des données et l’organisation d’une application complète. Ce projet a confirmé mon intérêt pour le développement web et mon envie de me spécialiser en Angular et Java.",
    image: "",
    demoVideo: "appli.webm",
  },
];

