import React, { useEffect } from 'react';
import arkImage from '../assets/ark.jpg'; // Example image for Ark
import arkGameplayVideo from '../assets/vid2.mp4'; // Example video for Ark

const ArkPage = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-black text-white">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Explore ARK: Survival Evolved</h1>
      <div className="text-center mb-8">
        <img src={arkImage} alt="Ark Survival Evolved" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>

      {/* Game Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Game Overview</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          ARK: Survival Evolved is a survival sandbox game where you awaken on a mysterious island teeming with dinosaurs
          and other prehistoric creatures. Gather resources, build shelters, tame creatures, and explore the vast open
          world to uncover its secrets. Whether you're playing solo or teaming up with others, survival is key in this
          challenging and immersive experience.
        </p>
        <div className="mt-6">
          <video className="w-full rounded-lg shadow-lg" controls autoPlay loop muted>
            <source src={arkGameplayVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li>Survive in a dynamic open world filled with over 100 unique creatures to tame and ride.</li>
          <li>Build customizable bases ranging from simple shelters to massive fortresses.</li>
          <li>Craft weapons, tools, and gear to thrive in hostile environments.</li>
          <li>Join or fight other players in PvP or cooperative PvE modes.</li>
          <li>Discover mysterious ruins and artifacts to unravel the story of ARK.</li>
        </ul>
      </section>

      {/* Notable Creatures */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Notable Creatures</h2>
        <ul className="space-y-4 text-lg text-gray-300">
          <li><strong>Tyrannosaurus Rex:</strong> A powerful predator that dominates the island's landscape.</li>
          <li><strong>Pteranodon:</strong> A flying companion perfect for scouting and travel.</li>
          <li><strong>Megalodon:</strong> A fearsome underwater predator lurking in the ocean depths.</li>
          <li><strong>Brontosaurus:</strong> A gentle giant capable of carrying immense loads.</li>
        </ul>
      </section>

      {/* Survival Tips */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Survival Tips</h2>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
          <li>Always gather food and water to avoid starvation or dehydration.</li>
          <li>Start by building a simple shelter to protect yourself from weather and predators.</li>
          <li>Use tranquilizers to tame creatures more efficiently.</li>
          <li>Travel with a well-tamed companion for added protection and resource gathering.</li>
          <li>Be cautious in unfamiliar areas, as danger lurks everywhere.</li>
        </ul>
      </section>
    </div>
  );
};

export default ArkPage;
