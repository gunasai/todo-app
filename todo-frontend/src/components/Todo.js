export default function Todo({ todo }) {
    return (
        <div className="todo">
            <input id={`todo-${todo.id}`} type="checkbox" />
            <label className="todo-label" htmlFor={`todo-${todo.id}`}>
                {todo.task}
            </label>
        </div>
    );
}
