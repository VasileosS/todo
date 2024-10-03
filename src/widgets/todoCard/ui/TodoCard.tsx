import { Todo } from 'app/types/todo.interface';
import classes from './TodoCard.module.css';
import React, { FC, useRef, useState } from 'react';
import done from 'shared/assets/images/done.svg';
import del from 'shared/assets/images/delete.svg';
import { useAppDispatch } from 'shared/store/hooks';
import { removeTodo, setIsDone, updateTodo } from 'widgets/todoList/model/todosSlice';

interface Props {
    todo: Todo;
}

export const TodoCard: FC<Props> = React.memo(({ todo }) => {
    const dispatch = useAppDispatch();
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [value, setValue] = useState<string>(todo.value);
    const inputRef = useRef<HTMLInputElement>(null);

    function isComplite() {
        if (isEdit) {
            setIsEdit(false);
            dispatch(updateTodo({ ...todo, value: value }));
        }
        dispatch(setIsDone(todo));
    }

    function deleteTodo() {
        dispatch(removeTodo(todo));
    }

    function handleDoubleClick() {
        if (todo.isDone) {
            dispatch(setIsDone(todo));
        }
        setIsEdit(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    function submitChanges(event: any) {
        if (event.type === 'keydown' && event.key !== 'Enter') return;
        setIsEdit(false);
        dispatch(updateTodo({ ...todo, value: value }));
    }

    return (
        <div
            className={`${classes.todo} ${todo.isDone ? classes.active : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onDoubleClick={handleDoubleClick}
        >
            <button className={classes.checkbox} onClick={isComplite}>
                {todo.isDone && <img src={done} alt='done' />}
            </button>
            {!isEdit ? (
                <p className={classes.text}>{todo.value}</p>
            ) : (
                <input
                    type='text'
                    className={classes.text}
                    placeholder='What needs to be done?'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={submitChanges}
                    onBlur={submitChanges}
                    ref={inputRef}
                />
            )}
            {isHovering && (
                <button className={classes.delete} onClick={deleteTodo}>
                    <img src={del} alt='delete' />
                </button>
            )}
        </div>
    );
});
