import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage, setLoader,
    setTotalUserCount,
    setUsers, setUsersTC,
    unFollow, UsersPageType,
    UserType
} from '../../reducers/users-reducer/users-reducer';
import axios from 'axios';
import {Users} from './Users';
import {NetworkApi} from '../../api/network-api';
import {log} from 'util';


export interface UsersProps extends UsersPageType {
    setUsers: (users: UserType[]) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: any) => void
    setLoader: (value: boolean) => void
    setUsersTC: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersProps, UsersProps> {

    componentDidMount() {
        // console.log(this.props)
        // this.props.setLoader(true)
        // NetworkApi.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
        //     this.props.setUsers(res.data.items)
        //     this.props.setTotalUserCount(res.data.totalCount)
        //     this.props.setLoader(false)
        // })
        this.props.setUsersTC(this.props.currentPage, this.props.pageSize)


        // this.props.setLoader(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        //     .then(res => {
        //         this.props.setUsers(res.data.items)
        //         this.props.setTotalUserCount(res.data.totalCount)
        //         this.props.setLoader(false)
        //     })
    }


    onPageChanged = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setLoader(true)
        NetworkApi.getUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setLoader(false)
            })
    }


    // getFollow = () => {
    //     this.props.setCurrentPage(pageNumber)
    //     this.props.setLoader(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    //         .then(res => {
    //             this.props.setUsers(res.data.items)
    //             this.props.setLoader(false)
    //         })
    // }

    render() {
        return (
            <Users items={this.props.items} totalUserCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize} follow={this.props.follow} unFollow={this.props.unFollow}
                   isFetching={this.props.isFetching}/>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setLoader,
    setUsersTC
})(UsersContainer)


// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUserCount: (count: number) => {
//             dispatch(setTotalUserCount(count))
//         },
//         setLoader: (value: boolean) => {
//             dispatch(setLoader(value))
//         }
//     }
// }