"use client"
import {ABOUT_CONTENT} from "../components/index"
import {motion} from "framer-motion"
export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:0}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">À propos de moi</motion.h1>
            <div className="flex flex-wrap justify-center ">
                <motion.div 
                    className="flex flex-wrap justify-center"
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:0}}
                    transition={{duration:0.5}}
                
                >
                    <div className="w-full lg:w-1/2 rounded-sm border-14 bg-transparent border-orange-400">
                        <div className="flex lg:justify-center justify-center text-justify" >
                            {ABOUT_CONTENT}
                        </div>
                    </div>
                </motion.div>
               
                
                
            </div>
        </div>
    );
}