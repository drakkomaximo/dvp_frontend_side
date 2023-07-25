import { ChangeEvent } from "react";

export interface Followers{
  followers: number;
  username: string;
}

export interface FormattedUsers {
  avatar: string;
  id: string | number;
  username: string;
  githubLink: string;
}

export interface FullScreenLoaderProps{
  title: string;
}

export interface UsersListProps {
  items: FormattedUsers[];
  isFetching: boolean;
}

export interface CustomChartProps {
  followers: Followers[];
  isFetching: boolean
}

export interface UserCardPros {
  user: FormattedUsers;
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
