import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            const todoId = action.payload;
            return state.filter(todo => todo.id !== todoId);
        },
        toggleTodo: (state, action) => {
            const todoId = action.payload;
            const todo = state.find(todo => todo.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
