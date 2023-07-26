import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPage,
    setTotalUserCount,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../reducers/users-reducer/users-reducer';
import {Users} from './Users';

const mapStateToProps = (state: any) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUserCount: (count: number) => {
            dispatch(setTotalUserCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)