export const infrastructureProject = {
  title: 'Inception-of-Things',
  projectType: 'Projet École 42 · Kubernetes / Docker / Argo CD',
  description: "Mise en place d'environnements Kubernetes et automatisation du déploiement d'applications avec Argo CD, selon une approche GitOps.",
  pagePath: '/inception-of-things',
  link: 'https://github.com/Nofy261/nolecler-IOT',
  technologies: 'Vagrant · VirtualBox · K3s · K3d · Docker · kubectl · Argo CD · Helm · GitLab · Bash · YAML',
  about: 'Réalisé dans le cadre de mon parcours à l’École 42, ce projet m’a permis de découvrir la virtualisation, la conteneurisation et l’orchestration d’applications. J’ai mis en place plusieurs environnements Kubernetes et automatisé leur configuration ainsi que le déploiement des applications.',
  stages: [
    {
      title: 'Mise en place de l’infrastructure',
      description: 'Création d’un cluster K3s composé de deux machines virtuelles avec Vagrant et VirtualBox, dont l’installation est automatisée par des scripts Bash. Déploiement de trois applications à partir de configurations YAML, avec un routage par nom d’hôte via un Ingress et trois réplicas pour l’une des applications.\n\nMise en place d’un cluster K3d dans Docker et d’Argo CD pour synchroniser les déploiements avec un dépôt GitHub. Intégration d’un GitLab local avec Helm, dans un namespace dédié, associé à des services de base de données, de cache et de stockage. Ce dépôt GitLab sert ensuite de source à une seconde application Argo CD pour automatiser ses déploiements.',
    },
  ],
  learning: [
    'Comprendre le fonctionnement d’un cluster Kubernetes et le rôle de ses nœuds.',
    'Configurer les déploiements, les services, les réplicas et le routage avec un Ingress.',
    'Automatiser la préparation des environnements avec des scripts Bash et des configurations YAML.',
    'Mettre en pratique le GitOps : utiliser Git comme source de configuration pour les déploiements.',
    'Installer et connecter plusieurs services dans un environnement Kubernetes.',
  ],
}
