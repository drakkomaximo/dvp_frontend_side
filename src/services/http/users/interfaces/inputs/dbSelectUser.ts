import * as z from "zod";


export const DbSelectUserResponseSchema = z.object({
    "status": z.number(),
    "data": z.string(),
});
export type DbSelectUserResponse = z.infer<typeof DbSelectUserResponseSchema>;
