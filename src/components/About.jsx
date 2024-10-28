import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I'm Pratyush Ranjan, a passionate frontend developer with a keen eye for design and a deep love for creating interactive user experiences. I thrive on turning complex problems into simple, beautiful, and intuitive designs. My journey in tech began with a fascination for web technologies, and since then, I've honed my skills in HTML, CSS, JavaScript, and React.js.
        </p>

        <br />

        <p className="text-xl">
          With a solid foundation in frontend development, I’ve worked on various projects that showcase my ability to build responsive and user-friendly web applications. I believe in the power of collaboration and continuously strive to learn and adapt to new technologies. When I'm not coding, you can find me solving puzzles, exploring the latest trends in web design, or contributing to open-source projects. Let’s connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
