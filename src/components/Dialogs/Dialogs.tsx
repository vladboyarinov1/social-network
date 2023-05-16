import React, {FC, useState} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../state';
import {UniversalInput} from '../UniversalInput /UniversalInput';
import {SuperButton} from '../SuperButton/SuperButton';
import {addMessageAC, DialogsAT} from '../reducers/dialogs-reducer/dialogs-reducer';

type PropsType = {
    dialogs: DialogsPageType
    dispatch: (newMessageText: DialogsAT) => void
}

export const Dialogs: FC<PropsType> = (props) => {
    const {dialogs, dispatch} = props

    const [message, setMessage] = useState<string>('')

    const addNewMessageHandler = () => {
        dispatch(addMessageAC(message))
        setMessage('')
    }
    const onKeyDownAddPost = () => {
        addNewMessageHandler()
    }
    return <>
        <div>Dialogs</div>
        <DialogItem users={dialogs.users} messages={dialogs.messages}/>
        <UniversalInput value={message} setValue={setMessage} onEnter={onKeyDownAddPost} placeholder={'Enter'}/>
        <SuperButton title={'SEND'} onClick={addNewMessageHandler} disabled={false}/>
    </>
}