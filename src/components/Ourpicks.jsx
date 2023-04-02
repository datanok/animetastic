import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Ourpicks() {
  const slides = [
    {
      url: "https://images6.alphacoders.com/112/1120777.jpg",
      text: "Jujutsu Kaisen.",
      info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
      link: "/search/40748",
    },
    {
      url: "https://via.placeholder.com/2670x800?text=Slide%202",
      text: "This is the second slide.",
    },
    {
      url: "https://via.placeholder.com/2672x800?text=Slide%203",
      text: "This is the third slide.",
    },
    {
      url: "https://via.placeholder.com/2253x800?text=Slide%204",
      text: "This is the fourth slide.",
    },
    {
      url: "https://via.placeholder.com/2671x800?text=Slide%205",
      text: "This is the fifth slide.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[300px] w-full m-auto mt-4 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="flex w-[100%] flex-col justify-end md:justify-center h-full pl-4 bg-gradient-to-r from-black to:transparent">
          <h1 className="sm:text-lg  md:text-3xl font-bold text-white">
            {slides[currentIndex].text}
          </h1>
          <p className="w-full sm:block md:w-[30%] text-sm text-ellipsis mt-3 text-gray-300">
            {slides[currentIndex].info}
          </p>

          <Link
            to={slides[currentIndex].link}
            className="text-xs mb-2 text-white hover:bg-white hover:text-black hover:font-bold border w-fit px-2 py-1 mt-3 rounded-full sm:text-xs"
          >
            More Info
          </Link>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
