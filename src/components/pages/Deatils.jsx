import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Details() {
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
    <div className="flex flex-row flex-wrap justify-center w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed backdrop-blur-lg bg-white/30 bg-[url('https://images6.alphacoders.com/112/1120777.jpg')]">
      <div className="bg-black backdrop-filter backdrop-blur-xl bg-opacity-10">
        <div className="w-full h-fit md:w-2/12 my-2 mx-2 flex justify-center">
          <img
            src={anime?.images.jpg.large_image_url}
            className="h-[200px]"
            alt=""
          />
        </div>
        <div className="w-full md:w-4/12 my-2 mx-2 rounded-md">
          <div className="flex flex-col">
            <h2 className="text-white text-3xl text-center font-bold my-2">
              {anime?.title}
            </h2>

            <nav className="flex justify-center" aria-label="Breadcrumb">
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
            <p className="text-gray-300 text-sm my-2 text-ellipsis mx-2 mr-4">
              {anime?.synopsis}
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/12 h-full border-2 border-dashed my-2 mx-2 rounded-md">
          <div class=""></div>
        </div>
      </div>
    </div>
  );
}
