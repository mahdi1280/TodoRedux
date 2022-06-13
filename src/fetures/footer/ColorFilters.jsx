import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {changeColor} from '../filter/filterReducer';

export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']

const ColorFilters = () => {
    const colors=useSelector(state=>state.filters.colors);
    const dispatch= useDispatch();
    function HandlerChangeColor(color, type){
        dispatch(changeColor(color,type));
    }
    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color)
        const type=checked ? 'removed' : "added";
        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    defaultChecked={checked}
                    onChange={()=>HandlerChangeColor(color,type)}
                />
                <span
                    className="color-block"
                    style={{
                        backgroundColor: color,
                    }}
                ></span>
                {color}
            </label>
        )
    })

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}

export default ColorFilters
