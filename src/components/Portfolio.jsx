import React from "react";
import athenaChat from '../assets/portfolio/athenaChat.png';
import vidTube from '../assets/portfolio/vidTube.png';
import chamaksaathi2 from '../assets/portfolio/chamaksaathi2.png';
import shopper from '../assets/portfolio/shopper.png';
import dice from '../assets/portfolio/dice.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chamaksaathi2,
      demo: 'https://www.chamaksaathi.com',
      github: 'https://github.com/Pratyush271299/'
    },
    {
      id: 2,
      src: vidTube,
      demo: 'https://youtubeclonevidtube.netlify.app/',
      github: 'https://github.com/Pratyush271299/VidTube'
    },
    {
      id: 3,
      src: athenaChat,
      demo: 'https://athenachat.netlify.app/',
      github: 'https://github.com/Pratyush271299/Athena-AI-Chatbox'
    },
    {
      id: 4,
      src: shopper,  
      demo: 'https://endearing-griffin-8e1435.netlify.app/',
      github: 'https://github.com/Pratyush271299/ECommerce-Website'
    },
    {
      id: 5,
      src: dice, 
      demo: 'https://dice-numbers-game.netlify.app/',
      github: 'https://github.com/Pratyush271299/Dice-Game'
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md "
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
