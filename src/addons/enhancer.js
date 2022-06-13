import {compose} from "redux";

function logAction(createStore) {
    return (reducer, preLoadState, enhancer) => {
        const store = createStore(reducer, preLoadState, enhancer);

        function logActions(action) {
            const result = store.dispatch(action);
            console.log(action);
            return result;
        }

        return {...store, dispatch: logActions}
    }
}

const logState = createStore=>{
    return (reducer, preLoadState, enhancer)=>{
        const store = createStore(reducer, preLoadState, enhancer);

        function logState(action){
            const result =store.dispatch(action);
            console.log(store);
            return result;
        }

        return {...store,dispatch: logState};
    }
}

export const enhancer =compose(logAction,logState)
