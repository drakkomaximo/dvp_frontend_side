import { AxiosInstance } from "../../../../config";
import { DbGetSelectedUsersResponseSchema } from "../interfaces/outputs/dbGetSelectedUser";
import { GithubGetFollowersAmountResponseSchema } from "../interfaces/outputs/githubGetFolloersAmount";
import { GithubGetUserResponseSchema } from "../interfaces/outputs/githubGetUser";
import { GithubSearchUsersResponseSchema } from "../interfaces/outputs/githubSearchUsers";

import { DB_API_QUERY_ROUTES, DB_API_ROUTES } from "../interfaces/routes";

export const searchUsersByNameApi = async ({
  username,
}: {
  username: string;
}) => {
  const res = await AxiosInstance.get(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_QUERY_ROUTES.SEARCH_USERS_BY_NAME}/${username}`
  );

  return GithubSearchUsersResponseSchema.parse(res.data);
};

export const getUserByNameApi = async ({ username }: { username: string }) => {
  const res = await AxiosInstance.get(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_QUERY_ROUTES.GET_USER_BY_NAME}/${username}`
  );

  return GithubGetUserResponseSchema.parse(res.data);
};

export const getSelectedUsersByIdApi = async ({ id }: { id: number }) => {
  const res = await AxiosInstance.get(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_QUERY_ROUTES.GET_SELECTED_USERS_BY_ID}/${id}`
  );

  return DbGetSelectedUsersResponseSchema.parse(res.data);
};

export const getNumberOfFollowersByUsersNameApi = async ({ users }: { users: string[] }) => {
  const formattedUsers = users.toString();
  const res = await AxiosInstance.get(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_QUERY_ROUTES.GET_NUMBER_OF_FOLLOWERS_BY_USERS_NAME}${formattedUsers}`
  );

  return GithubGetFollowersAmountResponseSchema.parse(res.data);
};
