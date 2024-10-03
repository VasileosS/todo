import React, { FC, useState } from 'react';
import classes from './Create.module.css';
import { useAppDispatch } from 'shared/store/hooks';
import { addTodo } from 'widgets/todoList/model/todosSlice';
import { Todo } from 'app/types/todo.interface';

export const Create: FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
    const [count, setCount] = useState(0);

    function createTodo(event: any) {
        if (event.key !== 'Enter') return;
        if (value.length < 1) return;

        const todo: Todo = {
            id: count,
            value,
            isDone: false,
        };

        setCount(count + 1);
        dispatch(addTodo(todo));
        event.target.blur();
        setValue('');
    }

    return (
        <div className={classes.create}>
            <input
                type='text'
                className={classes.text}
                placeholder='What needs to be done?'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={createTodo}
            />
        </div>
    );
});
