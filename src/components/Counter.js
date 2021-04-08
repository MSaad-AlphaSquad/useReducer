import React, {useEffect, useReducer } from "react";
import CounterBody from "./CounterBody";
import {Context, initialState, reducer} from "../store/store";

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Counter rendered one time");
  },[])

  return (
   <div className=" border-2 my-8 container mx-auto px-4 ">
   <p className="my-4 ">1) Counter made using Using useEffect, useState and Context System</p>
   <Context.Provider value={{store, dispatch}}>
     <CounterBody/>
     </Context.Provider>

    </div>
  );
};

export default App;
