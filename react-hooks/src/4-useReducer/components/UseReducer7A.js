import React, { useContext } from 'react'
import { CountContext } from '../../App'

const UseReducer7A = () => {

    const {incrementCounter,resetCounter,decrementCounter,counterState} = useContext(CountContext)
    return (
        <div>
            Component A -- {counterState}
            <button onClick={ () => incrementCounter }>increment</button>
            <button onClick={ () => decrementCounter}>decrement</button>
            <button onClick={ () => resetCounter }>Reset</button>
        </div>
    )
}

export default UseReducer7A
