import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from './state';
import store from './state';

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(<App state={state} addPost={store.addPost.bind(store)}/>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
