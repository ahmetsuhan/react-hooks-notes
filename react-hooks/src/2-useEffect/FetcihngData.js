import React,{useState,useEffect} from 'react';
import axios from 'axios';

/*install axios with npm install axios  */
const FetcihngData = () => {

const [post,setPost]=useState({});

const [id,setId] = useState(1);
const[idFromButtonClick,setIdFromButtonClick] = useState(1);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then( response => {
        console.log(response);
        setPost(response.data);
    })
    .catch(error=>console.log(error));
},[idFromButtonClick]);

const handleClick=()=>{
    setIdFromButtonClick( (prev)=> prev = id);
}
    return (
        <>
        <input 
            type="text"
            placeholder="enter any id number"
            value={id}   
            onChange={ (e) => setId( (prev) => prev=e.target.value) }  
            />
            <button type="button" onClick={handleClick}>Fetch Post</button>
        {/* <ul>
            {
                posts.map( (post) =>{
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                } )
            }            
        </ul> */}
        {
            <div>{post.title}</div>
        }
    </>
    )
}

export default FetcihngData
