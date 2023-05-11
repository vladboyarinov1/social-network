import React, {FC} from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import ava from '../../img/avatar.jpg'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {
    addPost: (postText: string) => void
    posts: PostsType[]
}

type PostsType = {
    id: string,
    avatar: any,
    message: string,
    likes: number
}

export const Profile: FC<PropsType> = props => {

    const {addPost, posts} = props

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPosts  posts={posts} addPost={addPost}/>
        </div>
    )
}
