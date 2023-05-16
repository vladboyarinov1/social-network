import {DialogsPageType, MessagesType, StateType} from '../../../state';
import {v1} from 'uuid';

export type AddMessageAT = {
    type: 'ADD-MESSAGE'
    messageText: string
}

export type DialogsAT = AddMessageAT

export const dialogsReducer = (state: DialogsPageType, action: DialogsAT) => {
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
