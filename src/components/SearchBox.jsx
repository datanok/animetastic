export default function SearchBox({ handleSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };
  return (
    <div class="flex justify-center mt-4">
      <div class="mb-3 w-[80%] md:w-[60%] lg:w-[40%]">
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}
