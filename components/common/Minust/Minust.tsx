import React from 'react'
import {Dispatch,SetStateAction} from 'react';

interface Props{
    minustFunc:Dispatch<SetStateAction<number>>;
    number:number;
}
const Minus =(props:Props) =>{
    const{minustFunc,number}=props;
    return (
        <div className="Number-Container">
            <div className="Number-Wrapper">
                <div className="Number-Plus">
                <button  className="button-text" onClick={()=> minustFunc(number-1)}>-</button>
                 </div>
            </div>
        </div>
    )
}

export default Minus
