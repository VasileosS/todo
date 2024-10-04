import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from 'app/types/todo.interface';

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload.id);
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todos[index] = action.payload;
            }
        },
        setIsDone: (state, action: PayloadAction<Todo>) => {
            let todo = state.todos.find((el) => {
                return el.id === action.payload.id;
            });

            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((el) => el.isDone !== true);
        },
    },
    selectors: {
        selectTodos: (state) => state.todos,
    },
});

export const { addTodo, removeTodo, updateTodo, setIsDone, clearCompleted } = todosSlice.actions;
export const { selectTodos } = todosSlice.selectors;
