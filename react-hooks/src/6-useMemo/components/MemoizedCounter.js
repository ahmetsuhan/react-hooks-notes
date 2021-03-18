import React,{useState,useMemo} from "react";

const MemoizedCounter = ({asd}) => {

    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    const isEven = useMemo(()=>{
        console.log('it cosst more...Runs');
        let i = 1;
        while(i<500000000){
            i++;
        }
        return counter1%2===0;
    },[counter1]);

  return (
    <>
      <div>
        <button onClick={() => setCounter1(counter1+1)}>{counter1}</button>
        <span>{isEven?'even':'odd'}</span>
        <span>    asd:{asd}</span>
      </div>
      <div>
        <button onClick={() => setCounter2(counter2+1)}>{counter2}</button>
      </div>
    </>
  );
};

export default MemoizedCounter;
