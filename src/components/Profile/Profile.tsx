import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../store';

export const Profile: FC<ProfilePageType> = (props) => {
    return (
        <div className={s.wrapper}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}
