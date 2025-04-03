import React from 'react';
import robotDetourImage from '../assets/robot-detour.jpg'; // Make sure to replace this with the correct image path
import game2Image from '../assets/game2.jpeg';
import game3Image from '../assets/game3.jpeg'; // Replace with actual image for Game 3

const games = [
  {
    title: 'Robot Detour',
    image: robotDetourImage,
    link: 'https://nozomu57.itch.io/robot-detour',
  },
  {
    title: 'Game 2', // Update this with the second game's title
    image: game2Image,
    link: 'https://kizi.com/games/fireboy-and-watergirl-the-crystal-temple', // Replace with actual game link
  },
  {
    title: 'Game 3', // Update this with the third game's title
    image: game3Image,
    link: 'https://www.ttt4.com/wheely-games/wheely-3.html', // Replace with actual game link
  },
  // Add more games here as needed
];

const GameRedirect = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Play Awesome Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {games.map((game, index) => (
          <div key={index} className="bg-black text-white text-center p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-orange-500 mb-4">{game.title}</h2>
            <img
              src={game.image}
              alt={game.title}
              className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
            />
            <p className="text-lg text-gray-300 mb-4">
              Click the button below to play "{game.title}" on itch.io.
            </p>
            <a
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
            >
              Play Now
            </a>
            <p className="mt-4 text-gray-400">
              <strong>Tip:</strong> Come back and explore more games after you finish playing!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameRedirect;
