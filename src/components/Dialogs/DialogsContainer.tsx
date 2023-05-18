import React, {FC} from 'react';
import {addMessageAC} from '../reducers/dialogs-reducer/dialogs-reducer';
import {Dialogs} from './Dialogs';

type PropsType = {
    store: any
}

export const DialogsContainer: FC<PropsType> = (props) => {
    const {store} = props

    const addNewMessage = (newMessage: string) => {
        store.dispatch(addMessageAC(newMessage))
    }

    return <>
       <Dialogs addNewMessage={addNewMessage} dialogs={store.getState().dialogsReducer}/>
    </>
}