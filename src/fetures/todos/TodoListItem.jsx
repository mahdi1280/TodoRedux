import { ReactComponent as TimesSolid } from './times-solid.svg'
import {useDispatch, useSelector} from "react-redux";
import {changeToggled,deletedTodos,selectedTodo} from './todosSlice';

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ todoId }) => {
    const todo  = useSelector(state=>state.todos.entities[todoId])
    const { text, completed, color , id } = todo
    const dispatch = useDispatch();

    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))

    function handlerChangeToggled(){
        dispatch(changeToggled(id));
    }

    function deletedHandler(){
        dispatch(deletedTodos(id))
    }

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                        onChange={handlerChangeToggled}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}

                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={deletedHandler} >
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem