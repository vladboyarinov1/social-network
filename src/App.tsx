import React, {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {News} from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {TestContainer} from './components/Profile/TestContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App: FC = () => {

    return (
        <BrowserRouter>
            <div className="appWrapper">
          <SidebarContainer/>
                <div className="WrapperContent">
                    <Routes>
                        <Route path="/profile/:id?"
                               element={<TestContainer />}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;