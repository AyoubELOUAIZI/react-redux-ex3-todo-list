import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const handleRemove = (todoId) => {
        dispatch(removeTodo(todoId));
    };

    const handleToggle = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => handleToggle(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => handleRemove(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
