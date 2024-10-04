import './styles/reset.css';
import './styles/index.css';
import { Main } from 'pages/main';

const App = () => {
    return (
        <div className='App'>
            <h1>todos</h1>
            <Main />
            <span>Double-click to edit todo</span>
        </div>
    );
};

export default App;
