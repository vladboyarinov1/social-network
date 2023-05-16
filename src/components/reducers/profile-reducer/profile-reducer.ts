import {PostsType, ProfilePageType, StateType} from '../../../state';
import {v1} from 'uuid';


export type AddPostAT = {
    type: 'ADD-POST'
    postText: string
}

export type ProfileAT = AddPostAT

export const profileReducer = (state: ProfilePageType, action: ProfileAT) => {
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
        default:
            return state
    }
}
export const addPostAC = (newPost: string): AddPostAT => ({type: 'ADD-POST', postText: newPost});

