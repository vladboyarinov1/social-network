import React, {FC} from 'react';
import {addPostAC, ProfileAT} from '../../reducers/profile-reducer/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../store';

type PropsType = {
    // dispatch: (newPostText: ProfileAT) => void
    // posts: Array<PostsType>
    store: any
}

// type PostsType = {
//     id: string,
//     avatar: any,
//     message: string,
//     likes: number
// }

export const MyPostsContainer: FC<PropsType> = props => {

    const {store} = props


    const addPostHandler = (newPostText: string) => {
        store.dispatch(addPostAC(newPostText))
    }

    return (
        <>
            <MyPosts addPosts={addPostHandler} posts={store.getState().profileReducer.posts}/>
        </>
    )
}
