import { FC } from "react";
import { faAdd, faEye, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROUTES, UserCardPros } from "../utils";
import { useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useUsers } from "../hooks";
import { User } from "../services/http/users/interfaces/inputs/dbSelectUser";

export const UserCard: FC<UserCardPros> = ({
  user,
  onChange,
  selectedUsers,
  localAccount
}) => {
  const navigate = useNavigate();
  const { dbSelectUserMutation } = useUsers({});

  const goToUserDetails = () => {
    navigate(`${ROUTES.USER}/${user.username}`);
  };

  const selectUserAction = () => {
    const selectedUser: User = {
      avatar: user.avatar,
      userId: Number(user.id),
      username: user.username,
      githubLink: user.githubLink,
    };
    dbSelectUserMutation.mutate({ id: localAccount.id, user: selectedUser });
    onChange({ userName: user.username })
  };

  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 mb-10 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full shadow-xl right-[35%] -top-7 border-gray-900 border-2 bg-black">
        <img src={user.avatar} className="w-16 h-w-16 rounded-full" />
      </div>
      <button
        onClick={selectUserAction}
        className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 right-4 -bottom-6"
      >
        <FontAwesomeIcon
          icon={localAccount.users.includes(user.username) || selectedUsers.includes(user.username) ? faMinus : faAdd}
          className="h-4 w-4"
        />
      </button>
      <a
        href={user.githubLink}
        target="_blank"
        className="cursor-pointer text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 right-[40%] -bottom-6"
      >
        <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
      </a>
      <button
        onClick={goToUserDetails}
        className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -bottom-6"
      >
        <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
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
