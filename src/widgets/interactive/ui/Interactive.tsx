import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/store/hooks';
import { clearCompleted, selectTodos } from 'widgets/todoList/model/todosSlice';
import classes from './Interactive.module.css';
import { selectFilter, setFilterAction } from '../model/Interactive.slice';

export const Interactive: FC = React.memo(() => {
    const count = useAppSelector(selectTodos).length;
    const filter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();

    function setFilter(filter: string) {
        dispatch(setFilterAction(filter));
    }

    function clear() {
        dispatch(clearCompleted());
    }

    return (
        <>
            {count > 0 && (
                <div className={classes.interactive}>
                    <span>{count} items left</span>
                    <div>
                        <button onClick={() => setFilter('All')} className={filter === 'All' ? classes.active : ''}>
                            All
                        </button>
                        <button
                            onClick={() => setFilter('Active')}
                            className={filter === 'Active' ? classes.active : ''}
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setFilter('Completed')}
                            className={filter === 'Completed' ? classes.active : ''}
                        >
                            Completed
                        </button>
                    </div>
                    <button onClick={clear}>Clear completed</button>
                </div>
            )}
        </>
    );
});
