import * as z from "zod";

export const ItemSchema = z.object({
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
    "score": z.number(),
});
export type ItemType = z.infer<typeof ItemSchema>;

export const DataSchema = z.object({
    "total_count": z.number(),
    "incomplete_results": z.boolean(),
    "items": z.array(ItemSchema),
});
export type Data = z.infer<typeof DataSchema>;

export const GithubSearchUsersResponseSchema = z.object({
    "status": z.number(),
    "data": DataSchema,
});
export type GithubSearchUsersResponse = z.infer<typeof GithubSearchUsersResponseSchema>;
