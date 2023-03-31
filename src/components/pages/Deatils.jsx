import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  axios
    .get("https://api.jikan.moe/v4/anime/" + id + "/pictures")
    .then((res) => {
      console.log(res);
    });

  // function to fetch anime information from Jikan API
  const fetchAnime = async () => {
    const animeId = id;
    const url = "https://api.jikan.moe/v4/anime/" + animeId;
    try {
      const response = await axios.get(url);
      setAnime(response.data.data || {}); // set anime to empty object if response.data.data is falsy
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
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-lg bg-white/30 bg-[url('https://images6.alphacoders.com/112/1120777.jpg')]">
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-2 md:gap-0 bg-black backdrop-filter backdrop-blur-xl bg-opacity-10 w-full">
        <div className=" h-fit my-2 md:col-span-1 mx-auto">
          <img
            src={anime?.images.jpg.large_image_url}
            className="h-[300px]"
            alt=""
          />
        </div>

        <div className="my-2 mx-2 rounded-md md:col-span-2 lg:col-span-1">
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
                  {anime?.episodes}
                </li>
              </ol>
            </nav>
            <div className="">
              <p className="text-white text-sm my-2 text-ellipsis sm:mx-2 lg:mx-0 mr-4">
                {anime?.synopsis}
              </p>
            </div>
          </div>
        </div>
        <div className="h-fit md:col-span-3 lg:col-span-1 my-2 mx-2 rounded-md bg-black bg-opacity-30 backdrop-blur-5">
          <div class="">
            <div class="anisc-info-wrap">
              <div class="anisc-info">
                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Japanese:
                  </span>
                  <span class="text-sm text-white ml-2">
                    {anime.title_japanese}
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

                <div class="item item-list">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Genres:
                  </span>
                  {anime.genres.map((genre) => (
                    <button className=" text-sm ml-2 text-white border border-white hover:border-transparent hover:bg-white hover:text-black  rounded-full px-2 py-1">
                      {genre.name}
                    </button>
                  ))}
                </div>

                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
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

                <div class="py-1">
                  <span class="text-sm text-white ml-2 font-semibold">
                    Producers:
                  </span>
                  <a
                    class="text-sm text-white ml-2"
                    href="/producer/bit-grooove-promotion"
                  >
                    Bit grooove promotion
                  </a>
                  ,
                  <a
                    class="text-sm text-white ml-2"
                    href="/producer/bandai-namco-arts"
                  >
                    Bandai Namco Arts
                  </a>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
