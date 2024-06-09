import React from 'react';
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion, transform } from 'framer-motion';
import { GiDuration } from 'react-icons/gi';

const iconVariants = (duration) => ({
    initial: {y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease : "linear",
            repeat: Infinity, 
            repeatType: "reverse",
        }
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            initial={{y: -100, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration:0.5}}
            
            className='my-20 text-center text-2xl md:text-3xl lg:text-4xl'>
            Technologies
        </motion.h2>
        <motion.div 
            initial={{x: -100, opacity:0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.5}}
            
            className='flex flex-wrap items-center justify-center gap-4 '>
            <motion.div  
                variants={iconVariants(3)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='lg:text-7xl md:text-7xl text-4xl '/>
            </motion.div >
            <motion.div  
                variants={iconVariants(1.5)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTensorflow className='lg:text-7xl md:text-7xl text-4xl text-orange-500'/>
            </motion.div >
            <motion.div 
                variants={iconVariants(5)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiNumpy className='lg:text-7xl md:text-7xl text-4xl text-cyan-600'/>
            </motion.div >
            <motion.div  
                variants={iconVariants(2)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFlask className='lg:text-7xl md:text-7xl text-4xl text-red-700'/>
            </motion.div >
            <motion.div  
                variants={iconVariants(4)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='lg:text-7xl md:text-7xl text-4xl text-cyan-400' />
            </motion.div >
            <motion.div  
                variants={iconVariants(2.5)}
                initial = "initial"
                animate = "animate"
                whileHover={{scale:1.2}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='lg:text-7xl md:text-7xl text-4xl  text-green-600'/>
            </motion.div >
        </motion.div>
    </div>
  )
}

export default Technologies