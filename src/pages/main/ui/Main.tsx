import { Create } from 'widgets/create';
import classes from './Main.module.css';
import { TodoList } from 'widgets/todoList/ui/TodoList';
import { Interactive } from 'widgets/interactive';

export const Main = () => {
    return (
        <div className={classes.main}>
            <Create />
            <TodoList />
            <Interactive />
        </div>
    );
};
