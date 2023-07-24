import { GithubGetUserResponse } from '../services/http/users/interfaces/outputs/githubGetUser';
export const formatedGithubUser = ( {userDataResponse}:{userDataResponse : GithubGetUserResponse} ) =>{
    const {data} = userDataResponse

    return{
        avatar: data.avatar_url || 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg',
        description: data.bio || null,
        blog: data.blog || null,
        followers: data.followers || 0,
        followings: data.followers || 0,
        id: data.id || null,
        location: data.location || null,
        username: data.login || null,
        publicRepos: data.public_repos || 0,
        type: data.type || null
    }
}