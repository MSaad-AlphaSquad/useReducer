import React,{useContext} from 'react';
import {Context} from "../store/store";

const CounterInner = () => {
   const {store, dispatch} = useContext(Context);
    return ( <div>
        <p className=" p-3 text-red-700 ">You clicked {store.count} times</p>
        <button
          className="border-red-600 border-2 bg-red-200 px-4 rounded-md shadow-md m-1 h-10 hover:bg-red-500"
          onClick={() => dispatch ({type : 'add'})}>
          Click me
        </button>
        </div>
        
    )
}


export default CounterInner;