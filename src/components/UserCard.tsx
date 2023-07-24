import { FC } from "react";
import { faAdd, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserCardPros } from "../utils";

export const UserCard: FC<UserCardPros> = ({ user }) => {
  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 right-4 -bottom-6">
        <FontAwesomeIcon icon={faAdd} className="h-4 w-4" />
      </div>
      <div className=" text-white flex items-center absolute rounded-full shadow-xl right-[35%] -top-7 border-gray-900 border-2 bg-black">
        <img
          src={user.avatar_url}
          className="w-16 h-w-16 rounded-full"
        />
      </div>
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -bottom-6">
        <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{user.login}</p>
        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">ID: {user.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
