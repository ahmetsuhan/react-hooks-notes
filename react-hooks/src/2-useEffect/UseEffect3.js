import React,{useState,useEffect} from 'react'

const UseEffect3 = () => {
    
    const [display,setDisplay] = useState(false);
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    
    const logMousePosition = (e) =>{
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
       
    }

    useEffect( ()=>{
        console.log("useEffect call");
        window.addEventListener("mousemove",logMousePosition);

        return () =>{
            console.log("Component unmounting ");
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[] );
  
    return (
        <div>
            <button onClick= { () => setDisplay( (prev) => !prev )}>Toggle Display</button>
            {
                display && (
                    <p>{'display true'} ---- {x} -- {y}</p>
                )
            }
        </div>
    )
}

export default UseEffect3
