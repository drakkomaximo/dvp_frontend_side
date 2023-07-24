import * as z from "zod";


export const SuccessSelectedUsersSchema = z.object({
    "status": z.number(),
    "data": z.string(),
    "account_id": z.number(),
    "user_name": z.string()
});
export type SuccessSelectedUsers = z.infer<typeof SuccessSelectedUsersSchema>;
