import {Dispatch} from 'redux';
import {AuthAPI} from '../../api/network-api';
import {FormValuesType} from '../../components/common/Login/Login';
import {log} from 'util';
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils';

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    id: number | null

}
type SetUserData = ReturnType<typeof setAuthUserData>
type SetIsLoggedInAC = ReturnType<typeof setIsLoggedInAC>


 const initState: AuthType = {
    id: null,
    userId: null,
    email: null,
    login: null,
    isAuth: false

}
export type ActionTypes = SetUserData | SetIsLoggedInAC

export const authReducer = (state: AuthType = initState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case 'login/SET-IS-LOGGED-IN':
            return {
                ...state, isAuth: action.value
            }
        default:
            return state
    }
};

export const setAuthUserData = (data: AuthType) => ({type: 'SET-USER-DATA', payload: data} as const)
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


export const setAuthUserTC = () => (dispatch: Dispatch) => {
    AuthAPI.setAuthUser()
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(res.data.data));
                }
            }
        )
}
export const loginTC = (data: FormValuesType) => (dispatch: Dispatch) => {
    AuthAPI.login(data)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((e) => handleServerNetworkError(e, dispatch))

}
export const logoutTC = () => (dispatch: Dispatch) => {
    AuthAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((e) => handleServerNetworkError(e, dispatch))
}



