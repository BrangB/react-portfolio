import React from "react";
import { motion } from "framer-motion";
import FinanceMS from '../asset/FinanceManagementSystem.png'
import JoJoQuizApp from "../asset/JoJoQuizApp.png"
import BTBS from '../asset/BTBS.png'
import CA from '../asset/checkingAttendance.png'
import Library from '../asset/library.png'
import Placeholder from '../asset/placeholderProject.png'

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
      id: 3,
      name: "Finance Management System",
      techStack: ["React", "Nodejs", "MongoDB"],
      link: {
        demo: null,
        Github: "https://github.com/BrangB/FinanceFrontend",
        site: "https://brangexpensetracker.netlify.app/",
      },
      imgUrl: FinanceMS,
    },
    {
      id: 4,
      name: "Bookshelf & Library",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      link: {
        demo: "https://drive.google.com/file/d/14UJOMk5QbiLumrJbGF0mPUsr3toagOqk/view?usp=drive_link",
        Github: "https://github.com/BrangB/Bookshelf-Tracker-Library",
        site: "https://bibrary-brang.netlify.app/",
      },
      imgUrl: Library,
    },
    // {
    //   id: 5,
    //   name: "Checking Attendance",
    //   techStack: ["HTML5", "CSS3", "JavaScript"],
    //   link: {
    //     demo: null,
    //     Github: "https://github.com/BrangB/Checking-Attendance/",
    //     site: "https://checkingattendance.netlify.app/",
    //   },
    //   imgUrl: CA,
    // },
    {
      id: 6,
      name: "Voting System",
      techStack: ["Go", "Gin", "SQLite", "JWT"],
      link: {
        demo: null,
        Github: "https://github.com/BrangB/Go-Voting-System-mini-.git",
      },
      imgUrl: Placeholder,
    },
    {
      id: 7,
      name: "Cupidy Dating Website",
      techStack: ["React", "Tailwind", "Vite"],
      link: {
        demo: null,
        Github: "https://github.com/BrangB/Cupidy-Dating-App.git",
      },
      imgUrl: Placeholder,
    },
    {
      id: 8,
      name: "Hymns Myanmar",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      link: {
        demo: null,
        Github: "https://github.com/BrangB/Hymns-Myanmar-LAP-3.git",
      },
      imgUrl: Placeholder,
    },
    {
      id: 1,
      name: "JoJo (Grammer Quiz App)",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      link: {
        demo: null,
        Github: "https://github.com/BrangB/JoJo-Quiz-App",
        site: "https://brangb.github.io/JoJo-Quiz-App/",
      },
      imgUrl: JoJoQuizApp,
    },
    {
      id: 2,
      name: "Bus Ticket Booking System",
      techStack: ["C#", "Windows Forms"],
      link: {
        demo: "https://drive.google.com/file/d/1yZbboMT2tXrS81ukm_n-x5uApqi8l6Q2/view?usp=sharing",
        Github: "https://github.com/BrangB/Bus_tickets-booking-system",
      },
      imgUrl: BTBS,
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
              className="w-full flex justify-evenly gap-6 flex-wrap mt-6"
            >
          {projects.map((project) => (
            <div
              className="card bg-[#F2F7FC] w-[80%] lg:w-[300px] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              key={project.id}
            >
              <img
                className="w-full h-40 rounded-t-lg object-cover"
                src={project.imgUrl}
                alt={project.name}
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{project.name}</h2>
                <p className="font-medium mb-1">Technologies:</p>
                <ul className="list-disc pl-5 mb-3">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="text-sm">{tech}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.link.demo && (
                    <a
                      href={project.link.demo}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600 transition-all"
                    >
                      Demo <i className="fa-solid fa-play ml-2"></i>
                    </a>
                  )}
                  {project.link.Github && (
                    <a
                      href={project.link.Github}
                      className="bg-gray-700 text-white py-1 px-3 rounded-md text-sm hover:bg-gray-800 transition-all"
                    >
                      GitHub <i className="fa-brands fa-github ml-2"></i>
                    </a>
                  )}
                  {project.link.site && (
                    <a
                      href={project.link.site}
                      className="bg-green-500 text-white py-1 px-3 rounded-md text-sm hover:bg-green-600 transition-all"
                    >
                      URL <i className="fa-solid fa-earth-americas ml-2"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
