import React, { useEffect } from 'react';
import palworldImage from '../assets/palworld.jpg'; // Example image
import gameplayVideo from '../assets/vid1.mp4'; // Example video

const Palworld = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-black text-white">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Discover Palworld</h1>
      <div className="text-center mb-8">
        <img src={palworldImage} alt="Palworld" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      {/* Game Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Game Overview</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Palworld is a thrilling multiplayer adventure game that takes you through enchanting landscapes, epic battles, and mind-bending mysteries. Dive into an expansive world where your choices and teamwork shape the outcome.
        </p>
        <div className="mt-6">
          <video className="w-full rounded-lg shadow-lg" controls autoPlay loop muted>
            <source src={gameplayVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li>Embark on diverse missions across a vast open-world environment.</li>
          <li>Craft and customize your character's gear, weapons, and abilities.</li>
          <li>Team up with players to take on formidable enemies and solve puzzles.</li>
          <li>Discover hidden secrets, including ancient artifacts and rare resources.</li>
        </ul>
      </section>

      {/* Notable Characters */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Meet the Pals</h2>
        <ul className="space-y-4 text-lg text-gray-300">
          <li><strong>Elara:</strong> The wise mage who helps guide players through complex challenges with her magical expertise.</li>
          <li><strong>Fergal:</strong> A fearsome warrior with unmatched strength and loyalty.</li>
          <li><strong>Liora:</strong> The stealthy rogue who unveils hidden treasures and bypasses enemy defenses.</li>
          <li><strong>King Varik:</strong> A pivotal figure in the storyline who tasks players with restoring harmony to his kingdom.</li>
        </ul>
      </section>

      {/* Exploration Tips */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Tips for Exploration</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li>Interact with every NPC to uncover side quests and hidden lore.</li>
          <li>Combine resources to create powerful weapons and potions.</li>
          <li>Pay attention to environmental details for clues to secret areas.</li>
          <li>Use teamwork to strategize and overcome challenging missions.</li>
        </ul>
      </section>
    </div>
  );
};

export default Palworld;
