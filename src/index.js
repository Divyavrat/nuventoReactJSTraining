import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
import NavBar from './NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <link rel='stylesheet' href='./style.css' />
    <NavBar />
    <TodoList />
    </>
);
