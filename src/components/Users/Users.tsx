import React, {FC} from 'react';
import s from './Users.module.css';
import userAvatar from '../../img/userAvatar.svg';
import {Pagination} from '@mui/material';
import {UserType} from '../../reducers/users-reducer/users-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import {Link} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    items: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (event: React.ChangeEvent<unknown>, pageNumber: number) => void
}

export const Users: FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
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
                                    {u.followed ? <button className={`${s.button} ${s.unfollowBtn}`}
                                                          onClick={() => {
                                                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true})
                                                                  .then(res => {
                                                                      if (res.data.resultCode === 0) {
                                                                          props.unFollow(u.id)
                                                                      }
                                                                  })
                                                          }}>Отписаться</button> :
                                        <button className={s.button}
                                                onClick={() => {
                                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true})
                                                        .then(res => {
                                                            if (res.data.resultCode === 0) {
                                                                props.follow(u.id)
                                                            }
                                                        })
                                                }
                                                }>Подписаться</button>}
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