import React from 'react';
import Card from './Card';

function DoneImage(props) {
    if (props.done) {
        return <img src="./assets/checked.png" alt="done" />
    } else {
        return <img src="./assets/check-mark.png" alt="not done" />
    }
}

function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}>
                        <DoneImage done={props.item.done}></DoneImage>
                    </button>
                    <button onClick={() => { props.onItemDelete(props.item) }}>
                        <img src="./assets/trash.png" alt="delete" />
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;