import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS, notification } from "../utils";
import { searchUsersByNameApi } from "../services/http/users/queries";

export const useUsers = ({ username }: { username: string }) => {
  const githubUsersListQuery = useQuery(
    [REACT_QUERY_KEYS.SEARCH_USERS_BY_NAME_KEY],
    () => searchUsersByNameApi({ username }),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
      enabled: false,
      onSuccess: () => {
        notification({
          text: "hola mundo",
          type: "success",
        });
      },
      /* onError: async error => {
      await sendError({
        error,
        user,
        module: 'focus_admin',
        payload: {
          queryKey: getShipmentNotes,
          metadata: {
            functionName: 'getShipAddressApi',
            queryType: 'query',
          },
        },
      });
    }, */
    }
  );

  return {
    githubUsersListQuery,
  };
};
