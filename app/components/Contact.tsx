'use client'
import {CONTACT} from "./index"
import {motion} from "framer-motion"
export const Contact = () => {
    return (
        <div className="div mb-20">
            <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 text-center text-4xl">Prenons contact</h1>
            <div className="text-center tracking-tighter mb-15">
                <motion.p whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="my-4">
                        { CONTACT.adresses.map((address, index) => (
                            <span key={index}>{address}<br /></span>
                        )) }
                </motion.p>
            { CONTACT.email.map((email, index) => (
                <a key={index} href={`mailto:${email}`} className="border-b my-4">{email }<br /></a>
            )) }
            </div>
            </motion.div>
        </div>
        
    );
}