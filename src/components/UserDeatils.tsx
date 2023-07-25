import { FC, useContext } from "react";
import { UserDetailsProps, findStringIntoArray } from "../utils";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalUserContext from "../context/localUser";

export const UserDeatils: FC<UserDetailsProps> = ({
  avatar,
  description,
  followers,
  followings,
  location,
  publicRepos,
  username,
  githubLink,
  id,
}) => {
  const { localAccount, activeSelectUserMutation, activeDeleteUserMutation } =
    useContext(LocalUserContext);

  return (
    <div className="px-16 h-full">
      <div className="p-8 bg-white shadow mt-24 rounded-lg">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            {" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">
                {followers}
              </p>{" "}
              <p className="text-gray-400">Followers</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">
                {followings}
              </p>{" "}
              <p className="text-gray-400">Followings</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-bold text-gray-700 text-xl">
                {publicRepos}
              </p>{" "}
              <p className="text-gray-400">Repositories</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="relative">
            {" "}
            <div className="w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center border-2 bg-black">
              <img src={avatar} className="rounded-full" />
            </div>{" "}
          </div>{" "}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <a
              href={githubLink}
              target="_blank"
              className="cursor-pointer text-white p-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </a>{" "}
            <button
              onClick={() => {
                findStringIntoArray({
                  compareOne: localAccount.users,
                  compareTwo: username,
                })
                  ? activeDeleteUserMutation({ username: username })
                  : activeSelectUserMutation({
                      id: localAccount.id,
                      user: {
                        avatar,
                        githubLink,
                        id,
                        username,
                      },
                    });
              }}
              className={`text-white py-2 px-4 uppercase rounded ${
                findStringIntoArray({
                  compareOne: localAccount.users,
                  compareTwo: username,
                })
                  ? "bg-red-700 hover:bg-red-800"
                  : "bg-green-700 hover:bg-green-800"
              } shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5`}
            >
              <FontAwesomeIcon
                icon={
                  findStringIntoArray({
                    compareOne: localAccount.users,
                    compareTwo: username,
                  })
                    ? faMinus
                    : faAdd
                }
                className="mr-2"
              />
              {findStringIntoArray({
                compareOne: localAccount.users,
                compareTwo: username,
              })
                ? "Remove"
                : "Add"}{" "}
              user
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-20 text-center border-b pb-12">
          {" "}
          <h1 className="text-4xl font-medium text-gray-700">
            {username?.toLocaleUpperCase()}
          </h1>{" "}
          <p className="font-light text-gray-600 mt-3">{location}</p>{" "}
        </div>{" "}
        <div className="mt-12 flex flex-col justify-center">
          {" "}
          <p className="text-gray-600 text-center font-light lg:px-16">
            {description}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
