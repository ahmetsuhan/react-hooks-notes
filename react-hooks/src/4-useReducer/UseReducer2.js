import React, { useEffect, useReducer, useState } from 'react'

const actionTypes = {
    ADD_TODO : 'add_todo',
    DELETE_TODO:'delete_todo',
    COMPLETE_TODO:'complete_todo',
}
const reducer = (todos,action) =>{
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [addNewTodo(action.payload.todoName),...todos] ;
        case actionTypes.COMPLETE_TODO:
            return todos.map( (todo) => {
                if(todo.id !== action.id){
                    return {...todo};
                }
                return {...todo, isComplete: !todo.isComplete};
            } );
        case actionTypes.DELETE_TODO:
            return todos.filter( (todo) =>{
                return todo.id !== action.id
            } );
           
        default:
            return todos;
    }
}
const addNewTodo = (todoName) => {
return {id:Date.now(), name:todoName, isComplete:false}
}


const UseReducer2 = () => {
    const [todos,dispatch] = useReducer(reducer,[]);
    const [todoName,setTodoName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //add new todo
        dispatch({type:actionTypes.ADD_TODO, payload:{todoName:todoName}});
        setTodoName("");
    }

    useEffect( () =>{
            console.log({todos});
    },[todos] );
    return (
        <>
        <form onSubmit= {(e) => handleSubmit(e)}>
            <input type="text" value={todoName} onChange={(e)=> setTodoName(e.target.value) }/>
        </form>
        <ul>
            {
                todos.map( (todo,index) => {
                    return (
                    <Todo key ={index} todo={todo} dispatch={dispatch}/>
                    )
                })
            }
        </ul>
        </>
    )
}
 const Todo = ({todo,dispatch}) =>{
    console.log({todo});
    return (
        <li >
            <span style = {{background:todo.isComplete? 'red':'#000' }}>{todo.name}</span>
            <button onClick={ () => dispatch({type:actionTypes.COMPLETE_TODO, id:todo.id}) }>Complete</button>
            <button onClick={ () => dispatch({type:actionTypes.DELETE_TODO,id:todo.id})} >Delete</button>
        </li>
    )
}

export default UseReducer2
