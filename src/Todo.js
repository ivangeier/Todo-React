import React, { useEffect, useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import './Todo.css';

const SAVED_ITEMS = 'savedItems';

function Todo() {

    const [items, setItems] = useState([]);

    // Load items from local storage when the page is loaded
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    // Save items on local storage every time items is modified
    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);


    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
    }

    function onItemDelete(item) {
        let filteredItems = items.filter(it => it.id !== item.id);
        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItems);
    }

    return (
        <div className="container">
            <h1>Todo</h1>
            <div className="main">
                <TodoForm onAddItem={onAddItem}></TodoForm>
                <List onDone={onDone} onItemDelete={onItemDelete} items={items}></List>
            </div>
            <p>Code by <a href="https://github.com/ivangeier" target="_blank" rel="noreferrer">Ivan Geier</a> </p>
        </div>
    )
}

export default Todo;