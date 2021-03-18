import React, { useCallback, useState } from 'react'
import Count from './components/Count'
import Title from './components/Title'
import Button from './components/Button'

/* 

        What is UseCallback Hook 

    - useCallback is a hook that will return a memoized version of callback function that only changes if one of the dependicies has changed.

        Why?
    
    - It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

    references : https://kentcdodds.com/blog/usememo-and-usecallback
*/

const UseCallback2 = () => {

    const [salary,setSalary] = useState(50000);
    const [age,setAge] = useState(24);

    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    const incrementSalary = useCallback(() =>{
        setSalary(salary+100);
    },[salary])
    return (
        <div>
            <Title/>
            <Count text ="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text ="Salary" count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>

        </div>
    )
}

export default UseCallback2
