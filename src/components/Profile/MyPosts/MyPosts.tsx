import React, {ChangeEvent, FC, useState} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'

import {addPostAC, ProfileAT} from '../../reducers/profile-reducer/profile-reducer';
import {SuperButton} from '../../SuperButton/SuperButton';
import {UniversalInput} from '../../UniversalInput /UniversalInput';

type PropsType = {
    dispatch: (newPostText: ProfileAT) => void
    posts: Array<PostsType>
}

type PostsType = {
    id: string,
    avatar: any,
    message: string,
    likes: number
}

export const MyPosts: FC<PropsType> = props => {
    const {dispatch, posts} = props

    const [newPost, setNewPost] = useState<string>('')

    const minLengthPost: number = 5
    const maxLengthPost: number = 30
    const isPostToShort: boolean = newPost.length < minLengthPost
    const isPostToLong: boolean = newPost.length > maxLengthPost
    const isAddBtnDisabled = !newPost.length || !newPost.trim() || isPostToShort || isPostToLong
    const isPostToLongError = isPostToLong && newPost.trim() &&
        <div style={{color: 'salmon'}}>Length input more {maxLengthPost} symbols!</div>
    const isPostToShortError = isPostToShort && newPost.trim() &&
        <div style={{color: 'salmon'}}>Length input less {isPostToShort} symbols!</div>

    const postValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPost(e.currentTarget.value)
    }
    const onKeyDownAddPost = () => {
        if (!isPostToShort && !isPostToLong) {
            // e.key === 'Enter' && addPostHandler()
            addPostHandler()
        }
    }


    const addPostHandler = () => {
        dispatch(addPostAC(newPost))
        setNewPost('')
    }


    return (
        <>
            <div className={s.wrapper}>
                <h3>My Posts</h3>
                <div className={s.input}>
                    <UniversalInput value={newPost} setValue={setNewPost} onEnter={onKeyDownAddPost}
                                    placeholder={'Enter task'}/>

                    <SuperButton title="SEND" onClick={addPostHandler} disabled={isAddBtnDisabled}/>
                    {isPostToLongError}
                    {isPostToShortError}
                </div>
            </div>
            <Post posts={posts}/>
        </>
    )
}
