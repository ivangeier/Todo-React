import React, { useState } from 'react';

function TodoForm(props) {

    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }
    }

    return (
        <form>
            <input className="todo" placeholder="Add item here...[ENTER]" onChange={handleChange} type="text" value={text} />
            <button className="btn add" hidden onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;