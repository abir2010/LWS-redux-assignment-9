/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logoImg from "../images/logo.svg";

export default function Navbar({ searchText, setSearchText }) {
  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logoImg} />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Task"
            className="search-input text-gray-900"
            id="lws-searchTask"
          />
        </div>
      </div>
    </nav>
  );
}
