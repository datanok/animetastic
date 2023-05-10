import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import YtEmbed from "../YtEmbed";

import { Spinner } from "flowbite-react";

export default function Details() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");

  const navString = searchQuery ? `/search?id=${searchQuery}` : "/";
  console.log(navString);
  const goBack = () => {
    navigate(`${navString}`);
  };

  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // function to fetch anime information from Jikan API
  const fetchAnime = async () => {
    const animeId = id;
    const url = "https://api.jikan.moe/v4/anime/" + animeId;
    try {
      const response = await axios.get(url);
      setAnime(response.data.data || {}); // set anime to empty object if response.data.data is falsy
      document.title = response.data.data.title;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // call fetchAnime() function when component mounts
  useEffect(() => {
    fetchAnime();
  }, []);

  if (isLoading) {
    return (<div className="flex justify-center"><Spinner/></div>)
  }

  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-lg bg-white/30 bg-[url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')]">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-0 bg-black backdrop-filter backdrop-blur-2xl bg-opacity-10 w-full">
        <button className="absolute text-white m-4" onClick={() => goBack()}>
          <BiArrowBack size={24} className="hover:font-bold hover:text-blue-400"/>
        </button>
        <div className="h-fit my-2 col-span-3 md:col-span-1  flex justify-center md:my-auto mt-5">
          <img
            src={anime?.images.jpg.large_image_url}
            className="h-[300px] md:h-[250px] lg:h-[300px]"
            alt=""
          />
        </div>

        <div className="my-2 mx-2 rounded-md col-span-3 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <h2 className="text-white  text-3xl text-center font-bold my-2 md:text-left">
              {anime?.title}
            </h2>

            <nav
              className="flex justify-center md:justify-start"
              aria-label="Breadcrumb"
            >
              <ol className="inline-flex items-center space-x-1 md:space-x-3 my-2">
                <li className="inline-flex items-center text-base font-medium text-gray-300 mr-1">
                  {anime?.type}
                </li>
                <li className="inline-flex items-center text-base font-medium text-gray-300 ">
                  {anime?.rating}
                </li>
                <li className="inline-flex items-center text-base font-medium text-gray-300 ">
                  {anime?.episodes} Episodes
                </li>
              </ol>
            </nav>
            <div className="">
              <p className="text-white text-sm my-2 text-ellipsis px-2 lg:mx-0 mr-4">
                {anime?.synopsis}
              </p>
            </div>
          </div>
        </div>
        <div className="h-fit col-span-3 md:col-span-3 lg:col-span-1 mt-2 pb-2 mx-2 rounded-md bg-black bg-opacity-30 backdrop-blur-5">
          <div class="">
            <div class="anisc-info-wrap">
              <div class="anisc-info">
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Japanese:
                  </span>
                  <span class="text-sm text-white ml-2">
                    {anime?.title_japanese}
                  </span>
                </div>
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Aired:
                  </span>
                  <span class="text-sm text-white ml-2">
                    {anime.aired.string}
                  </span>
                </div>
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Premiered:
                  </span>
                  <span class="text-sm text-white ml-2 capitalize">
                    {anime.season} {anime.year}
                  </span>
                </div>
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Duration:
                  </span>
                  <span class="text-sm text-white ml-2">{anime.duration}</span>
                </div>
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Status:
                  </span>
                  <span class="text-sm text-white ml-2">{anime.status}</span>
                </div>
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    MAL Score:
                  </span>
                  <span class="text-sm text-white ml-2">{anime.score}</span>
                </div>

                <div class="">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Genres:
                  </span>
                  {anime.genres.map((genre) => (
                    <Link
                      to={`/genre/${genre.name}`}
                      className=" text-sm ml-2 text-white border border-white hover:border-transparent hover:bg-white hover:text-black  rounded-full px-2 py-1"
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>

                <div class="py-1 ml-2 ">
                  <span class="text-sm text-white font-semibold">
                    Studios:
                  </span>

                  {anime.studios && anime.studios.length > 0 ? (
                    anime.studios.map((studio) => (
                      <span
                        key={studio.mal_id}
                        className="text-sm text-white ml-2"
                      >
                        {studio.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-white ml-2">-</span>
                  )}
                </div>
                <div class="py-1 ml-2">
  <span class="text-sm text-white font-semibold">Producers:</span>

  {anime.producers && anime.producers.length > 0 ? (
    anime.producers.map((producer) => (
      <span key={producer.mal_id} className="text-sm text-white ml-2">
        {producer.name},
      </span>
    ))
  ) : (
    <span className="text-sm text-white">-</span>
  )}
</div>

              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="m-4 col-span-3">
       <YtEmbed embedUrl={anime.trailer.embed_url}/>
        </div>
      </div>
    </div>
  );
}
