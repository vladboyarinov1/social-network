import React, {FC, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {Sidebar} from './components/Sidebar/Sidebar';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';

import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {getUsersTC} from './reducers/users-reducer/users-reducer';
import {useDispatch} from 'react-redux';



const App: FC = () => {
    // const dispatch = useDispatch<any>()
    // useEffect(() => {
    //     dispatch(getUsersTC())
    // }, [])
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Sidebar/>
                <div className="WrapperContent">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer />}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;