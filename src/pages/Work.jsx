import React from "react";
import { motion } from "framer-motion";
import FinanceMS from '../asset/FinanceManagementSystem.png'
import JoJoQuizApp from "../asset/JoJoQuizApp.png"
import BTBS from '../asset/BTBS.png'
import CA from '../asset/checkingAttendance.png'
import Library from '../asset/library.png'

const Work = () => {
  const slideInAnimation = {
    initial: { opacity: 0, x: "-40vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Duration in seconds
        ease: "easeInOut", // Easing function, you can use different easing functions
      },
    },
    exit: { opacity: 0, x: "-40vw" },
  };

  const slideInAnimationleft = {
    initial: { opacity: 0, x: "140vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Duration in seconds
        ease: "easeInOut", // Easing function, you can use different easing functions
      },
    },
    exit: { opacity: 0, x: "-40vw" },
  };
  
  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1, // Duration in seconds
        ease: "easeInOut", // Easing function, you can use different easing functions
      },
    },
    exit: { opacity: 0 },
  };

  let projects = [
    {
      id: 1,
      name: "JoJo (Grammer Quiz App)",
      tech: "Web Development",
      link: {
        demo: null,
        Github: "https://github.com/BrangB/JoJo-Quiz-App",
        site: "https://brangb.github.io/JoJo-Quiz-App/",
      },
      imgUrl: JoJoQuizApp
    },
    {
      id: 2,
      name: "Bus Ticket Booking System",
      tech: "C# WindowForm",
      link: {
        demo: "https://drive.google.com/file/d/1yZbboMT2tXrS81ukm_n-x5uApqi8l6Q2/view?usp=sharing",
        Github: "https://github.com/BrangB/Bus_tickets-booking-system",
      },
      imgUrl: BTBS
    },
    {
      id: 3,
      name: "Finance Management System",
      tech: "Web Development",
      link: {
        demo: null,
        Github: "https://github.com/BrangB/FinanceFrontend",
        site: "https://brangexpensetracker.netlify.app/",
      },
      imgUrl: FinanceMS
    },
    {
      id: 4,
      name: "Bookshelf & Library",
      tech: "Web Development",
      link: {
        demo: "https://drive.google.com/file/d/14UJOMk5QbiLumrJbGF0mPUsr3toagOqk/view?usp=drive_link",
        Github: "https://github.com/BrangB/Bookshelf-Tracker-Library",
        site: "https://bibrary-brang.netlify.app/",
      },
      imgUrl: Library
    },
    {
      id: 5,
      name: "Checking Attendance",
      tech: "Web Development",
      link: {
        demo: null,
        Github: "https://github.com/BrangB/Checking-Attendance/",
        site: "https://checkingattendance.netlify.app/",
      },
      imgUrl: CA
    },
  ];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      className="z-40"
    >
      <div className="containerlay">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideInAnimation}
        >
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideInAnimation}
              className="w-full flex justify-center gap-3 lg:gap-6 flex-wrap mt-3"
            >
                {projects.map((project) => {
                  return (
                    <div className="card rounded-lg p-3 bg-[#F2F7FC] min-w-[350px] min-h-40 mt-4" key={project.id}>
                      <img
                        className="w-full h-40 rounded-lg object-cover object-top bg-[white] p-2"
                        src={project.imgUrl}
                        alt=""
                      />
                      <p className="mt-2">{project.tech}</p>
                      <h2 className="font-semibold text-lg">
                        {project.name}
                      </h2>
                      <div className="flex mt-2">
                        <a href={project.link.demo} className={project.link.demo == null ? "hidden": "hover:bg-slate-300 transition-all duration-200 py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm"}>
                          Demo
                          <i class="fa-solid fa-play ms-2"></i>
                        </a>
                        <a href={project.link.Github} className={project.link.Github == null ? "hidden": "hover:bg-slate-300 transition-all duration-200 py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm"}>
                          GitHub
                          <i class="fa-brands fa-github ms-2"></i>
                        </a>
                        <a href={project.link.site} className={project.link.site == null ? "hidden": "hover:bg-slate-300 transition-all duration-200 py-1 px-2 bg-slate-200 m-2 rounded-lg text-sm"}>
                          URL
                          <i class="fa-solid fa-earth-americas ms-2"></i>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
