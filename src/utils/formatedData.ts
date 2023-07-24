import { GithubGetUserResponse } from '../services/http/users/interfaces/outputs/githubGetUser';
import { GithubSearchUsersResponse } from '../services/http/users/interfaces/outputs/githubSearchUsers';
export const formatedGithubUser = ( {userDataResponse}:{userDataResponse : GithubGetUserResponse} ) =>{
    const {data} = userDataResponse

    return{
        avatar: data.avatar_url || 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg',
        description: data.bio || '',
        blog: data.blog || '',
        followers: data.followers || 0,
        followings: data.followers || 0,
        id: data.id || '',
        location: data.location || '',
        username: data.login || '',
        publicRepos: data.public_repos || 0,
        type: data.type || '',
        githubLink: data.html_url || ''
    }
}

export const formatedGithubUsersList = ( {usersListDataResponse}:{usersListDataResponse : GithubSearchUsersResponse} ) =>{
    const {data} = usersListDataResponse
    const {items} = data

    if(items.length > 0){
        const formatedItems = items.map((user) => ({
            avatar: user.avatar_url || 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg',
            id: user.id || '',
            username: user.login || '',
            githubLink: user.html_url || ''
        }))
    
        return formatedItems
    }else{
        return []
    }
}