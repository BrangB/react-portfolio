import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
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
          <h1 className='text-3xl font-bold'>Contact</h1>
          <div className="flex flex-col items-start justify-between md:flex-row flex-wrap gap-4 w-full p-4 mt-2" >
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full'>
            <div className="w-full flex flex-col lg:flex-row justify-between">
              <div className="card w-full lg:w-[48%] rounded-lg p-6 bg-[#F2F7FC] min-h-14 mt-4">
                <div className='flex '>
                  <div><i class="fa-solid fa-phone mr-3"></i></div>
                  <div>
                    <p>Phone: </p>
                    <p>+95 9662020616</p>
                  </div>
                </div>

              </div>
              <div className="card w-full lg:w-[48%] rounded-lg p-6 bg-[#F2F7FC] min-h-14 mt-4">
                <div className='flex '>
                  <div><i class="fa-solid fa-envelope mr-3"></i></div>
                  <div>
                    <p>Email: </p>
                    <p>brangtsawmaung89@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>
            </motion.div>
            <motion.div      
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className='w-full'>
            <div className="w-full">
              <div className="card rounded-lg p-6 bg-[#F2F7FC] mt-4">
                <p>I always open to discussing <span className='font-semibold'>new projects, opportunities in tech world partnerships</span> and more so <span className='font-semibold'>mentorship.</span></p>
                <form className='mt-2'>
                  <div className='mt-4'>
                    <p className='font-semibold'>Name:</p>
                    <input type="text" className='bg-transparent border-b-2 border-[#cccccc9d] w-full outline-none px-1 py-2' name="name" id="" />
                  </div>
                  <div className='mt-4'>
                    <p className='font-semibold'>Email:</p>
                    <input type="email" className='bg-transparent border-b-2 border-[#cccccc9d] w-full outline-none px-1 py-2' name="email" id="" />
                  </div>
                  <div className='mt-4'>
                    <p className='font-semibold'>Message:</p>
                    <input type="text" className='bg-transparent border-b-2 border-[#cccccc9d] w-full outline-none px-1 py-2' name="message" id="" />
                  </div>
                  <button type='submit' className='mt-5 px-4 py-1 bg-[#FFB23D] text-white transition-all duration-200 outline-none hover:text-black hover:bg-transparent border-[#FFB23D] rounded-sm border-2'>Send</button>
                </form>
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact