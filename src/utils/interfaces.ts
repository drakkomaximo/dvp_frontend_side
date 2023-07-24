import { ChangeEvent } from "react";
import { ItemType } from "../services/http/users/interfaces/outputs/githubSearchUsers";

export interface UsersListProps {
    items? : ItemType[],
    isFetching: boolean
}

export interface UserCardPros {
    user : ItemType
    selectedUsers: string[];
    onChange: ({ userName }: { userName: string }) => void;
}

export interface UserDetailsProps {
    avatar: string;
    description: string | null;
    blog: string | null;
    followers: number;
    followings: number;
    id: number | null;
    location: string | null;
    username: string | null;
    publicRepos: number;
    type: string | null;
}

export interface SearchBarProps{
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}