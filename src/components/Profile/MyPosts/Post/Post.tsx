import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    posts: Array<PostType>
};

type PostType = {
    id: number
    avatar: string
    message: string
    likes: number
};

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.wrapper}>
            {
                props.posts.map((i) => {
                    return (
                        <>
                            <div>{i.message}</div>
                            <span>likes: {i.likes}</span>
                        </>
                    )
                })
            }
        </div>
    )
}
