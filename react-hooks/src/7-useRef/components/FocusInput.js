import React, { useEffect, useRef, useState } from 'react'

const FocusInput = () => {

    const [name,setName] = useState("");
    const inputRef = useRef(null);
    const sayac = useRef(0);


    useEffect(()=>{
        sayac.current= sayac.current+1;
    });

    const  focus = () => {
        //console.log(inputRef.current);
        inputRef.current.focus();
    }
    return (
        <>
            <input onChange={(e) => setName((prev)=> prev=e.target.value)} value={name} ref={inputRef} type="text"/>
            <button onClick={()=> focus()}>Odakla</button>   
            <p>{sayac.current}</p>
        </>
    )
}

export default FocusInput
