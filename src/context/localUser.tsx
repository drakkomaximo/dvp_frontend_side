import { createContext, ReactNode, useState, useEffect } from "react";
import { FormattedUsers } from "../utils";
import { useUsers } from "../hooks";
import { User } from "../services/http/users/interfaces/inputs/dbSelectUser";

const LocalUserContext = createContext({} as UserContextType);

interface LocalUserContextProps {
  children: ReactNode;
}

type LocalUser = {
  id: number;
  users: string[];
};

type UserContextType = {
  userSearchedList: string[];
  localAccount: LocalUser;
  updateLocalUser: () => void;
  activeSelectUserMutation: ({
    user,
    id,
  }: {
    user: FormattedUsers;
    id: number;
  }) => void;
  activeDeleteUserMutation: ({ username }: { username: string }) => void;
  updateUsersSearchedList: ({ users }: { users: string[] }) => void;
};

export const LocalUserContextProvider = ({
  children,
}: LocalUserContextProps) => {
  const { dbSelectUserMutation, dbDeleteUserMutation } = useUsers({});
  const [localAccount, setLocalAccount] = useState<LocalUser>({
    id: 0,
    users: [],
  });
  const [userSearchedList, setUserSearchedList] = useState<string[]>([]);

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

  const updateUsersSearchedList = ({ users }: { users: string[] }) => {
    setUserSearchedList(users);
  };

  const activeSelectUserMutation = ({
    user,
    id,
  }: {
    user: FormattedUsers;
    id: number;
  }) => {
    const selectedUser: User = {
      avatar: user.avatar,
      userId: Number(user.id),
      username: user.username,
      githubLink: user.githubLink,
    };
    dbSelectUserMutation.mutate({ id, user: selectedUser });
    setTimeout(() => {
      updateLocalUser();
    }, 300);
  };

  const activeDeleteUserMutation = ({ username }: { username: string }) => {
    dbDeleteUserMutation.mutate({ username });
    setTimeout(() => {
      updateLocalUser();
    }, 300);
  };

  useEffect(() => {
    updateLocalUser();
  }, []);

  return (
    <LocalUserContext.Provider
      value={{
        userSearchedList,
        localAccount,
        updateLocalUser,
        activeSelectUserMutation,
        activeDeleteUserMutation,
        updateUsersSearchedList,
      }}
    >
      {children}
    </LocalUserContext.Provider>
  );
};

export default LocalUserContext;
