import { AxiosInstance } from "../../../../config";
import { DbSelectUserBody } from "../interfaces/inputs/dbSelectUser";
import { SuccessSelectedUsersSchema } from "../interfaces/outputs/successSelectedUsers";

import { DB_API_MUTATION_ROUTES, DB_API_ROUTES } from "../interfaces/routes";

export const selectUserByNameApi = async ({
  id,
  user,
}: DbSelectUserBody) => {
  const res = await AxiosInstance.post(
    `${DB_API_ROUTES.DB_VERSION}${DB_API_MUTATION_ROUTES.SELECT_USER_BY_NAME}`,
    { id, user }
  );

  return SuccessSelectedUsersSchema.parse(res.data);
};
