import * as z from "zod";

export const DataSchema = z.object({
    "login": z.string().nullish(),
    "id": z.number().nullish(),
    "node_id": z.string().nullish(),
    "avatar_url": z.string().nullish(),
    "gravatar_id": z.string().nullish(),
    "url": z.string().nullish(),
    "html_url": z.string().nullish(),
    "followers_url": z.string().nullish(),
    "following_url": z.string().nullish(),
    "gists_url": z.string().nullish(),
    "starred_url": z.string().nullish(),
    "subscriptions_url": z.string().nullish(),
    "organizations_url": z.string().nullish(),
    "repos_url": z.string().nullish(),
    "events_url": z.string().nullish(),
    "received_events_url": z.string().nullish(),
    "type": z.string().nullish(),
    "site_admin": z.boolean().nullish(),
    "name": z.string().nullish(),
    "company": z.string().nullish(),
    "blog": z.string().nullish(),
    "location": z.string().nullish(),
    "email": z.string().nullish(),
    "hireable": z.boolean().nullish(),
    "bio": z.string().nullish(),
    "twitter_username": z.string().nullish(),
    "public_repos": z.number().nullish(),
    "public_gists": z.number().nullish(),
    "followers": z.number().nullish(),
    "following": z.number().nullish(),
    "created_at": z.string().nullish(),
    "updated_at": z.string().nullish(),
});
export type Data = z.infer<typeof DataSchema>;

export const GithubGetUserResponseSchema = z.object({
    "status": z.number(),
    "data": DataSchema,
});
export type GithubGetUserResponse = z.infer<typeof GithubGetUserResponseSchema>;
