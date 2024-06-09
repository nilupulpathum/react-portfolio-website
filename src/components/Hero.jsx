import React from 'react';
import { HERO_CONTENT } from "../constants";
import myProfilePic from "../assets/profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration:0.5, delay: delay}
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div  className='w-full lg:w-1/2'>
          <div  className='flex flex-col items-center lg:items-start'>
            
            <motion.h1 
              variants={container(0)}
              initial = "hidden"
              animate = "visible"
              className='pb-12 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Nilupul Pathum</motion.h1>
            <motion.span
              variants={container(0.5)}
              initial = "hidden"
              animate = "visible"
              className='bg-gradient-to-r from-pink-300 via-slate-500 
            to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center'>
              AI & Machine Learning Enthusiast
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial = "hidden"
              animate = "visible"
              className='my-2 max-w-xl py-6 font-light tracking-tighter '>
                {HERO_CONTENT}
            </motion.p>
            <motion.a 
              variants={container(1.5)}
              initial = "hidden"
              animate = "visible"
              whileHover={{ scale: 1.1 }}
              href="/NilupulPathumCV.pdf" download className='mb-8 mr-2 rounded bg-gradient-to-r from-indigo-700 
            to-purple-800 px-2 py-1 text-lg font-thin '>
              Download CV
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center '>
          <motion.img
            initial = {{x:100, opacity: 0}}
            animate = {{x:0, opacity: 1}}
            transition={{duration:0.5, delay: 1.2}}
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-2xl  md:w-[400px] md:h-[400px]"  src={myProfilePic} alt="profile picture" />
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero