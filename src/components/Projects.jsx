import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-700 pb-4 '>
      <motion.h2 
        initial={{y: -100, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:0.5}}
      className='my-20 text-center text-2xl md:text-3xl lg:text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
            <motion.div 
              initial={{x: -100, opacity:0}}
              whileInView={{x: 0, opacity:1, transition:{duration:1}}}
              className='w-full lg:w-1/4 md:w-1/3 '>
                <a href={project.gitlink} target='_blank' className='hover:text-violet-600'>
                <motion.img whileHover={{scale:1.3}} src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded'/>
                </a>
              
            </motion.div>
            <motion.div
              initial={{x: 100, opacity:0}}
              whileInView={{x: 0, opacity:1}}
              transition={{duration:1.5}}
              className='mb-8 w-full max-w-xl lg:w-3/4 md:w-2/3'>
              <motion.h6 whileHover={{ scale:1.02 }} className='mb-2 font-semibold '><a href={project.gitlink} target='_blank' className='hover:text-violet-600'>{project.title}</a></motion.h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mb-4 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-800 '>{tech}</span>
              
              ))}
            
              


            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects