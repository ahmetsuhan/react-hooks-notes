import  { useState,useEffect } from 'react'

const useCounter = (initialCounter=0,value) => {
    const [count,setCount] = useState(initialCounter);

    const increment = () => {
        setCount((prev) => prev = prev+value);
    }
    const decrement = () => {
        setCount((prev) => prev=prev+value);
    }
    const reset = () => {
        setCount((prev) => prev=initialCounter);
    }
    return [count,increment,decrement,reset];
}

export default useCounter
