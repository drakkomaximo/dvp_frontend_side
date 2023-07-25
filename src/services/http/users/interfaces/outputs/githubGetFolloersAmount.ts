import * as z from "zod";

export const DatumSchema = z.object({
    "followers": z.number(),
    "username": z.string(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const GithubGetFollowersAmountResponseSchema = z.object({
    "status": z.number(),
    "data": z.array(DatumSchema),
});
export type GithubGetFollowersAmountResponse = z.infer<typeof GithubGetFollowersAmountResponseSchema>;
