import React, { useEffect } from 'react';
import fc25Image from '../assets/fc25.jpg'; // Example image for FC 25
import gameplayVideo from '../assets/vid3.mp4'; // Example video for FC 25

const FC25 = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-8 text-white">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Discover FC 25</h1>
        <div className="text-center mb-8">
          <img
            src={fc25Image}
            alt="FC 25"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Game Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Game Overview</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            FC 25 is the latest installment in the legendary football simulation series. With
            cutting-edge graphics, realistic gameplay, and enhanced features, it delivers the most
            immersive soccer experience to date. From building your ultimate team to dominating
            leagues worldwide, FC 25 offers endless possibilities for football fans.
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
            <li>Experience hyper-realistic player movements and animations.</li>
            <li>Build and customize your Ultimate Team with legendary players.</li>
            <li>Compete in dynamic online tournaments and events.</li>
            <li>Explore career modes with deeper management and player growth mechanics.</li>
            <li>Play with officially licensed teams, stadiums, and leagues.</li>
          </ul>
        </section>

        {/* Notable Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Notable Players</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li>
              <strong>Kylian Mbappé:</strong> The unstoppable forward with incredible pace and
              finishing skills.
            </li>
            <li>
              <strong>Lionel Messi:</strong> A magician on the pitch, delivering mesmerizing
              dribbles and pinpoint passes.
            </li>
            <li>
              <strong>Erling Haaland:</strong> A goal-scoring machine with unmatched power and
              precision.
            </li>
            <li>
              <strong>Kevin De Bruyne:</strong> A midfield maestro known for his vision and
              creativity.
            </li>
          </ul>
        </section>

        {/* Gameplay Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Tips for Success</h2>
          <ul className="list-disc pl-6 text-lg text-gray-300 space-y-4">
            <li>Master timed finishing to score stunning goals in crucial moments.</li>
            <li>Use player traits to exploit your opponents' weaknesses.</li>
            <li>Experiment with custom tactics to find the best playstyle for your team.</li>
            <li>Participate in weekly challenges and events to earn rewards.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FC25;
