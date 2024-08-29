'use client'
import {CONTACT} from "./index"
import {motion} from "framer-motion"
export const Contact = () => {
    return (
        <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="border-b border-neutral-900">
            <h1 className="my-10 text-center text-4xl">Prenons contact</h1>
            <div className="text-center tracking-tighter">
                <motion.p whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    className="my-4">
                        {CONTACT.adress}
                </motion.p>
                <motion.p whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}} className="my-4">
                        {CONTACT.number}
                </motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
            </div>
        </motion.div>
    );
}