import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(<App store={store} />,
        document.getElementById('root')
    );
    console.log(store.getState().profileReducer.posts)
};

//dispatch={store.dispatch.bind(store)}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    rerenderEntireTree(store.getState())
})
