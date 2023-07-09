import { FiSearch } from "react-icons/fi";

export const Search = () => {
  return (
    <form className="relative">
      <input
        className="outline-none bg-slate-800 border border-sky-700 text-slate-400 rounded-full py-2 pl-4 pr-10 w-52 transition-all duration-500 focus:w-60"
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Buscar..."
      />
      <button
        className="absolute top-0 right-0 py-2 pr-4 effect-zoom"
        type="submit"
      >
        <FiSearch className="h-6 w-6 text-sky-500" />
      </button>
      {/* <div className="absolute bg-gray-50 dark:bg-slate-800 top-full right-0 rounded-lg mt-3">{words.trim().length > 0 && <SearchResult words={words} handleMovieClick={handleMovieClick} />}</div> */}
    </form>
  );
};
