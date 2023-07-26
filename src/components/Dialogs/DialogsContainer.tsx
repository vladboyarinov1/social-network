import React, {FC} from 'react';
import {addMessageAC} from '../../reducers/dialogs-reducer/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';




let mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage
        // dialogsPage: state.messages
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNewMessage: (newMessage: string) => {
            dispatch(addMessageAC(newMessage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)