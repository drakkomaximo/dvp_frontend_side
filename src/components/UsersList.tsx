import { FC, useEffect, useContext } from "react";
import { UserCard } from ".";
import { UsersListProps } from "../utils";
import LocalUserContext from "../context/localUser";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const { localAccount, updateLocalUser, onUserSelected, selectedUsers } = useContext(LocalUserContext);

  useEffect(() => {
    updateLocalUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUsers]);

  return (
    <div className="flex gap-4 flex-wrap w-10/12 mt-8">
      {isFetching ? (
        <div>...Loading</div>
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
