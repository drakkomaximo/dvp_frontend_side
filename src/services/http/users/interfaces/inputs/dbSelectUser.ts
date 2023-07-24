import * as z from "zod";

export const UserSchema = z.object({
    "avatar": z.string(),
    "userId": z.number(),
    "username": z.string(),
    "githubLink": z.string(),
});
export type User = z.infer<typeof UserSchema>;

export const DbSelectUserBodySchema = z.object({
    "id": z.number(),
    "user": UserSchema,
});
export type DbSelectUserBody = z.infer<typeof DbSelectUserBodySchema>;
