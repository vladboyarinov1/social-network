import {combineReducers, createStore} from 'redux';
import {profileReducer} from '../components/reducers/profile-reducer/profile-reducer';
import {dialogsReducer} from '../components/reducers/dialogs-reducer/dialogs-reducer';

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({profileReducer, dialogsReducer})


export let store = createStore(reducers);

export default store;