import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {v1} from 'uuid';

const dialogs = [
    {id: v1(), name: 'Vlad'},
    {id: v1(), name: 'Anton'},
    {id: v1(), name: 'Viktor'},
    {id: v1(), name: 'Alina'},
];
const messages = [
    {id: v1(), message: 'Yo! How are you?'},
    {id: v1(), message: 'Hey! Thanks!'},
    {id: v1(), message: 'Ok. See you soon!'},
    {id: v1(), message: 'Where are you???'}
];



export const Dialogs = () => {
    return <>
        <div>Dialogs</div>
        <DialogItem dialogs={dialogs} messages={messages}/>
    </>
}