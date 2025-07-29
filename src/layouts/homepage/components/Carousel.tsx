import { useState, useEffect } from "react";

const images = [
    "./images/books/img1.jpg",
    "./images/books/img2.jpg",
    "./images/books/img3.jpg",
    "./images/books/img4.jpg",
    "./images/books/img5.jpg",
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => setCurrentIndex(index);
    const goPrev = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const goNext = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    return (
        <div className="relative w-full">
            {/* Desktop */}
            <div className="relative overflow-hidden rounded-lg hidden md:block" style={{ height: "500px" }}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>

            {/* Mobile */}
            <div className="relative overflow-hidden rounded-lg md:hidden h-56">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover object-center transition-opacity duration-700 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>


            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-white/50"
                        }`}
                    ></button>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={goPrev}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
            </button>
            <button
                onClick={goNext}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
            </button>
        </div>
    );
}
