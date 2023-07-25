import { createContext, ReactNode, useState, useEffect } from "react";
import { FormatedUsers } from "../utils";
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
  localAccount: LocalUser;
  updateLocalUser: () => void;
  activeSelectUserMutation: ({user, id}:{user: FormatedUsers, id: number}) => void;
  activeDeleteUserMutation: ({username}:{username: string}) => void;
};

export const LocalUserContextProvider = ({
  children,
}: LocalUserContextProps) => {
  const { dbSelectUserMutation, dbDeleteUserMutation } = useUsers({});
  const [localAccount, setLocalAccount] = useState<LocalUser>({
    id: 0,
    users: [],
  });

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

  const activeSelectUserMutation = ({user, id}:{user: FormatedUsers, id: number}) =>{
    const selectedUser: User = {
      avatar: user.avatar,
      userId: Number(user.id),
      username: user.username,
      githubLink: user.githubLink,
    };
    dbSelectUserMutation.mutate({ id, user: selectedUser });
    setTimeout(() => {
      updateLocalUser()
    }, 300);
  }

  const activeDeleteUserMutation = ({username}:{username: string}) =>{
    dbDeleteUserMutation.mutate({ username });
    setTimeout(() => {
      updateLocalUser()
    }, 300);
  }

  useEffect(() => {
    updateLocalUser();
  }, []);

  return (
    <LocalUserContext.Provider
      value={{ localAccount, updateLocalUser, activeSelectUserMutation, activeDeleteUserMutation }}
    >
      {children}
    </LocalUserContext.Provider>
  );
};

export default LocalUserContext;
