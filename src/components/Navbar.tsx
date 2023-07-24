import { Link /* , useLocation */ } from "react-router-dom";
import { ROUTES } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  /* const location = useLocation(); */

  return (
    <nav className="bg-zinc-700 flex justify-between items-center py-5 px-10">
      <div className="text-white font-bold">
        <Link to={ROUTES.HOME} className="p-2 rounded-sm">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Github Finder
        </Link>
      </div>
      <ul className="flex gap-x-2">
        <li className="text-white font-bold">
          <Link to={ROUTES.USERSLIST} className="bg-amber-800 p-2 rounded-sm">
          <FontAwesomeIcon icon={faList} className="mr-2" />
            Users List
          </Link>
        </li>
      </ul>
    </nav>
  );
};
