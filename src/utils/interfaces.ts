import { ChangeEvent } from "react";

export interface FormatedUsers {
  avatar: string;
  id: string | number;
  username: string;
  githubLink: string;
}

export interface UsersListProps {
  items: FormatedUsers[];
  isFetching: boolean;
}

export interface UserCardPros {
  user: FormatedUsers;
  selectedUsers: string[];
  onChange: ({ userName }: { userName: string }) => void;
  localAccount: {
    id: number;
    users: string[];
  };
}

export interface UserDetailsProps {
  avatar: string;
  description: string;
  blog: string;
  followers: number;
  followings: number;
  id: string | number;
  location: string;
  username: string;
  publicRepos: number;
  type: string;
  githubLink: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
