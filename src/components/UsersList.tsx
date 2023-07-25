import { FC, useContext } from "react";
import { SimpleLoader, UserCard } from ".";
import { UsersListProps } from "../utils";
import LocalUserContext from "../context/localUser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const { localAccount } = useContext(LocalUserContext);

  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8 h-full">
      {isFetching ? (
        <SimpleLoader />
      ) : items.length === 0 ? (
        <section className="flex flex-col justify-center items-center w-full">
          <FontAwesomeIcon icon={faPersonCircleXmark} className="h-32 w-32 text-white"/>
            <p className="text-white text-5xl pb-12">There are no results</p>
        </section>
      ) : (
        items.map((user, index) => (
          <UserCard key={index} user={user} localAccount={localAccount} />
        ))
      )}
    </div>
  );
};
