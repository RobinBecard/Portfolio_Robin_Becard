  export const HERO_CONTENT =
    "Passionné par l’intelligence artificielle, la science des données et le développement logiciel, je m’implique chaque jour dans des projets mêlant informatique, électronique et nouvelles technologies. Chaque défi est pour moi l’occasion de concevoir des solutions fiables, d’explorer des approches innovantes et de renforcer mes compétences techniques. Mon parcours en double diplôme entre l’Université de Sherbrooke et l’EILCO nourrit une curiosité constante et une envie de toujours aller plus loin. J’apprécie particulièrement la résolution de problèmes complexes, l’optimisation de systèmes et la mise en production d’applications modernes.";

export const ABOUT_CONTENT = (
  <div className="text-neutral-300">
    <p className="indent-8 leading-relaxed">
      Je m'appelle <strong>Robin BECARD</strong> et je poursuis actuellement un <strong>double diplôme</strong> entre l’<strong>Université de Sherbrooke</strong> et l’<strong>EILCO</strong>. Ce cursus me permet de valider une Maîtrise en intelligence artificielle au Canada parallèlement à mon diplôme d'ingénieur en informatique en France.
    </p>
    <br />
    <p className="indent-8 leading-relaxed">
      Ma démarche est centrée sur la <strong>Science des Données</strong> : j'aime explorer des jeux de données complexes pour en extraire des connaissances exploitables. J'ai affiné cette expertise sur des projets à forte valeur scientifique, comme la classification de données d'astéroïdes pour la <strong>NASA</strong> ou l'analyse morphométrique par <strong>Deep Learning (PyTorch)</strong>. Ces expériences m'ont permis de maîtriser l'ensemble du pipeline data, de l'analyse exploratoire (EDA) à la conception de modèles prédictifs avec <strong>Scikit-learn</strong>.
    </p>
    <br />
    <p className="indent-8 leading-relaxed">
      Mon bagage en <strong>génie informatique</strong> est pour moi un levier technique indispensable. Il me permet de ne pas limiter l'IA à l'expérimentation, mais de concevoir des architectures logicielles capables de supporter et de déployer ces modèles. Que ce soit pour structurer des pipelines de données ou développer des interfaces via <strong>React/Next.js</strong>, je m'assure que la donnée reste accessible et valorisée.
    </p>
    <br />
    <p className="indent-8 leading-relaxed">
      Aujourd'hui, je souhaite m'investir pleinement dans des défis liés à l'<strong>IA et à la Data Science</strong>. Mon objectif est de mettre à profit ma double culture ingénieur/recherche pour résoudre des problématiques complexes, en apportant une expertise technique rigoureuse sur le traitement et l'interprétation des données.
    </p>
  </div>
);

import Eilco_logo from "../assets/EILCO.png";
import Udes_logo from "../assets/UdeS.png";

export const FORMATIONS = [
  {
    year : "2025 - Présent",
    degree : "Maîtrise en informatique - cheminement Intelligence Artificielle et Science des Données",
    institution : "Université de Sherbrooke, Québec, Canada",
    image: Udes_logo,
    website : "https://www.usherbrooke.ca/"
  },
  {
    year: "2021 - Présent",
    degree: "Diplôme d'ingénieur en génie informatique (double diplôme)",
    institution : "École d'Ingénieurs du littoral Côte d'Opale (EILCO), Calais, France",
    image: Eilco_logo,
    website: "https://eilco.univ-littoral.fr/",
  },
]

import Busipart_logo from "../assets/Busipart.png";
import LeroyMerlin_logo_logo from "../assets/LeroyMerlin.png";
import Edf_logo from "../assets/Edf.png";

export const EXPERIENCES = [
  {
    year: "Juin 2025 - Juillet 2025",
    role: "Développeur Full‑Stack (Stage)",
    company: "BUSIPART, Saint-Martin-Boulogne",
    description:
      "Développement d’une application web de supervision des machines virtuelles sur Google Cloud Platform (GCP), intégrant les APIs GCP pour centraliser les métriques d’infrastructure et mettre en place des alertes automatisées. Participation à la conception de l’architecture, à l’implémentation front‑end / back‑end et à la rédaction d’une documentation pour les équipes internes.",
    technologies: ["Python", "JavaScript", "React", "API REST", "GCP"],
    image: Busipart_logo,
  },
  {
    year: "Juillet 2023",
    role: "Employé logistique (Job d’été)",
    company: "Leroy Merlin, Calais",
    description:
      "Accueil des transporteurs, chargement et déchargement des livraisons, gestion des retours en rayon et des déchets du magasin. Contribution au bon fonctionnement de la logistique et au support des équipes de vente.",
    technologies: ["Gestion logistique"],
    image: LeroyMerlin_logo_logo,
  },
  {
    year: "Janvier 2023 - Février 2023",
    role: "Développeur VBA (Stage)",
    company: "EDF, CNPE de Gravelines",
    description:
      "Conception et déploiement d’un outil Excel/VBA pour organiser et tracer les fichiers du service « Équipe Commune ». Analyse des besoins des utilisateurs, modélisation de l’organisation des dossiers, développement de macros pour automatiser le classement et la recherche de documents, puis rédaction d’une documentation et accompagnement des équipes à la prise en main.",
    technologies: ["Pack Office", "VBA"],
    image: Edf_logo,
  },
];

