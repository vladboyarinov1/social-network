import React from 'react';
import './App.css'
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";

function App() {
    return (
        <div className='appWrapper'>
            <Sidebar/>
            <Profile/>
        </div>
    );
}

export default App;
