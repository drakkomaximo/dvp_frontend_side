import { createContext, ReactNode, useState, useEffect } from "react";

const LocalUserContext = createContext({} as UserContextType);

interface LocalUserContextProps {
  children: ReactNode;
}

type LocalUser = {
  id: number;
  users: string[];
};

type UserContextType = {
  selectedUsers: string[];
  localAccount: LocalUser;
  updateLocalUser: () => void;
  onUserSelected: ({ userName }: { userName: string }) => void;
};

export const LocalUserContextProvider = ({
  children,
}: LocalUserContextProps) => {
  const [localAccount, setLocalAccount] = useState<LocalUser>({
    id: 0,
    users: [],
  });
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const onUserSelected = ({ userName }: { userName: string }) => {
    selectedUsers.includes(userName)
      ? setSelectedUsers(selectedUsers.filter((user) => user !== userName))
      : setSelectedUsers([...selectedUsers, userName]);

    updateLocalUser();
  };

  const updateLocalUser = () => {
    const storedState = localStorage.getItem("db_user");

    if (storedState) {
      setLocalAccount(JSON.parse(storedState));
    } else {
      setLocalAccount({
        id: 0,
        users: [],
      });
    }
  };

  useEffect(() => {
    updateLocalUser();
  }, []);

  return (
    <LocalUserContext.Provider
      value={{ selectedUsers, localAccount, updateLocalUser, onUserSelected }}
    >
      {children}
    </LocalUserContext.Provider>
  );
};

export default LocalUserContext;
