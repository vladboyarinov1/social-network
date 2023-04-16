import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import {Sidebar} from './components/Sidebar/Sidebar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {v1} from 'uuid';


function App() {
    const [posts, setPosts] = useState(
        [
            {id: v1(), avatar: 'ava', message: 'Hello, it\'s my first message', likes: 8},
            {id: v1(), avatar: 'ava', message: 'Hello, it\'s my second message', likes: 24},
        ]
    )
    const addPost = (postText: string) => {
        const newPost = {
            id: v1(),
            avatar: '',
            message: postText,
            likes: 3
        }
        setPosts([newPost, ...posts])
    }

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Sidebar/>
                <div className="WrapperContent">
                    <Routes>
                        <Route path="/profile" element={<Profile addPost={addPost} posts={posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
