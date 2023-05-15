import React, {FC} from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import ava from '../../img/avatar.jpg'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionType} from '../../state';

type PropsType = {
    dispatch: (newPostText: ActionType) => void
    posts: PostsType[]
}

type PostsType = {
    id: string,
    avatar: any,
    message: string,
    likes: number
}

export const Profile: FC<PropsType> = props => {

    const {dispatch, posts} = props

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPosts  posts={posts} dispatch={dispatch}/>
        </div>
    )
}
