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
  selectedUsers: string[];
  localAccount: LocalUser;
  updateLocalUser: () => void;
  onUserSelected: ({ userName }: { userName: string }) => void;
  activeSelectUserMutation: ({user, id}:{user: FormatedUsers, id: number}) => void;
};

export const LocalUserContextProvider = ({
  children,
}: LocalUserContextProps) => {
  const { dbSelectUserMutation } = useUsers({});
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

  const activeSelectUserMutation = ({user, id}:{user: FormatedUsers, id: number}) =>{
    const selectedUser: User = {
      avatar: user.avatar,
      userId: Number(user.id),
      username: user.username,
      githubLink: user.githubLink,
    };
    dbSelectUserMutation.mutate({ id, user: selectedUser });
  }

  useEffect(() => {
    updateLocalUser();
  }, []);

  return (
    <LocalUserContext.Provider
      value={{ selectedUsers, localAccount, updateLocalUser, onUserSelected, activeSelectUserMutation }}
    >
      {children}
    </LocalUserContext.Provider>
  );
};

export default LocalUserContext;
