"use client";
import { PROJECTS } from "./index";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  const categories = PROJECTS.reduce((acc: any, project) => {
    const cat = project.category || "Autres";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {});

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projets Réalisés
      </motion.h1>

      <div className="flex flex-col gap-24 px-4">
        {Object.entries(categories).map(([categoryName, projectList]: any, catIndex) => {
          const isEven = catIndex % 2 === 0;

          return (
            <div key={categoryName} className={`flex flex-col ${isEven ? "items-start" : "items-end"}`}>
              
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                transition={{ duration: 0.8 }}
                className={`mb-12 ${
                  isEven 
                    ? "border-l-4 border-orange-500 pl-4 text-left" 
                    : "border-r-4 border-cyan-500 pr-4 text-right"
                }`}
              >
                <h2 className={`text-2xl font-semibold ${isEven ? "text-orange-400" : "text-cyan-400"}`}>
                  {categoryName}
                </h2>
                <p className="text-sm text-neutral-500">Réalisations & Technologies</p>
              </motion.div>

              <div className="w-full flex flex-col gap-16">
                {projectList.map((project: any, index: number) => (
                  <div 
                    key={index} 
                    className={`flex flex-wrap lg:justify-center items-start gap-8 ${
                      // Inverse uniquement l'ordre des colonnes (Image vs Texte)
                      !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      transition={{ duration: 1 }}
                      className="w-full lg:w-1/4 flex justify-center"
                    >
                      {project.github_link ? (
                        <a 
                          href={project.github_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative group cursor-pointer w-full flex justify-center"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                          >
                            <Image
                              src={project.image}
                              width={300}
                              height={300}
                              alt={project.title}
                              className="rounded-2xl border-2 border-neutral-800 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                               <div className="flex items-center gap-2 text-white bg-neutral-900/80 px-4 py-2 rounded-full border border-white/20 text-sm font-medium">
                                 <FiGithub /> Voir le code
                               </div>
                            </div>
                          </motion.div>
                        </a>
                      ) : (
                        <div className="relative">
                          <Image
                            src={project.image}
                            width={300}
                            height={300}
                            alt={project.title}
                            className="rounded-2xl border-2 border-neutral-800 object-cover grayscale opacity-50"
                          />
                        </div>
                      )}
                    </motion.div>

                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                      transition={{ duration: 1 }}
                      className="w-full max-w-xl lg:w-3/4 text-left" 
                    >
                      <h6 className="mb-2 font-bold text-xl flex items-center gap-2">
                        {project.title}
                        <span className="h-px flex-grow bg-neutral-800"></span>
                      </h6>
                      
                      <p className="mb-6 text-neutral-400 leading-relaxed text-justify">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Liste des technos */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className={`rounded bg-neutral-900 px-3 py-1 text-xs font-medium border border-neutral-800 transition-colors ${
                                isEven 
                                  ? "bg-orange-950/20 border-orange-900 text-orange-400" 
                                  : "bg-cyan-950/20 border-cyan-900 text-cyan-400"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.github_link && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-bold transition-all duration-300 ${
                              isEven 
                                ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" 
                                : "border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
                            }`}
                          >
                            <FiGithub className="text-lg" />
                            GitHub
                            <FiExternalLink className="text-xs" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>

                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};