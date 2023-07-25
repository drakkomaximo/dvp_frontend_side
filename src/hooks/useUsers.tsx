import { useMutation, useQuery } from "@tanstack/react-query";
import {
  REACT_QUERY_KEYS,
  formatedDbSelectedUsersList,
  formatedGithubUser,
  formatedGithubUsersList,
  notification,
} from "../utils";
import {
  getSelectedUsersById,
  getUserByNameApi,
  searchUsersByNameApi,
} from "../services/http/users/queries";
import { deleteUserByNameApi, selectUserByNameApi } from "../services/http/users/mutations";

export const useUsers = ({
  username = "",
  id = 0,
}: {
  username?: string;
  id?: number | string;
}) => {
  //queries
  const githubUsersListQuery = useQuery(
    [REACT_QUERY_KEYS.SEARCH_USERS_BY_NAME_KEY],
    () => searchUsersByNameApi({ username }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      select: (data) =>
        formatedGithubUsersList({ usersListDataResponse: data }),
    }
  );

  const githubUserQuery = useQuery(
    [REACT_QUERY_KEYS.GET_USER_BY_NAME_KEY],
    () => getUserByNameApi({ username }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      select: (data) => formatedGithubUser({ userDataResponse: data }),
    }
  );

  const dbSelectUsersQuery = useQuery(
    [REACT_QUERY_KEYS.GET_SELECTED_USERS_BY_ID_KEY],
    () => getSelectedUsersById({ id: Number(id) }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      select: (data) =>
        formatedDbSelectedUsersList({ dbUsersListDataResponse: data }),
    }
  );

  //mutations
  const dbSelectUserMutation = useMutation(selectUserByNameApi, {
    onSuccess: (data) => {
      const storedData = localStorage.getItem("db_user");

      if (storedData) {
        const localData = JSON.parse(storedData)
        localStorage.setItem(
          "db_user",
          JSON.stringify({
            id: localData.id,
            users: [...localData.users, data.user_name],
          })
        );
      } else {
        localStorage.setItem(
          "db_user",
          JSON.stringify({
            id: data.account_id,
            users: [data.user_name],
          })
        );
      }
      notification({
        text: "User saved.",
        type: "success",
      });
    },
  });

  const dbDeleteUserMutation = useMutation(deleteUserByNameApi, {
    onSuccess: (data) => {
      const storedData = localStorage.getItem("db_user");

      if (storedData) {
        const localData = JSON.parse(storedData)
        const filtedUsers = localData.users.filter((user: string) => user !== data.user_name)
        localStorage.setItem(
          "db_user",
          JSON.stringify({
            id: localData.id,
            users: [...filtedUsers],
          })
        );
      }
      notification({
        text: "User deleted",
        type: "success",
      });
    },
  });

  return {
    dbSelectUsersQuery,
    githubUsersListQuery,
    githubUserQuery,
    dbSelectUserMutation,
    dbDeleteUserMutation,
  };
};
