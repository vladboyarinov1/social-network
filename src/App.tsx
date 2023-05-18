import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {Sidebar} from './components/Sidebar/Sidebar';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type PropsType = {
    store: any
}

const App: FC<PropsType> = (props) => {
    const {store} = props

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Sidebar/>
                <div className="WrapperContent">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile store={store}/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={store}/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
