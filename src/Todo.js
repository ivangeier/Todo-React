import List from './components/List';
import TodoForm from './components/TodoForm';
import './Todo.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import listReducer from './reducers/listReducer';

const SAVED_ITEMS = 'savedItems';

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState(state) {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState);
    } else {
        return [];
    }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState());
})

function Todo() {

    return (
        <div className="container">
            <Provider store={store}>
                <h1>Todo</h1>
                <div className="main">
                    <TodoForm></TodoForm>
                    <List></List>
                </div>
                <p>Code by <a href="https://github.com/ivangeier" target="_blank" rel="noreferrer">Ivan Geier</a> </p>
            </Provider>
        </div>
    )
}

export default Todo;