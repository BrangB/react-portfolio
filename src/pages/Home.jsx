import React, {useState} from "react";
import { motion } from "framer-motion"

const Home = () => {

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
    >
      <div className="containerlay w-full h-full flex flex-col justify-between ">
      <motion.div      
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideInAnimation}>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>
            <p className="mt-4 text-justify p-2">
              Hello there! I'm Brang Tsawm Aung, a third-year Computer Science
              student in MIT's LAP program. I am deeply passionate about front-end
              development. I currently live in Yangon's Insein township home...{" "}
              <span className="ms-2 font-bold cursor-pointer">See more</span>
            </p>
          </div>
        </motion.div>
        <motion.div      
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideInAnimationleft}>
        <div className=" mt-10 md:mt-8">
          <h1 className="text-2xl lg:text-3xl font-bold">What I do!</h1>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row lg:flex-wrap gap-4 w-full p-4 mt-2 ">
            <div className="w-full md:w-[70%] xl:w-[47%]  ">
              <div className="card rounded-lg p-2 md:p-4 bg-[#F2F7FC] min-h-52 max-h-72 overflow-y-auto">
                <div className="flex items-center justify-start">
                  <i className="fa-solid fa-code mr-2 text-[#e93838]"></i>
                  <h3 className="font-bold text-lg">Web Development</h3>
                </div>
                <p className="text-sm text-justify p-2 mt-1">
                  I began with React for front-end and dipped into
                  Node.js/Express.js for basic API work. Now, I'm exploring Vue.js
                  while also learning PHP, Laravel, and MySQL for a voting system
                  project. I'm excited about blending front-end and back-end
                  skills for better web experiences!
                </p>
              </div>
            </div>
            <div className="w-full md:w-[70%] xl:w-[47%] ">
              <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto">
                <div className="flex items-center justify-start">
                  <i className="fa-solid fa-graduation-cap mr-2 text-[#3667a0]"></i>
                  <h3 className="font-bold text-lg">University</h3>
                </div>
                <p className="text-sm text-justify p-2 mt-1">
                  In my third year of Computer Science. I'm exploring a diverse
                  range of subjects in my university's Computer Science program.
                  From Web Fundamentals to Software Engineering, Video Editing,
                  Database Management Systems (DBMS), and Operating Systems, I'm
                  gaining insights into web development, software creation,
                  multimedia editing, data management, and computer operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </motion.div>

  );
};

export default Home;
