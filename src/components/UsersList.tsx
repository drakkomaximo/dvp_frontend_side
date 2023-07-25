import { FC, useContext, useEffect } from "react";
import { SimpleLoader, UserCard } from ".";
import { UsersListProps, formattedUsersArray } from "../utils";
import LocalUserContext from "../context/localUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const { localAccount, updateUsersSearchedList } =
    useContext(LocalUserContext);

  useEffect(() => {
    if (items.length > 0) {
      updateUsersSearchedList({ users: formattedUsersArray({ users: items }) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8">
      {isFetching ? (
        <SimpleLoader />
      ) : items.length === 0 ? (
        <section className="flex flex-col justify-center items-center w-full">
          <FontAwesomeIcon
            icon={faPersonCircleXmark}
            className="h-32 w-32 text-white"
          />
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
