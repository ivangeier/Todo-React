import React, { useState } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Item from './Item';
import './Todo.css';

function Todo() {

    const [items, setItems] = useState([]);

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

            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDelete={onItemDelete} items={items}></List>
        </div>
    )
}

export default Todo;