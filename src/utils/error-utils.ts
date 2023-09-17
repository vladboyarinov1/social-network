import {Dispatch} from 'redux'

import {ResponseType} from '../api/network-api';
import {
    setErrorAC,
    SetErrorACType,
    setLoadingStatusAC,
    SetLoadingStatusACType
} from '../reducers/app-reducer/app-reducer';

type ErrorUtilsDispatchType = Dispatch<SetErrorACType | SetLoadingStatusACType>
// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setLoadingStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: ErrorUtilsDispatchType) => {
    dispatch(setErrorAC(error.message))
    dispatch(setLoadingStatusAC('failed'))
}

