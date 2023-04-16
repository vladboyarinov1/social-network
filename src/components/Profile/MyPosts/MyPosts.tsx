import React, {ChangeEvent, FC, useState} from 'react';
import {Post} from './Post/Post';
import s from './MyPosts.module.css'

type PropsType = {
    addPost: (postText: string) => void
    posts: Array<PostsType>
}

type PostsType = {
    id: string,
    avatar: any,
    message: string,
    likes: number
}

export const MyPosts: FC<PropsType> = props => {
    const {addPost, posts} = props

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
    const onKeyDownAddPost = (e: any) => {
        if (!isPostToShort && !isPostToLong) {
            e.key === 'Enter' && addPostHandler()
        }
    }
    const addPostHandler = () => {
        addPost(newPost)
        setNewPost('')
    }

    return (
        <>
            <div className={s.wrapper}>
                <h3>My Posts</h3>
                <div className={s.input}>
                    <input onChange={postValue} value={newPost} onKeyDown={onKeyDownAddPost}
                           placeholder="Enter task"></input>
                    <button onClick={addPostHandler} disabled={isAddBtnDisabled}>SEND</button>
                    {isPostToLongError}
                    {isPostToShortError}
                </div>
            </div>
            <Post posts={posts}/>
        </>


    )
}
