import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchResults } from "./SearchResults";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = ({ target }) => setSearchQuery(target.value);

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      setSearchQuery("");
    }
  };

  return (
    <form
      className="relative"
      onClick={handleClick}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="w-52 rounded-full border border-sky-700 bg-slate-800/50 py-2 pl-4 pr-10 text-slate-400 outline-none transition-all duration-500 focus:border-sky-400 sm:focus:w-60"
        type="search"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        className="effect-zoom absolute right-0 top-0 py-2 pr-4"
        type="submit"
      >
        <FiSearch className="h-6 w-6 text-sky-500" />
      </button>
      <div className="absolute right-0 top-full mt-3 rounded-lg bg-slate-800/60">
        {searchQuery.trim().length > 0 && <SearchResults query={searchQuery} />}
      </div>
    </form>
  );
};
