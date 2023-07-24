import * as z from "zod";

export const DatumSchema = z.object({
    "id": z.number(),
    "account_id": z.number(),
    "github_user_name": z.string(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const DbGetSelectedUsersResponseSchema = z.object({
    "status": z.number(),
    "data": z.array(DatumSchema),
});
export type DbGetSelectedUsersResponse = z.infer<typeof DbGetSelectedUsersResponseSchema>;
