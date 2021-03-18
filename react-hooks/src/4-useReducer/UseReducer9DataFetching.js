import React,{useReducer,useEffect} from 'react'
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';

const counterState = {
    loading:true,
    error:'',
    post:[]
}

const reducer= (counterState,action) => {
    switch (action.type) {
        
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:[]
            }
            case 'FETCH_ERROR':
                return {
                    loading:false,
                    post:{},
                    error:'Something went wron'
                }

        default:
            return counterState;
    }
}
const UseReducer9DataFetching = () => {

    const [post,dispatch] = useReducer(reducer,counterState);

    useEffect( () =>{
        axios.get(baseURL)
        .then( response => {
            dispatch({type:'FETCH_SUCCESS',payload:response.data});
        } )
        .catch( err => {
            dispatch({type:'FETCH_ERROR'});
        });
    },[] );
    return (
        <div>
            {post.loading? 'Loading...':post.title}
            {post.error ? post.error:null}
        </div>
    )
}

export default UseReducer9DataFetching
