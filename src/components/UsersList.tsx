import { FC, useEffect, useState } from "react";
import { UserCard } from ".";
import { UsersListProps } from "../utils";

export const UsersList: FC<UsersListProps> = ({ items, isFetching }) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [localAccount, setLocalAccount] = useState<{
    id: number, users: string[]
  }>({
    id: 0,
    users: []
  })

  const setLocalIdAction = () => {
    const storedState = localStorage.getItem('db_user')

    if(storedState){
      setLocalAccount(JSON.parse(storedState))
    }else{
      setLocalAccount({
        id: 0,
        users: []
      })
    }
  }

  const onUserSelected = ({ userName }: { userName: string }) => {
    selectedUsers.includes(userName)
      ? setSelectedUsers(selectedUsers.filter((user) => user !== userName))
      : setSelectedUsers([...selectedUsers, userName]);

      setLocalIdAction()
  };

  useEffect(() => {
    setLocalIdAction()
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
