import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {todosAdded} from '../todos/todosSlice';

export default function Header() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handlerKeyDown(e) {
        const trimText = text.trim();
        if (e.which === 13 && trimText) {
            dispatch(todosAdded(trimText));
            setText("");
        }
    }

    return <React.Fragment>
        <header className={"header"}>
            <input
                className={"new-todo"}
                placeholder={"What needs to done!"}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handlerKeyDown}
            />
        </header>
    </React.Fragment>
}