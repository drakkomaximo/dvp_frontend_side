import { AxiosInstance } from "../../../../config";
import { DbSelectUserResponseSchema } from "../interfaces/inputs/dbSelectUser";

import { DB_API_MUTATION_ROUTES, DB_API_ROUTES } from "../interfaces/routes";

export const selectUserByNameApi = async ({
  username,
}: {
  username: string;
}) => {
  const res = await AxiosInstance.get(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_MUTATION_ROUTES.SELECT_USER_BY_NAME}/${username}`
  );

  return DbSelectUserResponseSchema.parse(res.data);
};