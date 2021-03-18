import React, { useReducer, useState } from 'react'
const actionTypes = {
    topla:'SUM'
}
const reducer = (sum,action) =>{
    switch (action.type) {
        case actionTypes.topla:
            return {...sum,sum:action.sum.num1+action.sum.num2};

    
        default:
            break;
    }
}

const sumState ={
    num1:0,
    num2:0,
    sum:0
}
const UseReducer4 = () => {

    const [sum,dispatch] = useReducer(reducer,sumState)
    const [inputOne,setInputOne] = useState(0);
    const [inputTwo,setInputTwo] = useState(0);

    const topla =() =>{
        dispatch({type:actionTypes.topla,sum:sum})
    }

    const handleChangeOne = (e) => {
        setInputOne( prev => prev=e.target.value );
        sum.num1 =parseInt( e.target.value);
    }
    const handleChangeTwo = (e) => {
        setInputTwo( (prev) => prev=e.target.value );
        sum.num2 =parseInt( e.target.value);
    }

    console.log({sum});
    return (
        <div>
            <input onChange={ (e) =>  handleChangeOne(e)} value={inputOne} type="number"/>
            +
            <input onChange={ (e) =>  handleChangeTwo(e)} value={inputTwo} type="number"/>
            <button onClick= {topla}>Sum</button>
            <div>Sum : {sum.sum} </div>
        </div>
    )
}

export default UseReducer4
