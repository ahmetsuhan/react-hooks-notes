import React, { useReducer } from 'react'
/*
    -- useReducer --> useState in bir alternatifi
    -- Birden çok alt değer içeren karmaşık bir state olduğunda veya sonraki state öncekine      bağlı olduğunda
    --useReducer genelde useState yerine tercih edilir.
    
    const [state,dispatch] = useReducer(reducer,initialState);
    state --> obje,number, string ,bool, herşey olabilir.
    dispatch --> state i güncelleyen fonksiyon denebilir.
    reducer --> bu bir fonksiyon, state i güncellemek amacı 
*/
/*basit bir sayaç */ 

const initialState = {
    count:0
};

//action --> kullanıcının meydana getirdiği durumlar , butona tıklamak vb.
const reducer = (state,action) =>{ 
    switch (action.type) {
        case 'artir':
            return {count:state.count+1}
         case 'azalt':
             return {count:state.count-1}
    
        default:
            return state;
    }
}
const UseReducer1 = () => {

    const [state,dispatch] = useReducer(reducer , initialState);

    const artir= () => {
        dispatch({type:'artir'});
    }
    const azalt= () => {
        dispatch({type:'azalt'});
    }
    return (
        <div>
            <p>Sayaç : {state.count}</p>
            <button onClick= { () =>  artir()}>Artir</button>
            <button onClick= { () =>  azalt()}>Azalt</button>

        </div>
    )
}

export default UseReducer1
