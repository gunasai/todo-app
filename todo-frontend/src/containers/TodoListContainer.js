import React from 'react';
import Todo from '../components/Todo';

export default function TodoListContainer({ todoList }) {
    return (
        <>
            {todoList.map((todo) => (
                <Todo todo={todo} />
            ))}
        </>
    );
}
