import * as z from "zod";

export const DbDeleteUserBodySchema = z.object({
    "username": z.string(),
});
export type DbDeleteUserBody = z.infer<typeof DbDeleteUserBodySchema>;

