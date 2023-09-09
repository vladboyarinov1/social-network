import React, {FC} from 'react';
import s from './Users.module.css';
import userAvatar from '../../img/userAvatar.svg';
import {Pagination} from '@mui/material';
import {setDisabled, UserType} from '../../reducers/users-reducer/users-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {Link} from 'react-router-dom';

type PropsType = {
    items: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
    setDisable: (userId: number, isFetching: boolean) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    onPageChanged: (event: React.ChangeEvent<unknown>, pageNumber: number) => void
}

export const Users: FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    const unFollowHandler = (userId: number) => {
        props.unFollowTC(userId)
    }
    const followHandler = (userId: number) => {
        props.followTC(userId)
    }
    const disabled = (currentId: number) => props.followingInProgress.some(id => currentId === id)

    return (
        <>
            <Preloader isFetching={props.isFetching}/>
            <div className={!props.isFetching ? s.container : `${s.container} ${s.disabledContainer}`}>
                <div>
                    {
                        props.items.map(u => {
                            return (
                                <div className={s.wrapper} key={u.id}>
                                    <Link to={`/profile/${u.id}`}>
                                        <div className={s.imgContainer}><img className={s.img}
                                                                             src={u.photos.small !== null ? u.photos.small : userAvatar}
                                                                             alt=""/></div>
                                    </Link>
                                    <div className={s.mainBlock}>
                                        <div className={s.fullName}>{u.name}</div>
                                        <div className={s.status}>{u.status}</div>
                                        <div className={s.locationBlock}>
                                            {/*<div>{u.location.city},</div>*/}
                                            {/*<div>{u.location.country}</div>*/}
                                        </div>
                                    </div>
                                    {u.followed ? <button disabled={disabled(u.id)}
                                                          className={`${s.button} ${s.unfollowBtn}`}
                                                          onClick={() => unFollowHandler(u.id)}>Отписаться</button> :
                                        <button disabled={disabled(u.id)}
                                                className={s.button}
                                                onClick={() => followHandler(u.id)}>Подписаться</button>}
                                </div>
                            )
                        })
                    }
                </div>

                <div className={s.pagination}><Pagination size="large" count={pagesCount} page={props.currentPage}
                                                          onChange={props.onPageChanged}/></div>
            </div>
        </>
    );
};