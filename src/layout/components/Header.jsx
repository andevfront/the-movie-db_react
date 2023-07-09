import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { Search } from "../../components/Search";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-slate-900 py-5 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 xl:px-8">
        <Link to="/">
          <figure>
            <img src={Logo} alt="logo" className="max-h-12" />
          </figure>
        </Link>
        <Search />
      </div>
    </header>
  );
};
