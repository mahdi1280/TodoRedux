import {useDispatch, useSelector} from "react-redux";
import {StatusFilters,changeSelected} from '../filter/filterReducer';


const StatusFilter = () => {
    const status = useSelector(state=>state.filters.status);
    const dispatch = useDispatch();

    function handlerChangeSelected(key){
        dispatch(changeSelected(key))
    }
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const className = value === status ? 'selected' : ''
        return (
            <li key={value}>
                <button onClick={()=>handlerChangeSelected(value)} className={className}>
                    {key}
                </button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

export default StatusFilter