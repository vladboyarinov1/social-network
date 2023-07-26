import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



export const Profile: FC = props => {

    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
