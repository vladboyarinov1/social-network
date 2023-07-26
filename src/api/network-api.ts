import axios, {AxiosResponse} from 'axios';
import {UsersPageType} from '../reducers/users-reducer/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const NetworkApi = {
    getUsers() {
        // return axios.get(`${baseUrl}todo-lists`, settings) //сразу в состоянии pending
        return instance.get<UsersPageType>(`users`)// типизируем данные с бэка
        //возвращает Promise
    },
}