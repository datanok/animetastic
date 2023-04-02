import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TopAnime = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    //get cached response
    const cachedData = localStorage.getItem("topAnime");
    console.log(JSON.parse(cachedData));
    //check if response is cached
    if (cachedData) {
      setAnimeData(JSON.parse(cachedData));
    } else {
      //if not the hit the api and cachce the response
      axios
        .get("https://api.jikan.moe/v4/top/anime")
        .then((response) => {
          setAnimeData(response.data.data);
          localStorage.setItem("topAnime", JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,

    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[96%] mx-auto">
      <Slider {...settings}>
        {animeData.map((anime) => (
          <div className="flex rounded-2xl w-[250px] h-50 px-2">
            <div className="relative">
              <img
                className="rounded-3xl object-cover h-full"
                src={anime.images.jpg.large_image_url}
                alt=""
              />

              <Link to={"/search/" + anime.mal_id} anime={anime}>
                <h1 className="pl-3 hover:text-sky-300 text-white my-1 text-md truncate ...">
                  {anime.title}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopAnime;
