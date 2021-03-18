import React,{useEffect,useState} from 'react'

const UseEffect2 = () => {

    const[x,setX] = useState(0);
    const[y,setY] = useState(0);


    useEffect( ()=>{
        console.log('useEffect cal');
        window.addEventListener('mousemove',(e)=>{
            console.log("Mouse event")
            setX(e.clientX);
            setY(e.clientY);
        })
    },[] );
    return (
        <div>
            x-{x } Y-{y}
        </div>
    )
}

export default UseEffect2
