'use client'
import Image from 'next/image';

import {HERO_CONTENT} from './index'
import profilImage from "../assets/Robin_photo.jpg"
import {motion} from "framer-motion"

const container = (delay:any)=> ({
    hidden:{x:-100, opacity:0}, 
    visible: {
        x:0, 
        opacity:1, 
        transition:{duration:0.5, delay:delay}
    }
})

export const Hero = () => {
    return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Robin Becard</motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent">Étudiant ingénieur à l'<a href="https://eilco.univ-littoral.fr/">EILCO</a></motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '>
                <div className='flex justify-center'>
                    <motion.div 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}>
                        <Image src={profilImage} alt="Robin Becard profil" width={450} height={300} layout='intrinsic' className='rounded-xl border-2 border-transparent'/>
                    </motion.div>
                    
                </div>
            </div>
        </div>

    </div>
    )
}

