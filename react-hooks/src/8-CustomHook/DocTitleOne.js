import React,{useState,useEffect} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle';
const DocTitleOne = () => {

    const [count,setCount] = useState(0);


   useDocumentTitle(count);
    return (
        <div>
            <button onClick={() => setCount( (prev)=> prev=prev+1 )} >Count - {count} </button>
        </div>
    )
}

export default DocTitleOne
