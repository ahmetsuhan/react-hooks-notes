import {useState} from 'react'

const useInput = (initialValue) => {
    
const [value ,setValue] = useState(initialValue)

const reset = ()=> {
    setValue((prev) => prev=initialValue);
}

const bind = {
    value:value,
    onChange: (e)=>{
        setValue((prev)=> prev= e.target.value);
    },
}

return [value,bind,reset];
}

export default useInput
