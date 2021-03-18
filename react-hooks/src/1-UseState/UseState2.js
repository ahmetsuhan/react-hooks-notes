import React,{useState} from 'react'

const useState2 = () => {

    const [names,setnames] = useState([]);
    const [input,setInput] = useState("");
    
    
    const handleChange = (e) =>{
        setInput( (prev) => prev=e.target.value );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let newName = {
            name:input
        }
        setnames([{name:input},...names]);
        console.log([newName,...names]);
        setInput( (prev)=>prev='' );
    }
    
    return (
        <>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <input 
                    type="text"
                    placeholder="add name" 
                    value={input}
                    onChange={(e) => handleChange(e)}
                    />
                
                    <input type="submit"></input>
            </form>
            <ul>
               {
                   names.map( (name,index) => {
                       return (
                           <li key={index}>{name.name}</li>
                       )
                   } ).reverse()
               }
            </ul>
        </>
    )
}

export default useState2
