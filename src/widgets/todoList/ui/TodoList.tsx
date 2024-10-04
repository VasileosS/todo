import { useAppSelector } from 'shared/store/hooks';
import { selectTodos } from '../model/todosSlice';
import { TodoCard } from 'widgets/todoCard';
import React, { FC } from 'react';
import { selectFilter } from 'widgets/interactive/model/Interactive.slice';

export const TodoList: FC = React.memo(() => {
    const todos = useAppSelector(selectTodos);
    const filter = useAppSelector(selectFilter);

    const filteredTodos =
        filter === 'All'
            ? todos
            : filter === 'Active'
              ? todos.filter((todo) => todo.isDone !== true)
              : todos.filter((todo) => todo.isDone !== false);

    return (
        <div>
            {filteredTodos.map((todo) => (
                <TodoCard todo={todo} key={todo.id} />
            ))}
        </div>
    );
});
