export default function SearchBox() {
  return (
    <div class="flex justify-center mt-4">
      <div class="mb-3 sm:w-[80%] md:w-[60%] lg:w-[40%]">
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          {/*    <button
          class="relative z-[2] flex items-center rounded-r bg-[#211E27] border border-solid border-gray-600 border-l-0 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <AiOutlineSearch size={22} />
        </button> */}
        </div>
      </div>
    </div>
  );
}
