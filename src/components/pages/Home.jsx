import AnimeCarousel from "../AnimeCarousel";
import Ourpicks from "../Ourpicks";
import TopAnime from "../TopAnime";

export default function Home() {
  return (
    <div className="px-2">
      <h1 className="m-4 text-white text-xl font-bold my-2 border-l-4 border-sky-300 pl-3">
        Our Picks
      </h1>
      <Ourpicks />
      <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-25 dark:opacity-100" />
      <div className="mt-4 flex flex-col justify-center ml-4">
        <h1 className="text-white text-xl font-bold my-2 border-l-4 border-sky-300 pl-3">
          Current Season
        </h1>
        <AnimeCarousel />
      </div>
      <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-25 dark:opacity-100" />
      <div className="mt-4 flex flex-col justify-center ml-4">
        <h1 className="text-white text-xl font-bold my-2 border-l-4 border-sky-300 pl-3">
          Most Popular
        </h1>
        <TopAnime />
      </div>
    </div>
  );
}
