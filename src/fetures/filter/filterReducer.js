export const StatusFilters = {
    All: "all",
    Active: "active",
    Completed: "completed"
}


const initState = {
    status: StatusFilters.All,
    colors: []
}

export default function filterReducer(state = initState, action) {
    switch (action.type) {
        case "filter/changeStatusFilter":
            return {
                ...state,
                status: action.payload
            }
        case "filter/changedColorFilter":
            const {colors} = state;
            const {color, changeType} = action.payload;
            switch (changeType) {
                case "added":
                    if (colors.includes(color))
                        return state;
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter((response) => response !== color)
                    }
            }
        default:
            return state;
    }
}
export const changeColor = (color,type)=>{
    return {
        type:"filter/changedColorFilter",
        payload:{
            changeType: type,
            color:color
        }
    }
}
export const changeSelected= (key)=>{
    return {
        type:"filter/changeStatusFilter",
        payload : key
    }
}