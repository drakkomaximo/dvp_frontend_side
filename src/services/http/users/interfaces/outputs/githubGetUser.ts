import * as z from "zod";


export const DataSchema = z.object({
    "login": z.string(),
    "id": z.number(),
    "node_id": z.string(),
    "avatar_url": z.string(),
    "gravatar_id": z.string(),
    "url": z.string(),
    "html_url": z.string(),
    "followers_url": z.string(),
    "following_url": z.string(),
    "gists_url": z.string(),
    "starred_url": z.string(),
    "subscriptions_url": z.string(),
    "organizations_url": z.string(),
    "repos_url": z.string(),
    "events_url": z.string(),
    "received_events_url": z.string(),
    "type": z.string(),
    "site_admin": z.boolean(),
    "name": z.string(),
    "company": z.string(),
    "blog": z.string(),
    "location": z.null(),
    "email": z.null(),
    "hireable": z.boolean(),
    "bio": z.string(),
    "twitter_username": z.string(),
    "public_repos": z.number(),
    "public_gists": z.number(),
    "followers": z.number(),
    "following": z.number(),
    "created_at": z.string(),
    "updated_at": z.string(),
});
export type Data = z.infer<typeof DataSchema>;

export const GithubGetUserResponseSchema = z.object({
    "status": z.number(),
    "data": DataSchema,
});
export type GithubGetUserResponse = z.infer<typeof GithubGetUserResponseSchema>;
