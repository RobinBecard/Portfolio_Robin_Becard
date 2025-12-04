export const HERO_CONTENT =
  "Passionné par l’intelligence artificielle, la science des données et le développement logiciel, je m’implique chaque jour dans des projets mêlant informatique, électronique et nouvelles technologies. Chaque défi est pour moi l’occasion de concevoir des solutions fiables, d’explorer des approches innovantes et de renforcer mes compétences techniques. Mon parcours en double diplôme entre l’Université de Sherbrooke et l’EILCO nourrit une curiosité constante et une envie de toujours aller plus loin. J’apprécie particulièrement la résolution de problèmes complexes, l’optimisation de systèmes et la mise en production d’applications modernes.";

export const ABOUT_CONTENT = (
  <div>
    <p className="indent-8">
      Je suis <strong>Robin BECARD</strong>, étudiant en <strong>double diplôme en intelligence artificielle et science des données</strong> entre l’<strong>Université de Sherbrooke</strong> et l’<strong>École d’Ingénieurs du Littoral Côte d’Opale (EILCO)</strong>. Ce cursus me permet d’approfondir les fondements de l’IA tout en consolidant mes compétences d’ingénieur en informatique.
    </p>
    <br />
    <p className="indent-8">
      Actuellement en cycle ingénieur en <strong>génie informatique</strong> et en <strong>maîtrise en informatique – cheminement intelligence artificielle et science des données</strong>, je m’intéresse particulièrement au <strong>machine learning</strong>, à la <strong>science des données</strong> et au <strong>développement web full‑stack</strong>.
    </p>
    <br />
    <p className="indent-8">
      Au fil de mon parcours, j’ai travaillé sur des projets académiques et professionnels en <strong>détection d’anomalies</strong>, en <strong>algorithmes de graphes</strong> et en <strong>applications web</strong>, ainsi que sur des projets personnels mêlant électronique, programmation et 3D. Ces expériences renforcent mes compétences en Python, en outils data (Pandas, NumPy, Scikit‑learn) et en technologies web modernes (HTML, CSS, JavaScript, PHP, React, Symfony).
    </p>
    <br />
    <p className="indent-8">
      Mon objectif est de <span className="font-bold">contribuer à des projets innovants en IA et data science</span>, en mettant à profit mon profil d’ingénieur pour concevoir des solutions robustes et utiles. Je suis motivé à rejoindre des équipes où je peux apprendre, expérimenter et participer concrètement à l’essor des technologies numériques.
    </p>
  </div>
);

export const EXPERIENCES = [
  {
    year: "Juin 2025 - Juillet 2025",
    role: "Développeur Full‑Stack (Stage)",
    company: "BUSIPART, Saint-Martin-Boulogne",
    description:
      "Développement d’une application web de supervision des machines virtuelles sur Google Cloud Platform, intégrant les APIs GCP pour centraliser les métriques d’infrastructure et mettre en place des alertes automatisées. Participation à la conception de l’architecture, à l’implémentation front‑end / back‑end et à la rédaction d’une documentation pour les équipes internes.",
    technologies: ["Python", "JavaScript", "React", "API REST", "GCP"],
  },
  {
    year: "Janvier 2023 - Février 2023",
    role: "Développeur VBA (Stage)",
    company: "EDF, CNPE de Gravelines",
    description:
      "Conception et déploiement d’un outil Excel/VBA pour organiser et tracer les fichiers du service « Équipe Commune ». Analyse des besoins des utilisateurs, modélisation de l’organisation des dossiers, développement de macros pour automatiser le classement et la recherche de documents, puis rédaction d’une documentation et accompagnement des équipes à la prise en main.",
    technologies: ["Excel", "VBA", ""],
  },
  {
    year: "Juillet 2023",
    role: "Employé logistique (Job d’été)",
    company: "Leroy Merlin, Calais",
    description:
      "Accueil des transporteurs, chargement et déchargement des livraisons, gestion des retours en rayon et des déchets du magasin. Contribution au bon fonctionnement de la logistique et au support des équipes de vente.",
    technologies: ["Gestion logistique"],
  },
  {
    year: "2018 - 2019",
    role: "Stagiaire assistant dessinateur",
    company: "Maisons d’en Flandre, Hazebrouck",
    description:
      "Découverte de la conception de maisons individuelles avec le logiciel Allplan. Support à la réalisation de plans (électricité, gros œuvre, plans d’évacuation) et familiarisation avec les contraintes techniques du bâtiment.",
    technologies: ["Allplan"],
  },
];

import Image from "next/image";
import Projet1 from "../assets/Projet_1.png";
import Projet2 from "../assets/Projet_2.jpg";
import Projet3 from "../assets/Projet_3.jpg";
import Projet4 from "../assets/Projet_4.png";

export const PROJECTS = [
  {
    title: "Kingdomino",
    image: Projet1,
    description:
      "Réalisation d’un jeu vidéo inspiré du jeu de plateau « Kingdomino ». Projet mené en équipe de trois durant le cycle préparatoire, permettant de renforcer mes compétences en algorithmique, gestion de projet et programmation orientée objet.",
    technologies: ["Python", "NumPy", "Pygame"],
  },
  {
    title: "Robot d’analyse de l’environnement pour les secours",
    image: Projet2,
    description:
      "Conception d’un robot capable de se déplacer dans des espaces restreints et de collecter différentes données via des capteurs (gaz, fumée, etc.), avec transmission vers une application mobile dédiée. Ce projet m’a permis de progresser en électronique embarquée, modélisation 3D et intégration de capteurs autour d’une plateforme Arduino.",
    technologies: ["Arduino", "MIT App Inventor", "SolidWorks", "Fusion 360"],
  },
  {
    title: "Maison connectée",
    image: Projet3,
    description:
      "Développement en équipe d’une maison connectée pilotable automatiquement ou via une application mobile. Intégration de capteurs (gaz, pluie, luminosité…) et d’un système basé sur Arduino. Ce projet m’a donné l’occasion de jouer un rôle de chef d’équipe et de coordonner la bonne réalisation de l’ensemble des fonctionnalités.",
    technologies: ["Arduino", "MIT App Inventor", "SolidWorks", "Fusion 360"],
  },
  {
    title: "Site web pour la vie étudiante de l’EILCO",
    image: Projet4,
    description:
      "Conception d’un site web destiné à centraliser les clubs et associations de l’école, avec gestion de rôles (membres, présidents, administrateur) et suivi personnalisé des clubs. Le projet a mobilisé des compétences en développement web front‑end et back‑end ainsi qu’en gestion des droits d’accès.",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
  },
];

export const CONTACT = {
  adress: "Sherbrooke J1H 5E9, Québec, Canada",
  email: "robinbecard@gmail.com",
  number: "(+33) 7 71 82 99 16",
};
