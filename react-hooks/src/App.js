import "./App.css";
import React, { createContext, useReducer, useState } from "react";
import UseState1 from "./1-UseState/useState1";
import UseState2 from "./1-UseState/UseState2";
import UseEffect1 from "./2-useEffect/UseEffect1";
import UseEffect2 from "./2-useEffect/UseEffect2";
import UseEffect3 from "./2-useEffect/UseEffect3";
import UseEffect4 from "./2-useEffect/UseEffect4";
import FetcihngData from "./2-useEffect/FetcihngData";
import Deneme from "./3-useContext/Deneme";
import UseReducer1 from "./4-useReducer/UseReducer1";
import UseReducer2 from "./4-useReducer/UseReducer2";
import UseReducer3 from "./4-useReducer/UseReducer3";
import UseReducer4 from "./4-useReducer/UseReducer4";
import UseReducer5 from "./4-useReducer/UseReducer5";
import UseReducer6 from "./4-useReducer/UseReducer6";
import UseReducer7A from "./4-useReducer/components/UseReducer7A";
import UseReducer7B from "./4-useReducer/components/UseReducer7B";
import UseReducer7C from "./4-useReducer/components/UseReducer7C";
import UseReducer8FetchingData from "./4-useReducer/UseReducer8FetchingData";
import UseCalback1 from "./5-useCalback/UseCalback1";
import UseCallback2 from "./5-useCalback/UseCallback2";
import UseMemo1 from "./6-useMemo/UseMemo1";
import UseRef1 from "./7-useRef/UseRef1";
import UseRef2 from "./7-useRef/UseRef2";
import ClassTimer from "./7-useRef/components/ClassTimer";
import HookTimer from "./7-useRef/components/HookTimer";
import CustomHook from "./8-CustomHook/CustomHook";
import CustomHook2 from "./8-CustomHook/CustomHook2";
import CustomHook3 from "./8-CustomHook/CustomHook3";


export const Deneme2Context = createContext();
export const Deneme3Context = createContext();


export const CountContext = createContext(); // useRecucer7 ex
/*  useRecucer7
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
}

*/
function App() {
  /*  useReducer7 
  const [count, dispatch] = useReducer(reducer, initialState);

  const incrementCounter = () =>{
    dispatch({type:'increment',count:count})
  }
  const decrementCounter = () => {
    dispatch({type:'decrement',count:count});
  }
  const resetCounter =  () =>{
    dispatch({type:'reset',count:count});
  }

  */
  return (
    <div className="App">
      {/* <UseState1/> */}
      {/* <UseState2/> */}
      {/* <UseEffect1/>  */}
      {/* <UseEffect2/> run effects only once!!!*/}
      {/* <UseEffect3/> useEffect with cleanup */}
      {/* <UseEffect4/> */}
      {/* <FetcihngData/> with useEffect*/}
      {/* <Deneme3Context.Provider value={"FrontEnd developer"}>
     <Deneme2Context.Provider value={"Ahmet Suhan Oka"}>
        <Deneme/>
    </Deneme2Context.Provider>
    </Deneme3Context.Provider> */}
      {/* <UseReducer1/> */}
      {/* <UseReducer2/> */}
      {/* <UseReducer3/> */}
      {/* <UseReducer4/> */}
      {/* <UseReducer5/> */}
      {/* <UseReducer6/> */}

        {/* <CountContext.Provider
        value={{ countState: count, incrementCounter,decrementCounter,resetCounter }}
      >
        <UseReducer7A />
        <UseReducer7B />
        <UseReducer7C />
      </CountContext.Provider>  */}
      {/* <UseReducer8FetchingData/> */}

      {/* <UseCalback1/> */}
      {/* <UseCallback2/> */}

      {/* <UseMemo1/> */}

      {/* <UseRef1/> */}
      
      {/* <UseRef2/>
      <ClassTimer/>
      <HookTimer/> */}

      {/* <CustomHook/> */}
      {/* <CustomHook2/> */}
      <CustomHook3/>
    
    </div>
  );
}

export default App;
