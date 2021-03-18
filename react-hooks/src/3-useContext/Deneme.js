import React,{useContext} from 'react';
import { Deneme2Context, Deneme3Context } from '../App';

const Deneme = (props) => {
const context = useContext(Deneme2Context)
const contex2 = useContext(Deneme3Context)
    return (
        <div>
            {context} -- {contex2}
        </div>
    )
}

export default Deneme
