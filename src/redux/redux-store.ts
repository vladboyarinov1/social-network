import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {profileReducer} from '../reducers/profile-reducer/profile-reducer';
import {dialogsReducer} from '../reducers/dialogs-reducer/dialogs-reducer';
import {usersReducer} from '../reducers/users-reducer/users-reducer';
import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppRootStateType = ReturnType<typeof reducers>


// export let store = legacy_createStore(reducers);
const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;