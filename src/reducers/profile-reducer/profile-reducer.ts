import {PostsType, ProfilePageType} from '../../store';
import {v1} from 'uuid';

export interface UserProfile {
    aboutMe: string;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}

type AddPostATType = ReturnType<typeof addPostAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>

type ActionType = AddPostATType
    | SetUserProfileType

const initState: ProfilePageType = {
    profile: null,
    posts: [
        {id: v1(), avatar: 'ava', message: 'Hello, it\'s my first message', likes: 8},
        {id: v1(), avatar: 'ava', message: 'Hello, it\'s my second message', likes: 24}
    ],
}

export const profileReducer = (state = initState, action: ActionType
) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: v1(),
                avatar: '',
                message: action.postText,
                likes: 3
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.data
            }
        default:
            return state
    }
}
export const addPostAC = (newPost: string) => ({type: 'ADD-POST', postText: newPost} as const);
export const setUserProfile = (data: UserProfile) => ({type: 'SET-USER-PROFILE', data} as const)


