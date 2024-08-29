export const HERO_CONTENT = "Passionné par l&apos;informatique, l&apos;électronique et les nouvelles technologies, je me plonge chaque jour dans un univers en constante évolution. Pour moi, chaque défi est une occasion de mettre en pratique mes compétences, d&apos;explorer des solutions innovantes et d&apos;apprendre quelque chose de nouveau. Mon engagement envers ces domaines se traduit par une curiosité insatiable et une volonté de toujours aller plus loin. J&apos;aime résoudre des problèmes complexes, créer des systèmes optimisés et rester à la pointe des dernières avancées technologiques. Chaque projet est une aventure qui nourrit ma passion et me pousse à repousser les limites du possible.";


export const ABOUT_CONTENT = (
  <div>
    <p className="indent-8">
      Je suis <strong>Robin BECARD</strong>, étudiant en ingénierie informatique à l&apos;<strong>École d&apos;Ingénieur du Littoral Côte d&apos;Opal (EILCO)</strong>.
      Après avoir complété deux années de cycle préparatoire, j&apos;ai acquis les connaissances fondamentales nécessaires pour avancer dans le domaine de l&apos;informatique.
    </p>
    <br />
    <p className="indent-8">
      Actuellement en <strong>deuxième année de cycle ingénieur</strong>, je suis à la recherche d&apos;un stage de deux mois dans les domaines du <strong>système embarqué</strong>, de l&apos;<strong>intelligence artificielle</strong> ou de la <strong>cybersécurité</strong>.
    </p>
    <br />
    <p className="indent-8">
      Tout au long de mon parcours, j&apos;ai eu l&apos;opportunité de travailler sur divers projets informatiques et électroniques, renforçant ainsi mes compétences techniques. En parallèle, j&apos;ai réalisé plusieurs projets personnels, dont la <span className="font-bold">création de jeux vidéo</span>, la <span className="font-bold">conception d&apos;une borne d&apos;arcade</span>, ainsi que diverses <span className="font-bold">réalisations en impression 3D</span>.
    </p>
    <br />
    <p className="indent-8">
      Mon objectif est de <span className="font-bold">contribuer à l&apos;innovation technologique</span> et de rester à la pointe des avancées dans ces domaines passionnants. Je suis enthousiaste à l&apos;idée de mettre mes compétences en pratique et de participer à des projets stimulants qui façonnent le futur de la technologie.
    </p>
  </div>
);



export const EXPERIENCES = [
  {
    year: "Juillet 2023",
    role: "Job d’été",
    company: "Leroy Merlin, Calais",
    description: `Au sein de Leroy Merlin, j&apos;avais pour mission d&apos;accueillir, charger et décharger les arrivages des différents transporteurs. De plus, je devais gérer les retours de la mise en rayon en plus des déchets de l&apos;ensemble du magasin.`,
    technologies: ["Login"], 
  },
  {
    year: "31 Janvier 2023 - 27 février 2023",
    role: "Stage-ingénieur logiciel",
    company: "EDF, CNPE de Gravelines",
    description: `Chez EDF, j&apos;ai réalisé un outil informatique sur PowerPoint afin de gérer l&apos;ensemble des fichiers du service “Équipe Commune”, rendant leur utilisation plus simple. La programmation VBA a été la clé de ce projet.`,
    technologies: ["PowerPoint", "VBA"],
  },
  {
    year: "2018 - 2019",
    role: "Stage-assistant dessinateur",
    company: "Maisons d&apos;en Flandre, Hazebrouck",
    description: `Découverte de la conception graphique de maisons individuelles avec le logiciel professionnel Allplan. Accompagnement du dessinateur pour la réalisation de plans (électrique, gros œuvre, plan d&apos;évacuation).`,
    technologies: ["Allplan"],
  },
];
  import Image from 'next/image';
  import Projet1 from "../assets/Projet_1.png";
  import Projet2 from "../assets/Projet_2.jpg";
  import Projet3 from "../assets/Projet_3.jpg";
  import Projet4 from "../assets/Projet_4.png";
  export const PROJECTS = [
    {
      title: "Kingdomino",
      image: Projet1,
      description: "Réalisation d&apos;un jeu vidéo basé sur le jeu de plateau &apos;Kingdomino&apos;. Ce projet a été réalisé en groupe de trois élèves et a été effectué au cours de ma première année de cycle préparatoire",
      technologies: ["python", "numpy", "pygame"]
    },
    {
      title: "Robot d&apos;analyse de l&apos;environnement pour les secours",
      image: Projet2,
      description: "J&apos;ai conçu un robot capable de se déplacer dans des espaces restreints et de collecter diverses données à l&apos;aide de capteurs, tels que des détecteurs de gaz (méthane, CO2, fumée, etc.). Ces données sont ensuite transférées vers une application que j&apos;ai également développée. Ce projet m&apos;a permis de progresser significativement et de mieux comprendre les contraintes des systèmes électroniques. De plus, le projet a représenté un défi en termes de modélisation 3D, car j&apos;ai entièrement conçu et réalisé le châssis du robot. Ce dernier est principalement constitué d&apos;un Arduino et de plusieurs capteurs compatibles. Ce projet a été réalisé au cours de ma deuxième année de cycle préparatoire.",
      technologies: ["arduino", "MIT-app-inventor", "SolidWorks", "fusion360"]
    },
    {
      title: "Maison connectée",
      image: Projet3,
      description: "Avec mon équipe, nous avons développé une maison connectée, capable d&apos;être gérée automatiquement grâce à une programmation intelligente ou via une application mobile que nous avons également créée. La maison repose sur un système Arduino, intégrant divers capteurs compatibles, tels que des détecteurs de gaz, de pluie, de luminosité, ainsi que différentes LED. Ce projet m&apos;a permis d&apos;assumer le rôle de chef d&apos;équipe, où j&apos;ai pu diriger le projet et veiller à sa réussite complète.",
      technologies: ["arduino", "MIT-app-inventor", "SolidWorks", "fusion360"]
    },
    {
      title: "Site WEB pour la vie étudiante de l&apos;EILCO",
      image: Projet4,
      description: "En binôme, nous avons développé un site web destiné à centraliser les différents clubs et associations de l&apos;école. Le site gère différents niveaux d&apos;accès utilisateur : membre, président de club/association, et administrateur. Chaque membre peut suivre plusieurs clubs, tandis que les présidents de club peuvent publier du contenu sur leur page dédiée pour dynamiser le site. L&apos;administrateur a la capacité de gérer l&apos;ensemble des publications ainsi que les utilisateurs. Ce projet a été très enrichissant, mobilisant diverses compétences telles que la programmation en HTML, CSS, et PHP.",
      technologies: ["HTML", "CSS", "PHP"]
    }
  ];

  export const CONTACT ={
    adress:"39 rue du Trempal, 62370 POLINCOVE",
    email:"robinbecard@gmail.com",
    number:"07 71 82 99 16"
  }
    
  
 