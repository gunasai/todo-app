import axios from 'axios';

export const baseURL =
    'https://hfkpr68tvf.execute-api.us-west-2.amazonaws.com/';
export const getTodosURL = `${baseURL}items`;
export const addTodoURL = `${baseURL}items`;
export const deleteTodoURL = `${baseURL}items/`;

const headers = {
    'content-Type': 'application/json',
};

export const getTodos = async () => {
    const result = await axios
        .get(getTodosURL, { headers })
        .then((response) => response && response.data.Items);

    return result;
};

export const addTodo = async (todo) => {
    const result = await axios
        .put(addTodoURL, todo, { headers })
        .then((response) => response && response.data.Item);

    return result;
};

export const deleteTodo = async (todo) => {
    const result = await axios
        .delete(`${deleteTodoURL}${todo.id}`, { headers })
        .then((response) => response && response.data.Items);

    return result;
};
