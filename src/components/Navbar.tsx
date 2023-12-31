import { Link } from "react-router-dom";
import { ROUTES } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LocalUserContext from "../context/localUser";

export const Navbar = () => {
  const { localAccount, userSearchedList, updateUsersSearchedList } =
    useContext(LocalUserContext);

  return (
    <header className="bg-zinc-700 flex justify-between items-center py-5 px-10">
      <div className="text-white font-bold">
        <Link
          onClick={() => updateUsersSearchedList({ users: [] })}
          to={ROUTES.HOME}
          className="p-2 rounded-sm"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Github Finder
        </Link>
      </div>
      <div className="flex gap-3">
        {userSearchedList.length > 0 && (
          <div className="text-white font-bold">
            <Link
              to={ROUTES.FOLLOWERSLIST}
              className="bg-amber-800 p-2 rounded-sm"
            >
              <FontAwesomeIcon icon={faList} className="mr-2" />
              Followers List
            </Link>
          </div>
        )}
        {localAccount.users.length > 0 && (
          <div className="text-white font-bold">
            <Link
              to={`${ROUTES.USERSLIST}/${localAccount.id}`}
              className="bg-amber-800 p-2 rounded-sm"
            >
              <FontAwesomeIcon icon={faList} className="mr-2" />
              Users List
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
