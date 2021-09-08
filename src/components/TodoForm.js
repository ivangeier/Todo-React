import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/listActions';

function TodoForm(props) {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text));
            setText("");
        }
    }

    return (
        <form>
            <input className="todo" placeholder="Add item here...[ENTER]" onChange={handleChange} type="text" value={text} />
            <button className="btn add" hidden onClick={addItemEvent}>Add</button>
        </form>
    )
}

export default TodoForm;