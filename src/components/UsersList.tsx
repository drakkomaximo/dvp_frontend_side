import { FC, useContext } from "react";
import { SimpleLoader, UserCard } from ".";
import { UsersListProps } from "../utils";
import LocalUserContext from "../context/localUser";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const { localAccount, onUserSelected, selectedUsers } = useContext(LocalUserContext);

  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8">
      {isFetching ? (
        <SimpleLoader />
      ) : (
        items.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onChange={onUserSelected}
            selectedUsers={selectedUsers}
            localAccount={localAccount}
          />
        ))
      )}
    </div>
  );
};
