import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'



export const MyPosts = () => {
    const posts = [
        {id: 1, avatar: '', message: "Hello, it's my first message"},
        {id: 2, avatar: '', message: "Hello, it's my second message"},
    ]


    return (
        <>
            <div className={s.wrapper}>
                <h3>My Posts</h3>
                <div className={s.input}>
                    <textarea name="" id=""></textarea>
                    <button>SEND</button>
                </div>
            </div>
            <Post posts={posts}/>
        </>


    )
}
