"use client";
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaPython, FaJsSquare } from "react-icons/fa";

import { 
  SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, 
  SiGooglecloud, SiDocker, SiKubernetes, SiPython,
  SiCplusplus, SiC, SiJavascript, SiReact, 
  SiSymfony, SiPhp, SiArduino, SiHtml5, SiCss3
} from "react-icons/si";
import { FaDatabase, FaTerminal } from "react-icons/fa";

import {delay, motion} from "framer-motion"

const iconVariants = (duration:any,delay:any)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10], 
        
        transition:{duration, 
        delay:delay,
        ease:"linear",
        repeat:Infinity,
        repeatType: "reverse"}
    }
})

export const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Compétences Techniques
      </motion.h1>

      <div className="flex flex-col gap-16 px-4">
        
        {/* SECTION 1 : DATA / IA */}
        <div className="flex flex-col items-start">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            className="border-l-4 border-orange-500 pl-4 mb-8"
          >
            <h2 className="text-2xl font-semibold text-orange-400">Data / IA</h2>
            <p className="text-sm text-neutral-500">Machine / Deep Learning - Analyse de données</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 justify-center w-full">
            <SkillIcon Icon={SiTensorflow} color="text-orange-600" name="TensorFlow" duration={2.5} />
            <SkillIcon Icon={SiScikitlearn} color="text-blue-400" name="Scikit-Learn" duration={3} />
            <SkillIcon Icon={SiPandas} color="text-purple-600" name="Pandas" duration={2} />
            <SkillIcon Icon={SiNumpy} color="text-blue-500" name="NumPy" duration={2.8} />
            <SkillIcon Icon={SiPython} color="text-yellow-500" name="Python" duration={2.2} />
          </div>
        </div>

        {/* SECTION 2 : DÉVELOPPEMENT & SYSTÈMES */}
        <div className="flex flex-col items-end">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            className="border-r-4 border-cyan-500 pr-4 mb-8 text-right"
          >
            <h2 className="text-2xl font-semibold text-cyan-400">Développement</h2>
            <p className="text-sm text-neutral-500">Logiciel & Automatisation</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 justify-center w-full">
            <SkillIcon Icon={SiC} color="text-blue-500" name="C" duration={2.9} />
            <SkillIcon Icon={SiCplusplus} color="text-blue-700" name="C++" duration={2.4} />
            <SkillIcon Icon={FaDatabase} color="text-cyan-600" name="SQL" duration={2.3} />
            <SkillIcon Icon={SiArduino} color="text-white" name="Arduino" duration={2.7} />
            <SkillIcon Icon={FaTerminal} color="text-green-400" name="Bash" duration={2.1} />
          </div>
        </div>

        {/* SECTION 3 : WEB & CLOUD */}
        <div className="flex flex-col items-start">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            className="border-l-4 border-purple-500 pl-4 mb-8"
          >
            <h2 className="text-2xl font-semibold text-purple-400">Web & Cloud</h2>
            <p className="text-sm text-neutral-500">Full-stack & Infrastructure</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4 justify-center w-full">
            <SkillIcon Icon={SiSymfony} color="text-white" name="Symfony" duration={2.5} />
            <SkillIcon Icon={SiReact} color="text-cyan-400" name="React" duration={2.8} />
            <SkillIcon Icon={SiHtml5} color="text-orange-500" name="HTML5" duration={2.1} />
            <SkillIcon Icon={SiCss3} color="text-blue-500" name="CSS3" duration={2.4} />
            <SkillIcon Icon={SiJavascript} color="text-yellow-400" name="JavaScript" duration={2.7} />
            <SkillIcon Icon={SiPhp} color="text-purple-600" name="PHP" duration={2.3} />
            
          </div>
        </div>

      </div>
    </div>
  );
};

const SkillIcon = ({ Icon, color, name, duration }: any) => (
  <motion.div
    variants={iconVariants(duration, 0)}
    initial="initial"
    animate="animate"
    className="group relative flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 transition-all hover:border-neutral-600 w-24 h-24 md:w-28 md:h-28"
  >
    <Icon className={`text-5xl ${color}`} />
    <span className="absolute bottom-1 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
      {name}
    </span>
  </motion.div>
);