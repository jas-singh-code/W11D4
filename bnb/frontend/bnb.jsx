import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { postUser , postSession, deleteSession } from './utils/session_api_util'

// window.getState = store.getState;
// window.dispatch = store.dispatch
// window.postUser = postUser
// window.postSession = postSession
// window.deleteSession = deleteSession
// window.login!

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root );
})