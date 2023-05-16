import React, {FC, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {Sidebar} from './components/Sidebar/Sidebar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import  {StateType} from './state';

type PropsType = {
    state: StateType
    dispatch: (value: any) => void
}


const App: FC<PropsType> = (props) => {
    const {state, dispatch} = props

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Sidebar/>
                <div className="WrapperContent">
                    <Routes>
                        <Route path="/profile" element={<Profile posts={state.profilePage.posts} dispatch={dispatch}  />}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={state.dialogsPage} dispatch={dispatch}/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
