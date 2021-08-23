import axios from 'axios';

export const baseURL =
    'https://hfkpr68tvf.execute-api.us-west-2.amazonaws.com/';
export const getTodosURL = `${baseURL}items`;
export const addTodoURL = `${baseURL}items`;

export const getTodos = async () => {
    const result = await axios
        .get(getTodosURL)
        .then((response) => response && response.data.Items);

    return result;
};
