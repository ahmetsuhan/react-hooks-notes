import React,{useEffect,useState} from 'react'
import axios from 'axios';

const UseReducer8FetchingData = () => {

    const [loading,setLoading] = useState(true);
    const [errorMessage,setErrorMessage] = useState('');
    const [post,setPost] = useState([]);

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false);
            setPost(response.data);
            setErrorMessage([])
        })
        .catch( error => {
            setLoading(false);
            setPost({});
            setErrorMessage('Something went wrong');
        })
    },[] );

    return (
        <div>
            {loading? 'loading...':post.title}
            {errorMessage ? errorMessage:null}
        </div>
    )
}

export default UseReducer8FetchingData
