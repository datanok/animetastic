import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import Results from "../Results";
import Spinner from "../Spinner";

export default function Genre() {
  var { genre } = useParams();
  genre = genre.replace(/-/g, "_");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    nores: false,
    searchMsg: "",
  });
  const [genreMap] = useState({
    Action: 1,
    Adventure: 2,
    Cars: 3,
    Comedy: 4,
    Dementia: 5,
    Demons: 6,
    Mystery: 7,
    Drama: 8,
    Ecchi: 9,
    Fantasy: 10,
    Game: 11,
    Hentai: 12,
    Historical: 13,
    Horror: 14,
    Kids: 15,
    Magic: 16,
    Martial_Arts: 17,
    Mecha: 18,
    Music: 19,
    Parody: 20,
    Samurai: 21,
    Romance: 22,
    School: 23,
    Sci_Fi: 24,
    Shoujo: 25,
    Shoujo_Ai: 26,
    Shounen: 27,
    Shounen_Ai: 28,
    Space: 29,
    Sports: 30,
    Super_Power: 31,
    Vampire: 32,
    Yaoi: 33,
    Yuri: 34,
    Harem: 35,
    Slice_of_Life: 36,
    Supernatural: 37,
    Military: 38,
    Police: 39,
    Psychological: 40,
    Thriller: 41,
    Seinen: 42,
    Josei: 43,
  });

  const handleGenreClick = async (genre) => {
    try {
      const { data } = await axios(
        `https://api.jikan.moe/v4/anime?genres=${genreMap[genre]}`
      );
      const results = data?.data || [];
      setState((prevState) => ({
        ...prevState,
        results,
        searched: true,
        nores: results.length === 0,
        searchMsg: genre + " Genre",
      }));
    } catch (error) {
      console.error(error);
    }
  };
  handleGenreClick(genre);
  return (
    <>
      <h1 className="text-white text-2xl text-center font-bold mt-4">
        {genre} Anime
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5 px-2">
          <Results results={state.results} searchMessage={state.searchMsg} />
        </div>
      )}
    </>
  );
}
