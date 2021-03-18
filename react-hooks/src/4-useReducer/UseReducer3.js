import React,{useReducer} from 'react'

const reducer = (counter,action) =>{

    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {count:action.counter.count+1};
        case 'DECREMENT_COUNTER':
            return {count:action.counter.count-1};
        case 'RESET_COUNTER':
            return {count:action.counter.count=0};
        default:
            return counter;
    }


}

const initialStateCounter = {
    count:0
}

const UseReducer3 = () => {

    const [counter,dispatch] = useReducer(reducer,initialStateCounter)

    const increment = () =>{
        dispatch({type:'INCREMENT_COUNTER',counter:counter});
    }
    const decrement = () =>{
        dispatch({type:'DECREMENT_COUNTER',counter:counter})
    }
    const reset = () =>{
        dispatch({type:'RESET_COUNTER',counter:counter})
    }
    console.log({counter});
    return (
        <div>
            <div>{counter.count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default UseReducer3
