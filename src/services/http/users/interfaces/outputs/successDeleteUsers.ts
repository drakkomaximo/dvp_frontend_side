import * as z from "zod";

export const SuccessDeleteUsersSchema = z.object({
    "status": z.number(),
    "data": z.string(),
    "user_name": z.string(),
});
export type SuccessDeleteUsers = z.infer<typeof SuccessDeleteUsersSchema>;

