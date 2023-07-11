import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import todoReducer from './todoSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;
