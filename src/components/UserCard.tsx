import { FC, useContext, useEffect } from 'react';
import { faAdd, faMinus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES, UserCardPros, findStringIntoArray } from "../utils";
import { useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LocalUserContext from "../context/localUser";

export const UserCard: FC<UserCardPros> = ({
  user,
  onChange,
  selectedUsers,
  localAccount
}) => {
  const navigate = useNavigate();
  const { updateLocalUser, activeSelectUserMutation } = useContext(LocalUserContext)

  const goToUserDetails = () => {
    navigate(`${ROUTES.USER}/${user.username}`);
  };

  const selectUserAction = () => {
    activeSelectUserMutation({id: localAccount.id, user})
    onChange({ userName: user.username })
  };

  useEffect(() => {
    updateLocalUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUsers]);

  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 mb-10 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full shadow-xl right-[35%] -top-7 border-gray-900 border-2 bg-black">
        <img src={user.avatar} className="w-16 h-w-16 rounded-full" />
      </div>
      <button
        onClick={selectUserAction}
        className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${
          findStringIntoArray({
            compareOne: selectedUsers,
            compareTwo: user.username,
          }) || findStringIntoArray({
            compareOne: localAccount.users,
            compareTwo: user.username,
          })
            ? "bg-red-700 hover:bg-red-800"
            : "bg-green-700 hover:bg-green-800"
        } right-4 -bottom-6`}
      >
        <FontAwesomeIcon
          icon={findStringIntoArray({
            compareOne: selectedUsers,
            compareTwo: user.username,
          }) || findStringIntoArray({
            compareOne: localAccount.users,
            compareTwo: user.username,
          }) ? faMinus : faAdd}
          className="h-4 w-4"
        />
      </button>
      <a
        href={user.githubLink}
        target="_blank"
        className="cursor-pointer text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-zinc-700 right-[40%] -bottom-6"
      >
        <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
      </a>
      <button
        onClick={goToUserDetails}
        className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-zinc-700 left-4 -bottom-6"
      >
        <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
      </button>
      <div className="mt-8">
        <p className="text-xl text-center font-semibold my-2">
          {user.username.toUpperCase()}
        </p>
        <div className="border-t-2"></div>

        <div className="flex justify-center">
          <div className="my-2">
            <p className="font-semibold text-center text-base mb-2">
              ID: {user.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
