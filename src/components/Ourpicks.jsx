import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import bleach from "../static/images/bleachthousand.jpg";
import job from "../static/images/jobless.jpg";
import howl from "../static/images/2126732.jpg";
import cowboy from "../static/images/wallpaperflare.com_wallpaper.jpg";
export default function Ourpicks() {
  const slides = [
    {
      url: "https://images6.alphacoders.com/112/1120777.jpg",
      text: "Jujutsu Kaisen.",
      info: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
      link: "/search/40748",
    },
    {
      url: bleach,
      text: "Bleach: Thousand-Year Blood War.",
      info: "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.",
    },
    {
      url: job,
      text: "Mushoku Tensei: Jobless Reincarnation",
      info: "When a wayward man is reincarnated with the knowledge, experience, and regrets from his previous life, he resolves to become successful in his new body.",
    },
    {
      url: howl,
      text: "Howl's Moving Castle",
      info: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
      link: "/search/431",
    },
    {
      url: cowboy,
      text: "Cowboy Bebop",
      info: "Aboard the spaceship Bebop, a bounty hunter and his group of skilled comrades embark on adventures across the Solar System to capture criminals.",
      link: "/search/1",
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
    <div className="h-[365px] w-full m-auto mt-4px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full rounded-2xl overflow-clip h-full bg-center bg-cover duration-500"
      >
        <div className="w-[100%] h-full  pl-4 bg-gradient-to-r from-black to:transparent">
          <div className="flex w-[100%] flex-col justify-start md:ml-4 md:justify-center h-full pl-4">
            <h1 className="sm:text-lg  md:text-3xl font-bold text-white text-center md:text-start">
              {slides[currentIndex].text}
            </h1>
            <p className="w-full sm:block md:w-[30%] text-sm text-ellipsis mt-3 lg:text-lg text-gray-300">
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
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
