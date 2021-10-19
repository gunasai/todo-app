import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoListContainer from '../containers/TodoListContainer';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <TodoListContainer />
        </div>
    );
}
