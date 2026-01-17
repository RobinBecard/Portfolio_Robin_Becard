"use client";
import { EXPERIENCES } from "./index";
import { motion } from "framer-motion";
import Image from 'next/image';

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Expériences professionnelles
      </motion.h1>

      <div className="px-4">
        {EXPERIENCES.map((experience, index) => {
          const isBusipart = experience.company === "Busipart";

          return (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="group mb-12 flex flex-wrap lg:justify-center items-start p-6 rounded-2xl transition-colors duration-100"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex flex-col items-center lg:items-start mb-4"
              >
                <p className="mb-4 text-sm text-neutral-400 font-medium">
                  {experience.year}
                </p>
                
                <div className={`flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-3 
                  ${isBusipart 
                    ? "w-36 h-36 lg:w-44 lg:h-44 bg-transparent"
                    : "w-28 h-28 lg:w-32 lg:h-32 bg-white p-3 rounded-2xl border border-neutral-800 shadow-lg"
                  }`}
                >
                  <Image 
                    src={experience.image} 
                    alt={`Logo ${experience.company}`}
                    width={isBusipart ? 200 : 128}
                    height={isBusipart ? 200 : 128}
                    className={`object-contain max-h-full transition-all duration-500 ease-in-out
                      ${isBusipart ? "" : "grayscale group-hover:grayscale-0"} 
                    `}
                  />
                </div>
              </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-bold text-xl group-hover:text-orange-600 transition-colors">
                {experience.role} -{" "}
                <span className="text-orange-400 font-medium">{experience.company}</span>
              </h6>
              
              <p className="mb-6 text-neutral-400 text-justify leading-relaxed">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-3 py-1 text-xs font-medium text-orange-500 border border-neutral-800 group-hover:border-orange-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )})}
      </div>
    </div>
  );
};