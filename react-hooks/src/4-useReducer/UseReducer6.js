import React, { useReducer } from 'react'

const actionTypes = {
    increment:'INCREMENT',
    decrement:'DECREMENT',
    incrementFive:'INCREMENT_FIVE',
    reset:'RESET'
};

const reducer = (counter,action)=>{
    switch (action.type) {
        case actionTypes.increment:
           return {editedTime:Date.now(),count:action.counter.count+1}
    case actionTypes.decrement:
        return {editedTime:Date.now(),count:action.counter.count-1}
        case actionTypes.incrementFive:
            return {editedTime:Date.now(),count:action.counter.count+5}
            case actionTypes.reset:
                return {editedTime:Date.now(),count:0}
        default:
            return counter;
    }
} 


const counterState = {
    editedTime:null,
    count:0
    };
    

const UseReducer6 = () => {

    const [counter,dispatch] = useReducer(reducer,counterState)

    const [counterTwo,dispatchTwo] = useReducer(reducer,counterState)
    
    const increment = () => {
        dispatch({type:actionTypes.increment,counter:counter})
        dispatchTwo({type:actionTypes.increment,counter:counter})

    }

    const decrement = () =>{
        dispatch({type:actionTypes.decrement,counter:counter})
        dispatchTwo({type:actionTypes.decrement,counter:counter})

    }
    const incrementFive = () =>{
        dispatch({type:actionTypes.incrementFive,counter:counter})
        dispatchTwo({type:actionTypes.incrementFive,counter:counter})

    }
    const reset  =() =>{
        dispatch({type:actionTypes.reset,counter:counter})
        dispatchTwo({type:actionTypes.reset,counter:counter})

    }
    console.log("asd")
    return (
        <>
        <div>
            <div> Counter : {counter.count} - edited Time: {counter.editedTime}</div>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={incrementFive}>incerement five</button>
            <button onClick={reset}>Reset</button>


        </div>
         <div>
         <div> Counter : {counterTwo.count} - edited Time: {counterTwo.editedTime}</div>
         <button onClick={increment}>INCREMENT</button>
         <button onClick={decrement} >Decrement</button>
         <button onClick={incrementFive}>incerement five</button>
         <button onClick={reset}>Reset</button>


     </div>
        </>
    )
}

export default UseReducer6
