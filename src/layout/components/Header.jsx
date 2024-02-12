import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-10 w-full bg-[linear-gradient(to_bottom,_rgba(15,_23,_42,_1)_1%,_rgba(15,_23,_42,_0)_100%)] py-5 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 xl:px-8">
        <Link to="/">
          <figure>
            <img src={Logo} alt="logo" className="max-h-12 w-48" />
          </figure>
        </Link>
        <Search />
      </div>
    </header>
  );
};
