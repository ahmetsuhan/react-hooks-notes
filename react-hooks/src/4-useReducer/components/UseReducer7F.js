import React, { useContext } from 'react'
import { CountContext } from '../../App'

const UseReducer7F = () => {

    const {incrementCounter,decrementCounter,resetCounter} = useContext(CountContext)
    return (
        <div>
            Component F
            <button onClick={ () => incrementCounter }>increment</button>
            <button onClick={ () => decrementCounter}>decrement</button>
            <button onClick={ () => resetCounter }>Reset</button>
        </div>
    )
}

export default UseReducer7F
