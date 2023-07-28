import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import userAvatar from '../../../img/userAvatar.svg';
import {UserProfile} from '../../../reducers/profile-reducer/profile-reducer';

type PropsType = {
    profile: UserProfile | null
}

export const ProfileInfo: FC<PropsType> = (props) => {

    return (
        <>
            {/*<div>{props.profile?.fullName }</div>*/}

            <div className={s.profile}>
                <div className={s.avatar}>
                    <img className={s.avatarImg}
                         src={props.profile?.photos.small || userAvatar} alt=""/>
                </div>
                <div className={s.name}>{props.profile?.fullName}</div>
                <div>
                    <div className={s.textCols}>
                        <div className={s.textColsLeft}>
                            <div>Обо мне:</div>
                            <div>В поиске работы:</div>
                            <div>GitHub:</div>
                        </div>
                        <div className={s.textColsRight}>
                            <div>{props.profile?.aboutMe || '-'}</div>
                            <div>{props.profile?.lookingForAJob ? '✅' : '❌'}</div>
                            {props.profile?.contacts.github || '-'}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
