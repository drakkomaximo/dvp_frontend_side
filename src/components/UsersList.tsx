import { FC, useState } from "react";
import { UserCard } from ".";
import { UsersListProps } from "../utils";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const onUserSelected = ({ userName }: { userName: string }) => {
    selectedUsers.includes(userName)
      ? setSelectedUsers(selectedUsers.filter((user) => user !== userName))
      : setSelectedUsers([...selectedUsers, userName]);
  };

  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8">
      {isFetching ? (
        <div>...Loading</div>
      ) : (
        (items || []).map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onChange={onUserSelected}
            selectedUsers={selectedUsers}
          />
        ))
      )}
    </div>
  );
};
