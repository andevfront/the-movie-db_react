import { FiSearch } from "react-icons/fi";

export const Search = () => {
  return (
    <form className="relative">
      <input
        className="w-52 rounded-full border border-sky-700 bg-slate-800 py-2 pl-4 pr-10 text-slate-400 outline-none transition-all duration-500 sm:focus:w-60"
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Buscar..."
      />
      <button
        className="effect-zoom absolute right-0 top-0 py-2 pr-4"
        type="submit"
      >
        <FiSearch className="h-6 w-6 text-sky-500" />
      </button>
      {/* <div className="absolute bg-gray-50 dark:bg-slate-800 top-full right-0 rounded-lg mt-3">{words.trim().length > 0 && <SearchResult words={words} handleMovieClick={handleMovieClick} />}</div> */}
    </form>
  );
};
