import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS, formatedGithubUser, formatedGithubUsersList } from "../utils";
import {
  getUserByNameApi,
  searchUsersByNameApi,
} from "../services/http/users/queries";

export const useUsers = ({ username }: { username: string }) => {
  const githubUsersListQuery = useQuery(
    [REACT_QUERY_KEYS.SEARCH_USERS_BY_NAME_KEY],
    () => searchUsersByNameApi({ username }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      select: (data) => formatedGithubUsersList({ usersListDataResponse: data }),
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

  return {
    githubUsersListQuery,
    githubUserQuery,
  };
};
