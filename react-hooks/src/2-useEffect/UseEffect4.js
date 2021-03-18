import React,{useState,useEffect, useRef} from 'react'


const UseEffect4 = () => {

    const [counter,setCounter] = useState(0);
    const [timerStop,setTimerStop] = useState(false);
//    useEffect( ()=> {
//    let intervalRef;
    
//        intervalRef = setInterval(tick,2000);
       

//        return () =>{
//            clearInterval(intervalRef);
//        }
//    },);

//    useEffect( ()=> {
//        if(counter>5){
//         setTimerStop(true);
//        }
//        return () =>{
//            console.log("false");
//        }
//    },[counter]);


   const tick = () =>{
    setCounter( (prev) => prev+1);
    console.log("tick start");
   
}

    

 

    return (
        <div>
            
            <h1>{counter}</h1>

        </div>
    )
}

export default UseEffect4
