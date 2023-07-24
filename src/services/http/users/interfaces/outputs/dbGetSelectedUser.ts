import * as z from "zod";


export const DatumSchema = z.object({
    "user_name": z.string(),
    "user_id": z.number(),
    "user_avatar": z.string(),
    "user_github_link": z.string(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const DbGetSelectedUsersResponseSchema = z.object({
    "status": z.number(),
    "data": z.array(DatumSchema),
});
export type DbGetSelectedUsersResponse = z.infer<typeof DbGetSelectedUsersResponseSchema>;
