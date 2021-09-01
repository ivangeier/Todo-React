import React from 'react';

function List(props) {

    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                {item.text}
                <button onClick={() => { props.onItemDelete(item) }}>
                    <img src="./assets/trash.png" alt="delete" />
                </button>
            </li>)}
        </ul>
    );
}

export default List;