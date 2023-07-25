import { ChartData, Point } from "chart.js";
import { Followers, FormattedUsers } from ".";
import { DbGetSelectedUsersResponse } from "../services/http/users/interfaces/outputs/dbGetSelectedUser";
import { GithubGetFollowersAmountResponse } from "../services/http/users/interfaces/outputs/githubGetFolloersAmount";
import { GithubGetUserResponse } from "../services/http/users/interfaces/outputs/githubGetUser";
import { GithubSearchUsersResponse } from "../services/http/users/interfaces/outputs/githubSearchUsers";
export const formattedGithubUser = ({
  userDataResponse,
}: {
  userDataResponse: GithubGetUserResponse;
}) => {
  const { data } = userDataResponse;

  return {
    avatar:
      data.avatar_url ||
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg",
    description: data.bio || "",
    blog: data.blog || "",
    followers: data.followers || 0,
    followings: data.followers || 0,
    id: data.id || "",
    location: data.location || "",
    username: data.login || "",
    publicRepos: data.public_repos || 0,
    type: data.type || "",
    githubLink: data.html_url || "",
  };
};

export const formattedGithubUsersList = ({
  usersListDataResponse,
}: {
  usersListDataResponse: GithubSearchUsersResponse;
}) => {
  const { data } = usersListDataResponse;
  const { items } = data;

  if (items.length > 0) {
    const formattedItems = items.map((user) => ({
      avatar:
        user.avatar_url ||
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg",
      id: user.id || "",
      username: user.login || "",
      githubLink: user.html_url || "",
    }));

    return formattedItems;
  } else {
    return [];
  }
};

export const formattedDbSelectedUsersList = ({
  dbUsersListDataResponse,
}: {
  dbUsersListDataResponse: DbGetSelectedUsersResponse;
}) => {
  const { data } = dbUsersListDataResponse;

  if (data.length > 0) {
    const formattedItems = data.map((user) => ({
      avatar:
        user.user_avatar ||
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg",
      id: user.user_id || "",
      username: user.user_name || "",
      githubLink: user.user_github_link || "",
    }));

    return formattedItems;
  } else {
    return [];
  }
};

export const formattedGithubNumberOfFollowersList = ({
  numbersOfFollowersResponse,
}: {
  numbersOfFollowersResponse: GithubGetFollowersAmountResponse;
}) => {
  const { data } = numbersOfFollowersResponse;

  if (data.length > 0) {
    const formattedItems : Followers[] = data.map((user) => ({
      followers: user.followers || 0,
      username: user.username || "",
    }));

    return formattedItems;
  } else {
    return [];
  }
};

export const formattedFollowersChart = ({
  followers,
}: {
  followers: Followers[];
}): ChartData<"bar", (number | Point | null)[], unknown> => {
  return {
    labels: followers.map((user) => user.username),
    datasets: [
      {
        label: "Users Followers",
        data: followers.map((user) => user.followers),
        backgroundColor: "rgb(255,255,255)",
      },
    ],
  };
};

export const formattedUsersArray = ({
  users,
}: {
  users: FormattedUsers[];
}) => {
  if(users.length > 0){
    return users.map((user) => user.username)
  }else{
    return []
  }
};