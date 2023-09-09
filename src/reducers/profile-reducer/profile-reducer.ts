import {PostsType, ProfilePageType} from '../../store';
import {v1} from 'uuid';
import {Dispatch} from 'redux';
import {NetworkAPI, ProfileAPI} from '../../api/network-api';
import {throws} from 'assert';

export type UserProfile = {
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
type SetStatusType = ReturnType<typeof setStatus>
type UpdateStatus = ReturnType<typeof updateStatus>

type ActionType = AddPostATType
    | SetUserProfileType
    | SetStatusType
    | UpdateStatus

const initState: ProfilePageType = {
    profile: null,
    posts: [],
    status: null,
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionType
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
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
                // profile: {...state.profile, status: action.status}

            }
        case 'UPDATE-STATUS':
            return {
                ...state,
                status: action.value
            }

        default:
            return state
    }
}
export const addPostAC = (newPost: string) => ({type: 'ADD-POST', postText: newPost} as const);
export const setUserProfile = (data: UserProfile) => ({type: 'SET-USER-PROFILE', data} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const updateStatus = (value: string) => ({type: 'UPDATE-STATUS', value} as const)

export const getUserProfile = (profileId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getUserProfile(profileId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}

export const setUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatus(res.data))
        })
        .catch((e) => {
            throw new Error('Error in SET STATUS for user')
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(() => {
            dispatch(updateStatus(status))
        })
        .catch(() => {
            throw new Error('Error in SET STATUS for user')
        })
}

