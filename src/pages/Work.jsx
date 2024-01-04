import React from 'react'
import { motion } from "framer-motion"
import BrangImg from '../asset/Brang.jpg'

const Work = () => {
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      className='z-40'
    >
    <div className='containerlay'>
    <motion.div      
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideInAnimation}>
          <h1 className='text-3xl font-bold'>Portfolio</h1>
          <div className="flex flex-col items-start justify-between md:flex-row flex-wrap gap-4 w-full p-4 mt-2" >
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
              <div className="card rounded-lg p-3 bg-[#F2F7FC] min-h-40 mt-4">
                <img className='w-full h-40 rounded-lg object-cover object-top' src={BrangImg} alt="" />
                <p className='mt-2'>Web Development</p>
                <h2 className='font-semibold text-lg'>Finanace Management System</h2>
                <div className='flex mt-2'>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>Demo</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>GitHub</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>URL</p>
                </div>
              </div>
              <div className="card rounded-lg p-3 bg-[#F2F7FC] min-h-40 mt-4">
                <img className='w-full h-40 rounded-lg object-cover object-top' src={BrangImg} alt="" />
                <p className='mt-2'>Web Development</p>
                <h2 className='font-semibold text-lg'>Finanace Management System</h2>
                <div className='flex mt-2'>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>Demo</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>GitHub</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>URL</p>
                </div>
              </div>
            </div>
            </motion.div>
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full md:w-[70%] xl:w-[45%] '>
            <div className="w-full">
              <div className="card rounded-lg p-3 bg-[#F2F7FC] min-h-40 mt-4">
                <img className='w-full h-40 rounded-lg object-cover object-top' src={BrangImg} alt="" />
                <p className='mt-2'>Web Development</p>
                <h2 className='font-semibold text-lg'>Finanace Management System</h2>
                <div className='flex mt-2'>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>Demo</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>GitHub</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>URL</p>
                </div>
              </div>
              <div className="card rounded-lg p-3 bg-[#F2F7FC] min-h-40 mt-4">
                <img className='w-full h-40 rounded-lg object-cover object-top' src={BrangImg} alt="" />
                <p className='mt-2'>Web Development</p>
                <h2 className='font-semibold text-lg'>Finanace Management System</h2>
                <div className='flex mt-2'>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>Demo</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>GitHub</p>
                  <p className='py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm'>URL</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>

    </div>
    </motion.div>
  )
}

export default Work