import { ChangeEvent } from "react";
import { ItemType } from "../services/http/users/interfaces/outputs/githubSearchUsers";

export interface UsersListProps {
    items? : ItemType[],
    isFetching: boolean
}

export interface UserCardPros {
    user : ItemType
}

export interface SearchBarProps{
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}