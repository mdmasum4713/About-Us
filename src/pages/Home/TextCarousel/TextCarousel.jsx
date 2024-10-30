import { useState } from "react";

const TextCarousel = () => {
  const quotes = [
    "“ As women who value our health, we’re here to do what we do <br /> best - roll up our sleeves to get it done <br /> right.”",
    "“ As women who value our health, we’re here to do what we do <br /> best - roll up our sleeves to get it done <br /> right.”",
    "“ As women who value our health, we’re here to do what we do <br /> best - roll up our sleeves to get it done <br /> right.”"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");
  let startX = 0;

  const goToSlide = (index) => {
    setFadeClass("opacity-0"); // Start fade out
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeClass("opacity-100"); // Fade in after changing slide
    }, 300);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % quotes.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + quotes.length) % quotes.length);
  };

  // Start dragging
  const handleMouseDown = (event) => {
    startX = event.clientX;
  };

  // End dragging
  const handleMouseUp = (event) => {
    const endX = event.clientX;
    if (startX > endX) {
      nextSlide();
    } else if (startX < endX) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full h-80 flex flex-col items-center bg-gray-100 overflow-hidden p-6 rounded-lg mt-4 mb-10">
      {/* Headers */}
      <h1 className="text-xl text-balance text-orange-400 mb-2">WHAT BUYERS SAY</h1>
      <h2 className="text-3xl font-semibold text-black mb-6">Customers Reviews</h2>

      {/* Slide Content */}
      <div
        className={`flex flex-col items-center justify-center w-full h-full text-xl font-semibold text-center mb-8 transition-opacity duration-300 ${fadeClass}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="px-4 leading-relaxed">
          <h2 className="italic" dangerouslySetInnerHTML={{ __html: quotes[currentIndex] }}></h2>
        </div>
      </div>

      {/* Author's Name */}
      <p className="text-sm text-gray-70000 mb-2"> Randy Workman</p>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full  ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
