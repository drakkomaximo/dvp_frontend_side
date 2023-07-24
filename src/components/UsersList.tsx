import { FC } from "react";
import { UserCard } from ".";
import { UsersListProps } from "../utils";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8">
      {isFetching ? (
        <div>...Loading</div>
      ) : (
        (items || []).map((user, index) => <UserCard key={index} user={user} />)
      )}
    </div>
  );
};
