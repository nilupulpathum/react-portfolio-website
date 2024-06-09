import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
            initial={{y: -100, opacity:0}}
            whileInView={{y: 0, opacity:1}}
            animate={{y: 0, opacity:1}}
            transition={{duration:0.5, delay:1}}
            className='my-20 text-center text-2xl md:text-3xl lg:text-4xl'>About  
            <span className='text-neutral-500'> Me</span></motion.h2>
        <div className='flex flex-wrap'>
            <motion.div
                whileInView={{ opacity:1 , x:0}}
                initial={{x: -100, opacity:0}}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2 '>
                <div className='flex item-center justify-center'>
                    <img className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-2xl  md:w-[400px] md:h-[400px]' src={aboutImg} alt="about image" />
                </div>
            </motion.div>
            <div className='w-full lg:w-1/2 lg:p-8 pt-8'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p 
                            whileInView={{ opacity:1 , x:0}}
                            initial={{x: 100, opacity:0}}
                            transition={{duration: 0.5}}
                            className='my-2 max-w-xl py-6'>
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
            </div>
        </div>
    </div>

  )
}

export default About