import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image8 from '../assets/7.jpeg';

function Hero() {
  const games = [
    { image: image5, title: 'Palworld', description: 'The game of the year 2024', link: '/palworld' },
    { image: image6, title: 'FC 25', description: 'Another FIFA version that breaks the laws again', link: '/fc25' },
    { image: image8, title: 'ARK Survival Evolved', description: 'Dinosaur game', link: '/ark' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-12 text-center bg-cover bg-center">
        <h1 className="text-4xl font-bold uppercase">
          Game<sup style={{ color: 'orange' }}>UNIVERS</sup>
        </h1>

        <p className="mt-4 text-gray-300">Welcome to the ultimate futuristic gaming experience.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {games.map((game, index) => (
          <Link to={game.link} key={index}>  {/* Wrap the Card in a Link component */}
            <Card
              image={game.image}
              title={game.title}
              description={game.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}

export default Hero;
