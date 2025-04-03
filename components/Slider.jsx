import React, { useState, useEffect } from "react";

function RGBCarousel() {
  const slides = [
    { src: "./images/slider1.png", alt: "Cyberpunk City" },
    { src: "./images/slider2.jpeg", alt: "Neon Jungle" },
    { src: "./images/slider3.jpeg", alt: "Futuristic Arena" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className="relative w-full max-w-screen mx-auto text-white bg-black">
      {/* Search Bar */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex justify-center">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-black/50 border border-transparent p-4 rounded-lg backdrop-blur-md"
          style={{
            boxShadow: "0 0 15px orange, 0 0 30px orange, 0 0 45px red",
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your adventure..."
            className="w-96 p-3 rounded-l-md text-white bg-gray-900 border-none outline-none text-lg focus:ring-4  placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-6 py-3 text-lg font-bold bg-gradient-to-r from-red-500 to-blue-500 rounded-r-md hover:scale-105 transition-all duration-300"            style={{
              boxShadow: "0 0 20px #ff0000, 0 0 20px #0000ff",
            }}
          >
            Search
          </button>
        </form>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-gradient-to-r from-green-400 to-blue-400 shadow-lg"
                : "bg-gray-500"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-700">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-[700px] object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-10 text-center text-3xl font-extrabold bg-black/70 text-white p-3 rounded-lg"
                style={{
                  textShadow: "0 0 15px #00ff00, 0 0 30px #ff0000, 0 0 45px #0000ff",
                }}
              >
                {slide.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:scale-110 transition-all duration-300 z-10 backdrop-blur-md"
        style={{
          boxShadow: "0 0 20px #00ff00, 0 0 20px #0000ff",
        }}
      >
        <span className="text-2xl font-bold">&lt;</span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 flex items-center justify-center h-12 w-12 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full hover:scale-110 transition-all duration-300 z-10 backdrop-blur-md"
        style={{
          boxShadow: "0 0 20px #ff0000, 0 0 20px #0000ff",
        }}
      >
        <span className="text-2xl font-bold">&gt;</span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default RGBCarousel;
