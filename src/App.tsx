import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css'
import {News} from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {TestContainer} from './components/Profile/TestContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import {Login} from './components/common/Login/Login';
import {ErrorSnackbar} from './components/common/ErrorSnackbar/ErrorSnackbar';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="appWrapper">
                    <SidebarContainer/>
                    <div className="WrapperContent">
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile"/>}/>
                            <Route path="/profile/:id?"
                                   element={<TestContainer/>}/>
                            <Route path="/dialogs/*"
                                   element={<DialogsContainer/>}/>
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                    <ErrorSnackbar/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;