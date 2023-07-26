import {Dispatch} from 'redux';
import {NetworkApi} from '../../api/network-api';

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type  SetCurrentPage = ReturnType<typeof setCurrentPage>
export type SetTotalUserCount = ReturnType<typeof setTotalUserCount>

export type ActionTypes = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPage
    | SetTotalUserCount

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
    totalUserCount: number
    currentPage: number
}

const initState: UsersPageType = {
    items: [],
    pageSize: 6, //элементов на странице
    totalUserCount: 0, // всего есть элементов
    currentPage: 1
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
            return {...state, totalUserCount: action.totalUserCount}
        default:
            return state
    }
};

export const followAC = (id: number) => ({
    type: 'FOLLOW',
    id,
} as const)

export const unFollowAC = (id: number) => ({
    type: 'UNFOLLOW',
    id,
} as const)

export const setUsersAC = (users: UserType[]) => ({
    type: 'SET-USERS',
    users
} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export const setTotalUserCount = (count: number) => ({type: 'SET-TOTAL-USER-COUNT', totalUserCount: count} as const)


export const getUsersTC = () => (dispatch: Dispatch) => {
    // dispatch(setLoadingStatusAC('loading'))
    NetworkApi.getUsers()
        .then(res => {
            dispatch(setUsersAC(res.data.items))
            // console.log(res.data.items)
            // dispatch(setLoadingStatusAC('succeeded'))
        })
        .catch(error => {
            console.log(error)
            // dispatch(setErrorStatusAC(error.message))
        });
}
