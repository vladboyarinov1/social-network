import {PostsType, ProfilePageType} from '../../store';
import {v1} from 'uuid';


export type AddPostAT = {
    type: 'ADD-POST'
    postText: string
}

export type ProfileAT = AddPostAT

const initState: ProfilePageType = {
    posts: [
        {id: v1(), avatar: 'ava', message: 'Hello, it\'s my first message', likes: 8},
        {id: v1(), avatar: 'ava', message: 'Hello, it\'s my second message', likes: 24}
    ],
}

export const profileReducer = (state = initState, action: ProfileAT
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
        default:
            return state
    }
}
export const addPostAC = (newPost: string): AddPostAT => ({type: 'ADD-POST', postText: newPost});


