import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {profileReducer} from '../reducers/profile-reducer/profile-reducer';
import {dialogsReducer} from '../reducers/dialogs-reducer/dialogs-reducer';
import {usersReducer} from '../reducers/users-reducer/users-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authReducer} from '../reducers/auth-reducer/auth-reducer';
import {appReducer} from '../reducers/app-reducer/app-reducer';

export type StateType = ReturnType<typeof reducers>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppRootStateType = ReturnType<typeof reducers>


export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// export let store = legacy_createStore(reducers);
const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;