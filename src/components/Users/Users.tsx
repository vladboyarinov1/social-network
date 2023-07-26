import React from 'react';
import {UsersPageType, UserType} from '../../reducers/users-reducer/users-reducer';
import s from './Users.module.css'
import axios from 'axios';
import userAvatar from '../../img/userAvatar.svg'
import {Pagination} from '@mui/material';

interface UsersProps extends UsersPageType {
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setPage: (currentPage: number) => void
    setTotalUserCount: (count: number) => void
}

export class Users extends React.Component<UsersProps, UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
            })
    }

    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        return (
            <div>
                {
                    this.props.items.map(u => {
                        return (
                            <div className={s.wrapper} key={u.id}>
                                <div className={s.imgContainer}><img className={s.img}
                                                                     src={u.photos.small !== null ? u.photos.small : userAvatar}
                                                                     alt=""/></div>
                                <div className={s.mainBlock}>
                                    <div className={s.fullName}>{u.name}</div>
                                    <div className={s.status}>{u.status}</div>
                                    <div className={s.locationBlock}>
                                        {/*<div>{u.location.city},</div>*/}
                                        {/*<div>{u.location.country}</div>*/}
                                    </div>
                                </div>
                                {u.followed ? <button className={`${s.button} ${s.unfollowBtn}`}
                                                      onClick={() => this.props.unfollow(u.id)}>Отписаться</button> :
                                    <button className={s.button}
                                            onClick={() => this.props.follow(u.id)}>Подписаться</button>}
                            </div>
                        )
                    })
                }
                <div className={s.pagination}><Pagination count={pagesCount} page={this.props.currentPage} onChange={this.onPageChanged}/></div>
            </div>
        );
    }
}


//
// export const Users: FC<UsersProps> = ({setUsers, follow, unfollow}) => {
//
//     const users = useAppSelector((state) => state.usersPage.items)


// if (!users.length) {
//     setUsers([
//         {
//             id: 1,
//             img: userAva,
//             fullName: 'Vladislav',
//             status: 'developer',
//             location: {country: 'Belarus', city: 'Minsk'},
//             followed: false
//         },
//         {
//             id: 2,
//             img: userAva,
//             fullName: 'Anton',
//             status: 'QA',
//             location: {country: 'Russia', city: 'Moscow'},
//             followed: true
//         },
//         {
//             id: 3,
//             img: userAva,
//             fullName: 'Igor',
//             status: 'PM',
//             location: {country: 'Poland', city: 'Warsaw'},
//             followed: false
//         },
//         {
//             id: 4,
//             img: userAva,
//             fullName: 'Dima',
//             status: 'HR',
//             location: {country: 'Belarus', city: 'Brest'},
//             followed: true
//         }
//     ])
// }

//     return (
//         <div>
//             {
//                 users.map(u => {
//                     return (
//                         <div className={s.wrapper} key={u.id}>
//                             {/*<div className={s.imgContainer}><img className={s.img} src={u.img} alt=""/></div>*/}
//                             <div className={s.mainBlock}>
//                                 <div className={s.fullName}>{u.name}</div>
//                                 <div className={s.status}>{u.status}</div>
//                                 <div className={s.locationBlock}>
//                                     {/*<div>{u.location.city},</div>*/}
//                                     {/*<div>{u.location.country}</div>*/}
//                                 </div>
//                             </div>
//                             {/*<button className={s.button}>{u.followed ? 'Отписаться' : 'Подписаться'}</button>*/}
//                             {u.followed ? <button className={`${s.button} ${s.unfollowBtn}`}
//                                                   onClick={() => unfollow(u.id)}>Отписаться</button> :
//                                 <button className={s.button} onClick={() => follow(u.id)}>Подписаться</button>}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };