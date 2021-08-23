import React, { useState, useEffect } from 'react';
import data from '../utils/data.json';
import Header from './Header';
import TodoListContainer from '../containers/TodoListContainer';
import { getTodos } from '../services/todoAPI';

export default function Home() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getTodos().then((res) => res && setTodoList(res));
    }, []);

    return (
        <div className="container">
            <Header />
            <TodoListContainer todoList={todoList} />
        </div>
    );
}
