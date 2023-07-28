import axios, {AxiosResponse} from 'axios';
import {UsersPageType} from '../reducers/users-reducer/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const NetworkApi = {
    getUsers(currentPage: number , pageSize: number) {
        return instance.get<UsersPageType>(`users/?page=${currentPage}&count=${pageSize}`)
    },
}