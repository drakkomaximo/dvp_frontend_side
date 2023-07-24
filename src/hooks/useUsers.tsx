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
import { selectUserByNameApi } from "../services/http/users/mutations";

export const useUsers = ({
  username = "",
  id = 0,
}: {
  username?: string;
  id?: number;
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
      /* onSuccess: () => {
        notification({
          text: "",
          type: "success",
        });
      }, */
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
      /* onSuccess: () => {
        notification({
          text: "hola mundo",
          type: "success",
        });
      }, */
    }
  );

  const dbSelectUsersQuery = useQuery(
    [REACT_QUERY_KEYS.GET_SELECTED_USERS_BY_ID_KEY],
    () => getSelectedUsersById({ id }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      select: (data) =>
        formatedDbSelectedUsersList({ dbUsersListDataResponse: data }),
      /* onSuccess: () => {
        notification({
          text: "hola mundo",
          type: "success",
        });
      }, */
    }
  );

  //mutations
  const dbSelectUserMutation = useMutation(selectUserByNameApi, {
    onSuccess: (data) => {
      const storedData = localStorage.getItem("db_user");

      if (storedData) {
        const localData = JSON.parse(storedData)
        console.log(localData, 1)
        localStorage.setItem(
          "db_user",
          JSON.stringify({
            id: localData.id,
            users: [...localData.users, data.user_name],
          })
        );
      } else {
        console.log(data, 2)
        localStorage.setItem(
          "db_user",
          JSON.stringify({
            id: data.account_id,
            users: [data.user_name],
          })
        );
      }
      notification({
        text: "Usuario guardado",
        type: "success",
      });
    },
  });

  return {
    dbSelectUserMutation,
    dbSelectUsersQuery,
    githubUsersListQuery,
    githubUserQuery,
  };
};
