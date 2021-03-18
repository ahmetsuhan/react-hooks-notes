import React,{useState,useEffect} from 'react'

const UseEffect1 = () => {

    const [counter,setCounter] = useState(0);

    useEffect( ()=>{
        document.title= counter;
    } ,[counter]);
    return (
        <div>
        <button onClick={ () => setCounter( prev => prev+1)}>click {counter} times</button>        
        </div>
    )
}

export default UseEffect1
