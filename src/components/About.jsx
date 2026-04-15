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
          Hello! I'm Pratyush Ranjan, a full stack developer who enjoys building scalable web applications and clean user experiences. I work with React.js on the frontend and ASP.NET (C#) on the backend, connecting the dots between UI and server-side logic to create complete, functional products.

I started my journey with a strong interest in frontend development, focusing on HTML, CSS, JavaScript, and React. Over time, I expanded into backend development, working with REST APIs, Entity Framework Core, SQL Server, and authentication systems like JWT. Now, I don’t just build interfaces, I build the systems behind them.

I focus on writing clean, maintainable code and structuring applications in a way that’s easy to scale and debug. I enjoy solving real problems, understanding how things work under the hood, and continuously improving my development approach.

When I’m not coding, I’m usually solving puzzles, exploring new tech, or sharpening my fundamentals to get better every day.

Let’s build something meaningful.
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
