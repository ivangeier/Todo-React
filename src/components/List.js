import React from 'react';
import Card from './Card';

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
                <li key={item.id}>
                    <Card className={item.done ? 'done item' : 'item'}>
                        {item.text}
                        <div>
                            <button onClick={() => { props.onDone(item) }}>
                                <DoneImage done={item.done}></DoneImage>
                            </button>
                            <button onClick={() => { props.onItemDelete(item) }}>
                                <img src="./assets/trash.png" alt="delete" />
                            </button>
                        </div>
                    </Card>
                </li>)}
        </ul>
    );
}

export default List;