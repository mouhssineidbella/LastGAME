import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpeg';
import photo4 from '../assets/4.jpeg';

function Bits() {
  const [Bits, setBits] = useState([
    { name: 'Fortnite', image: photo4 },
    { name: 'Gta V', image: photo2 },
    { name: 'Minecraft', image: photo3 },
    { name: 'Valorant', image: photo1 },
  ]);

  const [allVideos, setAllVideos] = useState([
    { id: 1, src: '/videos/video1.mp4', title: 'Valorant Match 1', category: 'fortnite' },
    { id: 2, src: '/videos/video2.mp4', title: 'Fortnite Tips', category: 'setup' },
    { id: 3, src: '/videos/video3.mp4', title: 'Pubg Highlights', category: 'gta v' },
    { id: 4, src: '/videos/video4.mp4', title: 'Free Fire Tricks', category: 'minecraft' },
    { id: 5, src: '/videos/video5.mp4', title: 'Valorant Clutch', category: 'valorant' },
    { id: 6, src: '/videos/video6.mp4', title: 'GtaV', category: 'gta v' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBit, setNewBit] = useState({ name: '', image: '' });

  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVideos = allVideos.filter((video) => {
    const categoryMatch = !selectedCategory || video.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const searchMatch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.category.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleVideoClick = (videoId) => {
    navigate(`/Bits2?videoId=${videoId}`);
  };

  const handleAddBit = () => {
    if (!newBit.name || !newBit.image) {
      alert("Please provide a name and an image URL.");
      return;
    }
    setBits([...Bits, newBit]);
    setShowAddForm(false);
    setNewBit({ name: '', image: '' });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="p-4 bg-black min-h-screen">
      {/* Return to Home Button */}
      {(selectedCategory || showAddForm) && (
        <div className="mb-4 flex justify-center">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setShowAddForm(false);
            }}
            className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-lg hover:bg-gray-700 transition"
          >
            ⬅ Return to Home
          </button>
        </div>
      )}

      {/* Bits Categories Section */}
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Bits for You</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {Bits.map((Bit, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(Bit.name.toLowerCase())}
            className={`relative min-w-[65px] h-[50px] rounded-md shadow-md transition overflow-hidden ${
              selectedCategory === Bit.name.toLowerCase() ? 'ring-4 ring-orange-500' : 'hover:ring-2 hover:ring-gray-400'
            }`}
            style={{
              backgroundImage: `url(${Bit.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white font-bold text-xs">{Bit.name}</h3>
            </div>
          </button>
        ))}

        {/* Add a Bit Button */}
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center justify-center w-[65px] h-[50px] bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition text-sm"
        >
          +
        </button>
      </div>

      {/* Add a New Bit Form */}
      {showAddForm && (
        <div className="mt-4 flex flex-col items-center bg-gray-800 p-3 rounded-md shadow-md w-[300px] mx-auto">
          <h3 className="text-white font-bold text-sm">Add a New Bit</h3>
          <input
            type="text"
            placeholder="Name"
            value={newBit.name}
            onChange={(e) => setNewBit({ ...newBit, name: e.target.value })}
            className="p-1 mt-2 border rounded-md w-full text-sm"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBit.image}
            onChange={(e) => setNewBit({ ...newBit, image: e.target.value })}
            className="p-1 mt-2 border rounded-md w-full text-sm"
          />
          <button
            onClick={handleAddBit}
            className="bg-orange-500 text-white p-1 mt-2 rounded-md w-full text-sm font-semibold hover:bg-orange-600 transition"
          >
            Add
          </button>
        </div>
      )}

      {/* Search Bar */}
      <div className="mt-4 mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search game categories or videos..."
          className="w-full max-w-md p-2 border rounded-md shadow-md text-sm focus:outline-none focus:ring focus:ring-orange-500"
        />
      </div>

      {/* Videos Section */}
      <div className="p-4 mt-6">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          {selectedCategory ? `${selectedCategory} Videos` : 'All Shorts for You'}
        </h2>

        {/* Scroll Buttons */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 text-xs"
          >
            ◀
          </button>

          {/* Horizontal Scrollable Video Container */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide w-full max-w-7xl px-8 py-3"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="bg-gray-800 p-2 rounded-md shadow-md min-w-[220px] transition transform hover:scale-105 hover:bg-gray-700"
                onClick={() => handleVideoClick(video.id)}
              >
                <video
                  src={video.src}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-[220px] h-[380px] object-cover rounded-md"
                />
                <h3 className="mt-2 text-center text-white text-xs">{video.title}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 text-xs"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bits;
