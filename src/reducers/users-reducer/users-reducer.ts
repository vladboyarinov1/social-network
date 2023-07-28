import {NetworkApi} from '../../api/network-api';
import {Dispatch} from 'redux';

export type FollowACType = ReturnType<typeof follow>
export type UnFollowACType = ReturnType<typeof unFollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type  SetCurrentPage = ReturnType<typeof setCurrentPage>
export type SetTotalUserCount = ReturnType<typeof setTotalUserCount>
export type SetLoader = ReturnType<typeof setLoader>

export type ActionTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPage
    | SetTotalUserCount
    | SetLoader

export type UserType = {
    id: number
    'photos': {
        'small': null,
        'large': null
    },
    name: string
    status: string,
    // location: { country: string, city: string },
    followed: boolean
}
export type UsersPageType = {
    items: UserType[],
    pageSize: number,
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const initState: UsersPageType = {
    items: [],
    pageSize: 8, //элементов на странице
    totalCount: 0, // всего есть элементов
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersPageType = initState, action: ActionTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, items: state.items.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state, items: state.items.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state, items: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalCount: action.totalUserCount}
        case 'SET-LOADER':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
};

export const follow = (id: number) => ({
    type: 'FOLLOW',
    id,
} as const)

export const unFollow = (id: number) => ({
    type: 'UNFOLLOW',
    id,
} as const)

export const setUsers = (users: UserType[]) => ({
    type: 'SET-USERS',
    users
} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export const setTotalUserCount = (count: number) => ({type: 'SET-TOTAL-USER-COUNT', totalUserCount: count} as const)

export const setLoader = (value: boolean) => ({type: 'SET-LOADER', isFetching: value} as const)

//export const getTasksTC = (todolistId: string) => (dispatch: Dispatch) => TodolistApi.getTasks(todolistId)
//     .then((res) => {
//         dispatch(setTasksAC(todolistId, res.data.items))
//     })
export const setUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {

    NetworkApi.getUsers(currentPage, pageSize)
        .then((res) => {
            dispatch(setUsers(res.data.items))
            dispatch(setTotalUserCount(res.data.totalCount))
            // dispatch(setTotalUserCount(res.data.totalUserCount))
        })
        .catch(() => {
            throw new Error('Error connect')
        })
}