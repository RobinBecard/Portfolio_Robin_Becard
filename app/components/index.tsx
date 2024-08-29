export const HERO_CONTENT = "Passionné par l'informatique, l'électronique et les nouvelles technologies, je me plonge chaque jour dans un univers en constante évolution. Pour moi, chaque défi est une occasion de mettre en pratique mes compétences, d'explorer des solutions innovantes et d'apprendre quelque chose de nouveau. Mon engagement envers ces domaines se traduit par une curiosité insatiable et une volonté de toujours aller plus loin. J'aime résoudre des problèmes complexes, créer des systèmes optimisés et rester à la pointe des dernières avancées technologiques. Chaque projet est une aventure qui nourrit ma passion et me pousse à repousser les limites du possible.";

export const ABOUT_CONTENT = (
    <div>
      <p className="indent-8">
        Je suis <strong>Robin BECARD</strong>, étudiant en ingénierie informatique à l'<strong>École d'Ingénieur du Littoral Côte d'Opal (EILCO)</strong>.
        Après avoir complété deux années de cycle préparatoire, j'ai acquis les connaissances fondamentales nécessaires pour avancer dans le domaine de l'informatique.
      </p>
      <br />
      <p className="indent-8">
        Actuellement en <strong>deuxième année de cycle ingénieur</strong>, je suis à la recherche d'un stage de deux mois dans les domaines du <strong>système embarqué</strong>, de l'<strong>intelligence artificielle</strong> ou de la <strong>cybersécurité</strong>.
      </p>
      <br />
      <p className="indent-8">
        Tout au long de mon parcours, j'ai eu l'opportunité de travailler sur divers projets informatiques et électroniques, renforçant ainsi mes compétences techniques. En parallèle, j'ai réalisé plusieurs projets personnels, dont la <span className="font-bold">création de jeux vidéo</span>, la <span className="font-bold">conception d'une borne d'arcade</span>, ainsi que diverses <span className="font-bold">réalisations en impression 3D</span>.
      </p>
      <br />
      <p className="indent-8">
        Mon objectif est de <span className="font-bold">contribuer à l'innovation technologique</span> et de rester à la pointe des avancées dans ces domaines passionnants. Je suis enthousiaste à l'idée de mettre mes compétences en pratique et de participer à des projets stimulants qui façonnent le futur de la technologie.
      </p>
    </div>
  );



  export const EXPERIENCES = [
    {
      year: "Juillet 2023",
      role: "Job d’été",
      company: "Leroy Merlin, Calais",
      description: `Au sein de Leroy Merlin, j’avais pour mission d’accueillir, charger et décharger les arrivages des différents transporteurs. De plus, je devais gérer les retours de la mise en rayon en plus des déchets de l’ensemble du magasin.`,
      technologies: ["Login"], 
    },
    {
      year: "31 Janvier 2023 - 27 février 2023",
      role: "Stage-ingénieur logiciel",
      company: "EDF, CNPE de Gravelines",
      description: `Chez EDF, j’ai réalisé un outil informatique sur PowerPoint afin de gérer l’ensemble des fichiers du service “Équipe Commune”, rendant leur utilisation plus simple. La programmation VBA a été la clé de ce projet.`,
      technologies: ["PowerPoint", "VBA"],
    },
    {
      year: "2018 - 2019",
      role: "Stage-assistant dessinateur",
      company: "Maisons d'en Flandre, Hazebrouck",
      description: `Découverte de la conception graphique de maisons individuelles avec le logiciel professionnel Allplan. Accompagnement du dessinateur pour la réalisation de plans (électrique, gros œuvre, plan d'évacuation).`,
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
      image: Projet1, // Use the imported image
      description: "Réalisation d'un jeu vidéo basé sur le jeu de plateau 'Kingdomino. Ce projet a été réalisé en groupe de trois élèves et a été effectué au cours de ma première année de cycle préparatoire",
      technologies: ["python", "numpy", "pygame"]
    },
    {
      title: "Robot d'analyse de l'environnement pour les secours",
      image: Projet2, // Use the imported image
      description: "J'ai conçu un robot capable de se déplacer dans des espaces restreints et de collecter diverses données à l'aide de capteurs, tels que des détecteurs de gaz (méthane, CO2, fumée, etc.). Ces données sont ensuite transférées vers une application que j'ai également développée. Ce projet m'a permis de progresser significativement et de mieux comprendre les contraintes des systèmes électroniques. De plus, le projet a représenté un défi en termes de modélisation 3D, car j'ai entièrement conçu et réalisé le châssis du robot. Ce dernier est principalement constitué d'un Arduino et de plusieurs capteurs compatibles. Ce projet a été réalisé au cours de ma deuxième année de cycle préparatoire.",
      technologies: ["arduino", "MIT-app-inventor", "SolidWorks", "fusion360"]
    },
    {
      title: "Maison connectée",
      image: Projet3, // Use the imported image
      description: "Avec mon équipe, nous avons développé une maison connectée, capable d'être gérée automatiquement grâce à une programmation intelligente ou via une application mobile que nous avons également créée. La maison repose sur un système Arduino, intégrant divers capteurs compatibles, tels que des détecteurs de gaz, de pluie, de luminosité, ainsi que différentes LED. Ce projet m'a permis d'assumer le rôle de chef d'équipe, où j'ai pu diriger le projet et veiller à sa réussite complète.",
      technologies: ["arduino", "MIT-app-inventor", "SolidWorks", "fusion360"]
    },
    {
      title: "Site WEB pour la vie étudiante de l'EILCO",
      image: Projet4, // Use the imported image
      description: "En binôme, nous avons développé un site web destiné à centraliser les différents clubs et associations de l'école. Le site gère différents niveaux d'accès utilisateur : membre, président de club/association, et administrateur. Chaque membre peut suivre plusieurs clubs, tandis que les présidents de club peuvent publier du contenu sur leur page dédiée pour dynamiser le site. L'administrateur a la capacité de gérer l'ensemble des publications ainsi que les utilisateurs. Ce projet a été très enrichissant, mobilisant diverses compétences telles que la programmation en HTML, CSS, et PHP.",
      technologies: ["HTML", "CSS", "PHP"]
    }
  ];

  export const CONTACT ={
    adress:"39 rue du Trempal, 62370 POLINCOVE",
    email:"robinbecard@gmail.com",
    number:"07 71 82 99 16"
  }
    
  
 