import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Bits2() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get('videoId'); // Get the videoId from URL query

  const [allVideos] = useState([
    { id: 1, src: '/videos/video1.mp4', title: 'Valorant Match 1', category: 'fortnite' },
    { id: 2, src: '/videos/video2.mp4', title: 'Fortnite Tips', category: 'setup' },
    { id: 3, src: '/videos/video3.mp4', title: 'Pubg Highlights', category: 'gta v' },
    { id: 4, src: '/videos/video4.mp4', title: 'Free Fire Tricks', category: 'minecraft' },
    { id: 5, src: '/videos/video5.mp4', title: 'Valorant Clutch', category: 'valorant' },
    { id: 6, src: '/videos/video6.mp4', title: 'GtaV', category: 'gta v' },
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(
    videoId ? parseInt(videoId) - 1 : 0
  );

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoDetails = allVideos[currentVideoIndex];

  const videoRef = useRef(null);

  const handleNextVideo = () => {
    if (currentVideoIndex < allVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handlePlayPause = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Player */}
      {videoDetails ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">{videoDetails.title}</h2>
          <div className="relative w-full max-w-[600px] h-[70vh] mb-4">
            <video
              ref={videoRef}
              src={videoDetails.src}
              controls
              autoPlay
              loop
              muted={!isVideoPlaying}
              className="w-full h-full object-contain rounded-lg" // Use object-contain to maintain aspect ratio
            />
          </div>
          <div className="flex justify-between w-full max-w-[600px] mb-4">
            <button
              onClick={handlePrevVideo}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Previous
            </button>
            <button
              onClick={handlePlayPause}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              {isVideoPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={handleNextVideo}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-white text-center">Video not found</p>
      )}
    </div>
  );
}

export default Bits2;