import Kingdomino from "../assets/kingdomino_image.png";
import EmbeddedSystem from "../assets/EmbeddedSystem.png";
import SmartHome from "../assets/SmartHome.jpg";
import EilcoWebsite from "../assets/EilcoWebsite.png";
import FoodRecipes from "../assets/FoodRecipes.jpg";
import NasaIft712 from "../assets/Nasa.png";
import ProjetOtolith from "../assets/Otholites.png";
import ProjetPhytoplankton from "../assets/Phytoplankton.jpg";

export const PROJECTS = [ 
  {
  title: "NASA Near-Earth Objects Classification",
  category: "Machine Learning / Data Science",
  image: NasaIft712,
  description:
    "Étude comparative et implémentation de 6 algorithmes de classification (SVM, Réseaux de neurones, etc.) pour prédire la dangerosité des objets célestes frôlant la Terre, basée sur un jeu de données de la NASA de 300 000 entrées.",
  technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "Pandas", "Matplotlib"],
  github_link: "https://github.com/RobinBecard/IFT712_Project",
},
{
  title: "Otolith Landmark Prediction",
  category: "Deep Learning / Recherche Scientifique",
  image: ProjetOtolith,
  description:
    "Analyse et prédiction de points de repère (landmarks) sur des otolithes de poissons par apprentissage profond. Ce projet vise à automatiser l'extraction de données morphométriques pour faciliter l'étude de la croissance et des populations de poissons.",
  technologies: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "NumPy"],
  github_link: "https://github.com/RobinBecard/Otolith-landmark-prediction-analysis",
},
{
  title: "Phytoplankton Insights",
  category: "Machine Learning / Data Science",
  image: ProjetPhytoplankton,
  description:
    "Utilisation du Machine Learning non supervisé (ACP & K-Means) pour classifier le phytoplancton mondial. L'analyse de 9 484 échantillons a permis d'identifier 4 groupes biologiques majeurs (comme les Diatomées et Cyanobactéries) et de cartographier leur distribution océanique.",
  technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter Notebook"],
  github_link: "https://github.com/RobinBecard/Machine-learning-for-phytoplankton-insights",
},
  {
    title: "FoodRecipes",
    category: "Web & Logiciel",
    image: FoodRecipes, 
    description:
      "Application web de recherche de recettes de cuisine développée avec Angular. L'interface permet d'explorer des catalogues de plats, de filtrer les résultats et de consulter les détails nutritionnels via une architecture par composants.",
    technologies: ["Angular", "TypeScript", "SCSS", "RxJS"],
    github_link: "https://github.com/RobinBecard/FoodRecipes",
  },
  {
    title: "Site web pour la vie étudiante",
    category: "Web & Logiciel",
    image: EilcoWebsite,
    description:
      "Conception d’un site web destiné à centraliser les clubs et associations de l’école, avec gestion de rôles (membres, présidents, administrateur) et suivi personnalisé des clubs.",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    github_link: "",
  },
  {
    title: "Embedded Environment Analysis System",
    category: "Robotique & Eléctronique",
    image: EmbeddedSystem,
    description:
      "Conception et fabrication d'un robot autonome d'assistance au sauvetage (Rescue-assisting). Le système intègre une analyse multicapteurs en temps réel (gaz, température, pression), un flux vidéo live via ESP32-CAM et un contrôle Bluetooth, le tout abrité dans une structure modulaire imprimée en 3D.",
    technologies: ["Arduino MEGA", "C++", "SolidWorks", "Impression 3D", "Bluetooth"],
    github_link: "https://github.com/RobinBecard/Embedded-environment-analysis-system",
  },
  {
  title: "SmartHome",
  category: "Robotique & Eléctronique",
  image: SmartHome,
  description:
    "Solution domotique intégrée sur Arduino Mega gérant l'automatisation du climat, de l'éclairage et de la sécurité. Le système utilise une machine à états pour la gestion autonome (chauffage, aération, protection pluie) et un protocole série pour le contrôle manuel via application mobile.",
  technologies: ["C++", "Arduino Mega", "IoT", "Systèmes Embarqués", "Communication Série"],
  github_link: "https://github.com/RobinBecard/SmartHome",
},
  {
    title: "Kingdomino",
    category: "Développement Jeu Vidéo",
    image: Kingdomino,
    description:
      "Réalisation d’un jeu vidéo inspiré du jeu de plateau « Kingdomino ». Projet mené en équipe de trois durant le cycle préparatoire, permettant de renforcer mes compétences en algorithmique, gestion de projet et programmation orientée objet.",
    technologies: ["Python", "NumPy", "Pygame"],
    github_link: "",
  },
];
export const CONTACT = {
  adresses: ["Sherbrooke J1H 5E9, Québec, Canada", "Polincove 62370, France"],
  email: ["Robin.Becard@USherbrooke.ca", "robin.becard@etu.eilco.univ-littoral.fr"],
};
