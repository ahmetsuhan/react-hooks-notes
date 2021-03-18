import React,{useEffect, useState} from 'react'

const useState1 = () => {
    
        const [counter,setCounter] = useState(0);
        const [randomNumber,setRandomNumber] = useState(0);

    const suprize = (maxValue) => {
        

        setCounter( (prev) => (prev) )
    }

    useEffect( () => {
        const generateRandomNumber = () =>{
            let random = Math.floor(Math.random()*100)+1;
            setRandomNumber( (prev) => prev=random );
            setCounter( (prev) => prev=randomNumber );
        }
    },[randomNumber,counter]);
    const generateRandomNumber = () => {
        let random = Math.floor(Math.random()*100)+1;
        setRandomNumber( (prev) => random );
        setCounter( (prev) => randomNumber );
    }

        return (
        <div>
        <p>{counter}</p>
            <button onClick={ () => setCounter( (prev) => (prev+1) ) }>Increment</button>
            <button onClick={ () => setCounter((prev) => (prev-1))}>Decrement</button>
            <button onClick={ () => suprize()}>Suprize</button>
            <button onClick={ () => generateRandomNumber()}>Random Number Generator</button>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'10px auto',width:'500px', height:'100px',border:'1px solid red'}}>
                <p>Random number is: {randomNumber}</p>
            </div>
        </div>
    )
}

export default useState1
