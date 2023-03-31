import SearchBox from "../SearchBox";
import axios from "axios";
import { useState } from "react";
import Results from "../Results";
import Spinner from "../Spinner";

export default function Search() {
  const API_URL = "https://api.jikan.moe/v4";
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    nores: false,
    searchMsg: "",
  });

  /* Param: SearchQuery : Input searched by user*/
  const handleSearch = async (searchQuery) => {
    setLoading(true); //setting loading to true whle we check the search query
    if (!searchQuery) {
      setState((prevState) => ({
        ...prevState,
        nores: true,
        searched: true,
        results: [],
      }));

      setSearched(true);
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios(`${API_URL}/anime?q=${searchQuery}`);
      const results = data?.data || [];
      if (results.length === 0) {
        setState((prevState) => ({
          ...prevState,
          nores: true,
          searched: true,
          results: [],
          searchMsg: searchQuery,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          results,
          searched: true,
          nores: false,
          searchMsg: searchQuery,
        }));
      }
    } catch (error) {
      console.error(error);
      setState((prevState) => ({
        ...prevState,
        error: "An error occurred while searching. Please try again later.",
      }));
    }
    setLoading(false); //stop loading when results are fetched and erros are handled
  };

  return (
    <>
      <SearchBox handleSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5 px-2">
          <Results results={state.results} />
        </div>
      )}
    </>
  );
}
