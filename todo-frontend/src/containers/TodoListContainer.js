import { Divider } from 'antd';
import React from 'react';
import Todo from '../components/Todo';
import { useState, useEffect } from 'react';
import { getTodos, addTodo, deleteTodo } from '../services/todoAPI';
import FormLayout from '../components/FormLayout';

export default function TodoListContainer() {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState('');

    const handleClick = () => {
        let todo = {
            task,
            completed: false,
        };
        addTodo(todo).then(
            (response) => response && setTodoList([...todoList, response]),
        );
        setTask('');
    };

    const updateTodoList = (todoList) => {
        setTodoList(todoList);
    };

    const handleInput = (e) => {
        setTask(e.target.value);
    };

    useEffect(() => {
        getTodos().then((res) => res && setTodoList(res));
    }, []);

    const onChange = (todo) => {
        const filteredTodos = todoList.filter((todoItem) => todoItem !== todo);
        deleteTodo(todo).then((response) => setTodoList(filteredTodos));
    };

    return (
        <>
            <FormLayout
                handleInput={handleInput}
                handleClick={handleClick}
                inputValue={task}
                disabled={task}
            />
            {todoList.length === 1 ? (
                <Todo todo={todoList[0]} />
            ) : (
                todoList.map((todo) => (
                    <React.Fragment key={todo.id}>
                        <Todo todo={todo} onChange={onChange} />
                        <Divider />
                    </React.Fragment>
                ))
            )}
        </>
    );
}
