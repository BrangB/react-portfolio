import React from 'react'
import { motion } from "framer-motion"

const Resume = () => {
  const slideInAnimation = {
    initial: { opacity: 0, x: "-40vw" },
    animate: { opacity: 1, x: 0, 
      transition: {
        duration: 0.5, // Duration in seconds
        ease: "easeInOut", // Easing function, you can use different easing functions
      }  },
    exit: { opacity: 0, x: "-40vw" },
  };
  const slideInAnimationleft = {
    initial: { opacity: 0, x: "140vw" },
    animate: { opacity: 1, x: 0, 
      transition: {
        duration: 0.5, // Duration in seconds
        ease: "easeInOut", // Easing function, you can use different easing functions
      }  },
    exit: { opacity: 0, x: "-40vw" },
  };
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1,       
      transition: {
      duration: 1, // Duration in seconds
      ease: "easeInOut", // Easing function, you can use different easing functions
    } },
    exit: { opacity: 0 },
  };
  const workSkills = [
    { skills: "HTML", learning: false },
    { skills: "Figma", learning: false},
    { skills: "CSS", learning: false },
    { skills: "Bootstrap", learning: false },
    { skills: "Tailwind", learning: false },
    { skills: "SASS", learning: false },
    { skills: "LESS", learning: true },
    { skills: "JavaScript (ES6)", learning: false },
    { skills: "ReactJS / Redux", learning: false },
    { skills: "Node.js and Express", learning: true },
    { skills: "Python", learning: true },
    { skills: "Vue", learning: true },
    { skills: "PHP / Laravel", learning: true },
    { skills: "MongoDB / Firebase", learning: true },
    { skills: "MS-Access", learning: false },
    { skills: "Git / GitHub", learning: false },
    { skills: "MySQL", learning: true }
  ];

  const softSkills = [
    { skills: "Time Management", learning: false },
    { skills: "Impeccable Communication", learning: false },
    { skills: "Flexibility", learning: false },
    { skills: "Research", learning: false },
    { skills: "Stress Management", learning: false }
  ];
  
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      className='z-40'
    >
      <div className="containerlay w-full h-full flex flex-col justify-between">
        <motion.div      
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideInAnimation}>
          <h1 className='text-3xl font-bold'>Resume</h1>
          <div className="flex flex-col items-start justify-between md:flex-row flex-wrap gap-4 w-full p-4 mt-2" >
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
              <h2 className='text-lg lg:text-xl font-bold'>Work Skills</h2>
              <div className='text-sm xl:text-md flex items-center justify-start mt-2'><div className='w-2 h-2 bg-green-300 mr-2'></div>Learning (2024)</div>
              <div className="card flex flex-wrap rounded-lg p-2 min-h-72 max-h-72 lg:max-h-52 overflow-y-auto">
                {
                  	workSkills.map(skill => {
                      return <p key={skill.skills} className={`m-2 rounded-md text-sm py-1 px-2 b ${skill.learning ? 'bg-green-200' : 'bg-[#f0f4fd]'}`}>{skill.skills}</p>
                    })
                }
              </div>
            </div>
            </motion.div>
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimationleft}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
              <h2 className='text-lg lg:text-xl font-bold'>Soft Skills</h2>
              <div className="card flex flex-wrap rounded-lg p-2 mt-4 max-h-72 lg:max-h-52 overflow-y-auto">
                {
                  	softSkills.map(skill => {
                      return <p key={skill.skills} className={`m-2 rounded-md text-sm py-1 px-2 b ${skill.learning ? 'bg-green-200' : 'bg-[#f0f4fd]'}`}>{skill.skills}</p>
                    })
                }
              </div>
            </div>
            </motion.div>
          </div>
          <div className="flex flex-col items-start justify-between md:flex-row flex-wrap gap-4 w-full p-4 mt-2" >
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
            <h2 className='text-lg lg:text-xl font-bold'>Education</h2>
              <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto mt-4">
                <div className="flex items-center justify-start">
                  <i className="fa-solid fa-graduation-cap mr-2 text-[#3667a0]"></i>
                  <h3 className="font-bold text-lg">High School</h3>
                </div>
                <p className="text-sm mt-2 text-justify">
                  - 2020
                  <p className='font-semibold mt-2'>Stage School (THIHA Academy private school)</p>
                </p>
              </div>
              <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto mt-6">
                <div className="flex items-center justify-start">
                  <i className="fa-solid fa-graduation-cap mr-2 text-[#3667a0]"></i>
                  <h3 className="font-bold text-lg">University</h3>
                </div>
                <p className="text-sm mt-2 text-justify">
                  2021 - Present
                  <p className='font-semibold mt-2'>MIT, LAP program, Computer-Science</p>
                </p>
              </div>
            </div>
            </motion.div>
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimationleft}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
            <h2 className='text-lg lg:text-xl font-bold'>Experience</h2>
              <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto mt-4">
                <div className="flex items-center justify-start">
                  <i class="fa-solid fa-briefcase mr-2 text-[#3667a0]"></i>
                  <h3 className="font-bold text-lg">Work Experience</h3>
                </div>
                <p className="text-sm mt-2 text-justify">
                  <p className='font-semibold mt-2'>None</p>
                </p>
              </div>
              <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto mt-6">
                <div className="flex items-center justify-start">
                  <i class="fa-solid fa-briefcase mr-2 text-[#3667a0]"></i>
                  <h3 className="font-bold text-lg">Project Experience</h3>
                </div>
                <p className="text-sm mt-2 text-start">
                  <p className='font-semibold'>- Finance Management (Full Stack)</p>
                  <p className='mt-2'>  React, Tailwind, Node/Express, Ms-Access/MongoDB</p>
                </p>
                <p className="text-sm mt-4 text-start">
                  <p className='font-semibold'>- Bus Ticket Booking System</p>
                  <p className='mt-2'>  C# (Window Form)</p>
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Resume