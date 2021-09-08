import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { deleteItem, changeDone } from '../actions/listActions';

function DoneImage(props) {
    if (props.done) {
        return <img src="./assets/checked.png" alt="done" />
    } else {
        return <img src="./assets/check-mark.png" alt="not done" />
    }
}

function ListItem(props) {

    const dispatch = useDispatch();
    return (
        <li>
            <Card className={props.item.done ? 'done item' : 'item'}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}>
                        <DoneImage done={props.item.done}></DoneImage>
                    </button>
                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}>
                        <img src="./assets/trash.png" alt="delete" />
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;