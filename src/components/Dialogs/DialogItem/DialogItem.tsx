import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const DialogItem: FC<PropsType> = (props) => {
    const {dialogs, messages} = props

    return <>
        {
            dialogs.map((d) => (
                <div key={d.id}>
                    <NavLink to={'/dialogs/' + d.id}>{d.name}</NavLink>
                </div>
            ))
        }
        {
            messages.map((m) => (
                <div key={m.id}>{m.message}</div>
            ))
        }
    </>
}