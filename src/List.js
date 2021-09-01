import React from 'react';

function DoneImage(props) {
    if (props.done) {
        return <img src="./assets/checked.png" alt="done" />
    } else {
        return <img src="./assets/check-mark.png" alt="not done" />
    }
}


function List(props) {

    return (
        <ul>
            {props.items.map(item =>
                <li className={item.done ? ' done' : ''} key={item.id}>
                    {item.text}
                    <button onClick={() => { props.onDone(item) }}>
                        <DoneImage done={item.done}></DoneImage>
                    </button>
                    <button onClick={() => { props.onItemDelete(item) }}>
                        <img src="./assets/trash.png" alt="delete" />
                    </button>
                </li>)}
        </ul>
    );
}

export default List;