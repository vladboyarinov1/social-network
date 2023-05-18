import {DialogsPageType, MessagesType, StateType} from '../../../store';
import {v1} from 'uuid';

export type AddMessageAT = {
    type: 'ADD-MESSAGE'
    messageText: string
}

export type DialogsAT = AddMessageAT

const initState: DialogsPageType = {
    users: [
        {id: v1(), name: 'VLAD'},
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'},
    ],
    messages: [
        {id: v1(), message: 'Yo! How are you?'},
        {id: v1(), message: 'Hey! Thanks!'},
        {id: v1(), message: 'Ok. See you soon!'},
        {id: v1(), message: 'Where are you???'}
    ],
}

export const dialogsReducer = (state = initState , action: DialogsAT) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessagesType = {
                id: v1(),
                message: action.messageText
            }
            // return state.messages.unshift(newMessage)
            return {
                ...state,
                messages: [newMessage, ...state.messages]
            };

        default:
            return state
    }
};

export const addMessageAC = (newMessage: string): AddMessageAT => ({type: 'ADD-MESSAGE', messageText: newMessage})
