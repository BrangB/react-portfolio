import React from "react";

const Home = () => {
  return (
    <div className="containerlay w-full h-full overflow-y-scroll flex flex-col justify-between">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>
        <p className="mt-4">
          Hello there! I'm Brang Tsawm Aung, a third-year Computer Science
          student in MIT's LAP program. I am deeply passionate about front-end
          development. I currently live in Yangon's Insein township home...{" "}
          <span className="ms-2 font-bold cursor-pointer">See more</span>
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl lg:text-3xl font-bold">What I do!</h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 p-4 mt-2">
          <div className="w-full lg:w-[40%] xl:w-1/3 ">
            <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto">
              <div className="flex items-center justify-start">
                <i className="fa-solid fa-code mr-2 text-[#e93838]"></i>
                <h3 className="font-bold text-lg">Web Development</h3>
              </div>
              <p className="text-sm text-justify">
                I began with React for front-end and dipped into
                Node.js/Express.js for basic API work. Now, I'm exploring Vue.js
                while also learning PHP, Laravel, and MySQL for a voting system
                project. I'm excited about blending front-end and back-end
                skills for better web experiences!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] xl:w-1/3">
            <div className="card rounded-lg p-4 bg-[#F2F7FC] max-h-72 lg:max-h-52 overflow-y-auto">
              <div className="flex items-center justify-start">
                <i className="fa-solid fa-graduation-cap mr-2 text-[#3667a0]"></i>
                <h3 className="font-bold text-lg">University</h3>
              </div>
              <p className="text-sm text-justify">
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
    </div>
  );
};

export default Home;
