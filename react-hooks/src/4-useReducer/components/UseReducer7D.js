import React, { useContext } from 'react'
import { CountContext } from '../../App'

const UseReducer7D = () => {

    const {incrementCounter,decrementCounter,resetCounter} = useContext(CountContext)
    return (
        <div>
            Component D
            <button onClick={ () => incrementCounter }>increment</button>
            <button onClick={ () => decrementCounter}>decrement</button>
            <button onClick={ () => resetCounter }>Reset</button>
        </div>
    )
}

export default UseReducer7D
